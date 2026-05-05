import { Link } from "@tanstack/react-router";
import { Divider } from "@/components/Divider";

export function Footer() {
  return (
    <footer className="relative bg-forest text-bone overflow-hidden mt-32">
      <div className="border-y border-bone/15 py-6 overflow-hidden whitespace-nowrap">
        <div className="marquee inline-flex gap-12 font-serif italic text-3xl sm:text-5xl text-bone/80">
          {Array.from({ length: 2 }).map((_, k) => (
            <span key={k} className="inline-flex items-center gap-12">
              <span>Tales told by trees</span>
              <span className="text-brass">*</span>
              <span>Slow mornings</span>
              <span className="text-brass">*</span>
              <span>Warm evenings</span>
              <span className="text-brass">*</span>
              <span>Stay a while</span>
              <span className="text-brass">*</span>
              <span>Sip stories</span>
              <span className="text-brass">*</span>
            </span>
          ))}
        </div>
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 py-20 grid gap-14 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3">
            <div className="font-serif">
              <p className="text-3xl leading-none">Treetales</p>
              <p className="text-[10px] tracking-[0.35em] uppercase text-bone/60 mt-1.5">
                Coffee &amp; Eatery - by Taman Teduh
              </p>
            </div>
          </div>
          <p className="text-bone/70 max-w-md leading-relaxed mt-8 text-[15px]">
            Sudut pelan di Semarang untuk kopi, obrolan hangat, dan waktu yang tidak perlu diburu.
          </p>
          <p className="font-serif italic text-2xl text-brass mt-8">
            "Stay a while. Tell us a story."
          </p>
        </div>

        <div className="md:col-span-3">
          <h4 className="text-[10px] uppercase tracking-[0.35em] text-brass mb-5">Kunjungi</h4>
          <p className="text-bone/85 text-sm leading-loose">
            Jl. Tirto Usodo Timur No. 29
            <br />
            Semarang, Indonesia
          </p>
          <p className="text-bone/60 text-xs mt-4 tracking-wider uppercase">Jam buka</p>
          <p className="text-bone/85 text-sm">Setiap hari - 08.00 - 24.00</p>
        </div>

        <div className="md:col-span-2">
          <h4 className="text-[10px] uppercase tracking-[0.35em] text-brass mb-5">Hubungi</h4>
          <ul className="space-y-2.5 text-sm">
            <li>
              <a
                className="hover:text-brass transition-colors"
                href="https://instagram.com/treetales.coffee"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            </li>
            <li>
              <a className="hover:text-brass transition-colors" href="tel:+6281328976408">
                WhatsApp
              </a>
            </li>
            <li>
              <a
                className="hover:text-brass transition-colors"
                href="mailto:hello@treetales.coffee"
              >
                Email
              </a>
            </li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <h4 className="text-[10px] uppercase tracking-[0.35em] text-brass mb-5">Wander</h4>
          <ul className="space-y-2.5 text-sm">
            <li>
              <Link className="hover:text-brass transition-colors" to="/menu">
                Menu
              </Link>
            </li>
            <li>
              <Link className="hover:text-brass transition-colors" to="/gallery">
                Gallery
              </Link>
            </li>
            <li>
              <Link className="hover:text-brass transition-colors" to="/reserve">
                Reservasi
              </Link>
            </li>
            <li>
              <Link className="hover:text-brass transition-colors" to="/contact">
                Kontak
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <Divider className="max-w-[1400px] mx-auto px-6 lg:px-10 opacity-40" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-7 flex flex-wrap gap-3 justify-between text-[11px] tracking-wider uppercase text-bone/55">
        <span>(c) {new Date().getFullYear()} Treetales - All rights reserved</span>
        <span className="font-serif italic normal-case tracking-normal text-bone/70">
          Chapter no. {new Date().getFullYear() - 2022}
        </span>
      </div>
    </footer>
  );
}
