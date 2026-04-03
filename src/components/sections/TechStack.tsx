"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { techStack } from "@/lib/data";

export function TechStack() {
  const reduce = useReducedMotion();

  return (
    <section className="section-shell section-divider py-18 sm:py-22 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          align="center"
          className="max-w-2xl"
          eyebrow="Stack"
          title="A focused stack, chosen for practical reasons."
          description="The tooling stays intentionally tight so projects are easier to ship, maintain, and hand over without unnecessary complexity."
        />

        <div className="mt-12 flex flex-wrap justify-center gap-3 sm:gap-4">
          {techStack.map((name, i) => (
            <Reveal key={name} delay={i * 0.03}>
              <motion.span
                whileHover={
                  reduce
                    ? undefined
                    : {
                        y: -3,
                        boxShadow: "0 14px 30px -24px rgba(99,102,241,0.35)",
                      }
                }
                transition={{ type: "spring", stiffness: 380, damping: 22 }}
                className="inline-flex rounded-full border border-white/10 bg-white/[0.04] px-4.5 py-3 text-sm font-medium text-foreground shadow-[0_12px_26px_-24px_rgba(56,189,248,0.16)]"
              >
                {name}
              </motion.span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
