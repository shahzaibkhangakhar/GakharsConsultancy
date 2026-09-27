"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from "motion/react";
import { useState } from "react";
import { useLocale } from "@/components/i18n/locale-provider";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { nav, site } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  const reduce = useReducedMotion();
  const pathname = usePathname();
  const { t } = useLocale();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (value) => {
    setSolid(value > 48);
  });

  const inverted = pathname === "/" && !solid && !open;

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-colors duration-300 ${
        inverted
          ? "border-transparent bg-transparent"
          : "border-b border-border bg-cream/90 backdrop-blur-md"
      }`}
    >
      <div className="site-wrap flex h-16 items-center justify-between gap-3">
        <Link
          href="/#home"
          className={`cursor-pointer font-heading text-xl font-semibold tracking-tight ${
            inverted ? "text-cream" : "text-night"
          }`}
          onClick={() => setOpen(false)}
        >
          {site.name}
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`cursor-pointer text-xs font-semibold tracking-[0.16em] uppercase transition-colors ${
                inverted
                  ? "text-cream/70 hover:text-cream"
                  : "text-night/55 hover:text-copper"
              }`}
            >
              {t.nav[item.key]}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <LanguageSwitcher inverted={inverted} />
          <Link
            href="#contact"
            className={`hidden sm:inline-flex ${inverted ? "cta-light" : "cta-copper"}`}
          >
            {t.header.book}
          </Link>
          <button
            type="button"
            className={`inline-flex size-10 cursor-pointer items-center justify-center lg:hidden ${
              inverted ? "text-cream" : "text-night"
            }`}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
            <span className="sr-only">
              {open ? t.header.closeMenu : t.header.openMenu}
            </span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-nav"
            className="overflow-hidden border-t border-border bg-cream lg:hidden"
            aria-label="Mobile"
            initial={reduce ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduce ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="site-wrap py-4">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block cursor-pointer py-3 text-sm font-semibold tracking-[0.14em] text-night uppercase"
                  onClick={() => setOpen(false)}
                >
                  {t.nav[item.key]}
                </Link>
              ))}
              <Link
                href="#contact"
                className="cta-copper mt-3 w-full"
                onClick={() => setOpen(false)}
              >
                {t.header.book}
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
