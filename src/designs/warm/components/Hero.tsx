import { motion } from "framer-motion";
import { Phone, MessageCircle, MapPin, Star } from "lucide-react";
import { business, whatsappLink } from "../../../data/site";

export default function Hero() {
  return (
    <section
      id="top"
      className="paper-grain relative overflow-hidden bg-cream-100 pt-28 pb-16 sm:pt-32 lg:pt-40 lg:pb-24"
    >
      {/* soft warm glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-10 h-80 w-80 rounded-full bg-clay-300/20 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-sage-200/40 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Left: story-led copy */}
        <div>
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-wood-300/50 bg-cream-50/70 px-4 py-1.5 text-xs font-600 uppercase tracking-[0.15em] text-wood-600"
          >
            <MapPin className="h-3.5 w-3.5 text-clay-500" />
            Local painters · {business.area}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-6 font-display text-[2.6rem] font-600 leading-[1.05] tracking-tight text-wood-900 sm:text-5xl lg:text-[3.75rem]"
          >
            Local painters who treat your home like{" "}
            <span className="italic text-clay-500">their own</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-wood-700"
          >
            I'm {business.owner} — a Tullamore painter who cares about the small
            details: tidy edges, warm finishes and a home left cleaner than we found
            it. Honest prices, careful work, and a result you'll be proud of.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <a
              href={`tel:${business.phoneHref}`}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-clay-500 px-7 py-4 text-base font-600 text-cream-50 shadow-lg shadow-clay-500/25 transition-all hover:bg-clay-600 hover:shadow-clay-500/35"
            >
              <Phone className="h-5 w-5" />
              {business.phone}
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-wood-300 bg-cream-50 px-7 py-4 text-base font-600 text-wood-800 transition-colors hover:bg-cream-200"
            >
              <MessageCircle className="h-5 w-5 text-sage-500" />
              Free quote on WhatsApp
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.32 }}
            className="mt-10 flex items-center gap-4"
          >
            <div className="flex gap-0.5 text-clay-500">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-current" />
              ))}
            </div>
            <p className="text-sm font-500 text-wood-600">
              Trusted by homes &amp; businesses across Co. Offaly
            </p>
          </motion.div>
        </div>

        {/* Right: warm framed hero photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="relative rotate-1 rounded-[2rem] border-4 border-cream-50 bg-cream-50 p-2 shadow-[0_30px_60px_-15px_rgba(95,63,38,0.35)]">
            <div className="overflow-hidden rounded-[1.5rem]">
              <img
                src="/gallery/hallway-finished.jpg"
                alt="A bright hallway with a restored pine staircase, white front door and marble floor, painted by White Wall Painting"
                className="aspect-[3/4] w-full object-cover"
                style={{ objectPosition: "center" }}
              />
            </div>

            {/* warm caption tag */}
            <div className="absolute -bottom-5 -left-4 max-w-[14rem] rounded-2xl bg-wood-700 px-5 py-4 text-cream-50 shadow-xl">
              <p className="font-display text-lg font-600 leading-snug">
                A real Tullamore hallway
              </p>
              <p className="mt-0.5 text-xs text-cream-200">
                Restored staircase &amp; fresh paintwork
              </p>
            </div>

            {/* sage badge */}
            <div className="absolute -right-3 top-6 rotate-3 rounded-full bg-sage-500 px-4 py-2 text-xs font-700 uppercase tracking-wider text-cream-50 shadow-lg">
              Our work
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
