import { useEffect, useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import { business, whatsappLink } from "../../../data/site";

const links = [
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#why", label: "Why us" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "border-ink-800 bg-ink-950/90 backdrop-blur"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-10">
        <a
          href="#top"
          className="flex items-center gap-2.5"
          aria-label="White Wall Painting — home"
        >
          <span className="grid h-8 w-8 place-items-center bg-accent text-sm font-extrabold text-white">
            W
          </span>
          <span className="display text-xl leading-none tracking-tight text-paper">
            White&nbsp;Wall
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-semibold uppercase tracking-wider text-ink-400 transition-colors hover:text-paper"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${business.phoneHref}`}
            className="hidden items-center gap-2 bg-accent px-4 py-2.5 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-accent-bright sm:inline-flex"
          >
            <Phone size={16} aria-hidden="true" />
            Call now
          </a>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center text-paper md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-ink-800 bg-ink-950 md:hidden">
          <nav className="flex flex-col px-4 py-3" aria-label="Mobile">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-ink-800 py-3 text-base font-semibold uppercase tracking-wide text-paper last:border-0"
              >
                {l.label}
              </a>
            ))}
            <div className="mt-3 grid grid-cols-2 gap-2">
              <a
                href={`tel:${business.phoneHref}`}
                className="bg-accent py-3 text-center text-sm font-bold uppercase tracking-wider text-white"
              >
                Call
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-ink-700 py-3 text-center text-sm font-bold uppercase tracking-wider text-paper"
              >
                WhatsApp
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
