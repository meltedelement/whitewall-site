import { process } from "../../../data/site";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Process() {
  return (
    <section id="process" className="border-t border-ink-800 bg-ink-950 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <SectionHeading
          index="03"
          eyebrow="How it works"
          title={
            <>
              Three steps,
              <br />
              zero fuss
            </>
          }
        />

        <div className="mt-12 grid gap-px overflow-hidden border border-ink-800 bg-ink-800 lg:mt-16 lg:grid-cols-3">
          {process.map((p, i) => (
            <Reveal key={p.step} delay={i * 0.1}>
              <article className="group flex h-full flex-col bg-ink-950 p-8 transition-colors hover:bg-ink-900 lg:p-10">
                <div className="flex items-baseline justify-between">
                  <span className="display text-7xl leading-none text-outline transition-colors group-hover:[-webkit-text-stroke-color:var(--color-accent)] lg:text-8xl">
                    {p.step}
                  </span>
                  <span className="grid h-12 w-12 place-items-center bg-accent text-white">
                    <p.icon size={22} aria-hidden="true" />
                  </span>
                </div>
                <h3 className="display mt-8 text-3xl text-paper">{p.title}</h3>
                <p className="mt-3 text-[0.97rem] leading-relaxed text-ink-400">
                  {p.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
