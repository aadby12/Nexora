"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqItems } from "@/lib/data";

export function FAQ() {
  const [openId, setOpenId] = useState<number | null>(0);
  const reduce = useReducedMotion();

  return (
    <section id="faq" className="section-shell section-divider scroll-mt-28 py-22 sm:scroll-mt-32 sm:py-26 lg:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          align="center"
          eyebrow="FAQ"
          title="A few practical questions, answered clearly."
          description="The essentials are here. If your project is more specific, that conversation can happen directly."
        />

        <div className="mt-12 space-y-4">
          {faqItems.map((item, i) => {
            const isOpen = openId === i;
            return (
              <Reveal key={item.q} delay={i * 0.05}>
                <div className="premium-border overflow-hidden rounded-[1.4rem] border border-white/[0.08] bg-white/[0.03]">
                  <button
                    type="button"
                    id={`faq-${i}-button`}
                    aria-expanded={isOpen}
                    aria-controls={`faq-${i}-panel`}
                    onClick={() => setOpenId(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4.5 text-left sm:px-6 sm:py-5.5"
                  >
                    <span className="font-display text-base font-medium tracking-[-0.02em] text-foreground sm:text-lg">
                      {item.q}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: reduce ? 0 : 0.25 }}
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-accent-cyan"
                      aria-hidden
                    >
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24">
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeWidth={2}
                          d="M6 9l6 6 6-6"
                        />
                      </svg>
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <motion.div
                        id={`faq-${i}-panel`}
                        role="region"
                        aria-labelledby={`faq-${i}-button`}
                        className="overflow-hidden"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: reduce ? 0 : 0.28, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <p className="border-t border-white/[0.06] px-5 pb-5 pt-3 text-sm leading-7 text-muted sm:px-6 sm:pb-6">
                          {item.a}
                        </p>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
