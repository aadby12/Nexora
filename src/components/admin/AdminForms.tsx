"use client";

import Link from "next/link";
import { useActionState } from "react";
import {
  loginAdmin,
  logoutAdmin,
  updateService,
  updateSiteSection,
  upsertProject,
  uploadProjectImage,
} from "@/app/actions/admin";
import { Button } from "@/components/ui/Button";
import type { Project, Service, SiteSettings } from "@/lib/data";

type FormActionState = {
  ok?: boolean;
  error?: string;
  message?: string;
};

const initialState: FormActionState = {};

function StateMessage({
  error,
  message,
}: {
  error?: string;
  message?: string;
}) {
  if (!error && !message) return null;

  return (
    <p
      className={
        error
          ? "rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-200"
          : "rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-100"
      }
    >
      {error ?? message}
    </p>
  );
}

export function AdminLoginForm() {
  const [state, action, pending] = useActionState(loginAdmin, initialState);

  return (
    <form action={action} className="glass-panel space-y-5 rounded-[1.5rem] p-8">
      <StateMessage error={state.error} message={state.message} />
      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-muted">
          Email
        </label>
        <input
          name="email"
          type="email"
          required
          className="mt-2 w-full rounded-xl border border-white/10 bg-black/25 px-4 py-3 text-sm text-foreground"
        />
      </div>
      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-muted">
          Password
        </label>
        <input
          name="password"
          type="password"
          required
          className="mt-2 w-full rounded-xl border border-white/10 bg-black/25 px-4 py-3 text-sm text-foreground"
        />
      </div>
      <Button type="submit" disabled={pending} className="w-full">
        {pending ? "Signing in..." : "Sign in to Admin"}
      </Button>
    </form>
  );
}

export function LogoutButton() {
  return (
    <form action={logoutAdmin}>
      <Button type="submit" variant="secondary">
        Sign out
      </Button>
    </form>
  );
}

export function ProjectForm({
  project,
  mode = "create",
}: {
  project?: Project;
  mode?: "create" | "edit";
}) {
  const [state, action, pending] = useActionState(upsertProject, initialState);

  return (
    <form action={action} className="space-y-5 rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6">
      <input type="hidden" name="id" defaultValue={project?.id ?? ""} />
      <StateMessage error={state.error} message={state.message} />
      <div className="flex flex-col gap-3 border-b border-white/10 pb-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="font-display text-2xl text-foreground">
            {mode === "edit" ? "Edit project" : "Add new project"}
          </h2>
          <p className="mt-1 text-sm text-muted">
            Save changes here and the frontend portfolio updates from backend data automatically.
          </p>
        </div>
        {mode === "edit" ? (
          <Link
            href="/admin/projects"
            className="rounded-full border border-white/10 px-4 py-2 text-sm text-foreground"
          >
            Back to project list
          </Link>
        ) : null}
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <label className="block text-sm text-muted">
          <span className="mb-2 block text-xs font-semibold uppercase tracking-wider">
            Title
          </span>
          <input name="title" defaultValue={project?.title} required className="w-full rounded-xl border border-white/10 bg-black/25 px-4 py-3 text-sm text-foreground" />
        </label>
        <label className="block text-sm text-muted">
          <span className="mb-2 block text-xs font-semibold uppercase tracking-wider">
            Slug
          </span>
          <input name="slug" defaultValue={project?.slug} required className="w-full rounded-xl border border-white/10 bg-black/25 px-4 py-3 text-sm text-foreground" />
        </label>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <label className="block text-sm text-muted">
          <span className="mb-2 block text-xs font-semibold uppercase tracking-wider">
            Category
          </span>
          <input name="category" defaultValue={project?.category} className="w-full rounded-xl border border-white/10 bg-black/25 px-4 py-3 text-sm text-foreground" />
        </label>
        <label className="block text-sm text-muted">
          <span className="mb-2 block text-xs font-semibold uppercase tracking-wider">
            Sort order
          </span>
          <input name="sort_order" type="number" defaultValue={project?.sort_order ?? 0} className="w-full rounded-xl border border-white/10 bg-black/25 px-4 py-3 text-sm text-foreground" />
        </label>
      </div>
      <label className="block text-sm text-muted">
        <span className="mb-2 block text-xs font-semibold uppercase tracking-wider">
          Short description
        </span>
        <textarea name="short_description" defaultValue={project?.short_description} rows={3} className="w-full rounded-xl border border-white/10 bg-black/25 px-4 py-3 text-sm text-foreground" />
      </label>
      <label className="block text-sm text-muted">
        <span className="mb-2 block text-xs font-semibold uppercase tracking-wider">
          Full description
        </span>
        <textarea name="full_description" defaultValue={project?.full_description} rows={5} className="w-full rounded-xl border border-white/10 bg-black/25 px-4 py-3 text-sm text-foreground" />
      </label>
      <div className="grid gap-5 md:grid-cols-2">
        <label className="block text-sm text-muted">
          <span className="mb-2 block text-xs font-semibold uppercase tracking-wider">
            Tech stack
          </span>
          <textarea name="tech_stack" defaultValue={project?.tech_stack.join(", ")} rows={3} className="w-full rounded-xl border border-white/10 bg-black/25 px-4 py-3 text-sm text-foreground" />
        </label>
        <label className="block text-sm text-muted">
          <span className="mb-2 block text-xs font-semibold uppercase tracking-wider">
            Key features
          </span>
          <textarea name="key_features" defaultValue={project?.key_features.join("\n")} rows={3} className="w-full rounded-xl border border-white/10 bg-black/25 px-4 py-3 text-sm text-foreground" />
        </label>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <label className="block text-sm text-muted">
          <span className="mb-2 block text-xs font-semibold uppercase tracking-wider">
            Live URL
          </span>
          <input name="live_url" defaultValue={project?.live_url} className="w-full rounded-xl border border-white/10 bg-black/25 px-4 py-3 text-sm text-foreground" />
        </label>
        <label className="block text-sm text-muted">
          <span className="mb-2 block text-xs font-semibold uppercase tracking-wider">
            Thumbnail image URL
          </span>
          <input name="thumbnail_image" defaultValue={project?.thumbnail_image} className="w-full rounded-xl border border-white/10 bg-black/25 px-4 py-3 text-sm text-foreground" />
        </label>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <label className="block text-sm text-muted">
          <span className="mb-2 block text-xs font-semibold uppercase tracking-wider">
            Thumbnail alt text
          </span>
          <input name="thumbnail_alt" defaultValue={project?.thumbnail_alt} className="w-full rounded-xl border border-white/10 bg-black/25 px-4 py-3 text-sm text-foreground" />
        </label>
        <label className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-foreground">
          <input name="featured" type="checkbox" defaultChecked={project?.featured} />
          Featured on homepage
        </label>
      </div>
      <label className="block text-sm text-muted">
        <span className="mb-2 block text-xs font-semibold uppercase tracking-wider">
          Gallery image URLs
        </span>
        <textarea name="gallery_images" defaultValue={project?.gallery_images.map((item) => item.image_url).join("\n")} rows={4} className="w-full rounded-xl border border-white/10 bg-black/25 px-4 py-3 text-sm text-foreground" />
      </label>
      <Button type="submit" disabled={pending}>
        {pending ? "Saving..." : mode === "edit" ? "Update Project" : "Add Project"}
      </Button>
    </form>
  );
}

