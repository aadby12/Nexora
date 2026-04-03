"use client";

import Link from "next/link";
import { useMemo, useState, useTransition } from "react";
import {
  deleteProject,
  reorderProjects,
  toggleFeaturedProject,
} from "@/app/actions/admin";
import { Button } from "@/components/ui/Button";
import type { Project } from "@/lib/data";

function moveItem<T>(items: T[], fromIndex: number, toIndex: number): T[] {
  const next = [...items];
  const [item] = next.splice(fromIndex, 1);
  next.splice(toIndex, 0, item);
  return next;
}

export function ProjectListTable({ projects }: { projects: Project[] }) {
  const [rows, setRows] = useState(projects);
  const [draggingId, setDraggingId] = useState<string | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const orderPayload = useMemo(() => rows.map((row) => row.id), [rows]);

  const persistOrder = (nextRows: Project[]) => {
    setRows(nextRows);

    startTransition(async () => {
      const formData = new FormData();
      formData.set("order", JSON.stringify(nextRows.map((item) => item.id)));
      await reorderProjects(formData);
    });
  };

  const moveRow = (currentIndex: number, delta: number) => {
    const nextIndex = currentIndex + delta;
    if (nextIndex < 0 || nextIndex >= rows.length) return;
    persistOrder(moveItem(rows, currentIndex, nextIndex));
  };

  const handleDrop = (targetId: string) => {
    if (!draggingId || draggingId === targetId) return;

    const fromIndex = rows.findIndex((row) => row.id === draggingId);
    const toIndex = rows.findIndex((row) => row.id === targetId);
    if (fromIndex === -1 || toIndex === -1) return;

    persistOrder(moveItem(rows, fromIndex, toIndex));
    setDraggingId(null);
  };

  return (
    <div className="space-y-5">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="font-display text-2xl text-foreground">Project list</h2>
          <p className="mt-1 text-sm text-muted">
            New projects saved here appear automatically on the public portfolio.
          </p>
        </div>
        <div className="flex items-center gap-3 text-xs text-muted">
          <span>{rows.length} projects</span>
          <span>{isPending ? "Saving order..." : "Order synced"}</span>
        </div>
      </div>

      <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.03]">
        <div className="overflow-x-auto">
          <table className="min-w-full text-left">
            <thead className="border-b border-white/10 bg-white/[0.03] text-xs uppercase tracking-[0.18em] text-muted">
              <tr>
                <th className="px-4 py-4">Project</th>
                <th className="px-4 py-4">Category</th>
                <th className="px-4 py-4">Status</th>
                <th className="px-4 py-4">Order</th>
                <th className="px-4 py-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((project, index) => (
                <tr
                  key={project.id}
                  draggable
                  onDragStart={() => setDraggingId(project.id)}
                  onDragOver={(event) => event.preventDefault()}
                  onDrop={() => handleDrop(project.id)}
                  className="border-b border-white/6 last:border-b-0 hover:bg-white/[0.025]"
                >
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-3">
                      <span className="cursor-grab rounded-lg border border-white/10 bg-black/20 px-2 py-1 text-xs text-muted active:cursor-grabbing">
                        Drag
                      </span>
                      <div>
                        <p className="font-medium text-foreground">{project.title}</p>
                        <p className="mt-1 text-xs text-muted">{project.slug}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-sm text-muted">{project.category}</td>
                  <td className="px-4 py-4">
                    <form
                      action={async (formData) => {
                        startTransition(async () => {
                          await toggleFeaturedProject(formData);
                        });
                      }}
                    >
                      <input type="hidden" name="id" value={project.id} />
                      <input
                        type="hidden"
                        name="featured"
                        value={String(!project.featured)}
                      />
                      <button
                        type="submit"
                        className={`inline-flex rounded-full border px-3 py-1.5 text-xs font-medium ${
                          project.featured
                            ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-100"
                            : "border-white/10 bg-white/[0.04] text-muted"
                        }`}
                      >
                        {project.featured ? "Featured" : "Standard"}
                      </button>
                    </form>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => moveRow(index, -1)}
                        className="rounded-lg border border-white/10 bg-black/20 px-2 py-1 text-xs text-foreground disabled:opacity-40"
                        disabled={index === 0}
                      >
                        Up
                      </button>
                      <button
                        type="button"
                        onClick={() => moveRow(index, 1)}
                        className="rounded-lg border border-white/10 bg-black/20 px-2 py-1 text-xs text-foreground disabled:opacity-40"
                        disabled={index === rows.length - 1}
                      >
                        Down
                      </button>
                      <span className="text-xs text-muted">#{index + 1}</span>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex flex-wrap gap-2">
                      <Link
                        href={`/admin/projects/${project.id}`}
                        className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-xs font-medium text-foreground"
                      >
                        Edit
                      </Link>
                      <Link
                        href={`/projects/${project.slug}`}
                        className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-xs font-medium text-foreground"
                      >
                        View
                      </Link>
                      <button
                        type="button"
                        onClick={() =>
                          setDeletingId((current) =>
                            current === project.id ? null : project.id,
                          )
                        }
                        className="rounded-full border border-red-500/25 bg-red-500/10 px-3 py-1.5 text-xs font-medium text-red-200"
                      >
                        Delete
                      </button>
                    </div>
                    {deletingId === project.id ? (
                      <div className="mt-3 rounded-xl border border-red-500/20 bg-red-500/8 p-3">
                        <p className="text-xs text-red-100">
                          Delete <span className="font-semibold">{project.title}</span>?
                          This removes it from the frontend portfolio immediately.
                        </p>
                        <form
                          action={async (formData) => {
                            setDeletingId(null);
                            startTransition(async () => {
                              await deleteProject(formData);
                            });
                          }}
                          className="mt-3 flex gap-2"
                        >
                          <input type="hidden" name="id" value={project.id} />
                          <Button type="submit" variant="secondary" className="!min-h-0 !px-4 !py-2 !text-xs">
                            Confirm delete
                          </Button>
                          <button
                            type="button"
                            onClick={() => setDeletingId(null)}
                            className="rounded-full border border-white/10 px-3 py-2 text-xs text-muted"
                          >
                            Cancel
                          </button>
                        </form>
                      </div>
                    ) : null}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <input type="hidden" value={JSON.stringify(orderPayload)} readOnly />
    </div>
  );
}
