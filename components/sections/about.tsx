"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { Reveal } from "@/components/motion/reveal";
import { useLocale } from "@/components/i18n/locale-provider";
import { images, site } from "@/lib/site";

export function About() {
  const reduce = useReducedMotion();
  const { t } = useLocale();

  return (
    <section id="about" className="scroll-mt-20 py-20 md:py-28">
      <div className="site-wrap grid items-center gap-12 lg:grid-cols-12">
        <motion.div
          className="relative h-[28rem] overflow-hidden rounded-3xl lg:col-span-6"
          initial={reduce ? false : { opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src={images.city}
            alt={t.about.imageAlt}
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </motion.div>

        <Reveal className="lg:col-span-6">
          <p className="text-xs font-semibold tracking-[0.28em] text-copper uppercase">
            {t.about.kicker}
          </p>
          <h2 className="mt-3 font-heading text-4xl font-semibold text-night sm:text-6xl">
            {site.name}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            {t.about.p1}
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            {t.about.p2}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
