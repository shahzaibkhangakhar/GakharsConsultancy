"use client";

import Link from "next/link";
import { useLocale } from "@/components/i18n/locale-provider";
import { site } from "@/lib/site";

const networks = ["linkedin", "instagram", "facebook"] as const;

export function SocialLinks({
  className = "",
  tone = "cream",
}: {
  className?: string;
  tone?: "cream" | "copper";
}) {
  const { t } = useLocale();
  const linkClass =
    tone === "cream"
      ? "text-sm font-semibold text-cream underline decoration-copper underline-offset-4"
      : "text-sm font-semibold text-copper underline underline-offset-4";

  return (
    <div className={`flex flex-wrap gap-5 ${className}`}>
      {networks.map((network) => (
        <Link
          key={network}
          href={site.social[network]}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
        >
          {t.social[network]}
        </Link>
      ))}
    </div>
  );
}
