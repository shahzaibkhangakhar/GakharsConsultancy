"use client";

import Link from "next/link";
import { useLocale } from "@/components/i18n/locale-provider";
import { site } from "@/lib/site";

export function PrivacyContent() {
  const { t } = useLocale();

  return (
    <article className="site-wrap max-w-3xl pt-28 pb-16">
      <p className="text-xs tracking-[0.2em] text-copper uppercase">
        {t.privacy.kicker}
      </p>
      <h1 className="mt-3 font-heading text-5xl font-semibold text-night">
        {t.privacy.title}
      </h1>
      <div className="mt-10 space-y-6 text-sm leading-relaxed text-muted-foreground">
        <p>{t.privacy.p1}</p>
        <p>
          {t.privacy.p2} {site.name}, {site.location}.
        </p>
      </div>
      <Link href="/" className="mt-12 inline-flex cursor-pointer text-sm text-copper">
        {t.privacy.back}
      </Link>
    </article>
  );
}
