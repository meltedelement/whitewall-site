import { Phone, MessageCircle, Facebook, MapPin } from "lucide-react";
import { business, whatsappLink } from "../../../data/site";
import Logo from "./Logo";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-ink-900/10 bg-ink-900 text-white">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo light />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
              Professional interior &amp; exterior painting for homes and commercial spaces.
              Reliable, clean and local — {business.tagline.toLowerCase()}.
            </p>
            <div className="mt-5 flex items-center gap-2 text-sm text-white/60">
              <MapPin className="h-4 w-4 text-brand-400" />
              {business.area}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-brand-300">Sections</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-white/70">
              <li><a href="#services" className="hover:text-brand-300">Services</a></li>
              <li><a href="#process" className="hover:text-brand-300">How it works</a></li>
              <li><a href="#work" className="hover:text-brand-300">Our work</a></li>
              <li><a href="#reviews" className="hover:text-brand-300">Reviews</a></li>
              <li><a href="#contact" className="hover:text-brand-300">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-brand-300">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li>
                <a href={`tel:${business.phoneHref}`} className="flex items-center gap-2 hover:text-brand-300">
                  <Phone className="h-4 w-4 text-brand-400" />
                  {business.phone}
                </a>
              </li>
              <li>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-brand-300">
                  <MessageCircle className="h-4 w-4 text-brand-400" />
                  WhatsApp us
                </a>
              </li>
              <li>
                <a href={business.facebook} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-brand-300">
                  <Facebook className="h-4 w-4 text-brand-400" />
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/45 sm:flex-row">
          <p>© {year} {business.fullName}. All rights reserved.</p>
          <p>Tullamore, Co. Offaly · Owner: {business.owner}</p>
        </div>
      </div>
    </footer>
  );
}
