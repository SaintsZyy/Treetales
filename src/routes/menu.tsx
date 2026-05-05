import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { Divider } from "@/components/Divider";
import pour from "@/assets/pour.jpg";
import aglioEolio from "@/assets/menu/aglio-e-olio.jpg";
import arenLatte from "@/assets/menu/aren-latte.jpg";
import berryLatte from "@/assets/menu/berry-latte.jpg";
import blackCoffee from "@/assets/menu/black-coffee.jpg";
import carbonara from "@/assets/menu/carbonara.jpg";
import chickenCurry from "@/assets/menu/chicken-curry.jpg";
import cireng from "@/assets/menu/cireng.jpg";
import cookie from "@/assets/menu/cookie.jpg";
import dumplings from "@/assets/menu/dumplings.jpg";
import espresso from "@/assets/menu/espresso.jpg";
import icedJapanese from "@/assets/menu/iced-japanese.jpg";
import latte from "@/assets/menu/latte.jpg";
import nasiGoreng from "@/assets/menu/nasi-goreng.jpg";
import omurice from "@/assets/menu/omurice.jpg";
import soto from "@/assets/menu/soto.jpg";
import toast from "@/assets/menu/toast.jpg";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu - Treetales Coffee & Eatery" },
      {
        name: "description",
        content:
          "Kopi klasik, signature latte, rice, pasta, snacks, dan pastry dari Treetales by Taman Teduh.",
      },
      { property: "og:title", content: "Treetales Menu" },
      { property: "og:description", content: "Coffee, mocktails, rice, pasta, dan pastries." },
      { property: "og:image", content: latte },
    ],
  }),
  component: Menu,
});

const sections = [
  {
    title: "Classic Coffee",
    img: latte,
    items: [
      { name: "Espresso", desc: "Double shot, fresh roast", price: "22", img: espresso },
      { name: "Caffe Latte", desc: "Espresso, fresh milk, foam ringan", price: "25", img: latte },
      { name: "Cappuccino", desc: "Espresso, fresh milk, foam lembut", price: "25", img: latte },
      { name: "Magic", desc: "Double ristretto dengan steamed milk", price: "30", img: latte },
      { name: "Black", desc: "Long black, fresh roast", price: "22", img: blackCoffee },
    ],
  },
  {
    title: "Signature Aren Latte",
    img: arenLatte,
    items: [
      {
        name: "Creamy Dulcifer",
        desc: "Aren, espresso, milk, caramel",
        price: "30",
        img: arenLatte,
      },
      { name: "Dulcifer Latte", desc: "Latte gula aren khas rumah", price: "28", img: arenLatte },
      { name: "Flos Latte", desc: "Floral, ringan, dan lingering", price: "28", img: latte },
      {
        name: "Berry Aren Latte",
        desc: "Aren dengan sentuhan mixed berry",
        price: "29",
        img: berryLatte,
      },
    ],
  },
  {
    title: "Manual Brew",
    img: pour,
    items: [
      { name: "V60", desc: "Single origin, bright & clean", price: "30", img: pour },
      { name: "Iced Japanese", desc: "Slow drip over ice", price: "30", img: icedJapanese },
    ],
  },
  {
    title: "Main Course",
    img: nasiGoreng,
    items: [
      {
        name: "Nasi Goreng Spesial",
        desc: "Nasi goreng house special, +5 topping",
        price: "38",
        img: nasiGoreng,
      },
      { name: "Nasi Goreng Sapi", desc: "Nasi goreng sapi", price: "38", img: nasiGoreng },
      { name: "Soto Medan", desc: "Kuah santan gurih dengan ayam", price: "33", img: soto },
      { name: "Kari Ayam Spesial", desc: "Kari ayam dengan nasi", price: "33", img: chickenCurry },
    ],
  },
  {
    title: "Pasta",
    img: carbonara,
    items: [
      { name: "Carbonara", desc: "Smoked beef, cream, parmesan", price: "34", img: carbonara },
      { name: "Aglio e Olio", desc: "Garlic, olive oil, mushroom", price: "30", img: aglioEolio },
      { name: "Pesto Omurice", desc: "Pesto sauce, omurice", price: "33", img: omurice },
    ],
  },
  {
    title: "Pastry & Snacks",
    img: cookie,
    items: [
      { name: "Choco Chip Cookie", desc: "Warm, gooey, classic", price: "20", img: cookie },
      { name: "Toast", desc: "Nutella - strawberry jam - cheese", price: "20", img: toast },
      { name: "Mix Bucket", desc: "Sampler dumpling khas rumah", price: "26", img: dumplings },
      { name: "Cireng", desc: "Cireng renyah dengan saus", price: "20", img: cireng },
    ],
  },
];

function Menu() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <header className="relative pt-44 pb-20 px-6 text-center overflow-hidden">
        <Reveal>
          <span className="inline-flex items-center gap-3 text-[10px] tracking-[0.4em] uppercase text-accent">
            <span className="h-px w-8 bg-accent" /> Volume II - The Menu{" "}
            <span className="h-px w-8 bg-accent" />
          </span>
          <h1 className="font-display text-6xl sm:text-8xl mt-8 leading-[0.9] text-balance">
            Diseduh dengan <span className="italic">care</span>,<br />
            disajikan dengan <span className="italic">shade.</span>
          </h1>
          <p className="mt-8 max-w-xl mx-auto text-foreground/70 italic font-serif text-lg">
            - pilihan kecil yang dipikirkan pelan untuk sore panjang dan obrolan tenang.
          </p>
          <Divider className="max-w-xs mx-auto mt-12" />
        </Reveal>
      </header>

      <div className="max-w-[1200px] mx-auto px-6 pb-32 space-y-28">
        {sections.map((sec, idx) => (
          <Reveal key={sec.title}>
            <div
              className={`grid md:grid-cols-12 gap-12 items-start ${idx % 2 ? "md:[&>*:first-child]:order-2" : ""}`}
            >
              <div className="md:col-span-5">
                <div className="aspect-[4/5] overflow-hidden rounded-sm relative">
                  <img
                    src={sec.img}
                    alt={sec.title}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                  <span className="absolute top-4 left-4 bg-background/85 backdrop-blur text-[10px] tracking-[0.35em] uppercase px-3 py-1.5">
                    No. {String(idx + 1).padStart(2, "0")}
                  </span>
                </div>
              </div>
              <div className="md:col-span-7 md:pt-6">
                <div className="flex items-center gap-3 mb-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  <span className="text-[10px] tracking-[0.35em] uppercase text-muted-foreground">
                    Chapter {String(idx + 1).padStart(2, "0")}
                  </span>
                </div>
                <h2 className="font-display text-5xl leading-[0.95] mb-10">{sec.title}</h2>
                <ul className="divide-y divide-border">
                  {sec.items.map((item) => (
                    <li key={item.name} className="py-6 flex gap-6 items-center group">
                      <div className="h-16 w-16 sm:h-20 sm:w-20 shrink-0 overflow-hidden rounded-sm bg-secondary">
                        <img
                          src={item.img}
                          alt={item.name}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-serif text-2xl">{item.name}</h3>
                        <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                      <span className="hidden sm:block flex-1 border-b border-dotted border-border self-end mb-2 mx-2 max-w-[60%] opacity-60" />
                      <span className="font-serif text-2xl text-accent shrink-0">
                        {item.price}
                        <span className="text-sm">k</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
      <Footer />
    </div>
  );
}
