import { Star } from "lucide-react";
import { testimonials } from "../../../data/site";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Testimonials() {
  return (
    <section id="reviews" className="border-t border-ink-800 bg-ink-950 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <SectionHeading
          index="05"
          eyebrow="Reviews"
          title={
            <>
              People
              <br />
              talk
            </>
          }
        />

        <div className="mt-12 grid gap-px overflow-hidden border border-ink-800 bg-ink-800 lg:mt-16 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.author} delay={i * 0.08}>
              <figure className="flex h-full flex-col bg-ink-950 p-8 lg:p-10">
                <div className="flex gap-0.5 text-accent" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} size={18} className="fill-current" aria-hidden="true" />
                  ))}
                </div>
                <blockquote className="mt-5 flex-1 text-lg font-medium leading-snug text-paper">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 border-t border-ink-800 pt-4 text-sm">
                  <span className="font-bold uppercase tracking-wider text-paper">
                    {t.author}
                  </span>
                  <span className="text-ink-400"> · {t.location}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
