import { services } from "../data/site";
import Reveal from "./Reveal";

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-5 py-20 lg:py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-700 uppercase tracking-[0.2em] text-gold-600">
          What we do
        </p>
        <h2 className="mt-3 font-display text-3xl font-700 uppercase tracking-tight text-navy-800 sm:text-4xl">
          Painting done properly, start to finish
        </h2>
        <p className="mt-4 text-lg text-navy-600">
          Whether it's a single room refresh or a full commercial repaint, every job
          gets the same care and attention.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.06}>
            <article className="group h-full rounded-2xl border border-navy-800/8 bg-white p-7 shadow-[0_1px_0_rgba(7,22,47,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-gold-500/40 hover:shadow-[0_18px_40px_rgba(7,22,47,0.10)]">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-navy-800 text-gold-400 transition-colors group-hover:bg-gold-500 group-hover:text-navy-900">
                <s.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-display text-lg font-700 uppercase tracking-tight text-navy-800">
                {s.title}
              </h3>
              <p className="mt-2.5 text-[0.95rem] leading-relaxed text-navy-600">
                {s.description}
              </p>
            </article>
          </Reveal>
        ))}

        {/* CTA tile to balance the 5-item grid */}
        <Reveal delay={services.length * 0.06}>
          <article className="flex h-full flex-col justify-between rounded-2xl bg-gradient-to-br from-navy-800 to-navy-700 p-7 text-white">
            <div>
              <h3 className="font-display text-xl font-700 uppercase tracking-tight">
                Not sure what you need?
              </h3>
              <p className="mt-2.5 text-[0.95rem] leading-relaxed text-white/75">
                Tell us about your space and we'll recommend the right approach — and
                give you a free, no-obligation quote.
              </p>
            </div>
            <a
              href="#contact"
              className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-gold-500 px-5 py-2.5 text-sm font-700 text-navy-900 transition-transform hover:scale-[1.03]"
            >
              Get your free quote →
            </a>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
