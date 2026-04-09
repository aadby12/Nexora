"use client";

import { motion, useReducedMotion } from "framer-motion";

export function GlowBackground() {
  const reduce = useReducedMotion();

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-fine opacity-[0.35]" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background to-background" />
      <motion.div
        className="absolute -left-40 top-20 h-72 w-72 rounded-full bg-accent-mint/20 blur-[100px] sm:-left-20 sm:h-96 sm:w-96"
        animate={
          reduce
            ? undefined
            : {
                x: [0, 26, 0],
                y: [0, -18, 0],
              }
        }
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute -right-32 top-1/3 h-80 w-80 rounded-full bg-accent-azure/18 blur-[110px] sm:right-0"
        animate={
          reduce
            ? undefined
            : {
                x: [0, -22, 0],
                y: [0, 24, 0],
              }
        }
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-accent-azure/16 blur-[90px]"
        animate={
          reduce
            ? undefined
            : {
                scale: [1, 1.08, 1],
                opacity: [0.35, 0.5, 0.35],
              }
        }
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
