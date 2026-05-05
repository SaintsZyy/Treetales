import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Kontak - Treetales Coffee & Eatery" },
      {
        name: "description",
        content:
          "Kunjungi kami di Jl. Tirto Usodo Timur No. 29, Semarang. Buka setiap hari 08.00 - 24.00.",
      },
      { property: "og:title", content: "Kontak Treetales" },
      { property: "og:description", content: "Temukan kami di Semarang." },
    ],
  }),
  component: Kontak,
});

function Kontak() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <section className="pt-40 pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <span className="inline-flex items-center gap-3 text-[10px] tracking-[0.4em] uppercase text-accent">
              <span className="h-px w-8 bg-accent" /> Volume V - Kontak
            </span>
            <h1 className="font-display text-6xl sm:text-8xl mt-6 leading-[0.9] text-balance max-w-4xl">
              Datang untuk kopinya.
              <br />
              <span className="italic">Stay for the shade.</span>
            </h1>
          </Reveal>

          <div className="mt-16 grid md:grid-cols-3 gap-10">
            <Reveal>
              <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                Alamat
              </div>
              <p className="font-serif text-2xl mt-3 leading-snug">
                Jl. Tirto Usodo Timur No. 29, Semarang
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                Jam buka
              </div>
              <p className="font-serif text-2xl mt-3 leading-snug">
                Setiap hari
                <br />
                08.00 - 24.00
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                Hubungi Kami
              </div>
              <p className="font-serif text-2xl mt-3 leading-snug">
                <a href="tel:+6281328976408" className="hover:text-accent transition-colors">
                  +62 813-2897-6408
                </a>
                <br />
                <a
                  href="https://instagram.com/treetales.coffee"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  @treetales.coffee
                </a>
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <div className="mt-16 aspect-[16/9] rounded-3xl overflow-hidden border border-border shadow-xl">
              <iframe
                title="Treetales location map"
                src="https://www.google.com/maps?q=Jl+Tirto+Usodo+Timur+No+29+Semarang&output=embed"
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>
      <Footer />
    </div>
  );
}
