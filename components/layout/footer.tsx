"use client";

import Link from "next/link";
import { useLocale } from "@/components/i18n/locale-provider";
import { SocialLinks } from "@/components/layout/social-links";
import { nav, site } from "@/lib/site";

export function Footer() {
  const { t } = useLocale();

  return (
    <footer className="bg-night text-cream">
      <div className="site-wrap flex flex-col gap-10 py-14 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-heading text-4xl font-semibold">{site.name}</p>
          <p className="mt-3 text-sm text-cream/60">{t.footer.line}</p>
          <SocialLinks className="mt-5" />
        </div>
        <nav className="flex flex-wrap gap-5" aria-label="Footer">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="cursor-pointer text-xs tracking-[0.14em] text-cream/50 uppercase hover:text-cream"
            >
              {t.nav[item.key]}
            </Link>
          ))}
          <Link
            href="/impressum"
            className="cursor-pointer text-xs tracking-[0.14em] text-cream/50 uppercase hover:text-cream"
          >
            {t.nav.impressum}
          </Link>
          <Link
            href="/privacy"
            className="cursor-pointer text-xs tracking-[0.14em] text-cream/50 uppercase hover:text-cream"
          >
            {t.nav.privacy}
          </Link>
        </nav>
      </div>
      <div className="site-wrap border-t border-cream/10 py-5">
        <p className="text-xs tracking-[0.16em] text-cream/40 uppercase">
          {t.footer.firma}
        </p>
      </div>
    </footer>
  );
}
