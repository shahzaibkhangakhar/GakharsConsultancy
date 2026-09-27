"use client";

import Link from "next/link";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { useRef } from "react";
import { useLocale } from "@/components/i18n/locale-provider";
import { ParallaxImage } from "@/components/motion/parallax-image";
import { images } from "@/lib/site";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();
  const { t } = useLocale();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const rise = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative flex min-h-[100svh] items-end overflow-hidden"
    >
      <ParallaxImage
        src={images.hero}
        alt={t.hero.imageAlt}
        className="absolute inset-0"
        priority
      />
      <div className="absolute inset-0 bg-linear-to-t from-night via-night/55 to-night/25" />

      <motion.div
        className="site-wrap relative z-10 w-full pb-16 pt-28 md:pb-24"
        style={reduce ? undefined : { opacity: fade, y: rise }}
      >
        <motion.p
          className="text-xs font-semibold tracking-[0.28em] text-cream/70 uppercase"
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease }}
        >
          {t.hero.kicker}
        </motion.p>

        <motion.h1
          className="mt-5 max-w-4xl font-heading text-5xl leading-[0.95] font-semibold text-cream sm:text-7xl lg:text-8xl"
          initial={reduce ? false : { opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08, ease }}
        >
          {t.hero.title}
        </motion.h1>

        <motion.p
          className="mt-7 max-w-xl text-base leading-relaxed text-cream/80 sm:text-lg"
          initial={reduce ? false : { opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.2, ease }}
        >
          {t.hero.text}
        </motion.p>

        <motion.div
          className="mt-10 flex flex-wrap gap-3"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.32, ease }}
        >
          <motion.div
            whileHover={reduce ? undefined : { y: -3 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link href="#contact" className="cta-copper">
              {t.hero.book}
            </Link>
          </motion.div>
          <motion.div
            whileHover={reduce ? undefined : { y: -3 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link href="#figures" className="cta-light">
              {t.hero.figures}
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 text-[10px] tracking-[0.3em] text-cream/60 uppercase md:block"
        animate={reduce ? undefined : { y: [0, 8, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
      >
        {t.hero.scroll}
      </motion.div>
    </section>
  );
}
