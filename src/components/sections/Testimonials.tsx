"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials } from "@/lib/data";

export function Testimonials() {
  const reduce = useReducedMotion();

  return (
    <section
      id="testimonials"
      className="scroll-mt-28 py-20 sm:scroll-mt-32 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          align="center"
          className="max-w-2xl"
          eyebrow="Testimonials"
          title="What partners say after launch."
          description="We let outcomes and relationships speak. Here is the tone of feedback we strive for on every engagement."
        />

        <div className="mt-14 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2 sm:grid sm:snap-none sm:grid-cols-2 sm:overflow-visible lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.06} className="min-w-[min(100%,340px)] snap-center sm:min-w-0">
              <motion.div
                whileHover={
                  reduce
                    ? undefined
                    : { y: -5, transition: { type: "spring", stiffness: 320, damping: 24 } }
                }
              >
                <blockquote className="glass-panel flex h-full flex-col justify-between rounded-2xl p-6 sm:p-7">
                  <p className="text-sm leading-relaxed text-foreground/95 sm:text-[15px]">
                    “{t.quote}”
                  </p>
                  <footer className="mt-6 border-t border-white/10 pt-5">
                    <p className="font-medium text-foreground">{t.name}</p>
                    <p className="mt-1 text-sm text-muted">
                      {t.role}, {t.company}
                    </p>
                  </footer>
                </blockquote>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
