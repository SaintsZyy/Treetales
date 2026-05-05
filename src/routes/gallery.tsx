import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import hero from "@/assets/hero.jpg";
import ambience1 from "@/assets/ambience1.jpg";
import ambience2 from "@/assets/ambience2.jpg";
import plants from "@/assets/plants.jpg";
import cozy from "@/assets/cozy.jpg";
import pour from "@/assets/pour.jpg";
import coffee from "@/assets/coffee.jpg";
import food from "@/assets/food.jpg";
import dessert from "@/assets/dessert.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery - Treetales Coffee & Eatery" },
      {
        name: "description",
        content:
          "Suasana Treetales: greenery, kayu hangat, golden light, dan detail kecil untuk hari yang pelan.",
      },
      { property: "og:title", content: "Treetales Gallery" },
      { property: "og:description", content: "Greenery, wood, and golden light." },
      { property: "og:image", content: ambience2 },
    ],
  }),
  component: Gallery,
});

const photos = [hero, ambience2, plants, cozy, ambience1, pour, coffee, food, dessert];

function Gallery() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <header className="pt-44 pb-20 px-6 text-center">
        <Reveal>
          <span className="inline-flex items-center gap-3 text-[10px] tracking-[0.4em] uppercase text-accent">
            <span className="h-px w-8 bg-accent" /> Volume III - Gallery{" "}
            <span className="h-px w-8 bg-accent" />
          </span>
          <h1 className="font-display text-6xl sm:text-8xl mt-8 leading-[0.9] text-balance">
            Momen kecil, <span className="italic">soft light.</span>
          </h1>
          <p className="mt-8 max-w-xl mx-auto text-foreground/70 italic font-serif text-lg">
            - album tenang tentang daun, cahaya, dan sore yang tinggal lebih lama.
          </p>
        </Reveal>
      </header>

      <div className="max-w-7xl mx-auto px-6 pb-20 columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
        {photos.map((src, i) => (
          <motion.figure
            key={src + i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: (i % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="mb-4 break-inside-avoid overflow-hidden rounded-2xl group relative"
          >
            <img
              src={src}
              alt=""
              loading="lazy"
              className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.figure>
        ))}
      </div>
      <Footer />
    </div>
  );
}
