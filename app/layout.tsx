import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  Geist_Mono,
  Noto_Nastaliq_Urdu,
  Noto_Sans_Devanagari,
  Outfit,
} from "next/font/google";
import { LocaleProvider } from "@/components/i18n/locale-provider";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { SkipLink } from "@/components/layout/skip-link";
import { ScrollProgress } from "@/components/motion/scroll-progress";
import { site } from "@/lib/site";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const urdu = Noto_Nastaliq_Urdu({
  variable: "--font-urdu-face",
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
});

const hindi = Noto_Sans_Devanagari({
  variable: "--font-hindi-face",
  subsets: ["devanagari"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: `${site.name} · Consultation`,
  description:
    "Consultation with Shahzaib Gakhar for university admissions, job placement, and Ausbildung pathways in Germany.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${outfit.variable} ${geistMono.variable} ${urdu.variable} ${hindi.variable} h-full`}
    >
      <body className="flex min-h-full flex-col bg-cream text-night">
        <LocaleProvider>
          <SkipLink />
          <ScrollProgress />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </LocaleProvider>
      </body>
    </html>
  );
}
