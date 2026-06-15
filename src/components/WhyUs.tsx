import { ShieldCheck, ThumbsUp, Award, MapPin } from "lucide-react";
import { features } from "../data/site";
import Reveal from "./Reveal";

const icons = [ShieldCheck, ThumbsUp, Award, MapPin];

export default function WhyUs() {
  return (
    <section className="relative overflow-hidden bg-navy-800 py-20 text-white lg:py-24">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)",
          backgroundSize: "26px 26px",
        }}
      />
      <div className="relative mx-auto max-w-6xl px-5">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-700 uppercase tracking-tight sm:text-4xl">
            Why people choose <span className="text-gold-400">White Wall</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal key={f.title} delay={i * 0.08}>
                <div className="text-center sm:text-left">
                  <span className="mx-auto grid h-12 w-12 place-items-center rounded-xl bg-white/10 text-gold-400 sm:mx-0">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-700 uppercase tracking-tight">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">
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
