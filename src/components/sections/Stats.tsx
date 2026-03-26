"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import { stats } from "@/lib/data";
import { Reveal } from "@/components/motion/Reveal";

function useCountUp(
  target: number,
  active: boolean,
  durationMs = 1600,
): number {
  const [value, setValue] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!active) return;
    if (reduce) {
      setValue(target);
      return;
    }
    let frame: number;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / durationMs, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(target * eased));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, target, durationMs, reduce]);

  return value;
}

function StatItem({
  label,
  value,
  suffix,
}: {
  label: string;
  value: number;
  suffix: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -15% 0px" });
  const display = useCountUp(value, inView);

  return (
    <div ref={ref} className="glass-panel rounded-2xl p-5 sm:p-6">
      <p className="font-display text-3xl font-semibold tabular-nums tracking-tight text-foreground sm:text-4xl">
        {display}
        {suffix}
      </p>
      <p className="mt-2 text-sm text-muted">{label}</p>
    </div>
  );
}

export function Stats() {
  return (
    <section className="relative border-y border-white/[0.06] bg-white/[0.02] py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-8 max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-cyan">
            Traction
          </p>
          <h2 className="mt-2 font-display text-2xl font-medium text-foreground sm:text-3xl">
            Built for teams that ship
          </h2>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <StatItem key={s.label} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
