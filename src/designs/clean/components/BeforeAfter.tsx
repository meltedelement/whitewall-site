import { useId, useState } from "react";
import { MoveHorizontal } from "lucide-react";

type Props = {
  beforeSrc: string;
  afterSrc: string;
  /** Describes the after image; also summarises what the comparison shows. */
  afterAlt: string;
  /** aspect ratio class for the frame, e.g. "aspect-[4/5]" */
  aspect?: string;
  objectPosition?: string;
};

/**
 * Interactive before/after comparison.
 * - Drag the handle (mouse / touch via the range input) to reveal.
 * - Fully keyboard-accessible: focus the slider and use arrow keys / Home / End.
 */
export default function BeforeAfter({
  beforeSrc,
  afterSrc,
  afterAlt,
  aspect = "aspect-[4/5]",
  objectPosition = "center",
}: Props) {
  const [pos, setPos] = useState(50);
  const labelId = useId();

  return (
    <figure className="group relative select-none overflow-hidden rounded-2xl shadow-md ring-1 ring-ink-900/5">
      <div className={`relative w-full ${aspect}`}>
        {/* After image (full, underneath) */}
        <img
          src={afterSrc}
          alt={afterAlt}
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition }}
          draggable={false}
        />

        {/* Before image (clipped to the left of the handle) */}
        <div
          className="absolute inset-0 h-full overflow-hidden"
          style={{ width: `${pos}%` }}
          aria-hidden="true"
        >
          <img
            src={beforeSrc}
            alt=""
            className="absolute inset-0 h-full w-full max-w-none object-cover"
            style={{ width: `calc(100% * 100 / ${pos})`, objectPosition }}
            draggable={false}
          />
        </div>

        {/* Corner labels */}
        <span className="pointer-events-none absolute left-3 top-3 rounded-full bg-ink-900/80 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white shadow">
          Before
        </span>
        <span className="pointer-events-none absolute right-3 top-3 rounded-full bg-brand-500 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white shadow">
          After
        </span>

        {/* Divider line + grab handle */}
        <div
          className="pointer-events-none absolute inset-y-0 z-10 w-0.5 bg-white shadow-[0_0_0_1px_rgba(15,23,42,0.1)]"
          style={{ left: `${pos}%`, transform: "translateX(-50%)" }}
        >
          <span className="absolute top-1/2 left-1/2 grid h-11 w-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-brand-600 shadow-lg ring-1 ring-ink-900/5 transition group-focus-within:ring-2 group-focus-within:ring-brand-500">
            <MoveHorizontal className="h-5 w-5" />
          </span>
        </div>

        {/* The accessible control sits on top, transparent */}
        <label htmlFor={labelId} className="sr-only">
          Before and after comparison slider — drag or use arrow keys to reveal more of the before
          or after photo
        </label>
        <input
          id={labelId}
          type="range"
          min={0}
          max={100}
          step={1}
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          className="ba-range absolute inset-0 z-20 h-full w-full cursor-ew-resize"
          aria-valuetext={`${pos}% before, ${100 - pos}% after`}
        />
      </div>
    </figure>
  );
}
