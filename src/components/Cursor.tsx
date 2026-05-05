import { useEffect, useRef, useState } from "react";

export function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;
    setEnabled(true);
    document.documentElement.classList.add("cursor-none");

    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const ring = { x: target.x, y: target.y };
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      }
      const el = e.target as HTMLElement | null;
      const interactive = el?.closest(
        "a, button, [data-cursor], input, textarea, select, [role='button']",
      );
      const label = el?.closest("[data-cursor]")?.getAttribute("data-cursor") ?? "";
      if (ringRef.current) {
        ringRef.current.dataset.hover = interactive ? "true" : "false";
      }
      if (labelRef.current) {
        labelRef.current.textContent = label;
        labelRef.current.style.opacity = label ? "1" : "0";
      }
    };

    const tick = () => {
      ring.x += (target.x - ring.x) * 0.18;
      ring.y += (target.y - ring.y) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.x}px, ${ring.y}px, 0) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
      document.documentElement.classList.remove("cursor-none");
    };
  }, []);

  if (!enabled) return null;
  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-1.5 w-1.5 rounded-full bg-brass mix-blend-difference"
      />
      <div
        ref={ringRef}
        data-hover="false"
        className="pointer-events-none fixed left-0 top-0 z-[9998] h-9 w-9 rounded-full border border-brass/70 transition-[width,height,background-color,border-color] duration-300 data-[hover=true]:h-16 data-[hover=true]:w-16 data-[hover=true]:bg-brass/15 data-[hover=true]:border-brass flex items-center justify-center"
      >
        <span
          ref={labelRef}
          className="text-[9px] uppercase tracking-[0.3em] text-brass opacity-0 transition-opacity duration-200 font-serif italic normal-case"
        />
      </div>
    </>
  );
}