export function ServiceForm({ service }: { service: Service }) {
  const [state, action, pending] = useActionState(updateService, initialState);

  return (
    <form action={action} className="space-y-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
      <input type="hidden" name="id" defaultValue={service.id} />
      <StateMessage error={state.error} message={state.message} />
      <div className="grid gap-4 md:grid-cols-2">
        <input name="title" defaultValue={service.title} className="rounded-xl border border-white/10 bg-black/25 px-4 py-3 text-sm text-foreground" />
        <input name="icon" defaultValue={service.icon} className="rounded-xl border border-white/10 bg-black/25 px-4 py-3 text-sm text-foreground" />
      </div>
      <textarea name="description" defaultValue={service.description} rows={3} className="w-full rounded-xl border border-white/10 bg-black/25 px-4 py-3 text-sm text-foreground" />
      <div className="grid gap-4 md:grid-cols-[1fr_160px]">
        <input name="cta" defaultValue={service.cta} className="rounded-xl border border-white/10 bg-black/25 px-4 py-3 text-sm text-foreground" />
        <input name="sort_order" type="number" defaultValue={service.sort_order} className="rounded-xl border border-white/10 bg-black/25 px-4 py-3 text-sm text-foreground" />
      </div>
      <Button type="submit" disabled={pending}>
        {pending ? "Saving..." : "Save Service"}
      </Button>
    </form>
  );
}

export function SiteSectionForm({
  sectionKey,
  value,
}: {
  sectionKey: keyof SiteSettings;
  value: unknown;
}) {
  const [state, action, pending] = useActionState(updateSiteSection, initialState);

  return (
    <form action={action} className="space-y-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
      <input type="hidden" name="key" value={sectionKey} />
      <StateMessage error={state.error} message={state.message} />
      <textarea
        name="value"
        defaultValue={JSON.stringify(value, null, 2)}
        rows={14}
        className="w-full rounded-xl border border-white/10 bg-black/25 px-4 py-3 font-mono text-sm text-foreground"
      />
      <Button type="submit" disabled={pending}>
        {pending ? "Saving..." : `Save ${sectionKey}`}
      </Button>
    </form>
  );
}

export function MediaUploadForm() {
  const [state, action, pending] = useActionState(uploadProjectImage, initialState);

  return (
    <form action={action} className="space-y-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
      <StateMessage error={state.error} message={state.message} />
      <div>
        <h3 className="font-display text-xl text-foreground">Image upload</h3>
        <p className="mt-1 text-sm text-muted">
          Upload a cover or gallery image, then paste the returned URL into the project form.
        </p>
      </div>
      <input name="folder" defaultValue="projects" className="w-full rounded-xl border border-white/10 bg-black/25 px-4 py-3 text-sm text-foreground" />
      <input
        name="file"
        type="file"
        accept="image/*"
        className="block w-full rounded-xl border border-dashed border-white/15 bg-black/20 px-4 py-4 text-sm text-muted"
      />
      <Button type="submit" disabled={pending}>
        {pending ? "Uploading..." : "Upload Image"}
      </Button>
      {state.message ? (
        <p className="text-xs text-muted">Paste this URL into a project image field: {state.message}</p>
      ) : null}
    </form>
  );
}
