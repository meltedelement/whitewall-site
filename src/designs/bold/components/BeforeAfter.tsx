import { useCallback, useEffect, useRef, useState } from "react";

type Props = {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
  /** aspect ratio of the frame, e.g. "3 / 4" for portrait */
  ratio?: string;
  objectPosition?: string;
};

/**
 * Interactive before/after comparison slider.
 * Drag the handle, or focus it and use the arrow keys.
 * Works with mouse, touch and keyboard. The baked-in "before"/"after"
 * labels in the source photos read as intentional inside the comparison.
 */
export default function BeforeAfter({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  ratio = "3 / 4",
  objectPosition = "center",
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(50); // percentage 0..100
  const [width, setWidth] = useState(0);
  const draggingRef = useRef(false);

  // Track container width so the BEFORE image stays aligned with AFTER
  // even though its wrapper is clipped.
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const ro = new ResizeObserver((entries) => {
      setWidth(entries[0].contentRect.width);
    });
    ro.observe(el);
    setWidth(el.getBoundingClientRect().width);
    return () => ro.disconnect();
  }, []);

  const setFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, pct)));
  }, []);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!draggingRef.current) return;
      setFromClientX(e.clientX);
    };
    const onUp = () => {
      draggingRef.current = false;
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };
  }, [setFromClientX]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      setPos((p) => Math.max(0, p - 4));
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      setPos((p) => Math.min(100, p + 4));
    } else if (e.key === "Home") {
      e.preventDefault();
      setPos(0);
    } else if (e.key === "End") {
      e.preventDefault();
      setPos(100);
    }
  };

  return (
    <div
      ref={containerRef}
      className="group relative w-full select-none overflow-hidden bg-ink-900"
      style={{ aspectRatio: ratio }}
      onMouseDown={(e) => {
        draggingRef.current = true;
        setFromClientX(e.clientX);
      }}
      onTouchStart={(e) => setFromClientX(e.touches[0].clientX)}
      onTouchMove={(e) => setFromClientX(e.touches[0].clientX)}
    >
      {/* AFTER — full underlay */}
      <img
        src={afterSrc}
        alt={afterAlt}
        draggable={false}
        className="absolute inset-0 h-full w-full object-cover"
        style={{ objectPosition }}
      />

      {/* BEFORE — clipped overlay */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${pos}%` }}
      >
        <img
          src={beforeSrc}
          alt={beforeAlt}
          draggable={false}
          className="absolute inset-0 h-full max-w-none object-cover"
          style={{
            width: width || "100%",
            objectPosition,
          }}
        />
      </div>

      {/* Corner labels */}
      <span className="pointer-events-none absolute left-3 top-3 z-10 bg-ink-950/80 px-2 py-1 text-[11px] font-bold uppercase tracking-widest text-paper">
        Before
      </span>
      <span className="pointer-events-none absolute right-3 top-3 z-10 bg-accent px-2 py-1 text-[11px] font-bold uppercase tracking-widest text-white">
        After
      </span>

      {/* Divider + handle */}
      <div
        className="absolute inset-y-0 z-20 w-0.5 bg-paper"
        style={{ left: `${pos}%`, transform: "translateX(-50%)" }}
      >
        <button
          type="button"
          role="slider"
          aria-label="Drag to compare the before and after photos"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(pos)}
          aria-valuetext={`${Math.round(pos)}% before`}
          onKeyDown={onKeyDown}
          onMouseDown={(e) => {
            e.stopPropagation();
            draggingRef.current = true;
          }}
          className="absolute top-1/2 left-1/2 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize place-items-center rounded-full border-2 border-ink-950 bg-accent text-white shadow-lg outline-none transition focus-visible:ring-4 focus-visible:ring-accent-bright/70"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="m8 9-3 3 3 3" />
            <path d="m16 9 3 3-3 3" />
          </svg>
        </button>
      </div>
    </div>
  );
}
