"use client";

import { motion, useReducedMotion } from "framer-motion";
import { GlowBackground } from "@/components/ui/GlowBackground";
import { LinkButton } from "@/components/ui/Button";
import { trustLabels, type SiteSettings } from "@/lib/data";

export function Hero({ hero }: { hero: SiteSettings["hero"] }) {
  const reduce = useReducedMotion();

  return (
    <section
      id="top"
      className="section-divider relative isolate overflow-hidden pt-18 pb-10 sm:pt-22 sm:pb-12 lg:pt-24 lg:pb-14"
    >
      <GlowBackground />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
          <div className="space-y-5 lg:pr-4">
            <motion.p
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex w-fit rounded-full border border-slate-300/50 bg-white/80 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-accent-azure"
            >
              {hero.eyebrow}
            </motion.p>
            <motion.h1
              className="font-display text-balance max-w-[11ch] text-[2.5rem] font-semibold leading-[0.97] tracking-[-0.04em] text-foreground sm:text-[3.35rem] lg:text-[4.15rem]"
              initial={reduce ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.65,
                delay: 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {hero.title}{" "}
              <span className="text-accent-azure">{hero.highlightedText}</span>
            </motion.h1>

            <motion.p
              className="max-w-2xl text-[15px] leading-7 text-muted sm:text-[1.02rem]"
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.55,
                delay: 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {hero.description}
            </motion.p>

            <motion.div
              className="flex flex-col gap-3 pt-1 sm:flex-row sm:flex-wrap sm:items-center"
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.18,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <LinkButton href={hero.primaryCtaHref}>{hero.primaryCtaLabel}</LinkButton>
              <LinkButton href={hero.secondaryCtaHref} variant="secondary">
                {hero.secondaryCtaLabel}
              </LinkButton>
            </motion.div>
          </div>

          <motion.aside
            className="glass-panel premium-border rounded-[1.4rem] p-5 sm:p-6"
            initial={reduce ? false : { opacity: 0, x: 18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-accent-azure">
              Studio standard
            </p>
            <p className="mt-2 font-display text-[1.35rem] leading-[1.12] tracking-[-0.03em] text-foreground sm:text-[1.55rem]">
              We build websites that make your business look clear and credible.
            </p>
            <p className="mt-2 text-sm leading-6 text-muted">
              Simple message, clean design, and a better first impression from the start.
            </p>
            <div className="mt-4 grid grid-cols-3 gap-2.5">
              {[
                { value: "3-5", label: "Core pages" },
                { value: "1st", label: "Mobile-first" },
                { value: "90+", label: "Perf target" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-slate-300/45 bg-white/78 px-2.5 py-2 text-center"
                >
                  <p className="font-display text-[1rem] leading-none text-foreground">
                    {item.value}
                  </p>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.12em] text-muted">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-4 space-y-2.5">
              {trustLabels.slice(0, 3).map((label) => (
                <div
                  key={label}
                  className="flex items-start gap-2.5 rounded-xl border border-slate-300/45 bg-white/76 px-3.5 py-2.5 text-sm text-foreground/85"
                >
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-azure" />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
