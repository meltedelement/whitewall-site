import { ArrowUpRight } from "lucide-react";
import { business } from "../../../data/site";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import BeforeAfter from "./BeforeAfter";

// Standalone "after" / detail shots — never the misspelled "pefore" labels.
const gallery = [
  {
    src: "/gallery/landing-after.jpg",
    alt: "Bright, freshly painted upstairs landing with clean white and grey walls",
    ratio: "3 / 4",
    pos: "center",
  },
  {
    src: "/gallery/spindles-restored.jpg",
    alt: "Close detail of restored balustrade spindles on a staircase",
    ratio: "3 / 4",
    pos: "center",
  },
  {
    src: "/gallery/balustrade-work.jpg",
    alt: "Staircase balustrade on trestles mid-job, with tools, during restoration",
    ratio: "3 / 4",
    pos: "center",
  },
];

export default function Work() {
  return (
    <section id="work" className="border-t border-ink-800 bg-ink-950 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            index="01"
            eyebrow="The work"
            title={
              <>
                Drag to
                <br />
                see the difference
              </>
            }
          />
          <Reveal>
            <a
              href={business.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-ink-400 transition-colors hover:text-paper"
            >
              More on Facebook
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </Reveal>
        </div>

        {/* Two real before/after comparisons */}
        <div className="mt-12 grid gap-6 lg:mt-16 lg:grid-cols-2 lg:gap-8">
          <Reveal>
            <figure>
              <BeforeAfter
                beforeSrc="/gallery/staircase-before.jpg"
                afterSrc="/gallery/staircase-after.jpg"
                beforeAlt="Staircase before: patchy bare wood with a ladder and clutter"
                afterAlt="Staircase after: warm restored pine against a clean grey wall"
                ratio="3 / 4"
                objectPosition="center"
              />
              <figcaption className="mt-3 text-sm text-ink-400">
                <span className="font-bold uppercase tracking-wider text-paper">
                  Staircase restoration
                </span>{" "}
                — stripped, sanded and finished in warm pine.
              </figcaption>
            </figure>
          </Reveal>

          <Reveal delay={0.08}>
            <figure>
              <BeforeAfter
                beforeSrc="/gallery/kitchen-before.jpg"
                afterSrc="/gallery/kitchen-after.jpg"
                beforeAlt="Open-plan kitchen and dining room before repainting"
                afterAlt="Open-plan kitchen and dining room after a fresh repaint"
                ratio="9 / 16"
                objectPosition="center"
              />
              <figcaption className="mt-3 text-sm text-ink-400">
                <span className="font-bold uppercase tracking-wider text-paper">
                  Kitchen &amp; dining repaint
                </span>{" "}
                — a brighter, cleaner open-plan space.
              </figcaption>
            </figure>
          </Reveal>
        </div>

        {/* Standalone finished / detail shots */}
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:mt-8 lg:grid-cols-3 lg:gap-8">
          {gallery.map((g, i) => (
            <Reveal key={g.src} delay={i * 0.06}>
              <figure className="group relative overflow-hidden bg-ink-900">
                <img
                  src={g.src}
                  alt={g.alt}
                  loading="lazy"
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ aspectRatio: g.ratio, objectPosition: g.pos }}
                />
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
