"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { Reveal } from "@/components/motion/reveal";
import { useLocale } from "@/components/i18n/locale-provider";
import { steps } from "@/lib/site";

export function Approach() {
  const reduce = useReducedMotion();
  const { t } = useLocale();

  return (
    <section id="approach" className="scroll-mt-20 bg-secondary py-20 md:py-28">
      <div className="site-wrap">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.28em] text-copper uppercase">
            {t.approach.kicker}
          </p>
          <h2 className="mt-3 max-w-2xl font-heading text-4xl font-semibold text-night sm:text-6xl">
            {t.approach.title}
          </h2>
        </Reveal>

        <div className="mt-16 space-y-8">
          {steps.map((step, index) => {
            const copy = t.approach.steps[index];
            return (
              <motion.article
                key={copy.title}
                className="grid overflow-hidden rounded-3xl bg-white md:grid-cols-2"
                initial={reduce ? false : { opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div
                  className={`relative min-h-72 ${index % 2 === 1 ? "md:order-2" : ""}`}
                >
                  <Image
                    src={step.image}
                    alt={copy.alt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                </div>
                <div className="flex flex-col justify-center p-8 md:p-12">
                  <p className="font-heading text-6xl text-copper/40">
                    0{index + 1}
                  </p>
                  <h3 className="mt-4 font-heading text-4xl font-semibold text-night">
                    {copy.title}
                  </h3>
                  <p className="mt-4 max-w-md text-muted-foreground">{copy.text}</p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
