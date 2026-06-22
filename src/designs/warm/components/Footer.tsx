import { Phone, MessageCircle, Facebook, MapPin } from "lucide-react";
import { business, whatsappLink } from "../../../data/site";
import Logo from "./Logo";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-wood-900 text-cream-50">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo light />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-cream-200/70">
              A local painter based in Tullamore. Careful interior and exterior
              painting for homes and businesses across Co. Offaly.
            </p>
            <div className="mt-5 flex items-center gap-2 text-sm text-cream-200/70">
              <MapPin className="h-4 w-4 text-clay-300" />
              {business.area}
            </div>
          </div>

          <div>
            <h3 className="font-display text-sm font-600 uppercase tracking-wider text-clay-300">
              Sections
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-cream-200/70">
              <li><a href="#services" className="hover:text-clay-300">Services</a></li>
              <li><a href="#process" className="hover:text-clay-300">How it works</a></li>
              <li><a href="#work" className="hover:text-clay-300">Our work</a></li>
              <li><a href="#contact" className="hover:text-clay-300">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-600 uppercase tracking-wider text-clay-300">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-cream-200/70">
              <li>
                <a href={`tel:${business.phoneHref}`} className="flex items-center gap-2 hover:text-clay-300">
                  <Phone className="h-4 w-4 text-clay-300" />
                  {business.phone}
                </a>
              </li>
              <li>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-clay-300">
                  <MessageCircle className="h-4 w-4 text-clay-300" />
                  WhatsApp us
                </a>
              </li>
              <li>
                <a href={business.facebook} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-clay-300">
                  <Facebook className="h-4 w-4 text-clay-300" />
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-cream-200/10 pt-6 text-xs text-cream-200/50 sm:flex-row">
          <p>© {year} {business.fullName}. All rights reserved.</p>
          <p>Tullamore, Co. Offaly · Owner: {business.owner}</p>
        </div>
      </div>
    </footer>
  );
}
