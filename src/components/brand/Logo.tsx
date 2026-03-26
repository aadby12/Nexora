"use client";

import Link from "next/link";
import { NexoraMark } from "@/components/brand/NexoraMark";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  variant?: "header" | "footer";
  href?: string | null;
  onClick?: () => void;
  /** Kept for compatibility; wordmark has no LCP image. */
  priority?: boolean;
};

export function Logo({
  className,
  variant = "header",
  href = "/",
  onClick,
  priority: _priority,
}: LogoProps) {
  const isFooter = variant === "footer";
  const markSize = isFooter
    ? "h-9 w-9 sm:h-10 sm:w-10"
    : "h-8 w-8 sm:h-9 sm:w-9";
  const textSize = isFooter
    ? "text-xl font-semibold sm:text-2xl"
    : "text-lg font-semibold sm:text-xl";

  const inner = (
    <>
      <span
        className={cn(
          "flex items-center justify-center rounded-xl bg-white/[0.04] ring-1 ring-white/10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]",
          isFooter ? "p-2 sm:p-2.5" : "p-1.5 sm:p-2",
        )}
      >
        <NexoraMark className={markSize} />
      </span>
      <span
        className={cn(
          "font-display tracking-tight text-foreground",
          textSize,
        )}
      >
        Nexora
      </span>
      <span
        className="h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-accent-mint via-accent-azure to-accent-violet opacity-90 shadow-[0_0_10px_-2px_rgba(74,222,128,0.5)] transition group-hover:opacity-100 sm:h-2 sm:w-2"
        aria-hidden
      />
    </>
  );

  const wrapCls = cn(
    "group inline-flex items-center gap-2 sm:gap-2.5 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-mint",
    className,
  );

  if (href === null) {
    return <span className={cn(wrapCls, "cursor-default")}>{inner}</span>;
  }

  return (
    <Link href={href} onClick={onClick} className={wrapCls}>
      {inner}
    </Link>
  );
}
