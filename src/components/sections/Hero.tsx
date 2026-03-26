"use client";

import { motion, useReducedMotion } from "framer-motion";
import { GlowBackground } from "@/components/ui/GlowBackground";
import { LinkButton } from "@/components/ui/Button";
import { trustLabels } from "@/lib/data";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="top"
      className="relative isolate min-h-[100dvh] overflow-hidden pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-32"
    >
      <GlowBackground />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-12 px-4 sm:px-6 lg:flex-row lg:items-center lg:gap-16 lg:px-8">
        <div className="max-w-2xl flex-1 space-y-8">
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-xs font-semibold uppercase tracking-[0.28em] text-accent-mint"
          >
            Next-level web experiences
          </motion.p>

          <motion.h1
            className="font-display text-balance text-4xl font-medium leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl xl:text-[3.5rem]"
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.65,
              delay: 0.06,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            We build future-ready{" "}
            <span className="bg-gradient-to-r from-foreground via-accent-mint to-accent-violet bg-clip-text text-transparent">
              digital experiences
            </span>
          </motion.h1>

          <motion.p
            className="max-w-xl text-base leading-relaxed text-muted sm:text-lg"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.55,
              delay: 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            Nexora designs and develops modern, high-performance websites and web
            applications that help brands stand out, grow faster, and look
            world-class online.
          </motion.p>

          <motion.div
            className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.18,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <LinkButton href="/#work">View our work</LinkButton>
            <LinkButton href="/#contact" variant="secondary">
              Start a project
            </LinkButton>
          </motion.div>

          <motion.ul
            className="flex flex-wrap gap-2 pt-2"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.28, duration: 0.45 }}
          >
            {trustLabels.map((label, i) => (
              <motion.li
                key={label}
                initial={reduce ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.32 + i * 0.05,
                  duration: 0.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <span className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[11px] font-medium uppercase tracking-wider text-muted sm:text-xs">
                  {label}
                </span>
              </motion.li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          className="relative flex flex-1 justify-center lg:justify-end"
          initial={reduce ? false : { opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 0.75,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="relative aspect-square w-full max-w-[min(100%,380px)] sm:max-w-md">
            <div className="glass-panel absolute inset-0 rounded-[2rem] ring-1 ring-white/10" />
            <div className="absolute inset-3 overflow-hidden rounded-[1.6rem] bg-gradient-to-br from-accent-azure/25 via-background to-accent-mint/10">
              <div className="absolute inset-0 bg-grid-fine opacity-40" />
              <motion.div
                className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-mint/25 blur-3xl"
                animate={
                  reduce
                    ? undefined
                    : { scale: [1, 1.15, 1], opacity: [0.4, 0.65, 0.4] }
                }
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <div className="relative flex h-full flex-col justify-between p-6 sm:p-8">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-accent-mint sm:text-xs">
                    Signal
                  </p>
                  <p className="mt-3 font-display text-2xl font-medium leading-tight text-foreground sm:text-3xl">
                    Where vision meets digital innovation
                  </p>
                </div>
                <div className="space-y-3 rounded-2xl border border-white/10 bg-black/25 p-4 backdrop-blur-md">
                  <div className="flex items-center justify-between text-xs text-muted">
                    <span>Performance</span>
                    <span className="font-medium text-accent-mint">98</span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-accent-mint via-accent-azure to-accent-violet"
                      initial={{ width: "0%" }}
                      animate={{ width: "88%" }}
                      transition={{
                        duration: 1.2,
                        delay: 0.6,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    />
                  </div>
                  <p className="text-[11px] leading-relaxed text-muted">
                    Deployed on the edge. Designed for the next era of your
                    brand.
                  </p>
                </div>
              </div>
            </div>
            <motion.div
              className="glass-panel absolute -right-4 top-10 hidden rounded-2xl px-4 py-3 sm:block lg:-right-8"
              animate={
                reduce
                  ? undefined
                  : { y: [0, -8, 0], rotate: [0, 1.5, 0] }
              }
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <p className="text-[10px] uppercase tracking-wider text-muted">
                Live preview
              </p>
              <p className="text-sm font-medium text-foreground">
                Immersive UI layer
              </p>
            </motion.div>
            <motion.div
              className="glass-panel absolute -left-4 bottom-12 rounded-2xl px-4 py-3 sm:-left-2"
              animate={
                reduce
                  ? undefined
                  : { y: [0, 10, 0] }
              }
              transition={{
                duration: 9,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <p className="text-[10px] uppercase tracking-wider text-muted">
                Stack
              </p>
              <p className="text-sm font-medium text-foreground">
                Next.js · Motion
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
