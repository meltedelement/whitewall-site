import { business } from "../../../data/site";

export default function Logo({ light = false }: { light?: boolean }) {
  const main = light ? "text-cream-50" : "text-wood-900";
  const sub = light ? "text-clay-300" : "text-clay-500";
  return (
    <a
      href="#top"
      className="group flex items-center gap-3"
      aria-label={`${business.fullName} home`}
    >
      <span className="grid h-11 w-11 place-items-center rounded-2xl bg-clay-500 shadow-sm transition-transform duration-300 group-hover:-rotate-6">
        <svg viewBox="0 0 24 24" className="h-6 w-6 text-cream-50" fill="none">
          <path
            d="M14 3l2.5 2.5L7 15l-2.5-.0L4 18l3.5-.5L17 8l-2.5-2.5"
            opacity="0"
          />
          <rect x="13.5" y="2.8" width="3.4" height="7" rx="1.2" transform="rotate(45 15.2 6.3)" fill="currentColor" />
          <path d="M9.5 9.5 5 14l-1 4 4-1 4.5-4.5" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" strokeLinecap="round" fill="currentColor" fillOpacity="0.18" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className={`font-display text-xl font-600 tracking-tight ${main}`}>
          White Wall
        </span>
        <span className={`mt-0.5 text-[0.6rem] font-600 uppercase tracking-[0.3em] ${sub}`}>
          Painting · Tullamore
        </span>
      </span>
    </a>
  );
}
