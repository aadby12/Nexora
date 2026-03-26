"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { techStack } from "@/lib/data";

export function TechStack() {
  const reduce = useReducedMotion();

  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          align="center"
          className="max-w-2xl"
          eyebrow="Stack"
          title="Modern tools. Disciplined implementation."
          description="We standardize on a tight, proven ecosystem so your product stays maintainable as your team grows."
        />

        <div className="mt-12 flex flex-wrap justify-center gap-3 sm:gap-4">
          {techStack.map((name, i) => (
            <Reveal key={name} delay={i * 0.03}>
              <motion.span
                whileHover={
                  reduce
                    ? undefined
                    : {
                        y: -4,
                        boxShadow: "0 0 32px -10px rgba(99,102,241,0.55)",
                      }
                }
                transition={{ type: "spring", stiffness: 380, damping: 22 }}
                className="inline-flex rounded-full border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm font-medium text-foreground"
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
