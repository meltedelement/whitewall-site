import { useState } from "react";
import { Phone, MessageCircle, MapPin, Clock, Facebook } from "lucide-react";
import { business } from "../../../data/site";

export default function Contact() {
  const [form, setForm] = useState({ name: "", location: "", job: "", details: "" });

  const update =
    (key: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  const sendToWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const message = [
      `Hi White Wall, I'd like a free quote.`,
      form.name && `Name: ${form.name}`,
      form.location && `Location: ${form.location}`,
      form.job && `Type of job: ${form.job}`,
      form.details && `Details: ${form.details}`,
    ]
      .filter(Boolean)
      .join("\n");
    window.open(
      `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const inputClass =
    "w-full border border-ink-700 bg-ink-900 px-4 py-3 text-paper placeholder:text-ink-400 outline-none transition focus:border-accent focus:ring-1 focus:ring-accent";
  const labelClass =
    "mb-1.5 block text-xs font-bold uppercase tracking-wider text-ink-400";

  return (
    <section id="contact" className="border-t border-ink-800 bg-ink-950 py-20 lg:py-28">
      {/* Marquee call-to-action strip */}
      <div className="overflow-hidden border-y border-accent bg-accent py-3">
        <div className="flex w-max animate-marquee">
          {Array.from({ length: 2 }).map((_, dup) => (
            <div key={dup} className="flex shrink-0" aria-hidden={dup === 1}>
              {Array.from({ length: 6 }).map((_, i) => (
                <span
                  key={i}
                  className="display flex items-center gap-6 px-6 text-2xl text-white"
                >
                  Free quotes
                  <span className="text-white/60">·</span>
                  Tullamore &amp; Co. Offaly
                  <span className="text-white/60">·</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="grid overflow-hidden border border-ink-800 lg:grid-cols-2">
          {/* Left: info panel */}
          <div className="bg-ink-900 p-8 lg:p-12">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent-bright">
              06 / Get in touch
            </p>
            <h2 className="display mt-3 text-4xl text-paper sm:text-5xl">
              Free quote,
              <br />
              no obligation
            </h2>
            <p className="mt-5 max-w-md leading-relaxed text-ink-400">
              Call or message {business.owner} about the job. You&rsquo;ll get a quick
              reply and a clear price.
            </p>

            <div className="mt-10 space-y-4">
              <a
                href={`tel:${business.phoneHref}`}
                className="group flex items-center gap-4"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center bg-accent text-white transition-colors group-hover:bg-accent-bright">
                  <Phone size={20} aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-wider text-ink-400">
                    Call or WhatsApp
                  </span>
                  <span className="display text-2xl text-paper">{business.phone}</span>
                </span>
              </a>

              <div className="flex items-center gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center border border-ink-700 text-accent-bright">
                  <MapPin size={20} aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-wider text-ink-400">
                    Service area
                  </span>
                  <span className="font-semibold text-paper">{business.area}</span>
                </span>
              </div>

              <div className="flex items-center gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center border border-ink-700 text-accent-bright">
                  <Clock size={20} aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-wider text-ink-400">
                    Availability
                  </span>
                  <span className="font-semibold text-paper">
                    Mon&ndash;Sat · Free quotes
                  </span>
                </span>
              </div>

              <a
                href={business.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center border border-ink-700 text-accent-bright transition-colors group-hover:border-accent">
                  <Facebook size={20} aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-wider text-ink-400">
                    Follow the work
                  </span>
                  <span className="font-semibold text-paper">Facebook</span>
                </span>
              </a>
            </div>
          </div>

          {/* Right: form */}
          <form onSubmit={sendToWhatsApp} className="bg-ink-950 p-8 lg:p-12">
            <div className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="cf-name" className={labelClass}>
                    Name
                  </label>
                  <input
                    id="cf-name"
                    className={inputClass}
                    placeholder="Your name"
                    value={form.name}
                    onChange={update("name")}
                  />
                </div>
                <div>
                  <label htmlFor="cf-loc" className={labelClass}>
                    Town / area
                  </label>
                  <input
                    id="cf-loc"
                    className={inputClass}
                    placeholder="e.g. Tullamore"
                    value={form.location}
                    onChange={update("location")}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="cf-job" className={labelClass}>
                  Type of job
                </label>
                <input
                  id="cf-job"
                  className={inputClass}
                  placeholder="Interior, exterior, commercial…"
                  value={form.job}
                  onChange={update("job")}
                />
              </div>

              <div>
                <label htmlFor="cf-details" className={labelClass}>
                  Details
                </label>
                <textarea
                  id="cf-details"
                  className={`${inputClass} min-h-28 resize-y`}
                  placeholder="Rooms, rough size, timeline…"
                  value={form.details}
                  onChange={update("details")}
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 bg-accent px-6 py-4 text-base font-bold uppercase tracking-wider text-white transition-colors hover:bg-accent-bright"
            >
              <MessageCircle size={20} aria-hidden="true" />
              Send via WhatsApp
            </button>
            <p className="mt-3 text-center text-xs text-ink-400">
              Opens WhatsApp with your details ready to send. Prefer to talk? Just call{" "}
              {business.phone}.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
