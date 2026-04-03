"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { type SiteSettings, type WhyPoint } from "@/lib/data";

export function WhyChooseUs({
  settings,
  whyPoints,
}: {
  settings: SiteSettings["whyChooseUs"];
  whyPoints: WhyPoint[];
}) {
  const reduce = useReducedMotion();

  return (
    <section
      id="why-us"
      className="section-shell section-divider relative scroll-mt-28 overflow-hidden py-22 sm:scroll-mt-32 sm:py-26 lg:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grid-fine opacity-[0.2]"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          align="center"
          className="max-w-3xl"
          eyebrow={settings.eyebrow}
          title={settings.title}
          description={settings.description}
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
                className="premium-border relative h-full overflow-hidden rounded-[1.45rem] border border-white/[0.07] bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.02))] p-6 sm:p-7"
              >
                <div className="absolute right-4 top-4 h-16 w-16 rounded-full bg-accent-cyan/8 blur-3xl" />
                <p className="font-display text-xl font-medium tracking-[-0.03em] text-foreground">
                  {item.title}
                </p>
                <p className="mt-3 text-sm leading-7 text-muted">
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
