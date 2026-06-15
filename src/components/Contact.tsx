import { useState } from "react";
import { Phone, MessageCircle, MapPin, Clock, Send } from "lucide-react";
import { business } from "../data/site";

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
    "w-full rounded-xl border border-navy-800/12 bg-white px-4 py-3 text-navy-900 placeholder:text-navy-400 outline-none transition focus:border-gold-500 focus:ring-2 focus:ring-gold-500/30";

  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-20 lg:py-28">
      <div className="overflow-hidden rounded-3xl border border-navy-800/8 bg-white shadow-[0_20px_60px_rgba(7,22,47,0.08)]">
        <div className="grid lg:grid-cols-2">
          {/* Left: info panel */}
          <div className="relative overflow-hidden bg-navy-800 p-8 text-white lg:p-12">
            <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-gold-500/10 blur-3xl" />
            <div className="relative">
              <p className="text-sm font-700 uppercase tracking-[0.2em] text-gold-400">
                Get in touch
              </p>
              <h2 className="mt-3 font-display text-3xl font-700 uppercase leading-tight tracking-tight sm:text-4xl">
                Free quote, no obligation
              </h2>
              <p className="mt-4 max-w-md text-white/75">
                Call or message us about your project — we'll get back to you fast with
                honest, upfront pricing.
              </p>

              <div className="mt-9 space-y-5">
                <a
                  href={`tel:${business.phoneHref}`}
                  className="flex items-center gap-4 transition-colors hover:text-gold-400"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/10 text-gold-400">
                    <Phone className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-wider text-white/50">
                      Call or WhatsApp
                    </span>
                    <span className="font-display text-xl font-700 tracking-tight">
                      {business.phone}
                    </span>
                  </span>
                </a>

                <div className="flex items-center gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/10 text-gold-400">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-wider text-white/50">
                      Service area
                    </span>
                    <span className="font-600">{business.area}</span>
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/10 text-gold-400">
                    <Clock className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-wider text-white/50">
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
                  <label className="mb-1.5 block text-sm font-600 text-navy-700">Name</label>
                  <input
                    className={inputClass}
                    placeholder="Your name"
                    value={form.name}
                    onChange={update("name")}
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-600 text-navy-700">
                    Town / area
                  </label>
                  <input
                    className={inputClass}
                    placeholder="e.g. Tullamore"
                    value={form.location}
                    onChange={update("location")}
                  />
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-600 text-navy-700">
                  Type of job
                </label>
                <input
                  className={inputClass}
                  placeholder="e.g. Interior, exterior, commercial…"
                  value={form.job}
                  onChange={update("job")}
                />
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-600 text-navy-700">Details</label>
                <textarea
                  className={`${inputClass} min-h-28 resize-y`}
                  placeholder="Tell us a little about the space — rooms, rough size, timeline…"
                  value={form.details}
                  onChange={update("details")}
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold-500 px-6 py-3.5 text-base font-700 text-navy-900 shadow-lg shadow-gold-500/20 transition-transform hover:scale-[1.02]"
            >
              <MessageCircle className="h-5 w-5" />
              Send via WhatsApp
            </button>
            <p className="mt-3 flex items-center justify-center gap-1.5 text-center text-xs text-navy-500">
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
