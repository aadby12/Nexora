import type { Service } from "@/lib/data";

const iconClass = "h-6 w-6 text-accent-cyan";

export function ServiceIcon({ name }: { name: Service["icon"] }) {
  switch (name) {
    case "code":
      return (
        <svg className={iconClass} fill="none" viewBox="0 0 24 24" aria-hidden>
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="m16 18 6-6-6-6M8 6l-6 6 6 6"
          />
        </svg>
      );
    case "layout":
      return (
        <svg className={iconClass} fill="none" viewBox="0 0 24 24" aria-hidden>
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M4 6h16M4 10h10M4 14h16M4 18h10"
          />
        </svg>
      );
    case "rocket":
      return (
        <svg className={iconClass} fill="none" viewBox="0 0 24 24" aria-hidden>
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9.5 14.5 4 20v-5.5L14.5 4a2.12 2.12 0 0 1 3 3L9.5 14.5Z"
          />
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="m12 12 2 2M9 9l.5.5"
          />
        </svg>
      );
    case "building":
      return (
        <svg className={iconClass} fill="none" viewBox="0 0 24 24" aria-hidden>
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M4 20V9l8-5 8 5v11M9 20v-4h6v4"
          />
        </svg>
      );
    case "cart":
      return (
        <svg className={iconClass} fill="none" viewBox="0 0 24 24" aria-hidden>
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M3 4h2l1 12h12l2-9H6M9 19.5a1.5 1.5 0 1 0 0 2 1.5 1.5 0 0 0 0-2Zm8 0a1.5 1.5 0 1 0 0 2 1.5 1.5 0 0 0 0-2Z"
          />
        </svg>
      );
    case "palette":
      return (
        <svg className={iconClass} fill="none" viewBox="0 0 24 24" aria-hidden>
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 20a8 8 0 0 0 0-16c-3.3 0-6 2.7-6 6 0 1.8 1.5 3.3 3.3 3.3H12"
          />
          <circle cx="7" cy="9" r="1" fill="currentColor" />
          <circle cx="10" cy="6" r="1" fill="currentColor" />
          <circle cx="15" cy="6" r="1" fill="currentColor" />
          <circle cx="18" cy="11" r="1" fill="currentColor" />
        </svg>
      );
    case "refresh":
      return (
        <svg className={iconClass} fill="none" viewBox="0 0 24 24" aria-hidden>
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M4 12a8 8 0 0 1 8-8V2m0 0 3 3m-3-3L9 5m12 7a8 8 0 0 1-8 8v2m0 0-3-3m3 3 3-3"
          />
        </svg>
      );
    case "wrench":
      return (
        <svg className={iconClass} fill="none" viewBox="0 0 24 24" aria-hidden>
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="m14.5 9.5 5-5M16 3l3 3-2.5 2.5m-6 9.5a4 4 0 1 1-5.7-5.7L16 3"
          />
        </svg>
      );
    case "gauge":
      return (
        <svg className={iconClass} fill="none" viewBox="0 0 24 24" aria-hidden>
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 15a3 3 0 1 0 0-6M5 19a9 9 0 0 1 14-7.3M5 19H3v-2m2 0 3 3"
          />
        </svg>
      );
    default:
      return null;
  }
}
