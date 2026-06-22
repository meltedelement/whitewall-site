import { Facebook, Sparkles } from "lucide-react";
import { business } from "../../../data/site";
import Reveal from "./Reveal";
import BeforeAfter from "./BeforeAfter";

export default function Work() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-5 py-20 lg:py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-600">Our work</p>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">
          See the difference for yourself
        </h2>
        <p className="mt-4 text-lg text-ink-700">
          Drag the sliders to compare before and after. A few recent jobs from around Co. Offaly.
        </p>
      </Reveal>

      {/* Two interactive before/after sliders */}
      <div className="mt-12 grid items-start gap-6 lg:grid-cols-2">
        <Reveal>
          <figure>
            <BeforeAfter
              beforeSrc="/gallery/staircase-before.jpg"
              afterSrc="/gallery/staircase-after.jpg"
              afterAlt="Staircase comparison: from patchy bare wood and clutter to a warmly restored pine staircase against a clean grey wall"
              aspect="aspect-[3/4]"
            />
            <figcaption className="mt-3 text-center text-sm font-medium text-ink-600">
              Staircase strip-back &amp; restoration
            </figcaption>
          </figure>
        </Reveal>

        <Reveal delay={0.1}>
          <figure>
            <BeforeAfter
              beforeSrc="/gallery/kitchen-before.jpg"
              afterSrc="/gallery/kitchen-after.jpg"
              afterAlt="Kitchen and dining room comparison: from tired, marked walls to a bright, freshly painted open-plan space"
              aspect="aspect-[3/4]"
            />
            <figcaption className="mt-3 text-center text-sm font-medium text-ink-600">
              Open-plan kitchen &amp; dining repaint
            </figcaption>
          </figure>
        </Reveal>
      </div>

      {/* Finished + detail gallery */}
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[
          {
            src: "/gallery/hallway-finished.jpg",
            alt: "Finished hallway with restored staircase, white door and marble floor",
            caption: "Hallway & staircase — finished",
            pos: "center 30%",
          },
          {
            src: "/gallery/landing-after.jpg",
            alt: "Bright, freshly painted upstairs landing with clean white and grey walls",
            caption: "Bright landing & walls",
            pos: "center 35%",
          },
          {
            src: "/gallery/spindles-restored.jpg",
            alt: "Close-up detail of carefully restored pine staircase spindles",
            caption: "Detail that lasts",
            pos: "center",
          },
        ].map((p, i) => (
          <Reveal key={p.src} delay={i * 0.08}>
            <figure className="relative h-full overflow-hidden rounded-2xl shadow-md ring-1 ring-ink-900/5">
              <img
                src={p.src}
                alt={p.alt}
                className="aspect-[4/5] w-full object-cover"
                style={{ objectPosition: p.pos }}
                loading="lazy"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink-900/70 to-transparent p-5">
                <span className="text-sm font-semibold text-white">{p.caption}</span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>

      {/* Closing note + Facebook link */}
      <Reveal>
        <div className="mt-10 flex flex-col items-center justify-between gap-5 rounded-2xl border border-ink-900/8 bg-mist p-6 text-center sm:flex-row sm:text-left">
          <div className="flex items-start gap-3">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600">
              <Sparkles className="h-5 w-5" />
            </span>
            <p className="text-[0.97rem] leading-relaxed text-ink-700">
              Proper prep, good paint and a clean site at the end. That&apos;s what we turn up
              to do.
            </p>
          </div>
          <a
            href={business.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full border border-ink-900/10 bg-white px-5 py-2.5 text-sm font-semibold text-ink-900 transition-colors hover:border-brand-300 hover:text-brand-700"
          >
            <Facebook className="h-4 w-4 text-brand-600" />
            See more photos on Facebook
          </a>
        </div>
      </Reveal>
    </section>
  );
}
