"use client";

import {
  motion,
  useReducedMotion,
  type HTMLMotionProps,
} from "framer-motion";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

/**
 * Framer’s HTMLMotionProps omits DOM keys that collide with Motion (e.g. `onDrag`).
 * Avoid `ComponentProps<typeof motion.button>` — it can widen back to React’s button types on some TS versions.
 */
export type ButtonProps = Omit<HTMLMotionProps<"button">, "children"> & {
  variant?: ButtonVariant;
  children?: React.ReactNode;
};

const variants: Record<ButtonVariant, string> = {
  primary:
    "relative overflow-hidden bg-[linear-gradient(135deg,#22c7b7_0%,#2787ef_58%,#5b63f3_100%)] text-white shadow-[0_18px_48px_-24px_rgba(39,135,239,0.42)] " +
    "before:absolute before:inset-0 before:bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0))] before:opacity-0 before:transition-opacity hover:before:opacity-100",
  secondary:
    "glass-panel premium-border text-foreground ring-1 ring-white/10 hover:ring-white/16 hover:bg-white/[0.06]",
  ghost: "text-muted hover:text-foreground hover:bg-white/[0.04] hover:shadow-[0_14px_30px_-26px_rgba(56,189,248,0.28)]",
};

export function Button({
  className,
  variant = "primary",
  children,
  ...props
}: ButtonProps) {
  const reduce = useReducedMotion();

  return (
    <motion.button
      whileHover={reduce ? undefined : { scale: 1.02, y: -1 }}
      whileTap={reduce ? undefined : { scale: 0.98 }}
      transition={{ type: "spring", stiffness: 420, damping: 28 }}
      className={cn(
        "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-[0.005em] transition-all duration-300",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-mint",
        "disabled:pointer-events-none disabled:opacity-45",
        variants[variant],
        className,
      )}
      {...props}
    >
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}

export function LinkButton({
  href,
  variant = "primary",
  className,
  children,
}: {
  href: string;
  variant?: ButtonVariant;
  className?: string;
  children: React.ReactNode;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.a
      href={href}
      whileHover={reduce ? undefined : { scale: 1.02, y: -1 }}
      whileTap={reduce ? undefined : { scale: 0.98 }}
      transition={{ type: "spring", stiffness: 420, damping: 28 }}
      className={cn(
        "inline-flex min-h-12 touch-manipulation items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-[0.005em] transition-all duration-300",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-mint",
        variants[variant],
        className,
      )}
    >
      <span className="relative z-10">{children}</span>
    </motion.a>
  );
}
