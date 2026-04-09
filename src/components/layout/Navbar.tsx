"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { navItems } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/brand/Logo";
import { LinkButton } from "@/components/ui/Button";

const sectionIds = navItems
  .map((item) => item.href.split("#").pop() ?? "")
  .filter(Boolean);

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target?.id) {
          setActive(visible[0].target.id);
        }
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.12, 0.25, 0.5] },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled
            ? "border-b border-slate-300/45 bg-background/82 shadow-[0_18px_60px_-38px_rgba(45,111,196,0.2)] backdrop-blur-2xl"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3.5 sm:px-6 lg:px-8"
          aria-label="Primary"
        >
          <Logo href="/" />

          <ul className="hidden items-center gap-1 rounded-full border border-slate-300/45 bg-white/70 p-1 lg:flex">
            {navItems.map((item) => {
              const id = item.href.replace("#", "");
              const isActive = active === id;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                      isActive
                        ? "text-foreground"
                        : "text-muted hover:text-foreground",
                    )}
                  >
                    <span className="relative">
                      {item.label}
                      {isActive ? (
                        <motion.span
                          layoutId="nav-pill"
                          className="absolute -inset-x-1 -inset-y-0.5 -z-10 rounded-full bg-white/90 ring-1 ring-slate-300/50"
                          transition={{
                            type: "spring",
                            stiffness: 380,
                            damping: 32,
                          }}
                        />
                      ) : null}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="hidden lg:block">
            <LinkButton
              href="/#contact"
              className="!px-5 !text-[13px] !font-semibold !tracking-[0.01em] !shadow-[0_16px_34px_-20px_rgba(60,120,191,0.45)]"
            >
              Start Project
            </LinkButton>
          </div>

          <button
            type="button"
            className="relative z-[70] flex h-11 w-11 touch-manipulation items-center justify-center rounded-2xl border border-slate-300/45 bg-white/80 shadow-[0_14px_32px_-26px_rgba(61,134,207,0.24)] lg:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <span className="sr-only">Menu</span>
            <span className="flex w-5 flex-col gap-1.5">
              <motion.span
                className="h-0.5 rounded-full bg-foreground"
                animate={
                  reduce
                    ? {}
                    : open
                      ? { rotate: 45, y: 8, width: "100%" }
                      : { rotate: 0, y: 0, width: "100%" }
                }
                transition={{ type: "spring", stiffness: 320, damping: 28 }}
              />
              <motion.span
                className="h-0.5 rounded-full bg-foreground"
                animate={reduce ? {} : open ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.15 }}
              />
              <motion.span
                className="h-0.5 rounded-full bg-foreground"
                animate={
                  reduce
                    ? {}
                    : open
                      ? { rotate: -45, y: -8, width: "100%" }
                      : { rotate: 0, y: 0, width: "100%" }
                }
                transition={{ type: "spring", stiffness: 320, damping: 28 }}
              />
            </span>
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            className="fixed inset-0 z-[65] lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <button
              type="button"
              aria-label="Close menu overlay"
              className="absolute inset-0 bg-background/80 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 280, damping: 34 }}
              className="absolute right-0 top-0 flex h-full w-[min(100%,21rem)] flex-col border-l border-slate-300/55 bg-[#eef4fb]/96 px-5 pb-10 pt-24 shadow-[-16px_0_48px_rgba(45,111,196,0.18)] backdrop-blur-2xl"
              aria-label="Mobile"
            >
              <div className="mb-6 border-b border-slate-300/45 pb-5">
                <Logo href="/" onClick={() => setOpen(false)} />
              </div>
              <ul className="flex flex-col gap-1">
                {navItems.map((item, i) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: reduce ? 0 : 0.05 + i * 0.04,
                      type: "spring",
                      stiffness: 320,
                      damping: 28,
                    }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                    className="block rounded-2xl px-4 py-3.5 text-base font-medium text-foreground transition-colors hover:bg-white/70"
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-6">
                <Link
                  href="/#contact"
                  onClick={() => setOpen(false)}
                  className="flex min-h-12 w-full items-center justify-center rounded-full bg-[linear-gradient(135deg,#356fae_0%,#4a89c4_100%)] text-sm font-semibold text-white shadow-lg shadow-accent-azure/20"
                >
                  Start Project
                </Link>
              </div>
            </motion.nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
