"use client";

import { motion, useReducedMotion } from "framer-motion";
import { LinkButton } from "@/components/ui/Button";

export function CtaBanner() {
  const reduce = useReducedMotion();

  return (
    <section className="py-8 sm:py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="premium-border relative overflow-hidden rounded-[1.9rem] border border-white/10 bg-[linear-gradient(135deg,rgba(99,102,241,0.18),rgba(6,8,22,0.92)_38%,rgba(34,211,238,0.12))] px-6 py-12 sm:px-10 sm:py-14"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-12%" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <div
            aria-hidden
            className="absolute inset-0 bg-grid-fine opacity-24"
          />
          <div
            aria-hidden
            className="absolute -left-10 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-accent-cyan/10 blur-3xl"
          />
          <div
            aria-hidden
            className="absolute -right-10 top-8 h-40 w-40 rounded-full bg-accent-violet/10 blur-3xl"
          />
          <div className="relative flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h3 className="font-display text-[2rem] font-medium leading-[1.02] tracking-[-0.04em] text-foreground sm:text-[2.6rem]">
                Need a website that feels as strong as the business behind it?
              </h3>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-muted sm:text-base">
                Avenor Tech helps businesses replace forgettable websites with something more considered, more credible, and easier to act on.
              </p>
            </div>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <LinkButton href="/#contact">Start Your Project</LinkButton>
              <LinkButton href="/#work" variant="secondary">
                View Portfolio
              </LinkButton>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
