import Link from "next/link";
import type { ReactNode } from "react";
import { LogoutButton } from "@/components/admin/AdminForms";
import { requireAdmin } from "@/lib/admin";

const nav = [
  { href: "/admin", label: "Overview" },
  { href: "/admin/projects", label: "Projects" },
  { href: "/admin/services", label: "Services" },
  { href: "/admin/content", label: "Content" },
  { href: "/admin/contacts", label: "Contacts" },
];

export default async function AdminLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await requireAdmin();

  if (!session.configured) {
    return (
      <main className="min-h-screen px-4 py-28 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl rounded-[1.5rem] border border-amber-400/20 bg-amber-400/10 p-8 text-amber-100">
          Supabase is not configured yet. Add the required environment variables before using the admin dashboard.
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[240px_1fr]">
        <aside className="glass-panel h-fit rounded-[1.5rem] p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-cyan">
            Avenor Admin
          </p>
          <p className="mt-3 text-sm text-muted">
            Manage portfolio, services, homepage content, and inquiries.
          </p>
          <nav className="mt-6 space-y-2">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block rounded-xl px-3 py-2 text-sm text-foreground/90 transition hover:bg-white/[0.06]"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-6 border-t border-white/10 pt-5">
            <LogoutButton />
          </div>
        </aside>
        <div>{children}</div>
      </div>
    </main>
  );
}
