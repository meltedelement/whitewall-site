import { ShieldCheck, ThumbsUp, Award, MapPin } from "lucide-react";
import { features } from "../../../data/site";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const icons = [ShieldCheck, ThumbsUp, Award, MapPin];

export default function WhyUs() {
  return (
    <section id="why" className="bg-paper py-20 text-ink-950 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* Feature image */}
          <Reveal className="order-2 lg:order-1">
            <div className="relative overflow-hidden bg-ink-900">
              <img
                src="/gallery/spindles-restored.jpg"
                alt="Detail of carefully restored staircase spindles, showing the quality of finish"
                className="w-full object-cover"
                style={{ aspectRatio: "3 / 4", objectPosition: "center" }}
              />
              <div className="absolute bottom-0 left-0 bg-accent px-5 py-4">
                <span className="display block text-4xl leading-none text-white">100%</span>
                <span className="text-xs font-bold uppercase tracking-widest text-white/90">
                  Satisfaction or it's not finished
                </span>
              </div>
            </div>
          </Reveal>

          {/* Heading + features */}
          <div className="order-1 lg:order-2">
            <SectionHeading
              index="04"
              eyebrow="Why White Wall"
              title={
                <>
                  Local.
                  <br />
                  Reliable.
                  <br />
                  Worth it.
                </>
              }
              variant="light"
            />

            <div className="mt-10 grid gap-px overflow-hidden border border-ink-950/15 bg-ink-950/15 sm:grid-cols-2">
              {features.map((f, i) => {
                const Icon = icons[i % icons.length];
                return (
                  <Reveal key={f.title} delay={i * 0.06}>
                    <div className="h-full bg-paper p-6">
                      <span className="grid h-11 w-11 place-items-center bg-ink-950 text-accent-bright">
                        <Icon size={20} aria-hidden="true" />
                      </span>
                      <h3 className="display mt-4 text-xl">{f.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-ink-600">
                        {f.description}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
