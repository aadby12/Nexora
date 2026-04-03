import { MediaUploadForm, ProjectForm } from "@/components/admin/AdminForms";

export default function AdminNewProjectPage() {
  return (
    <section className="space-y-8">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-cyan">
          Add Project
        </p>
        <h1 className="mt-3 font-display text-4xl font-medium text-foreground">
          Create a new portfolio item
        </h1>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.3fr_0.7fr]">
        <ProjectForm mode="create" />
        <MediaUploadForm />
      </div>
    </section>
  );
}
