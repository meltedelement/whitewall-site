import { Facebook, Hand } from "lucide-react";
import { business } from "../../../data/site";
import Reveal from "./Reveal";
import BeforeAfter from "./BeforeAfter";

export default function Work() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-700 uppercase tracking-[0.25em] text-clay-500">
          Before &amp; after
        </p>
        <h2 className="mt-3 font-display text-3xl font-600 tracking-tight text-wood-900 sm:text-4xl">
          See the before &amp; after
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-wood-600">
          A tired Tullamore staircase, stripped, sanded and finished to show off
          the natural pine. Drag the slider to see the change.
        </p>
      </Reveal>

      {/* Interactive before/after */}
      <div className="mt-12 grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal className="order-2 lg:order-1">
          <span className="inline-flex items-center gap-2 rounded-full bg-cream-200 px-4 py-1.5 text-xs font-600 uppercase tracking-wider text-wood-600">
            <Hand className="h-3.5 w-3.5 text-clay-500" />
            Drag · or use arrow keys
          </span>
          <h3 className="mt-5 font-display text-2xl font-600 tracking-tight text-wood-900 sm:text-3xl">
            Staircase &amp; banister restoration
          </h3>
          <p className="mt-4 leading-relaxed text-wood-600">
            What started as patchy bare wood and clutter is now the centrepiece
            of the hallway. Careful prep on every spindle, a smooth finish on the
            handrail, and walls cut in by hand. It pulls the whole space together.
          </p>
          <ul className="mt-6 space-y-2.5">
            {[
              "Stripped back and fully sanded",
              "Warm, hard-wearing finish on the pine",
              "Crisp wall lines and tidy edges",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-wood-700">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-clay-500" />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1} className="order-1 mx-auto w-full max-w-md lg:order-2">
          <BeforeAfter
            beforeSrc="/gallery/staircase-before.jpg"
            afterSrc="/gallery/staircase-after.jpg"
            beforeAlt="The staircase before — patchy bare wood, a ladder and clutter"
            afterAlt="The same staircase after — restored warm pine against a clean grey wall"
            aspect="aspect-[4/5]"
          />
        </Reveal>
      </div>

      {/* Feature finished shot */}
      <Reveal className="mt-16">
        <div className="grid items-stretch gap-0 overflow-hidden rounded-3xl border border-cream-300/70 bg-cream-100 md:grid-cols-2">
          <div className="overflow-hidden">
            <img
              src="/gallery/hallway-finished.jpg"
              alt="The finished hallway — bright, with the restored pine staircase, white front door, marble floor and fresh flowers"
              className="h-64 w-full object-cover md:h-full"
              style={{ objectPosition: "center" }}
            />
          </div>
          <div className="flex flex-col justify-center p-8 sm:p-10">
            <p className="text-sm font-700 uppercase tracking-[0.25em] text-clay-500">
              The finished home
            </p>
            <h3 className="mt-3 font-display text-2xl font-600 tracking-tight text-wood-900 sm:text-3xl">
              A bright, clean hallway
            </h3>
            <p className="mt-4 leading-relaxed text-wood-600">
              Fresh paintwork, the restored pine staircase and a clean finish from
              the front door through. A big change from where it started.
            </p>
            <a
              href={business.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-wood-300 bg-cream-50 px-5 py-2.5 text-sm font-600 text-wood-800 transition-colors hover:bg-cream-200"
            >
              <Facebook className="h-4 w-4 text-sage-500" />
              See more on Facebook
            </a>
          </div>
        </div>
      </Reveal>

      {/* Second transformation — kitchen & dining */}
      <div className="mt-16 grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal className="order-1 mx-auto w-full max-w-md">
          <BeforeAfter
            beforeSrc="/gallery/kitchen-before.jpg"
            afterSrc="/gallery/kitchen-after.jpg"
            beforeAlt="The kitchen and dining room before — tired, marked walls"
            afterAlt="The same open-plan kitchen and dining room after — bright, freshly painted walls"
            aspect="aspect-[4/5]"
          />
        </Reveal>

        <Reveal delay={0.1} className="order-2">
          <p className="text-sm font-700 uppercase tracking-[0.25em] text-clay-500">
            Kitchen &amp; dining
          </p>
          <h3 className="mt-3 font-display text-2xl font-600 tracking-tight text-wood-900 sm:text-3xl">
            A brighter kitchen &amp; dining room
          </h3>
          <p className="mt-4 leading-relaxed text-wood-600">
            Tired, marked walls given a fresh coat, neatly cut in around the
            windows and units. We leave it clean and ready to use the same day.
          </p>
        </Reveal>
      </div>

      {/* Detail & finished gallery */}
      <div className="mt-16">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-700 uppercase tracking-[0.25em] text-clay-500">
            More of our work
          </p>
        </Reveal>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {[
            {
              src: "/gallery/landing-after.jpg",
              alt: "Bright, freshly painted upstairs landing with clean white and grey walls",
              caption: "Fresh landing & walls",
              pos: "center 35%",
            },
            {
              src: "/gallery/spindles-restored.jpg",
              alt: "Close-up detail of carefully restored pine staircase spindles",
              caption: "Detail on every spindle",
              pos: "center",
            },
            {
              src: "/gallery/balustrade-work.jpg",
              alt: "A staircase balustrade being restored on trestles mid-job",
              caption: "Craft in progress",
              pos: "center",
            },
          ].map((p, i) => (
            <Reveal key={p.src} delay={i * 0.08}>
              <figure className="relative h-full overflow-hidden rounded-3xl border-4 border-cream-50 bg-cream-50 shadow-[0_20px_45px_-18px_rgba(95,63,38,0.35)]">
                <img
                  src={p.src}
                  alt={p.alt}
                  className="aspect-[4/5] w-full rounded-[1.25rem] object-cover"
                  style={{ objectPosition: p.pos }}
                  loading="lazy"
                />
                <figcaption className="absolute inset-x-2 bottom-2 rounded-2xl bg-wood-700/85 px-4 py-2.5 text-sm font-600 text-cream-50">
                  {p.caption}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
