"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { Reveal, RevealItem, RevealList } from "@/components/motion/reveal";
import { useLocale } from "@/components/i18n/locale-provider";
import { services } from "@/lib/site";

export function Services() {
  const reduce = useReducedMotion();
  const { t } = useLocale();

  return (
    <section id="services" className="scroll-mt-20 py-20 md:py-28">
      <div className="site-wrap">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.28em] text-copper uppercase">
            {t.services.kicker}
          </p>
          <h2 className="mt-3 max-w-2xl font-heading text-4xl font-semibold text-night sm:text-6xl">
            {t.services.title}
          </h2>
        </Reveal>

        <RevealList className="mt-14 grid gap-6 md:grid-cols-2">
          {services.map((service, index) => {
            const copy = t.services.items[index];
            return (
              <RevealItem key={service.id}>
                <motion.article
                  className="group overflow-hidden rounded-3xl bg-white shadow-[0_20px_50px_-28px_rgba(28,25,23,0.35)]"
                  whileHover={reduce ? undefined : { y: -6 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="relative h-64 overflow-hidden">
                    <motion.div
                      className="absolute inset-0"
                      whileHover={reduce ? undefined : { scale: 1.08 }}
                      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <Image
                        src={service.image}
                        alt={copy.alt}
                        fill
                        className="object-cover"
                        sizes="(min-width: 768px) 50vw, 100vw"
                      />
                    </motion.div>
                    <div className="absolute inset-0 bg-linear-to-t from-night/75 via-night/15 to-night/20" />
                    <p className="absolute top-5 start-5 font-heading text-3xl text-cream">
                      {service.id}
                    </p>
                  </div>
                  <div className="p-7">
                    <h3 className="font-heading text-3xl font-semibold text-night">
                      {copy.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {copy.text}
                    </p>
                  </div>
                </motion.article>
              </RevealItem>
            );
          })}
        </RevealList>
      </div>
    </section>
  );
}
