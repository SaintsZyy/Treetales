import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import ambience2 from "@/assets/ambience2.jpg";

export const Route = createFileRoute("/reserve")({
  head: () => ({
    meta: [
      { title: "Reservasi Meja - Treetales Coffee & Eatery" },
      {
        name: "description",
        content: "Pesan kursi teduh di Treetales, Semarang. Buka setiap hari 08.00 - 24.00.",
      },
      { property: "og:title", content: "Reservasi di Treetales" },
      { property: "og:description", content: "Simpan kursi favoritmu di bawah teduh." },
      { property: "og:image", content: ambience2 },
    ],
  }),
  component: Reserve,
});

function Reserve() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <section className="pt-40 pb-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <Reveal>
            <span className="inline-flex items-center gap-3 text-[10px] tracking-[0.4em] uppercase text-accent">
              <span className="h-px w-8 bg-accent" /> Volume IV - Reservasi
            </span>
            <h1 className="font-display text-6xl sm:text-7xl mt-6 leading-[0.9] text-balance">
              Simpan tempat <span className="italic">under the canopy.</span>
            </h1>
            <p className="mt-6 text-foreground/70 text-lg max-w-md">
              Untuk rombongan, malam spesial, atau sekadar sudut favoritmu, kabari kami dan kami
              siapkan.
            </p>

            <div className="mt-10 space-y-4">
              <a
                href="https://wa.me/6281328976408?text=Hi%20Treetales%2C%20I%27d%20like%20to%20reserve%20a%20table"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between gap-4 rounded-2xl bg-foreground text-background px-6 py-5 hover:bg-primary transition-colors"
              >
                <div>
                  <div className="text-xs uppercase tracking-[0.25em] text-background/60">
                    WhatsApp
                  </div>
                  <div className="font-serif text-2xl mt-1">Pesan Meja</div>
                </div>
                <span aria-hidden>&gt;</span>
              </a>
              <a
                href="tel:+6281328976408"
                className="flex items-center justify-between gap-4 rounded-2xl border border-border px-6 py-5 hover:bg-secondary transition-colors"
              >
                <div>
                  <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                    Telepon
                  </div>
                  <div className="font-serif text-2xl mt-1">+62 813-2897-6408</div>
                </div>
                <span aria-hidden>&gt;</span>
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-3xl overflow-hidden relative aspect-[4/5]">
              <img
                src={ambience2}
                alt="Garden seating"
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/10 to-transparent" />
              <div className="absolute bottom-0 inset-x-0 p-8 text-background">
                <div className="text-xs uppercase tracking-[0.25em] text-background/70">
                  Jam Buka
                </div>
                <div className="font-serif text-3xl mt-2">
                  Setiap hari
                  <br />
                  08.00 - 24.00
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
      <Footer />
    </div>
  );
}
