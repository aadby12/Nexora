"use client";

import { motion, useReducedMotion } from "framer-motion";
import { LinkButton } from "@/components/ui/Button";

export function CtaBanner() {
  const reduce = useReducedMotion();

  return (
    <section className="py-6 sm:py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-gradient-to-r from-accent-indigo/25 via-background to-accent-cyan/20 px-6 py-10 sm:px-10 sm:py-12"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-12%" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <div
            aria-hidden
            className="absolute inset-0 bg-grid-fine opacity-30"
          />
          <div className="relative flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h3 className="font-display text-2xl font-medium text-foreground sm:text-3xl">
                Ready for a site that feels inevitable?
              </h3>
              <p className="mt-2 max-w-xl text-sm text-muted sm:text-base">
                Share your timeline. We&apos;ll return with a focused proposal and
                a clear path to launch.
              </p>
            </div>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <LinkButton href="/#contact">Start a project</LinkButton>
              <LinkButton href="/#work" variant="secondary">
                View work
              </LinkButton>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
