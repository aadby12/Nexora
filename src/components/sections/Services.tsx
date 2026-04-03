"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ServiceIcon } from "@/components/icons/ServiceIcon";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { type Service } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Services({ services }: { services: Service[] }) {
  const reduce = useReducedMotion();

  return (
    <section
      id="services"
      className="section-shell section-divider scroll-mt-28 py-22 sm:scroll-mt-32 sm:py-26 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <SectionHeading
            eyebrow="Services"
            title="Services for businesses that need a better digital standard."
            description="Avenor Tech focuses on the parts that affect how your brand is perceived online: structure, presentation, usability, and the systems behind the site."
          />
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 0.04}>
              <motion.article
                whileHover={
                  reduce
                    ? undefined
                    : { y: -6, transition: { type: "spring", stiffness: 320, damping: 22 } }
                }
                className={cn(
                  "premium-border group relative flex h-full flex-col overflow-hidden rounded-[1.45rem] border border-white/[0.08] bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-6 sm:p-7",
                  "shadow-[0_0_0_1px_rgba(255,255,255,0.04)_inset] transition-all duration-300 hover:border-white/14 hover:shadow-[0_24px_70px_-48px_rgba(56,189,248,0.3)]",
                )}
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-accent-violet/10 blur-3xl transition group-hover:bg-accent-cyan/10"
                />
                <div className="mb-5 flex h-13 w-13 items-center justify-center rounded-[1.1rem] border border-white/10 bg-white/[0.05]">
                  <ServiceIcon name={service.icon} />
                </div>
                <h3 className="max-w-[15ch] font-display text-[1.15rem] font-medium tracking-[-0.03em] text-foreground sm:text-xl">
                  {service.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-7 text-muted">
                  {service.description}
                </p>
                <div className="mt-5 h-px w-full bg-white/8" />
                <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-accent-cyan/90">
                  {service.cta}
                </p>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
