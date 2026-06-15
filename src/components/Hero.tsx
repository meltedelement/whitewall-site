import { motion } from "framer-motion";
import { Phone, MessageCircle, Check, Star } from "lucide-react";
import { business, hero, whatsappLink } from "../data/site";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-navy-800 text-white">
      {/* Background flourishes */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-navy-600/40 blur-3xl" />
        <div className="absolute -bottom-24 left-1/4 h-72 w-72 rounded-full bg-gold-500/10 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pb-28 pt-32 lg:grid-cols-[1.1fr_0.9fr] lg:pb-32 lg:pt-40">
        {/* Left: copy */}
        <div>
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-600 uppercase tracking-wider text-gold-400"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
            {hero.eyebrow}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-5 font-display text-4xl font-700 uppercase leading-[1.02] tracking-tight sm:text-5xl lg:text-6xl"
          >
            Professional painting for{" "}
            <span className="text-gold-400">homes & commercial spaces</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-white/75"
          >
            {hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <a
              href={`tel:${business.phoneHref}`}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gold-500 px-6 py-3.5 text-base font-700 text-navy-900 shadow-lg shadow-gold-500/20 transition-transform hover:scale-[1.03]"
            >
              <Phone className="h-5 w-5" />
              {business.phone}
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-base font-600 text-white transition-colors hover:bg-white/10"
            >
              <MessageCircle className="h-5 w-5 text-gold-400" />
              Free quote on WhatsApp
            </a>
          </motion.div>

          {/* Trust badges */}
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-wrap gap-x-6 gap-y-3"
          >
            {hero.trustBadges.map((b) => (
              <li key={b} className="flex items-center gap-2 text-sm font-500 text-white/80">
                <Check className="h-4 w-4 shrink-0 text-gold-400" />
                {b}
              </li>
            ))}
          </motion.ul>
        </div>

        {/* Right: visual card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="rotate-2 rounded-3xl bg-gradient-to-br from-gold-400 to-gold-600 p-1.5 shadow-2xl">
            <div className="overflow-hidden rounded-[1.35rem] bg-white">
              {/* Real finished project photo */}
              <div className="relative h-56">
                <img
                  src="/work/hallway-stairs.png"
                  alt="Freshly painted hallway and staircase by White Wall Painting"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/55 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-end p-5">
                  <span className="font-display text-2xl font-700 uppercase leading-tight tracking-tight text-white drop-shadow">
                    Quality work
                    <br />
                    you can trust
                  </span>
                </div>
                <div className="absolute right-5 top-5 grid h-12 w-12 place-items-center rounded-full bg-gold-500 text-navy-900 shadow-lg">
                  <Star className="h-6 w-6 fill-current" />
                </div>
              </div>
              <div className="space-y-4 p-6 text-navy-900">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-display text-lg font-700 uppercase tracking-tight">
                      White Wall Painting
                    </p>
                    <p className="text-sm text-navy-600">Tullamore, Co. Offaly</p>
                  </div>
                  <div className="flex gap-0.5 text-gold-500">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {["Interior", "Exterior", "Commercial"].map((t) => (
                    <span
                      key={t}
                      className="rounded-lg bg-paper px-2 py-2 text-center text-xs font-600 text-navy-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-navy-600">
                  Clean, careful, on-time painting — finished to a standard you'll be proud of.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Brushed bottom edge */}
      <div className="relative h-12 bg-paper">
        <div className="brush-edge absolute -top-6 left-0 h-8 w-full bg-navy-800" />
      </div>
    </section>
  );
}
