import { createServerSupabaseClient } from "@/lib/supabase/server";
import { isSupabaseConfigured } from "@/lib/content";

async function getContactSubmissions() {
  if (!isSupabaseConfigured()) return [];

  try {
    const supabase = await createServerSupabaseClient();
    const { data } = await supabase
      .from("contact_submissions")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(50);

    return data ?? [];
  } catch {
    return [];
  }
}

export default async function AdminContactsPage() {
  const submissions = await getContactSubmissions();

  return (
    <section className="space-y-8">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-cyan">
          Contact Submissions
        </p>
        <h1 className="mt-3 font-display text-4xl font-medium text-foreground">
          Recent incoming leads
        </h1>
      </div>

      {submissions.length === 0 ? (
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-sm text-muted">
          No submissions yet, or Supabase is not configured.
        </div>
      ) : (
        <div className="space-y-4">
          {submissions.map((submission: Record<string, unknown>) => (
            <article
              key={String(submission.id)}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <h2 className="font-display text-2xl text-foreground">
                  {String(submission.name ?? "Unknown")}
                </h2>
                <p className="text-xs uppercase tracking-wider text-muted">
                  {String(submission.created_at ?? "")}
                </p>
              </div>
              <p className="mt-3 text-sm text-muted">
                {String(submission.email ?? "")}
                {submission.phone ? ` · ${String(submission.phone)}` : ""}
                {submission.company ? ` · ${String(submission.company)}` : ""}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-foreground/90">
                {String(submission.message ?? "")}
              </p>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
