import Reveal from "./Reveal";

type Props = {
  index: string; // e.g. "01"
  eyebrow: string;
  title: React.ReactNode;
  /** dark = on near-black background (default), light = on paper background */
  variant?: "dark" | "light";
  className?: string;
};

/**
 * Editorial section header: oversized outlined index number,
 * small accent eyebrow, big condensed display title.
 */
export default function SectionHeading({
  index,
  eyebrow,
  title,
  variant = "dark",
  className = "",
}: Props) {
  const titleColor = variant === "dark" ? "text-paper" : "text-ink-950";
  return (
    <Reveal className={className}>
      <div className="flex items-start gap-4 sm:gap-6">
        <span
          className="display select-none text-6xl leading-none text-outline sm:text-7xl lg:text-8xl"
          aria-hidden="true"
        >
          {index}
        </span>
        <div className="pt-1">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent-bright">
            {eyebrow}
          </p>
          <h2 className={`display mt-2 text-4xl sm:text-5xl lg:text-6xl ${titleColor}`}>
            {title}
          </h2>
        </div>
      </div>
    </Reveal>
  );
}
