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
      className="section-divider relative isolate min-h-[100dvh] overflow-hidden pt-24 pb-18 sm:pt-28 sm:pb-22 lg:pt-34 lg:pb-26"
    >
      <GlowBackground />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-12 px-4 sm:px-6 lg:flex-row lg:items-center lg:gap-16 lg:px-8">
        <div className="max-w-[41rem] flex-1 space-y-8">
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.26em] text-accent-mint"
          >
            {hero.eyebrow}
          </motion.p>

          <motion.h1
            className="font-display text-balance max-w-[12ch] text-[2.8rem] font-medium leading-[0.93] tracking-[-0.06em] text-foreground sm:text-[3.95rem] lg:text-[5rem] xl:text-[5.45rem]"
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.65,
              delay: 0.06,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {hero.title}{" "}
            <span className="bg-gradient-to-r from-foreground via-accent-cyan to-accent-mint bg-clip-text text-transparent">
              {hero.highlightedText}
            </span>
          </motion.h1>

          <motion.p
            className="max-w-[38rem] text-[15px] leading-7 text-muted sm:text-[1.06rem] sm:leading-8"
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
            className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"
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

          <motion.div
            className="grid gap-4 pt-2 sm:grid-cols-3"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.28, duration: 0.45 }}
          >
            {trustLabels.slice(0, 3).map((label, i) => (
              <motion.div
                key={label}
                initial={reduce ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.32 + i * 0.05,
                  duration: 0.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div className="rounded-[1.15rem] border border-white/10 bg-white/[0.03] p-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-accent-cyan/90">
                    {i === 0 ? "Approach" : i === 1 ? "Focus" : "After launch"}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-foreground/86">{label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="relative flex flex-1 justify-center lg:justify-end"
          initial={reduce ? false : { opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 0.75,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="relative w-full max-w-[min(100%,460px)]">
            <div className="glass-panel premium-border relative overflow-hidden rounded-[2rem] ring-1 ring-white/10">
              <div className="absolute inset-0 bg-grid-fine opacity-25" />
              <motion.div
                className="absolute right-10 top-10 h-28 w-28 rounded-full bg-accent-cyan/14 blur-3xl"
                animate={
                  reduce
                    ? undefined
                    : { scale: [1, 1.12, 1], opacity: [0.35, 0.55, 0.35] }
                }
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <div className="relative p-5 sm:p-6">
                <div className="rounded-[1.5rem] border border-white/10 bg-[#09101f]/88 shadow-[0_22px_60px_-44px_rgba(0,0,0,0.8)]">
                  <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                    <div className="flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-rose-400/85" />
                      <span className="h-2.5 w-2.5 rounded-full bg-amber-300/85" />
                      <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/85" />
                    </div>
                    <p className="text-[11px] uppercase tracking-[0.18em] text-muted">
                      Avenor Tech
                    </p>
                  </div>
                  <div className="space-y-5 p-4 sm:p-5">
                    <div className="rounded-[1.25rem] border border-white/10 bg-white/[0.03] p-4">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-accent-mint">
                        What we improve
                      </p>
                      <p className="mt-3 font-display text-[1.45rem] leading-[1.08] tracking-[-0.04em] text-foreground sm:text-[1.7rem]">
                        Clarity in the message, confidence in the presentation.
                      </p>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-2">
                      <div className="rounded-[1.15rem] border border-white/10 bg-white/[0.03] p-4">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">
                          Common outcome
                        </p>
                        <p className="mt-2 text-sm leading-6 text-foreground/86">
                          A website that feels more aligned with the quality of the business.
                        </p>
                      </div>
                      <div className="rounded-[1.15rem] border border-white/10 bg-white/[0.03] p-4">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">
                          Best for
                        </p>
                        <p className="mt-2 text-sm leading-6 text-foreground/86">
                          Service brands, corporate teams, and businesses ready to step up.
                        </p>
                      </div>
                    </div>

                    <div className="rounded-[1.15rem] border border-white/10 bg-white/[0.03] p-4">
                      <div className="flex items-center justify-between text-xs text-muted">
                        <span>Project priorities</span>
                        <span>01</span>
                      </div>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {["Structure", "Messaging", "Mobile UX", "Performance"].map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[11px] text-foreground/80"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
