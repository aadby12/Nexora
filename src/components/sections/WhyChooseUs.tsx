"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { whyPoints } from "@/lib/data";

export function WhyChooseUs() {
  const reduce = useReducedMotion();

  return (
    <section
      id="why-us"
      className="scroll-mt-28 relative overflow-hidden py-20 sm:scroll-mt-32 sm:py-24 lg:py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grid-fine opacity-[0.2]"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          align="center"
          className="max-w-3xl"
          eyebrow="Why Nexora"
          title="Precision across design, engineering, and launch."
          description="We are not a volume shop. Nexora is built for partners who want an elite experience on every screen—and an engineering foundation that will not crumble under growth."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyPoints.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.05}>
              <motion.div
                whileHover={
                  reduce
                    ? undefined
                    : {
                        scale: 1.01,
                        transition: { type: "spring", stiffness: 400, damping: 26 },
                      }
                }
                className="relative h-full overflow-hidden rounded-2xl border border-white/[0.07] bg-gradient-to-br from-white/[0.05] to-transparent p-5 sm:p-6"
              >
                <div className="absolute right-4 top-4 h-16 w-16 rounded-full bg-accent-cyan/10 blur-2xl" />
                <p className="font-display text-lg font-medium text-foreground">
                  {item.title}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {item.body}
                </p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
