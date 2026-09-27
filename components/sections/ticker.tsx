"use client";

import { motion, useReducedMotion } from "motion/react";
import { useLocale } from "@/components/i18n/locale-provider";

export function Ticker() {
  const reduce = useReducedMotion();
  const { t, locale } = useLocale();
  const row = [...t.facts, ...t.facts];
  const latin = locale === "en" || locale === "de";

  return (
    <div
      className="overflow-hidden border-y border-night/10 bg-cream py-4"
      aria-hidden="true"
    >
      <motion.div
        className="flex w-max gap-10 pe-10"
        animate={reduce ? undefined : { x: ["0%", "-50%"] }}
        transition={{ duration: 32, ease: "linear", repeat: Infinity }}
      >
        {row.map((fact, index) => (
          <span
            key={`${fact}-${index}`}
            className={`flex items-center gap-10 text-xs font-semibold text-night/70 ${
              latin ? "tracking-[0.22em] uppercase" : ""
            }`}
          >
            {fact}
            <span className="size-1.5 rounded-full bg-copper" />
          </span>
        ))}
      </motion.div>
    </div>
  );
}
