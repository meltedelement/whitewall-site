import { ShieldCheck, ThumbsUp, Award, MapPin } from "lucide-react";
import { features } from "../../../data/site";
import Reveal from "./Reveal";

const icons = [ShieldCheck, ThumbsUp, Award, MapPin];

export default function WhyUs() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-600">Why us</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">
            Why people choose <span className="text-brand-600">White Wall</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal key={f.title} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-ink-900/8 bg-mist p-6 text-center sm:text-left">
                  <span className="mx-auto grid h-12 w-12 place-items-center rounded-xl bg-brand-500 text-white shadow-sm shadow-brand-500/30 sm:mx-0">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 text-lg font-bold tracking-tight text-ink-900">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-700">{f.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
