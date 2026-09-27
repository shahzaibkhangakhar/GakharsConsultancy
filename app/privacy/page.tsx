import type { Metadata } from "next";
import { PrivacyContent } from "@/components/sections/privacy-content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Privacy · ${site.name}`,
};

export default function PrivacyPage() {
  return <PrivacyContent />;
}
