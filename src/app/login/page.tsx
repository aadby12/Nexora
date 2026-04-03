import type { Metadata } from "next";
import { AdminLoginForm } from "@/components/admin/AdminForms";
import { isSupabaseConfigured } from "@/lib/content";

export const metadata: Metadata = {
  title: "Admin Login",
  robots: {
    index: false,
    follow: false,
  },
};

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-24">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-cyan">
            Admin Access
          </p>
          <h1 className="mt-3 font-display text-3xl font-medium text-foreground">
            Sign in to Avenor Tech
          </h1>
          <p className="mt-3 text-sm text-muted">
            Use your Supabase-authenticated admin account to manage projects and homepage content.
          </p>
        </div>
        {!isSupabaseConfigured() ? (
          <div className="rounded-2xl border border-amber-400/30 bg-amber-400/10 p-5 text-sm text-amber-100">
            Add `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` to enable admin authentication.
          </div>
        ) : null}
        <AdminLoginForm />
      </div>
    </main>
  );
}
