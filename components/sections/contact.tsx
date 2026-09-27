"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { Reveal } from "@/components/motion/reveal";
import { useLocale } from "@/components/i18n/locale-provider";
import { SocialLinks } from "@/components/layout/social-links";
import { images, site } from "@/lib/site";

const fieldClass =
  "mt-2 mb-5 h-12 w-full rounded-xl border border-cream/15 bg-cream/5 px-3 text-sm text-cream outline-none focus-visible:border-copper";
const labelClass = "text-xs tracking-[0.14em] text-cream/50 uppercase";

function consultationMailto({
  name,
  email,
  phone,
  interest,
  note,
}: {
  name: string;
  email: string;
  phone: string;
  interest: string;
  note: string;
}) {
  const subject = `Consultation: ${interest} — ${name}`;
  const body = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone}`,
    `Interest: ${interest}`,
    "",
    note,
  ].join("\n");

  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function Contact() {
  const reduce = useReducedMotion();
  const { t } = useLocale();
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const interest = String(data.get("interest") ?? "").trim();
    const note = String(data.get("note") ?? "").trim();

    if (!name || !email || !phone || !note || !site.email) {
      setError(true);
      return;
    }

    setError(false);
    window.location.href = consultationMailto({
      name,
      email,
      phone,
      interest,
      note,
    });
    setSent(true);
  }

  return (
    <section id="contact" className="scroll-mt-20 pb-20 md:pb-28">
      <div className="site-wrap overflow-hidden rounded-3xl bg-night text-cream lg:grid lg:grid-cols-2">
        <div className="relative min-h-80">
          <Image
            src={images.students}
            alt={t.contact.imageAlt}
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
          <div className="absolute inset-0 bg-night/35" />
        </div>

        <div className="p-8 md:p-12">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.28em] text-cream/50 uppercase">
              {t.contact.kicker}
            </p>
            <h2 className="mt-3 font-heading text-4xl font-semibold sm:text-6xl">
              {t.contact.title}
            </h2>
            <p className="mt-5 max-w-md text-cream/70">{t.contact.text}</p>
            <SocialLinks className="mt-6" />
          </Reveal>

          <div className="mt-10">
            {sent ? (
              <motion.p
                className="rounded-2xl bg-cream/10 p-6 text-cream"
                initial={reduce ? false : { opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                {t.contact.sent}
              </motion.p>
            ) : (
              <form onSubmit={onSubmit}>
                <label htmlFor="name" className={labelClass}>
                  {t.contact.name}
                </label>
                <input
                  id="name"
                  name="name"
                  autoComplete="name"
                  required
                  className={fieldClass}
                />
                <label htmlFor="email" className={labelClass}>
                  {t.contact.email}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className={fieldClass}
                />
                <label htmlFor="phone" className={labelClass}>
                  {t.contact.phone}
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  required
                  minLength={8}
                  className={fieldClass}
                />
                <label htmlFor="interest" className={labelClass}>
                  {t.contact.interest}
                </label>
                <select
                  id="interest"
                  name="interest"
                  required
                  className="mt-2 mb-5 h-12 w-full cursor-pointer rounded-xl border border-cream/15 bg-night px-3 text-sm text-cream outline-none focus-visible:border-copper"
                >
                  {t.contact.interests.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
                <label htmlFor="note" className={labelClass}>
                  {t.contact.note}
                </label>
                <textarea
                  id="note"
                  name="note"
                  required
                  rows={5}
                  className="mt-2 w-full rounded-xl border border-cream/15 bg-cream/5 px-3 py-3 text-sm text-cream outline-none focus-visible:border-copper"
                />
                {error ? (
                  <p className="mt-4 text-sm text-red-300">{t.contact.error}</p>
                ) : null}
                <motion.button
                  type="submit"
                  className="cta-copper mt-6 w-full"
                  whileHover={reduce ? undefined : { y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {t.contact.submit}
                </motion.button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
