import { process } from "../../../data/site";
import Reveal from "./Reveal";

export default function Process() {
  return (
    <section id="process" className="bg-mist py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-600">How it works</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">
            Simple, tidy, and on schedule
          </h2>
          <p className="mt-4 text-lg text-ink-700">
            Three straightforward steps from first call to a finish you&apos;ll love.
          </p>
        </Reveal>

        <div className="relative mt-16 grid gap-6 md:grid-cols-3">
          {/* connecting line */}
          <div className="absolute left-[16%] right-[16%] top-8 hidden h-0.5 bg-gradient-to-r from-transparent via-brand-200 to-transparent md:block" />

          {process.map((p, i) => (
            <Reveal key={p.step} delay={i * 0.1} className="relative">
              <div className="flex h-full flex-col items-center rounded-2xl border border-ink-900/8 bg-white p-7 text-center shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
                <span className="relative grid h-16 w-16 place-items-center rounded-2xl bg-brand-50 text-brand-600 ring-4 ring-white">
                  <p.icon className="h-7 w-7" />
                  <span className="absolute -right-2 -top-2 grid h-7 w-7 place-items-center rounded-full bg-brand-500 text-xs font-bold text-white shadow-sm">
                    {p.step}
                  </span>
                </span>
                <h3 className="mt-5 text-xl font-bold tracking-tight text-ink-900">{p.title}</h3>
                <p className="mt-2.5 text-[0.95rem] leading-relaxed text-ink-700">{p.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
