"use client";

import { useId } from "react";
import { cn } from "@/lib/utils";

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
          id={g("left")}
          x1="7"
          y1="32"
          x2="22"
          y2="10"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#22d3ee" />
          <stop offset="0.58" stopColor="#3b82f6" />
          <stop offset="1" stopColor="#2563eb" />
        </linearGradient>
        <linearGradient
          id={g("top")}
          x1="20"
          y1="4"
          x2="31"
          y2="22"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#8b5cf6" />
          <stop offset="1" stopColor="#2563eb" />
        </linearGradient>
        <linearGradient
          id={g("slash")}
          x1="11"
          y1="27"
          x2="33"
          y2="17"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#22d3ee" />
          <stop offset="0.62" stopColor="#3b82f6" />
          <stop offset="1" stopColor="#4f46e5" />
        </linearGradient>
        <linearGradient
          id={g("right")}
          x1="24"
          y1="18"
          x2="34"
          y2="34"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#2563eb" />
          <stop offset="0.62" stopColor="#1d4ed8" />
          <stop offset="1" stopColor="#22c55e" />
        </linearGradient>
        <filter
          id={g("glow")}
          x="-20%"
          y="-20%"
          width="140%"
          height="140%"
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur stdDeviation="1.4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <clipPath id={g("markClip")}>
          <path d="M6.8 34.2L18.7 6L33.5 34.2H25.8L20.1 23.1L15.4 34.2H6.8Z" />
        </clipPath>
      </defs>
      <g filter={`url(#${g("glow")})`}>
        <path
          d="M7 34L18.8 5.8L22.8 9.8L12.9 34H7Z"
          fill={`url(#${g("left")})`}
        />
        <path
          d="M18.8 5.8H22.4L31.4 22.3L27.4 23.2L18.8 5.8Z"
          fill={`url(#${g("top")})`}
        />
        <path
          d="M12.1 29.3L28.4 15.7L32.9 16.5L17 33.9H12.1Z"
          fill={`url(#${g("slash")})`}
        />
        <path
          d="M27.9 21.7L33.4 33.9H27.2L22.8 25.2L27.9 21.7Z"
          fill={`url(#${g("right")})`}
        />
        <path
          d="M18.8 5.8L22.8 9.8"
          stroke="#c4b5fd"
          strokeOpacity="0.7"
          strokeWidth="0.8"
        />
        <g clipPath={`url(#${g("markClip")})`}>
          <path
            d="M7.2 33.8L19 5.8"
            stroke="#7dd3fc"
            strokeOpacity="0.65"
            strokeWidth="1"
          />
          <path
            d="M12.2 29.4L28.5 15.8"
            stroke="#93c5fd"
            strokeOpacity="0.55"
            strokeWidth="0.9"
          />
          <path
            d="M27.9 21.8L33.3 33.8"
            stroke="#86efac"
            strokeOpacity="0.55"
            strokeWidth="0.9"
          />
        </g>
      </g>
    </svg>
  );
}
