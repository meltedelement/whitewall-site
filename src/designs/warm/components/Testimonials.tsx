import { Quote, Star } from "lucide-react";
import { testimonials } from "../../../data/site";
import Reveal from "./Reveal";

export default function Testimonials() {
  return (
    <section id="reviews" className="bg-cream-100 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-700 uppercase tracking-[0.25em] text-clay-500">
            Kind words
          </p>
          <h2 className="mt-3 font-display text-3xl font-600 tracking-tight text-wood-900 sm:text-4xl">
            What our neighbours say
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.author} delay={i * 0.08}>
              <figure className="flex h-full flex-col rounded-3xl border border-cream-300/70 bg-cream-50 p-7 shadow-[0_1px_0_rgba(95,63,38,0.04)]">
                <Quote className="h-8 w-8 text-clay-400/50" />
                <blockquote className="mt-3 flex-1 text-[0.97rem] leading-relaxed text-wood-700">
                  "{t.quote}"
                </blockquote>
                <div className="mt-5 flex gap-0.5 text-clay-500">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <figcaption className="mt-3 text-sm font-600 text-wood-900">
                  {t.author}
                  <span className="font-400 text-wood-500"> · {t.location}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
