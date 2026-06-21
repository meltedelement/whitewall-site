import { ArrowRight } from "lucide-react";
import { services } from "../../../data/site";
import Reveal from "./Reveal";

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-5 py-20 lg:py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-600">What we do</p>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">
          Painting done properly, start to finish
        </h2>
        <p className="mt-4 text-lg text-ink-700">
          Whether it&apos;s a single room refresh or a full commercial repaint, every job gets the
          same care and attention.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.06}>
            <article className="group h-full rounded-2xl border border-ink-900/8 bg-white p-7 shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-[0_20px_44px_-18px_rgba(59,130,246,0.35)]">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-500 group-hover:text-white">
                <s.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-lg font-bold tracking-tight text-ink-900">{s.title}</h3>
              <p className="mt-2.5 text-[0.95rem] leading-relaxed text-ink-700">{s.description}</p>
            </article>
          </Reveal>
        ))}

        {/* CTA tile to balance the 5-item grid */}
        <Reveal delay={services.length * 0.06}>
          <article className="flex h-full flex-col justify-between rounded-2xl bg-gradient-to-br from-brand-600 to-brand-700 p-7 text-white shadow-lg shadow-brand-600/20">
            <div>
              <h3 className="text-xl font-bold tracking-tight">Not sure what you need?</h3>
              <p className="mt-2.5 text-[0.95rem] leading-relaxed text-white/85">
                Tell us about your space and we&apos;ll recommend the right approach — and give you a
                free, no-obligation quote.
              </p>
            </div>
            <a
              href="#contact"
              className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-brand-700 transition-transform hover:scale-[1.03]"
            >
              Get your free quote
              <ArrowRight className="h-4 w-4" />
            </a>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
