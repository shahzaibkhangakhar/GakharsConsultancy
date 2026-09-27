"use client";

import { Counter } from "@/components/motion/counter";
import { Reveal, RevealItem, RevealList } from "@/components/motion/reveal";
import { useLocale } from "@/components/i18n/locale-provider";
import { stats } from "@/lib/site";

export function Figures() {
  const { t } = useLocale();

  return (
    <section id="figures" className="scroll-mt-20 bg-night py-20 text-cream md:py-28">
      <div className="site-wrap">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.28em] text-cream/50 uppercase">
            {t.figures.kicker}
          </p>
          <h2 className="mt-3 max-w-2xl font-heading text-4xl font-semibold sm:text-6xl">
            {t.figures.title}
          </h2>
        </Reveal>

        <RevealList className="mt-14 grid gap-8 sm:grid-cols-3">
          {stats.map((stat) => (
            <RevealItem key={stat.key}>
              <p className="font-heading text-6xl font-semibold text-cream sm:text-7xl">
                <Counter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-3 text-sm tracking-wide text-cream/60">
                {t.figures[stat.key]}
              </p>
            </RevealItem>
          ))}
        </RevealList>
      </div>
    </section>
  );
}
