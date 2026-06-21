import { business } from "../../../data/site";

export default function Logo({ light = false }: { light?: boolean }) {
  const name = light ? "text-white" : "text-ink-900";
  const sub = light ? "text-brand-200" : "text-brand-600";
  return (
    <a
      href="#top"
      className="group flex items-center gap-3"
      aria-label={`${business.fullName} — back to top`}
    >
      <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-500 shadow-sm shadow-brand-500/30 transition-transform group-hover:-translate-y-0.5">
        <svg viewBox="0 0 24 24" className="h-6 w-6 text-white" fill="none" aria-hidden="true">
          <path
            d="M14.5 5 18.5 9 9.5 18l-4 1 1-4 8-9z"
            fill="currentColor"
            opacity="0.2"
          />
          <path
            d="M14.5 5 18.5 9 9 18.5 4.5 20l1.5-4.5L14.5 5z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
          <path d="M13 6.5 17 10.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      </span>
      <span className="flex flex-col leading-tight">
        <span className={`text-lg font-extrabold tracking-tight ${name}`}>White Wall</span>
        <span className={`text-[0.6rem] font-semibold uppercase tracking-[0.22em] ${sub}`}>
          Painting
        </span>
      </span>
    </a>
  );
}
