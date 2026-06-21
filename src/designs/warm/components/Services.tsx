import { services } from "../../../data/site";
import Reveal from "./Reveal";

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-700 uppercase tracking-[0.25em] text-clay-500">
          What we do
        </p>
        <h2 className="mt-3 font-display text-3xl font-600 tracking-tight text-wood-900 sm:text-4xl">
          Painting done properly, start to finish
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-wood-600">
          Whether it's a single room refresh or a full commercial repaint, every job
          gets the same care, the same tidy hands and the same warm finish.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.06}>
            <article className="group h-full rounded-3xl border border-cream-300/70 bg-cream-50 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-clay-300 hover:shadow-[0_18px_40px_rgba(95,63,38,0.12)]">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-cream-200 text-wood-600 transition-colors group-hover:bg-clay-500 group-hover:text-cream-50">
                <s.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-display text-xl font-600 tracking-tight text-wood-900">
                {s.title}
              </h3>
              <p className="mt-2.5 text-[0.95rem] leading-relaxed text-wood-600">
                {s.description}
              </p>
            </article>
          </Reveal>
        ))}

        {/* CTA tile to balance the 5-item grid */}
        <Reveal delay={services.length * 0.06}>
          <article className="flex h-full flex-col justify-between rounded-3xl bg-gradient-to-br from-wood-700 to-wood-900 p-7 text-cream-50">
            <div>
              <h3 className="font-display text-2xl font-600 tracking-tight">
                Not sure what you need?
              </h3>
              <p className="mt-2.5 text-[0.95rem] leading-relaxed text-cream-200">
                Tell us about your space and we'll recommend the right approach — and
                give you a free, no-obligation quote.
              </p>
            </div>
            <a
              href="#contact"
              className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-clay-500 px-5 py-2.5 text-sm font-600 text-cream-50 transition-colors hover:bg-clay-400"
            >
              Get your free quote →
            </a>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
