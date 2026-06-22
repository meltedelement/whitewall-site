import { motion } from "framer-motion";
import { Phone, MessageCircle, Check, MapPin } from "lucide-react";
import { business, hero, whatsappLink } from "../../../data/site";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-white to-white">
      {/* Soft ambient shapes */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-brand-200/40 blur-3xl" />
        <div className="absolute -left-32 top-1/3 h-80 w-80 rounded-full bg-brand-100/50 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-32 lg:grid-cols-[1.05fr_0.95fr] lg:pb-28 lg:pt-40">
        {/* Left: copy */}
        <div>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-700 shadow-sm"
          >
            <MapPin className="h-3.5 w-3.5" />
            {hero.eyebrow}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-5 text-4xl font-extrabold leading-[1.08] tracking-tight text-ink-900 sm:text-5xl lg:text-[3.4rem]"
          >
            Professional painting for{" "}
            <span className="text-brand-600">homes &amp; commercial spaces</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-ink-700"
          >
            {hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <a
              href={`tel:${business.phoneHref}`}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-500 px-6 py-3.5 text-base font-bold text-white shadow-lg shadow-brand-500/25 transition-all hover:-translate-y-0.5 hover:bg-brand-600"
            >
              <Phone className="h-5 w-5" />
              {business.phone}
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-ink-900/10 bg-white px-6 py-3.5 text-base font-semibold text-ink-900 shadow-sm transition-all hover:-translate-y-0.5 hover:border-brand-300 hover:text-brand-700"
            >
              <MessageCircle className="h-5 w-5 text-[#25D366]" />
              Free quote on WhatsApp
            </a>
          </motion.div>

          {/* Trust badges */}
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-9 flex flex-wrap gap-x-6 gap-y-3"
          >
            {hero.trustBadges.map((b) => (
              <li key={b} className="flex items-center gap-2 text-sm font-medium text-ink-700">
                <span className="grid h-5 w-5 place-items-center rounded-full bg-brand-100 text-brand-600">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} />
                </span>
                {b}
              </li>
            ))}
          </motion.ul>
        </div>

        {/* Right: photo card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="overflow-hidden rounded-[1.75rem] bg-white p-2 shadow-[0_30px_70px_-20px_rgba(15,23,42,0.25)] ring-1 ring-ink-900/5">
            <div className="relative overflow-hidden rounded-[1.35rem]">
              <img
                src="/gallery/hallway-finished.jpg"
                alt="Bright, freshly finished hallway with a restored pine staircase and crisp white front door, painted by White Wall Painting"
                className="aspect-[4/5] w-full object-cover"
                style={{ objectPosition: "center 35%" }}
                loading="eager"
                width={764}
                height={1130}
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink-900/55 to-transparent p-5">
                <p className="text-lg font-bold text-white drop-shadow">Quality work you can trust</p>
                <p className="text-sm text-white/80">A recent hallway &amp; staircase finish</p>
              </div>
            </div>
          </div>

          {/* Floating location chip */}
          <div className="absolute -bottom-5 -left-3 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-lg ring-1 ring-ink-900/5 sm:-left-6">
            <MapPin className="h-5 w-5 shrink-0 text-brand-500" />
            <div className="leading-tight">
              <p className="text-sm font-bold text-ink-900">Local painters</p>
              <p className="text-xs text-ink-500">{business.area}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
