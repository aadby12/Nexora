import { ServiceForm } from "@/components/admin/AdminForms";
import { getServices } from "@/lib/content";

export default async function AdminServicesPage() {
  const services = await getServices();

  return (
    <section className="space-y-8">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-cyan">
          Services Content
        </p>
        <h1 className="mt-3 font-display text-4xl font-medium text-foreground">
          Manage homepage service cards
        </h1>
      </div>

      <div className="grid gap-5 xl:grid-cols-2">
        {services.map((service) => (
          <ServiceForm key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
}
