import { ArrowUpRight } from "lucide-react";
import { services } from "../../../data/site";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Services() {
  return (
    <section id="services" className="bg-paper py-20 text-ink-950 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <SectionHeading
          index="02"
          eyebrow="What we do"
          title={
            <>
              Done
              <br />
              properly
            </>
          }
          variant="light"
        />

        <div className="mt-12 border-t border-ink-950/15 lg:mt-16">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <article className="group grid grid-cols-1 items-start gap-4 border-b border-ink-950/15 py-7 transition-colors hover:bg-ink-950 hover:text-paper md:grid-cols-[auto_1fr_auto] md:items-center md:gap-8 md:px-4">
                <div className="flex items-center gap-5">
                  <span className="display text-2xl text-ink-400 md:text-3xl">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="grid h-12 w-12 shrink-0 place-items-center bg-ink-950 text-accent-bright transition-colors group-hover:bg-accent group-hover:text-white">
                    <s.icon size={22} aria-hidden="true" />
                  </span>
                </div>
                <div>
                  <h3 className="display text-2xl leading-none md:text-3xl">
                    {s.title}
                  </h3>
                  <p className="mt-2 max-w-2xl text-[0.95rem] leading-relaxed text-ink-600 group-hover:text-paper/70">
                    {s.description}
                  </p>
                </div>
                <ArrowUpRight
                  size={28}
                  aria-hidden="true"
                  className="hidden text-ink-400 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent-bright md:block"
                />
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <a
            href="#contact"
            className="mt-10 inline-flex items-center gap-2 bg-accent px-7 py-4 text-base font-bold uppercase tracking-wider text-white transition-colors hover:bg-accent-bright"
          >
            Get your free quote
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
