"use client";

import { useLocale } from "@/components/i18n/locale-provider";

export function SkipLink() {
  const { t } = useLocale();

  return (
    <a
      href="#home"
      className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:bg-copper focus:px-3 focus:py-2 focus:text-cream"
    >
      {t.skip}
    </a>
  );
}
