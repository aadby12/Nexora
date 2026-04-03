import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Avenor Tech collects, uses, and protects personal information when you use the website, admin panel, or contact form.",
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    title: "Privacy Policy · Avenor Tech",
    description:
      "How Avenor Tech handles data from visitors and contact form submissions.",
  },
};

const updated = "March 26, 2026";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen px-4 pb-20 pt-28 sm:px-6 lg:px-8">
      <article className="mx-auto max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-mint">
          Legal
        </p>
        <h1 className="font-display mt-3 text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
          Privacy policy
        </h1>
        <p className="mt-2 text-sm text-muted">Last updated: {updated}</p>

        <div className="mt-12 space-y-10 text-sm leading-relaxed text-muted sm:text-base">
          <section className="space-y-3">
            <h2 className="font-display text-lg font-medium text-foreground">
              Who we are
            </h2>
            <p>
              Avenor Tech (“we”, “us”) operates this website to present our web
              development services and manage customer inquiries. This policy
              explains what we collect when you browse or get in touch, and how
              we use it.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-lg font-medium text-foreground">
              Information we collect
            </h2>
            <ul className="list-inside list-disc space-y-2">
              <li>
                <span className="text-foreground/90">Contact form:</span> When
                you submit the project inquiry form, we collect your name, email
                address, and the message you provide.
              </li>
              <li>
                <span className="text-foreground/90">Email:</span> If you email
                us directly, we receive whatever you include in that message and
                headers needed to correspond with you.
              </li>
              <li>
                <span className="text-foreground/90">
                  Technical &amp; hosting data:
                </span>{" "}
                Like most sites, our hosting provider may process standard
                server or security logs (for example IP address, user agent, and
                timestamps) to operate and protect the service. We do not use
                this policy to describe every log our vendors may keep—see
                their documentation for detail.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-lg font-medium text-foreground">
              How we use your information
            </h2>
            <p>We use contact and inquiry data to:</p>
            <ul className="list-inside list-disc space-y-2">
              <li>Respond to your questions and project requests;</li>
              <li>Operate, maintain, and improve the website;</li>
              <li>Comply with law or protect rights where required.</li>
            </ul>
            <p>
              We do not sell your personal information. We do not use your
              inquiry for unrelated marketing unless you agree to that
              separately.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-lg font-medium text-foreground">
              Email delivery (processor)
            </h2>
            <p>
              Contact form messages are transmitted using{" "}
              <a
                href="https://resend.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-mint underline-offset-4 hover:underline"
              >
                Resend
              </a>
              , an email API provider. Your name, email, and message are sent
              through their systems so we can receive the inquiry in our inbox.
              Resend processes data under their own terms and privacy policy. We
              suggest you review those if you want full detail on their
              practices.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-lg font-medium text-foreground">
              Retention
            </h2>
            <p>
              We keep inquiry emails and related correspondence only as long
              as needed to respond, manage the relationship, or meet legal
              obligations. Exact retention can vary by context; you may ask us to
              delete routine inquiry records where the law allows.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-lg font-medium text-foreground">
              Your choices
            </h2>
            <p>
              You may contact us at{" "}
              <a
                href="mailto:info@avenortech12.com"
                className="text-accent-mint underline-offset-4 hover:underline"
              >
                info@avenortech12.com
              </a>{" "}
              to ask about data we hold about you, to correct inaccuracies, or to
              request deletion where applicable. We will respond within a
              reasonable time.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-lg font-medium text-foreground">
              International visitors
            </h2>
            <p>
              We may process information in the United States or other countries
              where we or our vendors operate. By using the site or contacting
              us, you understand your data may be transferred as needed to
              provide the service.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-lg font-medium text-foreground">
              Changes
            </h2>
            <p>
              We may update this policy from time to time. The “Last updated”
              date at the top will change when we do. Continued use of the site
              after changes means you accept the revised policy.
            </p>
          </section>

          <section className="space-y-3 rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-xs sm:text-sm">
            <p className="text-muted">
              <strong className="text-foreground">Disclaimer:</strong> This
              page is a general privacy description for a small business website.
              It is not legal advice. Laws vary by region (for example GDPR,
              CCPA). Have a qualified attorney review your final policies if you
              need compliance for specific jurisdictions or industries.
            </p>
          </section>
        </div>

        <p className="mt-12">
          <Link
            href="/"
            className="text-sm font-medium text-accent-mint underline-offset-4 hover:underline"
          >
            ← Back to home
          </Link>
        </p>
      </article>
    </main>
  );
}
