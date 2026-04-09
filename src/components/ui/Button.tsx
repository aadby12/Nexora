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
    "relative overflow-hidden bg-[linear-gradient(135deg,#356fae_0%,#4a89c4_100%)] text-white shadow-[0_18px_48px_-24px_rgba(60,120,191,0.3)] " +
    "before:absolute before:inset-0 before:bg-[linear-gradient(135deg,rgba(255,255,255,0.16),rgba(255,255,255,0))] before:opacity-0 before:transition-opacity hover:before:opacity-100",
  secondary:
    "glass-panel premium-border text-foreground ring-1 ring-slate-300/45 hover:ring-slate-300/70 hover:bg-white/85",
  ghost: "text-muted hover:text-foreground hover:bg-white/75 hover:shadow-[0_14px_30px_-26px_rgba(61,134,207,0.2)]",
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
