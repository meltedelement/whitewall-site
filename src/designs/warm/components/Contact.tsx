import { useState } from "react";
import { Phone, MessageCircle, MapPin, Clock, Send } from "lucide-react";
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
    "w-full rounded-2xl border border-cream-300 bg-cream-50 px-4 py-3 text-wood-900 placeholder:text-wood-400 outline-none transition focus:border-clay-400 focus:ring-2 focus:ring-clay-400/30";

  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
      <div className="overflow-hidden rounded-[2rem] border border-cream-300/70 bg-cream-50 shadow-[0_25px_60px_rgba(95,63,38,0.12)]">
        <div className="grid lg:grid-cols-2">
          {/* Left: warm info panel */}
          <div className="relative overflow-hidden bg-gradient-to-br from-wood-700 to-wood-900 p-8 text-cream-50 lg:p-12">
            <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-clay-500/20 blur-3xl" />
            <div className="relative">
              <p className="text-sm font-700 uppercase tracking-[0.25em] text-clay-300">
                Get in touch
              </p>
              <h2 className="mt-3 font-display text-3xl font-600 leading-tight tracking-tight sm:text-4xl">
                Let's talk about your home
              </h2>
              <p className="mt-4 max-w-md text-cream-200">
                Call or message {business.owner} about the job. You'll get a straight
                answer and a free quote, no pressure.
              </p>

              <div className="mt-9 space-y-5">
                <a
                  href={`tel:${business.phoneHref}`}
                  className="flex items-center gap-4 transition-colors hover:text-clay-300"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-cream-50/10 text-clay-300">
                    <Phone className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-wider text-cream-200/60">
                      Call or WhatsApp
                    </span>
                    <span className="font-display text-xl font-600 tracking-tight">
                      {business.phone}
                    </span>
                  </span>
                </a>

                <div className="flex items-center gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-cream-50/10 text-clay-300">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-wider text-cream-200/60">
                      Service area
                    </span>
                    <span className="font-600">{business.area}</span>
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-cream-50/10 text-clay-300">
                    <Clock className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-wider text-cream-200/60">
                      Availability
                    </span>
                    <span className="font-600">Mon–Sat · Free quotes</span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <form onSubmit={sendToWhatsApp} className="p-8 lg:p-12">
            <div className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="c-name" className="mb-1.5 block text-sm font-600 text-wood-700">
                    Name
                  </label>
                  <input
                    id="c-name"
                    className={inputClass}
                    placeholder="Your name"
                    value={form.name}
                    onChange={update("name")}
                  />
                </div>
                <div>
                  <label htmlFor="c-loc" className="mb-1.5 block text-sm font-600 text-wood-700">
                    Town / area
                  </label>
                  <input
                    id="c-loc"
                    className={inputClass}
                    placeholder="e.g. Tullamore"
                    value={form.location}
                    onChange={update("location")}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="c-job" className="mb-1.5 block text-sm font-600 text-wood-700">
                  Type of job
                </label>
                <input
                  id="c-job"
                  className={inputClass}
                  placeholder="e.g. Interior, exterior, commercial…"
                  value={form.job}
                  onChange={update("job")}
                />
              </div>

              <div>
                <label htmlFor="c-details" className="mb-1.5 block text-sm font-600 text-wood-700">
                  Details
                </label>
                <textarea
                  id="c-details"
                  className={`${inputClass} min-h-28 resize-y`}
                  placeholder="Tell us a little about the space — rooms, rough size, timeline…"
                  value={form.details}
                  onChange={update("details")}
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-clay-500 px-6 py-3.5 text-base font-600 text-cream-50 shadow-lg shadow-clay-500/25 transition-colors hover:bg-clay-600"
            >
              <MessageCircle className="h-5 w-5" />
              Send via WhatsApp
            </button>
            <p className="mt-3 flex items-center justify-center gap-1.5 text-center text-xs text-wood-500">
              <Send className="h-3.5 w-3.5" />
              Opens WhatsApp with your details ready to send. Prefer to talk? Just call{" "}
              {business.phone}.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
