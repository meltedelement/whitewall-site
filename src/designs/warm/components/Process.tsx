import { process } from "../../../data/site";
import Reveal from "./Reveal";

export default function Process() {
  return (
    <section id="process" className="bg-cream-100 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-700 uppercase tracking-[0.25em] text-clay-500">
            How it works
          </p>
          <h2 className="mt-3 font-display text-3xl font-600 tracking-tight text-wood-900 sm:text-4xl">
            Simple, tidy, and on schedule
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-wood-600">
            Three straightforward steps from first call to a finish you'll love.
          </p>
        </Reveal>

        <div className="relative mt-16 grid gap-10 md:grid-cols-3">
          {/* connecting line */}
          <div className="absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-wood-300/60 to-transparent md:block" />

          {process.map((p, i) => (
            <Reveal key={p.step} delay={i * 0.1} className="relative">
              <div className="flex flex-col items-center text-center">
                <span className="relative grid h-16 w-16 place-items-center rounded-3xl bg-cream-50 text-clay-500 shadow-[0_10px_30px_rgba(95,63,38,0.12)] ring-1 ring-cream-300">
                  <p.icon className="h-7 w-7" />
                  <span className="absolute -right-2 -top-2 grid h-8 w-8 place-items-center rounded-full bg-clay-500 font-display text-xs font-700 text-cream-50">
                    {p.step}
                  </span>
                </span>
                <h3 className="mt-5 font-display text-xl font-600 tracking-tight text-wood-900">
                  {p.title}
                </h3>
                <p className="mt-2.5 max-w-xs text-[0.95rem] leading-relaxed text-wood-600">
                  {p.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
