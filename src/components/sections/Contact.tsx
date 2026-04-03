"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useActionState } from "react";
import { submitContact } from "@/app/actions/contact";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { socialLinks, type SiteSettings } from "@/lib/data";

export function Contact({ contact }: { contact: SiteSettings["contact"] }) {
  const reduce = useReducedMotion();
  const [state, formAction, pending] = useActionState(submitContact, {});
  const whatsappUrl = `https://wa.me/${contact.whatsapp.replace(/[^\d]/g, "")}`;

  return (
    <section
      id="contact"
      className="section-shell relative scroll-mt-28 overflow-hidden py-22 sm:scroll-mt-32 sm:py-26 lg:py-32"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-accent-indigo/[0.08] via-transparent to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-18 lg:items-start">
          <Reveal className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-mint">
              Contact
            </p>
            <h2 className="font-display text-balance text-3xl font-medium leading-[1.04] tracking-[-0.04em] text-foreground sm:text-4xl lg:text-[3rem]">
              {contact.heading}
            </h2>
            <p className="max-w-lg text-base leading-8 text-muted sm:text-lg">
              {contact.body}
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-[1.35rem] border border-white/10 bg-white/[0.04] p-4 text-sm text-muted">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent-cyan">
                  Phone
                </p>
                <p className="mt-2">
                  <a
                    href={`tel:${contact.phone}`}
                    className="text-foreground underline-offset-4 hover:text-accent-mint hover:underline"
                  >
                    {contact.phone}
                  </a>
                </p>
              </div>
              <div className="rounded-[1.35rem] border border-white/10 bg-white/[0.04] p-4 text-sm text-muted">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent-cyan">
                  Email
                </p>
                <p className="mt-2">
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-foreground underline-offset-4 hover:text-accent-mint hover:underline"
                  >
                    {contact.email}
                  </a>
                </p>
              </div>
            </div>
            <div className="space-y-3 text-sm text-muted">
              <p className="max-w-md leading-7">
                Most projects start with a short message and a follow-up conversation once the scope is clearer.
              </p>
              <motion.a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={reduce ? undefined : { x: 4 }}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.05] px-5 py-3 text-foreground shadow-[0_14px_30px_-24px_rgba(34,197,94,0.26)]"
              >
                <span
                  className="h-2 w-2 rounded-full bg-emerald-400"
                  aria-hidden
                />
                WhatsApp the studio
              </motion.a>
            </div>
            <ul className="flex flex-wrap gap-3 pt-2">
              {socialLinks.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-muted underline-offset-4 hover:text-accent-mint hover:underline"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="glass-panel premium-border rounded-[1.5rem] border-white/[0.1] p-6 sm:p-8">
              {state.ok === true ? (
                <p className="text-center text-sm text-foreground sm:text-base">
                  {state.message}
                </p>
              ) : (
                <form className="relative space-y-5" action={formAction}>
                  {state.error ? (
                    <p
                      role="alert"
                      className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-200"
                    >
                      {state.error}
                    </p>
                  ) : null}

                  <div className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden">
                    <label htmlFor="website">Website</label>
                    <input
                      id="website"
                      name="website"
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                      aria-hidden="true"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-semibold uppercase tracking-wider text-muted"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      disabled={pending}
                      className="mt-2 w-full rounded-2xl border border-white/10 bg-black/25 px-4 py-3.5 text-sm text-foreground outline-none ring-0 transition placeholder:text-muted/60 focus:border-accent-mint/50 disabled:opacity-50"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-xs font-semibold uppercase tracking-wider text-muted"
                      >
                        Phone
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        disabled={pending}
                        className="mt-2 w-full rounded-2xl border border-white/10 bg-black/25 px-4 py-3.5 text-sm text-foreground outline-none transition placeholder:text-muted/60 focus:border-accent-mint/50 disabled:opacity-50"
                        placeholder="+233..."
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="client_company"
                        className="block text-xs font-semibold uppercase tracking-wider text-muted"
                      >
                        Company
                      </label>
                      <input
                        id="client_company"
                        name="client_company"
                        type="text"
                        autoComplete="organization"
                        disabled={pending}
                        className="mt-2 w-full rounded-2xl border border-white/10 bg-black/25 px-4 py-3.5 text-sm text-foreground outline-none transition placeholder:text-muted/60 focus:border-accent-mint/50 disabled:opacity-50"
                        placeholder="Your business name"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-semibold uppercase tracking-wider text-muted"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      disabled={pending}
                      className="mt-2 w-full rounded-2xl border border-white/10 bg-black/25 px-4 py-3.5 text-sm text-foreground outline-none transition placeholder:text-muted/60 focus:border-accent-mint/50 disabled:opacity-50"
                      placeholder="you@company.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-semibold uppercase tracking-wider text-muted"
                    >
                      Project details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      disabled={pending}
                      className="mt-2 w-full resize-y rounded-2xl border border-white/10 bg-black/25 px-4 py-3.5 text-sm text-foreground outline-none transition placeholder:text-muted/60 focus:border-accent-mint/50 disabled:opacity-50"
                      placeholder="Goals, timeline, links, and anything we should know."
                    />
                  </div>
                  <Button type="submit" className="w-full sm:w-auto" disabled={pending}>
                    {pending ? "Sending…" : "Send message"}
                  </Button>
                  <p className="text-xs text-muted">
                    Submissions are delivered securely. We only use your details
                    to reply to this inquiry.{" "}
                    <Link
                      href="/privacy"
                      className="text-foreground/80 underline-offset-4 hover:text-accent-mint hover:underline"
                    >
                      Privacy policy
                    </Link>
                    .
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
