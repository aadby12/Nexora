import { SiteSectionForm } from "@/components/admin/AdminForms";
import { getEditableSiteSettings } from "@/lib/content";

export default async function AdminContentPage() {
  const settings = await getEditableSiteSettings();

  return (
    <section className="space-y-8">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-cyan">
          Homepage Content
        </p>
        <h1 className="mt-3 font-display text-4xl font-medium text-foreground">
          Edit hero, about, process, and contact content
        </h1>
        <p className="mt-2 text-sm text-muted">
          Each section is stored as JSON in `site_settings` so the homepage stays flexible without changing code.
        </p>
      </div>

      <div className="grid gap-5 xl:grid-cols-2">
        {(Object.entries(settings) as Array<[keyof typeof settings, unknown]>).map(
          ([sectionKey, value]) => (
            <SiteSectionForm
              key={sectionKey}
              sectionKey={sectionKey}
              value={value}
            />
          ),
        )}
      </div>
    </section>
  );
}
