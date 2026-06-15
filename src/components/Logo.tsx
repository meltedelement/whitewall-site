import { business } from "../data/site";

export default function Logo({ light = false }: { light?: boolean }) {
  const main = light ? "text-white" : "text-navy-800";
  return (
    <a href="#top" className="group flex items-center gap-3" aria-label={`${business.fullName} home`}>
      <span className="grid h-10 w-10 place-items-center rounded-lg bg-gold-500 shadow-sm transition-transform group-hover:-rotate-6">
        <svg viewBox="0 0 24 24" className="h-6 w-6 text-navy-900" fill="none">
          <rect x="4" y="3" width="16" height="10" rx="2" fill="currentColor" opacity="0.15" />
          <rect x="4" y="3" width="16" height="10" rx="2" stroke="currentColor" strokeWidth="1.8" />
          <path d="M11 13v3M13 13v3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <rect x="8.5" y="16" width="7" height="5" rx="1.5" fill="currentColor" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className={`font-display text-xl font-700 uppercase tracking-tight ${main}`}>
          White Wall
        </span>
        <span className={`text-[0.62rem] font-600 uppercase tracking-[0.25em] ${light ? "text-gold-400" : "text-gold-600"}`}>
          Painting
        </span>
      </span>
    </a>
  );
}
