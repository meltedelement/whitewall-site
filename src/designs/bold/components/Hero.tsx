import { motion } from "framer-motion";
import { Phone, MessageCircle, ArrowDown } from "lucide-react";
import { business, hero, whatsappLink } from "../../../data/site";

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] w-full overflow-hidden bg-ink-950">
      {/* Full-bleed hero photo */}
      <img
        src="/gallery/hallway-finished.jpg"
        alt="Bright hallway with a restored pine staircase, white front door and marble floor, painted by White Wall Painting"
        className="absolute inset-0 h-full w-full object-cover"
        style={{ objectPosition: "center 30%" }}
      />
      {/* Tint for legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-ink-950/90 via-ink-950/55 to-ink-950/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-ink-950/40" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-4 pb-12 pt-28 sm:px-6 lg:px-10 lg:pb-20">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-accent-bright"
        >
          <span className="h-px w-10 bg-accent" />
          {hero.eyebrow}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="display max-w-5xl text-[15vw] text-paper sm:text-[12vw] lg:text-[8.5rem]"
        >
          Painted
          <br />
          <span className="text-accent">properly.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 max-w-xl text-lg leading-relaxed text-paper/80"
        >
          {hero.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
        >
          <a
            href={`tel:${business.phoneHref}`}
            className="inline-flex items-center justify-center gap-2 bg-accent px-7 py-4 text-base font-bold uppercase tracking-wider text-white transition-colors hover:bg-accent-bright"
          >
            <Phone size={18} aria-hidden="true" />
            {business.phone}
          </a>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border border-paper/30 bg-paper/5 px-7 py-4 text-base font-bold uppercase tracking-wider text-paper backdrop-blur transition-colors hover:bg-paper/10"
          >
            <MessageCircle size={18} aria-hidden="true" />
            Free quote on WhatsApp
          </a>
        </motion.div>

        <motion.a
          href="#work"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 hidden items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-paper/60 transition-colors hover:text-paper lg:inline-flex"
        >
          <ArrowDown size={16} className="animate-bounce" aria-hidden="true" />
          See the before &amp; after
        </motion.a>
      </div>
    </section>
  );
}
