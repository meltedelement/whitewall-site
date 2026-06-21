import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { business } from "../../../data/site";
import Logo from "./Logo";

const links = [
  { href: "#services", label: "Services" },
  { href: "#process", label: "How it works" },
  { href: "#work", label: "Our work" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-ink-900/5 bg-white/85 shadow-[0_4px_24px_rgba(15,23,42,0.06)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5">
        <Logo />

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-semibold text-ink-700 transition-colors hover:text-brand-600"
            >
              {l.label}
            </a>
          ))}
          <a
            href={`tel:${business.phoneHref}`}
            className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-brand-500/30 transition-all hover:bg-brand-600 hover:shadow-md"
          >
            <Phone className="h-4 w-4" />
            {business.phone}
          </a>
        </div>

        <button
          className="grid h-10 w-10 place-items-center rounded-lg text-ink-900 transition-colors hover:bg-mist-100 md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-ink-900/5 bg-white px-5 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-base font-semibold text-ink-900 transition-colors hover:bg-mist"
              >
                {l.label}
              </a>
            ))}
            <a
              href={`tel:${business.phoneHref}`}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-brand-500 px-4 py-3 text-base font-bold text-white"
            >
              <Phone className="h-5 w-5" />
              {business.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
