"use client";

import Link from "next/link";
import { useLocale } from "@/components/i18n/locale-provider";
import { SocialLinks } from "@/components/layout/social-links";
import { site } from "@/lib/site";

export function ImpressumContent() {
  const { t } = useLocale();

  return (
    <article className="site-wrap max-w-3xl pt-28 pb-16">
      <p className="text-xs tracking-[0.2em] text-copper uppercase">
        {t.impressum.kicker}
      </p>
      <h1 className="mt-3 font-heading text-5xl font-semibold text-night">
        {t.impressum.title}
      </h1>
      <div className="mt-10 space-y-6 text-sm leading-relaxed text-muted-foreground">
        <p>
          {site.name}
          <br />
          {t.footer.firma}
          <br />
          <a href={`mailto:${site.email}`} className="text-copper underline">
            {site.email}
          </a>
        </p>
        <p>{t.impressum.body}</p>
        <SocialLinks tone="copper" />
      </div>
      <Link href="/" className="mt-12 inline-flex cursor-pointer text-sm text-copper">
        {t.impressum.back}
      </Link>
    </article>
  );
}
