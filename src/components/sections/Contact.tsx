"use client";

import { motion, useReducedMotion } from "framer-motion";
import { FormEvent, useState } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { socialLinks } from "@/lib/data";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");
  const reduce = useReducedMotion();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sent");
  }

  return (
    <section
      id="contact"
      className="scroll-mt-28 relative overflow-hidden py-20 sm:scroll-mt-32 sm:py-24 lg:py-28"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-accent-indigo/[0.12] via-transparent to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-start">
          <Reveal className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-cyan">
              Contact
            </p>
            <h2 className="font-display text-balance text-3xl font-medium tracking-tight text-foreground sm:text-4xl lg:text-[2.5rem]">
              Let&apos;s architect your next digital flagship.
            </h2>
            <p className="max-w-md text-base leading-relaxed text-muted sm:text-lg">
              Tell us about your vision, timeline, and constraints. We respond
              within one business day with honest next steps—no generic pitch
              deck attached.
            </p>
            <div className="space-y-3 text-sm text-muted">
              <p>
                <span className="text-foreground/90">Email: </span>
                <a
                  href="mailto:hello@nexora.studio"
                  className="text-accent-cyan underline-offset-4 hover:underline"
                >
                  hello@nexora.studio
                </a>
              </p>
              <motion.a
                href="https://wa.me/15550000000"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={reduce ? undefined : { x: 4 }}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 text-foreground"
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
                    className="text-sm font-medium text-muted underline-offset-4 hover:text-accent-cyan hover:underline"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="glass-panel rounded-[1.35rem] border-white/[0.1] p-6 sm:p-8">
              {status === "sent" ? (
                <p className="text-center text-sm text-foreground sm:text-base">
                  Thank you. Your note is in our pipeline—we&apos;ll reply
                  shortly with availability and a tailored recommendation.
                </p>
              ) : (
                <form className="space-y-5" onSubmit={handleSubmit} noValidate>
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
                      className="mt-2 w-full rounded-xl border border-white/10 bg-black/25 px-4 py-3 text-sm text-foreground outline-none ring-0 transition placeholder:text-muted/60 focus:border-accent-cyan/50"
                      placeholder="Your name"
                    />
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
                      className="mt-2 w-full rounded-xl border border-white/10 bg-black/25 px-4 py-3 text-sm text-foreground outline-none transition placeholder:text-muted/60 focus:border-accent-cyan/50"
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
                      className="mt-2 w-full resize-y rounded-xl border border-white/10 bg-black/25 px-4 py-3 text-sm text-foreground outline-none transition placeholder:text-muted/60 focus:border-accent-cyan/50"
                      placeholder="Goals, timeline, links, and anything we should know."
                    />
                  </div>
                  <Button type="submit" className="w-full sm:w-auto">
                    Send message
                  </Button>
                  <p className="text-xs text-muted">
                    This demo form confirms UX only—wire your API route or form
                    backend when you deploy.
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
