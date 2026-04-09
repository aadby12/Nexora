"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { type ProcessStep, type SiteSettings } from "@/lib/data";

export function Process({
  settings,
  processSteps,
}: {
  settings: SiteSettings["process"];
  processSteps: ProcessStep[];
}) {
  const reduce = useReducedMotion();

  return (
    <section
      id="process"
      className="section-shell section-divider scroll-mt-24 border-y border-white/[0.06] bg-white/[0.02] py-16 sm:scroll-mt-28 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={settings.eyebrow}
          title={settings.title}
          description={settings.description}
        />

        <div className="relative mx-auto mt-14 max-w-4xl">
          <div
            aria-hidden
            className="absolute bottom-2 left-[18px] top-4 w-px bg-gradient-to-b from-accent-cyan/55 via-accent-indigo/35 to-transparent sm:left-6"
          />
          <ul className="relative space-y-10">
            {processSteps.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.06}>
                <li className="flex gap-5 sm:gap-7">
                  <motion.div
                    className="relative z-10 mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-accent-cyan/45 bg-background text-xs font-semibold text-accent-cyan shadow-[0_0_24px_-6px_rgba(34,211,238,0.5)]"
                    whileHover={
                      reduce ? undefined : { scale: 1.06, y: -2 }
                    }
                  >
                    {step.phase}
                  </motion.div>
                  <div className="glass-panel premium-border flex-1 rounded-[1.4rem] border-white/[0.08] p-5 sm:p-7">
                    <h3 className="font-display text-xl font-medium tracking-[-0.03em] text-foreground sm:text-[1.45rem]">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-muted sm:text-base">
                      {step.detail}
                    </p>
                    <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-accent-cyan/80">
                      Clear checkpoints, fewer surprises
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
