import { Quote, Star } from "lucide-react";
import { testimonials } from "../data/site";
import Reveal from "./Reveal";

export default function Testimonials() {
  return (
    <section id="reviews" className="bg-paper py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-700 uppercase tracking-[0.2em] text-gold-600">
            Reviews
          </p>
          <h2 className="mt-3 font-display text-3xl font-700 uppercase tracking-tight text-navy-800 sm:text-4xl">
            What our customers say
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.author} delay={i * 0.08}>
              <figure className="flex h-full flex-col rounded-2xl border border-navy-800/8 bg-white p-7 shadow-sm">
                <Quote className="h-8 w-8 text-gold-500/40" />
                <blockquote className="mt-3 flex-1 text-[0.97rem] leading-relaxed text-navy-700">
                  "{t.quote}"
                </blockquote>
                <div className="mt-5 flex gap-0.5 text-gold-500">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <figcaption className="mt-3 text-sm font-600 text-navy-800">
                  {t.author}
                  <span className="font-400 text-navy-500"> · {t.location}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
