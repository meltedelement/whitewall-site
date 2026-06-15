import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { business } from "../data/site";
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
          ? "bg-white/90 shadow-[0_2px_20px_rgba(7,22,47,0.08)] backdrop-blur"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <Logo />

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-600 text-navy-700 transition-colors hover:text-gold-600"
            >
              {l.label}
            </a>
          ))}
          <a
            href={`tel:${business.phoneHref}`}
            className="inline-flex items-center gap-2 rounded-full bg-navy-800 px-4 py-2 text-sm font-600 text-white shadow-sm transition-transform hover:scale-[1.03] hover:bg-navy-700"
          >
            <Phone className="h-4 w-4 text-gold-400" />
            {business.phone}
          </a>
        </div>

        <button
          className="grid h-10 w-10 place-items-center rounded-lg text-navy-800 md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-navy-800/10 bg-white px-5 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-600 text-navy-800 hover:bg-paper"
              >
                {l.label}
              </a>
            ))}
            <a
              href={`tel:${business.phoneHref}`}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gold-500 px-4 py-3 text-base font-700 text-navy-900"
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
