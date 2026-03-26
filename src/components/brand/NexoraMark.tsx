"use client";

import { useId } from "react";
import { cn } from "@/lib/utils";

/** Ribbon-style “N” inspired by the Nexora brand mark (mint → azure → violet). */
export function NexoraMark({ className }: { className?: string }) {
  const raw = useId().replace(/:/g, "");
  const g = (prefix: string) => `${prefix}_${raw}`;

  return (
    <svg
      className={cn("shrink-0", className)}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <linearGradient
          id={g("nex_l")}
          x1="12"
          y1="6"
          x2="12"
          y2="34"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4ade80" />
          <stop offset="1" stopColor="#84cc16" />
        </linearGradient>
        <linearGradient
          id={g("nex_d")}
          x1="10"
          y1="34"
          x2="30"
          y2="6"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3b82f6" />
          <stop offset="1" stopColor="#6366f1" />
        </linearGradient>
        <linearGradient
          id={g("nex_r")}
          x1="28"
          y1="34"
          x2="28"
          y2="6"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#60a5fa" />
          <stop offset="1" stopColor="#a78bfa" />
        </linearGradient>
      </defs>
      <rect
        x="8"
        y="6"
        width="6.5"
        height="28"
        rx="1.6"
        fill={`url(#${g("nex_l")})`}
      />
      <rect
        x="25.5"
        y="6"
        width="6.5"
        height="28"
        rx="1.6"
        fill={`url(#${g("nex_r")})`}
      />
      <g transform="rotate(-31 20 20)">
        <rect
          x="17.75"
          y="7"
          width="5"
          height="26"
          rx="1.3"
          fill={`url(#${g("nex_d")})`}
        />
      </g>
    </svg>
  );
}
