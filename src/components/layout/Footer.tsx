import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { navItems, socialLinks } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-slate-300/45 bg-[#e7eef7]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-md space-y-5">
            <Logo variant="footer" href="/" />
            <p className="text-sm leading-7 text-muted">
              Website design and development for businesses that want to look more established online and communicate more clearly.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                Explore
              </p>
              <ul className="mt-4 space-y-2">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-foreground/90 transition hover:text-accent-mint"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/#faq"
                    className="text-sm text-foreground/90 transition hover:text-accent-mint"
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                Social
              </p>
              <ul className="mt-4 space-y-2">
                {socialLinks.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-foreground/90 transition hover:text-accent-mint"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                Contact
              </p>
              <ul className="mt-4 space-y-2 text-sm text-foreground/90">
                <li>
                  <a
                    href="mailto:info@avenortech12.com"
                    className="transition hover:text-accent-mint"
                  >
                    info@avenortech12.com
                  </a>
                </li>
                <li className="text-muted">0538730683</li>
                <li className="text-muted">+233541111423</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-4 border-t border-slate-300/45 pt-8 text-xs text-muted sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Avenor Tech. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <Link
              href="/privacy"
              className="text-foreground/80 hover:text-accent-mint"
            >
              Privacy
            </Link>
            <span className="hidden text-slate-400 sm:inline" aria-hidden>
              ·
            </span>
            <p className="text-balance sm:text-right">
              Designed to feel clear, credible, and current.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
