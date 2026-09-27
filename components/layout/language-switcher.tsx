"use client";

import { useEffect, useId, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useLocale } from "@/components/i18n/locale-provider";
import { localeMeta, locales } from "@/lib/i18n";

export function LanguageSwitcher({ inverted }: { inverted: boolean }) {
  const { locale, setLocale, t } = useLocale();
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();
  const rootRef = useRef<HTMLDivElement>(null);
  const listId = useId();

  useEffect(() => {
    function onPointerDown(event: PointerEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        className={`inline-flex h-10 cursor-pointer items-center gap-1.5 rounded-full border px-3 text-xs font-semibold tracking-[0.08em] transition-colors ${
          inverted
            ? "border-cream/30 text-cream hover:border-cream"
            : "border-night/15 text-night hover:border-copper"
        }`}
        aria-label={t.header.language}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        onClick={() => setOpen((value) => !value)}
      >
        <span>{localeMeta[locale].native}</span>
        <ChevronDown className={`size-3.5 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            id={listId}
            role="listbox"
            aria-label={t.header.language}
            className="absolute top-[calc(100%+0.5rem)] end-0 z-[70] min-w-44 overflow-hidden rounded-2xl border border-border bg-white py-1 shadow-[0_18px_40px_-20px_rgba(28,25,23,0.5)]"
            initial={reduce ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
          >
            {locales.map((item) => {
              const selected = item === locale;
              return (
                <li key={item} role="option" aria-selected={selected}>
                  <button
                    type="button"
                    className={`flex w-full cursor-pointer items-center justify-between px-4 py-2.5 text-left text-sm ${
                      selected
                        ? "bg-copper/10 font-semibold text-copper"
                        : "text-night hover:bg-secondary"
                    }`}
                    onClick={() => {
                      setLocale(item);
                      setOpen(false);
                    }}
                  >
                    <span>{localeMeta[item].label}</span>
                    <span className="text-xs text-muted-foreground">
                      {localeMeta[item].native}
                    </span>
                  </button>
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
