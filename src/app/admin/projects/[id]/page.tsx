import { notFound } from "next/navigation";
import { MediaUploadForm, ProjectForm } from "@/components/admin/AdminForms";
import { getProjectById } from "@/lib/content";

export default async function AdminEditProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = await getProjectById(id);

  if (!project) {
    notFound();
  }

  return (
    <section className="space-y-8">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-cyan">
          Edit Project
        </p>
        <h1 className="mt-3 font-display text-4xl font-medium text-foreground">
          {project.title}
        </h1>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.3fr_0.7fr]">
        <ProjectForm project={project} mode="edit" />
        <MediaUploadForm />
      </div>
    </section>
  );
}
