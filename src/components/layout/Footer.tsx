import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { navItems, socialLinks } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#040714]">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-md space-y-4">
            <Logo variant="footer" href="#top" />
            <p className="text-sm leading-relaxed text-muted">
              Next-level web experiences for teams who care how their brand
              feels in the browser—fast, immersive, and built to scale.
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
                      className="text-sm text-foreground/90 hover:text-accent-cyan"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="#faq"
                    className="text-sm text-foreground/90 hover:text-accent-cyan"
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
                      className="text-sm text-foreground/90 hover:text-accent-cyan"
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
                    href="mailto:hello@nexora.studio"
                    className="hover:text-accent-cyan"
                  >
                    hello@nexora.studio
                  </a>
                </li>
                <li className="text-muted">San Francisco · Remote worldwide</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-8 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Nexora. All rights reserved.</p>
          <p className="text-balance sm:text-right">
            Crafted for clarity, speed, and momentum.
          </p>
        </div>
      </div>
    </footer>
  );
}
