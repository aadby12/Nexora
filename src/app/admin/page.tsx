import { getEditableSiteSettings, getProjects, getServices, getTestimonials } from "@/lib/content";

export default async function AdminDashboardPage() {
  const [projects, services, testimonials, settings] = await Promise.all([
    getProjects(),
    getServices(),
    getTestimonials(),
    getEditableSiteSettings(),
  ]);

  const cards = [
    { label: "Projects", value: projects.length },
    { label: "Featured Projects", value: projects.filter((item) => item.featured).length },
    { label: "Services", value: services.length },
    { label: "Testimonials", value: testimonials.length },
    { label: "Editable Sections", value: Object.keys(settings).length },
  ];

  return (
    <section className="space-y-8">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-cyan">
          Dashboard Overview
        </p>
        <h1 className="mt-3 font-display text-4xl font-medium text-foreground">
          Content management at a glance
        </h1>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
        {cards.map((card) => (
          <div key={card.label} className="glass-panel rounded-2xl p-5">
            <p className="text-sm text-muted">{card.label}</p>
            <p className="mt-3 font-display text-3xl text-foreground">{card.value}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <h2 className="font-display text-2xl text-foreground">What you can manage</h2>
          <ul className="mt-4 space-y-3 text-sm text-muted">
            <li>Portfolio CRUD with featured toggles and project ordering</li>
            <li>Service section content and service order</li>
            <li>Editable homepage sections for hero, about, process, and contact</li>
            <li>Contact submission review inside the admin area</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <h2 className="font-display text-2xl text-foreground">Setup reminder</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            To fully activate the CMS workflow, configure Supabase environment variables, create the tables defined in the schema guide, add an admin user record, and create the `project-media` storage bucket.
          </p>
        </div>
      </div>
    </section>
  );
}
