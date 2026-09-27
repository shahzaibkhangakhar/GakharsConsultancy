import type { Metadata } from "next";
import { ImpressumContent } from "@/components/sections/impressum-content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Impressum · ${site.name}`,
};

export default function ImpressumPage() {
  return <ImpressumContent />;
}
