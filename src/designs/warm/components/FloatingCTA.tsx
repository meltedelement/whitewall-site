import { Phone } from "lucide-react";
import { business, whatsappLink } from "../../../data/site";

export default function FloatingCTA() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3 sm:hidden">
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Message White Wall Painting on WhatsApp"
        className="grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 active:scale-95"
      >
        <svg viewBox="0 0 32 32" className="h-7 w-7 fill-current" aria-hidden="true">
          <path d="M16 3C9.4 3 4 8.4 4 15c0 2.1.6 4.2 1.6 6L4 29l8.2-1.6c1.7.9 3.6 1.4 5.6 1.4h.2c6.6 0 12-5.4 12-12S22.6 3 16 3zm0 21.8c-1.8 0-3.5-.5-5-1.4l-.4-.2-4.8 1 1-4.7-.3-.4c-1-1.6-1.5-3.4-1.5-5.3C5.5 9.5 10.2 4.8 16 4.8S26.5 9.5 26.5 15 21.8 24.8 16 24.8zm5.8-7.4c-.3-.2-1.9-.9-2.2-1s-.5-.2-.7.2-.8 1-1 1.2-.4.2-.7.1c-.3-.2-1.4-.5-2.6-1.6-1-.9-1.6-1.9-1.8-2.3-.2-.3 0-.5.1-.7l.5-.6c.2-.2.2-.3.3-.5s0-.4 0-.6c-.1-.2-.7-1.7-1-2.3-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4s-1.1 1-1.1 2.6 1.1 3 1.3 3.3c.2.3 2.3 3.5 5.5 4.9.8.3 1.4.5 1.8.7.8.2 1.5.2 2 .1.6-.1 1.9-.8 2.2-1.5.3-.8.3-1.4.2-1.5l-.5-.4z" />
        </svg>
      </a>
      <a
        href={`tel:${business.phoneHref}`}
        aria-label={`Call White Wall Painting on ${business.phone}`}
        className="grid h-14 w-14 place-items-center rounded-full bg-clay-500 text-cream-50 shadow-lg shadow-black/20 active:scale-95"
      >
        <Phone className="h-6 w-6" />
      </a>
    </div>
  );
}
