import { ShieldCheck, ThumbsUp, Award, MapPin } from "lucide-react";
import { business, features } from "../../../data/site";
import Reveal from "./Reveal";

const icons = [ShieldCheck, ThumbsUp, Award, MapPin];

export default function WhyUs() {
  return (
    <section id="why" className="relative overflow-hidden bg-wood-900 py-20 text-cream-50 lg:py-28">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #f3e8d4 1px, transparent 0)",
          backgroundSize: "26px 26px",
        }}
      />
      <div className="pointer-events-none absolute -right-20 top-0 h-96 w-96 rounded-full bg-clay-500/15 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-700 uppercase tracking-[0.25em] text-clay-300">
            Why us
          </p>
          <h2 className="mt-3 font-display text-3xl font-600 tracking-tight sm:text-4xl">
            A local craftsman you can rely on
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-cream-200">
            No call centres, no faceless crews. Just {business.owner}, a local
            Tullamore painter who turns up, does the job right and tidies up after.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal key={f.title} delay={i * 0.08}>
                <div className="text-center sm:text-left">
                  <span className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-cream-50/10 text-clay-300 sm:mx-0">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-600 tracking-tight">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-cream-200/80">
                    {f.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
