import { Phone, MessageCircle, Facebook, MapPin } from "lucide-react";
import { business, whatsappLink } from "../../../data/site";

const sections = [
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#why", label: "Why us" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-ink-800 bg-ink-950 text-paper">
      {/* Giant wordmark */}
      <div className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 lg:px-10">
        <p className="display text-[18vw] leading-[0.82] text-paper lg:text-[12rem]">
          White<span className="text-accent">Wall</span>
        </p>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-10">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="max-w-sm leading-relaxed text-ink-400">
              Interior and exterior painting for homes and businesses across
              Tullamore and Co. Offaly.
            </p>
            <div className="mt-5 flex items-center gap-2 text-sm text-ink-400">
              <MapPin size={16} className="text-accent-bright" aria-hidden="true" />
              {business.area}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-accent-bright">
              Sections
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-ink-400">
              {sections.map((s) => (
                <li key={s.href}>
                  <a href={s.href} className="transition-colors hover:text-paper">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-accent-bright">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-ink-400">
              <li>
                <a
                  href={`tel:${business.phoneHref}`}
                  className="flex items-center gap-2 transition-colors hover:text-paper"
                >
                  <Phone size={16} className="text-accent-bright" aria-hidden="true" />
                  {business.phone}
                </a>
              </li>
              <li>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 transition-colors hover:text-paper"
                >
                  <MessageCircle
                    size={16}
                    className="text-accent-bright"
                    aria-hidden="true"
                  />
                  WhatsApp us
                </a>
              </li>
              <li>
                <a
                  href={business.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 transition-colors hover:text-paper"
                >
                  <Facebook size={16} className="text-accent-bright" aria-hidden="true" />
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-ink-800 pt-6 text-xs text-ink-400 sm:flex-row">
          <p>
            © {year} {business.fullName}. All rights reserved.
          </p>
          <p>
            Tullamore, Co. Offaly · Owner: {business.owner}
          </p>
        </div>
      </div>
    </footer>
  );
}
