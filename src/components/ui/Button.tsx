"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

/** motion.button props + explicit children so TS matches JSX (motion children allow MotionValue). */
export type ButtonProps = Omit<
  React.ComponentProps<typeof motion.button>,
  "children"
> & {
  variant?: ButtonVariant;
  children?: React.ReactNode;
};

const variants: Record<ButtonVariant, string> = {
  primary:
    "relative overflow-hidden bg-gradient-to-r from-accent-mint via-accent-azure to-accent-violet text-white shadow-[0_0_32px_-10px_rgba(74,222,128,0.45)] " +
    "before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/0 before:via-white/25 before:to-white/0 before:opacity-0 before:transition-opacity hover:before:opacity-100",
  secondary:
    "glass-panel text-foreground ring-1 ring-white/10 hover:ring-accent-mint/40 hover:bg-white/[0.04]",
  ghost: "text-muted hover:text-foreground hover:bg-white/[0.06]",
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
        "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-medium tracking-wide transition-colors",
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
        "inline-flex min-h-12 touch-manipulation items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-medium tracking-wide transition-colors",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-mint",
        variants[variant],
        className,
      )}
    >
      <span className="relative z-10">{children}</span>
    </motion.a>
  );
}
