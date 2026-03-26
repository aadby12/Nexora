"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { processSteps } from "@/lib/data";

export function Process() {
  const reduce = useReducedMotion();

  return (
    <section
      id="process"
      className="scroll-mt-28 border-y border-white/[0.06] bg-white/[0.02] py-20 sm:scroll-mt-32 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Process"
          title="A calm, visible path from idea to launch."
          description="Six disciplined chapters. Predictable communication. No black-box agency mystery—just a premium workflow you can trust."
        />

        <div className="relative mx-auto mt-16 max-w-3xl">
          <div
            aria-hidden
            className="absolute bottom-2 left-[15px] top-4 w-px bg-gradient-to-b from-accent-cyan/55 via-accent-indigo/35 to-transparent sm:left-5"
          />
          <ul className="relative space-y-10">
            {processSteps.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.06}>
                <li className="flex gap-5 sm:gap-7">
                  <motion.div
                    className="relative z-10 mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-accent-cyan/45 bg-background text-xs font-semibold text-accent-cyan shadow-[0_0_24px_-6px_rgba(34,211,238,0.5)]"
                    whileHover={
                      reduce ? undefined : { scale: 1.06, y: -2 }
                    }
                  >
                    {step.phase}
                  </motion.div>
                  <div className="glass-panel flex-1 rounded-2xl border-white/[0.08] p-5 sm:p-6">
                    <h3 className="font-display text-lg font-medium text-foreground sm:text-xl">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
                      {step.detail}
                    </p>
                    <p className="mt-4 text-[11px] font-semibold uppercase tracking-wider text-accent-cyan/80">
                      Demo-ready checkpoints · async updates
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
