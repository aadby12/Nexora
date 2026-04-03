"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { type SiteSettings, type Testimonial } from "@/lib/data";

export function Testimonials({
  settings,
  testimonials,
}: {
  settings: SiteSettings["testimonials"];
  testimonials: Testimonial[];
}) {
  const reduce = useReducedMotion();

  if (testimonials.length === 0) {
    return null;
  }

  return (
    <section
      id="testimonials"
      className="section-shell section-divider scroll-mt-28 py-22 sm:scroll-mt-32 sm:py-26 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          align="center"
          className="max-w-2xl"
          eyebrow={settings.eyebrow}
          title={settings.title}
          description={settings.description}
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
                <blockquote className="glass-panel premium-border flex h-full flex-col justify-between rounded-[1.55rem] p-6 sm:p-7">
                  <p className="text-2xl leading-none text-accent-cyan/80">"</p>
                  <p className="mt-4 text-sm leading-7 text-foreground/95 sm:text-[15px]">
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
