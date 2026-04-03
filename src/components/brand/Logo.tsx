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
    ? "h-8 w-8 sm:h-9 sm:w-9"
    : "h-7 w-7 sm:h-8 sm:w-8";
  const textSize = isFooter
    ? "text-xl font-semibold sm:text-2xl"
    : "text-lg font-semibold sm:text-[1.15rem]";

  const inner = (
    <>
      <span className="flex shrink-0 items-center justify-center">
        <NexoraMark className={markSize} />
      </span>
      <span
        className={cn(
          "font-display leading-none tracking-[-0.035em] text-foreground",
          textSize,
        )}
      >
        Avenor Tech
      </span>
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
