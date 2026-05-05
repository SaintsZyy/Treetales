import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const links = [
  { to: "/", label: "Beranda", num: "01" },
  { to: "/menu", label: "Menu", num: "02" },
  { to: "/gallery", label: "Gallery", num: "03" },
  { to: "/journal", label: "Journal", num: "04" },
  { to: "/reserve", label: "Reservasi", num: "05" },
  { to: "/contact", label: "Kontak", num: "06" },
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/85 backdrop-blur-xl border-b border-border/60" : "bg-transparent"
      }`}
    >
      <nav className="max-w-[1400px] mx-auto flex items-center justify-between px-6 lg:px-10 py-5">
        <Link to="/" className="flex items-center group">
          <span
            className={`font-serif leading-none transition-colors ${scrolled ? "text-foreground" : "text-background"}`}
          >
            <span className="block text-xl tracking-tight">Treetales</span>
            <span className="block text-[9px] uppercase tracking-[0.35em] opacity-70 mt-1">
              Coffee - Eatery - Garden
            </span>
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-10 text-[13px]">
          {links.map((l) => (
            <li key={l.to} className="flex items-baseline gap-1.5">
              <span
                className={`text-[9px] tracking-[0.3em] ${scrolled ? "text-accent" : "text-background/60"}`}
              >
                {l.num}
              </span>
              <Link
                to={l.to}
                activeProps={{ className: "italic" }}
                activeOptions={{ exact: l.to === "/" }}
                className={`transition-colors ${scrolled ? "text-foreground/80 hover:text-foreground" : "text-background/85 hover:text-background"}`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          to="/reserve"
          className={`hidden md:inline-flex items-center gap-2 rounded-full px-5 py-2 text-xs tracking-[0.2em] uppercase transition-all border ${
            scrolled
              ? "bg-foreground text-background border-foreground hover:bg-accent hover:border-accent hover:text-accent-foreground"
              : "bg-transparent text-background border-background/40 hover:bg-background hover:text-foreground"
          }`}
        >
          Reservasi
        </Link>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
          className={`md:hidden h-10 w-10 grid place-items-center ${scrolled ? "text-foreground" : "text-background"}`}
        >
          <span className="sr-only">Buka menu</span>
          <span className="block h-px w-6 bg-current relative before:content-[''] before:absolute before:h-px before:w-6 before:bg-current before:-translate-y-2 after:content-[''] after:absolute after:h-px after:w-6 after:bg-current after:translate-y-2" />
        </button>
      </nav>

      <div
        className={`md:hidden overflow-hidden transition-all duration-500 bg-background border-b border-border ${open ? "max-h-96" : "max-h-0"}`}
      >
        <ul className="px-6 py-4 space-y-3">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                onClick={() => setOpen(false)}
                className="flex items-baseline gap-3 py-2 text-foreground"
              >
                <span className="text-[10px] text-accent tracking-[0.3em]">{l.num}</span>
                <span className="font-serif text-2xl">{l.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
