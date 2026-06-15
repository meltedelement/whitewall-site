import { process } from "../data/site";
import Reveal from "./Reveal";

export default function Process() {
  return (
    <section id="process" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-700 uppercase tracking-[0.2em] text-gold-600">
            How it works
          </p>
          <h2 className="mt-3 font-display text-3xl font-700 uppercase tracking-tight text-navy-800 sm:text-4xl">
            Simple, tidy, and on schedule
          </h2>
          <p className="mt-4 text-lg text-navy-600">
            Three straightforward steps from first call to a finish you'll love.
          </p>
        </Reveal>

        <div className="relative mt-16 grid gap-10 md:grid-cols-3">
          {/* connecting line */}
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-navy-800/15 to-transparent md:block" />

          {process.map((p, i) => (
            <Reveal key={p.step} delay={i * 0.1} className="relative">
              <div className="flex flex-col items-center text-center">
                <span className="relative grid h-14 w-14 place-items-center rounded-2xl bg-navy-800 text-gold-400 shadow-lg">
                  <p.icon className="h-7 w-7" />
                  <span className="absolute -right-2 -top-2 grid h-7 w-7 place-items-center rounded-full bg-gold-500 font-display text-xs font-700 text-navy-900">
                    {p.step}
                  </span>
                </span>
                <h3 className="mt-5 font-display text-xl font-700 uppercase tracking-tight text-navy-800">
                  {p.title}
                </h3>
                <p className="mt-2.5 max-w-xs text-[0.95rem] leading-relaxed text-navy-600">
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
