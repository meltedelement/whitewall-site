import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { business } from "../../../data/site";
import Logo from "./Logo";

const links = [
  { href: "#services", label: "Services" },
  { href: "#process", label: "How it works" },
  { href: "#work", label: "Our work" },
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
          ? "bg-cream-50/90 shadow-[0_2px_24px_rgba(95,63,38,0.08)] backdrop-blur"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 sm:px-8">
        <Logo />

        <div className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-600 text-wood-700 transition-colors hover:text-clay-500"
            >
              {l.label}
            </a>
          ))}
          <a
            href={`tel:${business.phoneHref}`}
            className="inline-flex items-center gap-2 rounded-full bg-wood-700 px-5 py-2.5 text-sm font-600 text-cream-50 shadow-sm transition-colors hover:bg-wood-600"
          >
            <Phone className="h-4 w-4 text-clay-300" />
            {business.phone}
          </a>
        </div>

        <button
          className="grid h-11 w-11 place-items-center rounded-xl text-wood-800 transition-colors hover:bg-cream-200 lg:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-cream-200 bg-cream-50 lg:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4 sm:px-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-base font-600 text-wood-800 transition-colors hover:bg-cream-200"
              >
                {l.label}
              </a>
            ))}
            <a
              href={`tel:${business.phoneHref}`}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-clay-500 px-4 py-3 text-base font-700 text-cream-50"
            >
              <Phone className="h-5 w-5" />
              Call {business.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
