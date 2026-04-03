import Link from "next/link";
import { MediaUploadForm } from "@/components/admin/AdminForms";
import { ProjectListTable } from "@/components/admin/PortfolioAdmin";
import { getProjects } from "@/lib/content";

export default async function AdminProjectsPage() {
  const projects = await getProjects();

  return (
    <section className="space-y-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-cyan">
            Portfolio Management
          </p>
          <h1 className="mt-3 font-display text-4xl font-medium text-foreground">
            Clean project management for the admin panel
          </h1>
          <p className="mt-2 max-w-3xl text-sm text-muted">
            Manage featured status, upload media, reorder projects, and open focused add/edit pages without touching code.
          </p>
        </div>
        <Link
          href="/admin/projects/new"
          className="inline-flex min-h-12 items-center justify-center rounded-full bg-gradient-to-r from-accent-mint via-accent-azure to-accent-violet px-6 py-3 text-sm font-semibold text-white"
        >
          Add project
        </Link>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.5fr_0.8fr]">
        <ProjectListTable projects={projects} />
        <MediaUploadForm />
      </div>
    </section>
  );
}
