"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ServiceIcon } from "@/components/icons/ServiceIcon";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Services() {
  const reduce = useReducedMotion();

  return (
    <section
      id="services"
      className="scroll-mt-28 bg-white/[0.015] py-20 sm:scroll-mt-32 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <SectionHeading
            eyebrow="Services"
            title="Full-spectrum web development, elevated."
            description="From first impression to long-term scale, we assemble the right services around your roadmap—without bloat, without noise."
          />
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 0.04}>
              <motion.article
                whileHover={
                  reduce
                    ? undefined
                    : { y: -6, transition: { type: "spring", stiffness: 320, damping: 22 } }
                }
                className={cn(
                  "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.06] to-transparent p-5 sm:p-6",
                  "shadow-[0_0_0_1px_rgba(255,255,255,0.04)_inset] transition-shadow hover:shadow-[0_0_48px_-24px_rgba(34,211,238,0.35)]",
                )}
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-accent-violet/15 blur-3xl transition group-hover:bg-accent-cyan/15"
                />
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
                  <ServiceIcon name={service.icon} />
                </div>
                <h3 className="font-display text-lg font-medium text-foreground">
                  {service.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  {service.description}
                </p>
                <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />
                <p className="mt-3 text-[11px] font-semibold uppercase tracking-wider text-accent-cyan/90">
                  Explore details in brief
                </p>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
