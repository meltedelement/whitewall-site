import { useCallback, useEffect, useRef, useState } from "react";
import { MoveHorizontal } from "lucide-react";

type Props = {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
  /** aspect ratio class, e.g. "aspect-[4/5]" */
  aspect?: string;
};

/**
 * Draggable before/after image comparison.
 * Accessible via mouse, touch and keyboard (arrow keys move the divider).
 */
export default function BeforeAfter({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  aspect = "aspect-[4/5]",
}: Props) {
  const [pos, setPos] = useState(50);
  const [width, setWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  // Keep the clipped "before" image sized to the full container so it never squashes.
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const update = () => setWidth(el.offsetWidth);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const setFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, pct)));
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    dragging.current = true;
    (e.target as Element).setPointerCapture?.(e.pointerId);
    setFromClientX(e.clientX);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging.current) return;
    setFromClientX(e.clientX);
  };

  const onPointerUp = () => {
    dragging.current = false;
  };

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
      className={`group relative ${aspect} w-full touch-none select-none overflow-hidden rounded-3xl border-4 border-cream-50 shadow-[0_25px_50px_-12px_rgba(95,63,38,0.3)]`}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerLeave={onPointerUp}
    >
      {/* After image (base layer, full) */}
      <img
        src={afterSrc}
        alt={afterAlt}
        draggable={false}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <span className="pointer-events-none absolute right-4 top-4 rounded-full bg-sage-500 px-3.5 py-1.5 font-display text-sm font-600 text-cream-50 shadow">
        After
      </span>

      {/* Before image (clipped on top) */}
      <div
        className="absolute inset-0 h-full overflow-hidden"
        style={{ width: `${pos}%` }}
      >
        <img
          src={beforeSrc}
          alt={beforeAlt}
          draggable={false}
          className="absolute inset-0 h-full max-w-none object-cover"
          style={{ width: width ? `${width}px` : "100%" }}
        />
        <span className="pointer-events-none absolute left-4 top-4 rounded-full bg-wood-700 px-3.5 py-1.5 font-display text-sm font-600 text-cream-50 shadow">
          Before
        </span>
      </div>

      {/* Divider + handle */}
      <div
        className="absolute inset-y-0 z-10 w-0.5 -translate-x-1/2 bg-cream-50"
        style={{ left: `${pos}%` }}
      >
        <button
          type="button"
          role="slider"
          aria-label="Drag to compare the staircase before and after"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(pos)}
          aria-valuetext={`${Math.round(pos)}% before`}
          onKeyDown={onKeyDown}
          className="absolute left-1/2 top-1/2 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize place-items-center rounded-full bg-cream-50 text-wood-700 shadow-lg outline-none ring-clay-400 transition-transform focus-visible:ring-4 group-hover:scale-105"
        >
          <MoveHorizontal className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
}
