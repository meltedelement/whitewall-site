import { Quote, Star } from "lucide-react";
import { testimonials } from "../../../data/site";
import Reveal from "./Reveal";

export default function Testimonials() {
  return (
    <section id="reviews" className="bg-mist py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-600">Reviews</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">
            What our customers say
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.author} delay={i * 0.08}>
              <figure className="flex h-full flex-col rounded-2xl border border-ink-900/8 bg-white p-7 shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
                <Quote className="h-8 w-8 text-brand-200" />
                <blockquote className="mt-3 flex-1 text-[0.97rem] leading-relaxed text-ink-700">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="mt-5 flex gap-0.5 text-warm-500">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <figcaption className="mt-3 text-sm font-semibold text-ink-900">
                  {t.author}
                  <span className="font-normal text-ink-500"> · {t.location}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
