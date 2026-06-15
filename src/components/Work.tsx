import { ImageIcon } from "lucide-react";
import { business } from "../data/site";
import Reveal from "./Reveal";

/**
 * Project gallery.
 * Real photos live in /public/work. To add more, drop an image in there and
 * add a tile below with its `src`. Tiles without a src show a styled placeholder.
 */
type Project = {
  label: string;
  caption: string;
  tone: string;
  src?: string;
  span?: boolean;
};

const projects: Project[] = [
  {
    label: "Feature wall",
    caption: "Bold accent colour",
    tone: "from-emerald-600 to-emerald-800",
    span: true,
  },
  {
    label: "Commercial",
    caption: "Shop interior",
    tone: "from-amber-500 to-amber-700",
  },
  {
    label: "Exterior",
    caption: "Full house exterior",
    tone: "from-sky-500 to-sky-700",
  },
  {
    label: "Office",
    caption: "Workspace refresh",
    tone: "from-violet-600 to-violet-800",
    span: true,
  },
];

export default function Work() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-5 py-20 lg:py-28">
      <Reveal className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
        <div className="max-w-xl">
          <p className="text-sm font-700 uppercase tracking-[0.2em] text-gold-600">
            Our work
          </p>
          <h2 className="mt-3 font-display text-3xl font-700 uppercase tracking-tight text-navy-800 sm:text-4xl">
            Recent projects around Offaly
          </h2>
        </div>
        <p className="text-sm text-navy-500">
          More photos on our{" "}
          <a
            href={business.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="font-600 text-gold-600 underline-offset-2 hover:underline"
          >
            Facebook page
          </a>
          .
        </p>
      </Reveal>

      {/* Before & after highlight */}
      <Reveal className="mt-12">
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            { src: "/work/staircase-before.png", tag: "Before", tagClass: "bg-navy-800 text-white" },
            { src: "/work/staircase-after.png", tag: "After", tagClass: "bg-gold-500 text-navy-900" },
          ].map((img) => (
            <figure key={img.tag} className="group relative overflow-hidden rounded-2xl shadow-sm">
              <img
                src={img.src}
                alt={`Staircase restoration — ${img.tag.toLowerCase()}`}
                className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span
                className={`absolute left-4 top-4 rounded-full px-4 py-1.5 font-display text-sm font-700 uppercase tracking-wider shadow ${img.tagClass}`}
              >
                {img.tag}
              </span>
            </figure>
          ))}
        </div>
        <p className="mt-3 text-center text-sm text-navy-500">
          Staircase & banister restoration — stripped, sanded and finished.
        </p>
      </Reveal>

      {/* Gallery grid */}
      <div className="mt-10 grid auto-rows-[200px] grid-cols-2 gap-4 sm:grid-cols-3 lg:auto-rows-[230px]">
        {projects.map((p, i) => (
          <Reveal key={p.caption} delay={i * 0.05} className={p.span ? "sm:col-span-2" : ""}>
            <figure className="group relative h-full overflow-hidden rounded-2xl shadow-sm">
              {p.src ? (
                <img
                  src={p.src}
                  alt={p.caption}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <div className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${p.tone}`}>
                  <ImageIcon className="h-10 w-10 text-white/40" />
                </div>
              )}
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-950/85 to-transparent p-4">
                <span className="block text-xs font-600 uppercase tracking-wider text-gold-400">
                  {p.label}
                </span>
                <span className="text-sm font-600 text-white">{p.caption}</span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
