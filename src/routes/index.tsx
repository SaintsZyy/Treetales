import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { Divider } from "@/components/Divider";
import { Leaves } from "@/components/Leaves";
import { Anatomy } from "@/components/Anatomy";
import { ReadingRoom } from "@/components/ReadingRoom";
import hero from "@/assets/hero.png";
import ambience1 from "@/assets/ambience1.jpg";
import ambience2 from "@/assets/ambience2.jpg";
import pour from "@/assets/pour.jpg";
import plants from "@/assets/plants.jpg";
import cozy from "@/assets/cozy.jpg";
import aglioEolio from "@/assets/menu/aglio-e-olio.jpg";
import cookie from "@/assets/menu/cookie.jpg";
import latte from "@/assets/menu/latte.jpg";
import matchaLatte from "@/assets/menu/matcha-latte.jpg";
import nasiGoreng from "@/assets/menu/nasi-goreng.jpg";

function useLocalTime() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const fmt = () =>
      new Intl.DateTimeFormat("en-GB", {
        timeZone: "Asia/Jakarta",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      }).format(new Date());
    setTime(fmt());
    const id = window.setInterval(() => setTime(fmt()), 30000);
    return () => window.clearInterval(id);
  }, []);
  return time;
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Treetales Coffee & Eatery - Tales told by trees" },
      {
        name: "description",
        content: "Coffee garden di Semarang dengan seduhan pelan, menu hangat, dan suasana teduh.",
      },
      { property: "og:title", content: "Treetales - Tales told by trees" },
      { property: "og:description", content: "Coffee garden di Semarang." },
      { property: "og:image", content: hero },
    ],
  }),
  component: Index,
});

const chapters = [
  {
    name: "Magic",
    category: "Signature",
    price: "30",
    img: latte,
    desc: "Double ristretto dan steamed milk, kecil tapi penuh karakter.",
  },
  {
    name: "V60 Manual Brew",
    category: "Slow Brew",
    price: "30",
    img: pour,
    desc: "Single origin, diseduh manual. Bright, clean, dan tenang.",
  },
  {
    name: "Aglio e Olio",
    category: "From the Kitchen",
    price: "30",
    img: aglioEolio,
    desc: "Bawang putih, olive oil, parmesan, mushroom. Sederhana dan pas.",
  },
  {
    name: "Nasi Goreng Spesial",
    category: "Hearth",
    price: "38",
    img: nasiGoreng,
    desc: "Nasi goreng house special yang hangat, royal, dan akrab.",
  },
  {
    name: "Choco Chip Cookie",
    category: "Pastry",
    price: "20",
    img: cookie,
    desc: "Hangat, chewy, dan terasa seperti Minggu yang pelan.",
  },
  {
    name: "Matcha Latte",
    category: "Garden",
    price: "28",
    img: matchaLatte,
    desc: "Ceremonial matcha dengan oat atau whole milk. Lembut dan earthy.",
  },
];

function Index() {
  const ref = useRef<HTMLDivElement>(null);
  const time = useLocalTime();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const titleY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <div className="min-h-screen bg-background overflow-x-clip">
      <Nav />

      {/* HERO - editorial fullscreen */}
      <section ref={ref} className="relative h-[100svh] overflow-hidden bg-forest">
        <motion.div style={{ y }} className="absolute inset-0">
          <img
            src={hero}
            alt="Treetales canopy"
            className="h-full w-full object-cover opacity-85 kenburns"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-forest/50 via-forest/20 to-forest/90" />
          {/* Sun rays */}
          <div className="absolute inset-0 pointer-events-none mix-blend-screen opacity-60">
            <div className="absolute -top-1/4 left-1/3 h-[140%] w-[60%] rotate-12 bg-[radial-gradient(ellipse_at_top,_rgba(255,225,170,0.35),_transparent_60%)] blur-2xl" />
            <div className="absolute -top-1/4 left-1/2 h-[140%] w-[40%] -rotate-6 bg-[radial-gradient(ellipse_at_top,_rgba(255,210,150,0.25),_transparent_60%)] blur-3xl" />
          </div>
        </motion.div>

        <Leaves count={8} className="z-[5]" />

        {/* Side meta lines */}
        <div className="absolute inset-y-0 left-6 lg:left-10 z-10 hidden md:flex flex-col justify-between py-28 text-bone/70 text-[10px] tracking-[0.4em] uppercase">
          <span className="[writing-mode:vertical-rl] rotate-180">Sejak 2023 - Semarang</span>
          <span className="[writing-mode:vertical-rl] rotate-180">07 00 S - 110 26 E</span>
        </div>
        <div className="absolute inset-y-0 right-6 lg:right-10 z-10 hidden md:flex flex-col justify-between py-28 text-bone/70 text-[10px] tracking-[0.4em] uppercase">
          <span className="[writing-mode:vertical-rl]">Chapter Zero</span>
          <span className="[writing-mode:vertical-rl]">Scroll to wander</span>
        </div>

        {/* Local time widget */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="absolute top-24 left-1/2 -translate-x-1/2 z-10 flex items-center gap-3 text-bone/75 text-[10px] tracking-[0.4em] uppercase"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-brass animate-pulse" />
          <span>{time || "00:00"} WIB - Semarang - 27C</span>
        </motion.div>

        {/* Center stack */}
        <motion.div
          style={{ y: titleY, opacity }}
          className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center"
        >
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.9 }}
            className="mt-36 sm:mt-40 lg:mt-44 max-w-md text-bone/85 text-base sm:text-lg italic font-serif"
          >
            - sebuah coffee garden tempat setiap cangkir dimulai dengan cerita.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.05 }}
            className="mt-8 flex flex-wrap gap-3 justify-center"
          >
            <Link
              to="/menu"
              data-cursor="Read"
              className="inline-flex items-center gap-3 rounded-full bg-bone text-forest px-7 py-3.5 text-xs tracking-[0.25em] uppercase hover:bg-brass transition-colors"
            >
              Lihat Menu
            </Link>
            <Link
              to="/reserve"
              data-cursor="Reserve"
              className="inline-flex items-center gap-3 rounded-full border border-bone/40 text-bone px-7 py-3.5 text-xs tracking-[0.25em] uppercase hover:bg-bone/10 transition-colors"
            >
              Reservasi Tempat
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* PROLOGUE / running text */}
      <section className="py-10 overflow-hidden border-y border-border bg-secondary/40">
        <div className="marquee inline-flex gap-12 whitespace-nowrap font-serif italic text-2xl sm:text-3xl text-foreground/70">
          {Array.from({ length: 2 }).map((_, i) => (
            <span key={i} className="inline-flex items-center gap-10">
              <span>chapter one - the porch</span>
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              <span>chapter two - the brew</span>
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              <span>chapter three - the canopy</span>
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              <span>chapter four - the supper</span>
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
          ))}
        </div>
      </section>

      {/* ABOUT - editorial split */}
      <section className="relative py-32 px-6 lg:px-10">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <Reveal className="lg:col-span-5 lg:sticky lg:top-32">
            <span className="flex items-center gap-3 text-[10px] tracking-[0.4em] uppercase text-accent">
              <span className="h-px w-8 bg-accent" /> Chapter I - Cerita Kami
            </span>
            <h2 className="font-display text-5xl sm:text-7xl mt-6 leading-[0.95] text-balance">
              Di bawah <span className="italic">canopy</span>, kota terasa lebih pelan.
            </h2>
            <div className="mt-10 flex items-center gap-6">
              <span className="font-serif text-7xl text-accent leading-none">3</span>
              <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground max-w-[12rem]">
                tahun cerita pelan di bawah teduh kami
              </span>
            </div>
          </Reveal>

          <Reveal
            delay={0.1}
            className="lg:col-span-7 space-y-7 text-foreground/80 text-lg leading-[1.75]"
          >
            <p className="font-serif text-2xl leading-snug text-foreground">
              <span className="font-display text-6xl italic float-left mr-3 mt-1 leading-none text-accent">
                T
              </span>
              reetales berawal dari ide sederhana: sebuah ruang teduh tempat kota melambat,
              sementara kayu, daun, dan cahaya hangat mengambil alih cerita.
            </p>
            <p>
              Setiap sudut menyimpan bab kecil. Bangku taman mengenal obrolan panjang. Kursi dekat
              jendela menyimpan rahasia pekerja remote dan sore hujan. Meja komunal pelan-pelan
              mengubah orang asing menjadi teman.
            </p>
            <p>
              Kami menyeduh dengan hati, menyajikan dengan sabar, lalu membiarkan sisanya ikut
              angin. Datang bersama teman, buku catatan, atau dirimu sendiri; selalu ada kursi teduh
              yang menunggu.
            </p>
            <Divider className="!my-12" />
            <ul className="grid sm:grid-cols-3 gap-8 text-sm">
              {[
                ["Slow", "Diseduh tanpa terburu-buru"],
                ["Local", "Dipilih dari dataran tinggi Jawa"],
                ["Green", "Sebuah garden, bukan sekadar cafe"],
              ].map(([t, d]) => (
                <li key={t}>
                  <p className="font-serif italic text-2xl text-accent">{t}.</p>
                  <p className="text-muted-foreground mt-1">{d}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* MENU - editorial list with feature image */}
      <section className="py-32 px-6 lg:px-10 bg-forest text-bone">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
            <div>
              <span className="flex items-center gap-3 text-[10px] tracking-[0.4em] uppercase text-brass">
                <span className="h-px w-8 bg-brass" /> Chapter II - Menu
              </span>
              <h2 className="font-display text-5xl sm:text-7xl mt-6 leading-[0.95] text-balance max-w-3xl">
                Diseduh pelan, <span className="italic">disajikan hangat.</span>
              </h2>
            </div>
            <Link
              to="/menu"
              className="text-[11px] tracking-[0.3em] uppercase border-b border-bone/40 hover:border-brass hover:text-brass transition-colors pb-1"
            >
              Lihat menu lengkap &gt;
            </Link>
          </div>

          <div className="grid lg:grid-cols-12 gap-10">
            {/* Big feature */}
            <Reveal className="lg:col-span-5 lg:sticky lg:top-32 self-start">
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
                <img
                  src={pour}
                  alt="Slow pour"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute bottom-0 inset-x-0 p-8 bg-gradient-to-t from-forest/95 to-transparent">
                  <p className="text-[10px] tracking-[0.4em] uppercase text-brass mb-2">Pilihan</p>
                  <p className="font-display text-3xl italic">
                    "From bean to cup - every drop has a story."
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Editorial list */}
            <div className="lg:col-span-7 divide-y divide-bone/15">
              {chapters.map((item, i) => (
                <Reveal key={item.name} delay={i * 0.04}>
                  <article className="group grid grid-cols-12 gap-6 py-8 items-center hover:bg-bone/5 transition-colors -mx-4 px-4 rounded-sm">
                    <span className="col-span-1 text-[10px] tracking-[0.3em] text-brass/70">
                      0{i + 1}
                    </span>
                    <div className="col-span-7 sm:col-span-6">
                      <p className="text-[10px] tracking-[0.35em] uppercase text-bone/50 mb-1.5">
                        {item.category}
                      </p>
                      <h3 className="font-display text-3xl leading-tight">{item.name}</h3>
                      <p className="text-bone/65 text-sm mt-2 leading-relaxed max-w-md">
                        {item.desc}
                      </p>
                    </div>
                    <div className="hidden sm:block sm:col-span-3 aspect-square overflow-hidden rounded-sm">
                      <img
                        src={item.img}
                        alt={item.name}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="col-span-4 sm:col-span-2 text-right">
                      <span className="font-serif text-2xl text-brass">
                        {item.price}
                        <span className="text-sm">k</span>
                      </span>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ANATOMY OF A CUP */}
      <Anatomy />

      {/* GALLERY - asymmetric editorial */}
      <section className="py-32 px-6 lg:px-10 relative">
        <div className="max-w-[1400px] mx-auto">
          <Reveal>
            <span className="flex items-center gap-3 text-[10px] tracking-[0.4em] uppercase text-accent">
              <span className="h-px w-8 bg-accent" /> Chapter III - Ambience
            </span>
            <h2 className="font-display text-5xl sm:text-7xl mt-6 max-w-3xl text-balance leading-[0.95]">
              Sudut hangat untuk <span className="italic">slow moments.</span>
            </h2>
          </Reveal>

          <div className="mt-16 grid grid-cols-12 gap-3 sm:gap-4">
            <Reveal className="col-span-12 sm:col-span-7 row-span-2">
              <figure className="relative overflow-hidden rounded-sm group aspect-[4/3]">
                <img
                  src={ambience2}
                  alt="Garden seating"
                  className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <figcaption className="absolute top-4 left-4 text-bone text-[10px] tracking-[0.3em] uppercase bg-forest/60 backdrop-blur px-3 py-1.5">
                  Plate I - The Garden
                </figcaption>
              </figure>
            </Reveal>
            <Reveal delay={0.05} className="col-span-6 sm:col-span-5">
              <figure className="relative overflow-hidden rounded-sm group aspect-[4/5]">
                <img
                  src={plants}
                  alt="Plant corner"
                  className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <figcaption className="absolute top-4 left-4 text-bone text-[10px] tracking-[0.3em] uppercase bg-forest/60 backdrop-blur px-3 py-1.5">
                  Plate II - Greens
                </figcaption>
              </figure>
            </Reveal>
            <Reveal delay={0.1} className="col-span-6 sm:col-span-3">
              <figure className="relative overflow-hidden rounded-sm group aspect-square">
                <img
                  src={pour}
                  alt="Pour over"
                  className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </figure>
            </Reveal>
            <Reveal delay={0.12} className="col-span-6 sm:col-span-4">
              <figure className="relative overflow-hidden rounded-sm group aspect-square">
                <img
                  src={cozy}
                  alt="Cozy corner"
                  className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </figure>
            </Reveal>
            <Reveal delay={0.14} className="col-span-12 sm:col-span-5">
              <figure className="relative overflow-hidden rounded-sm group aspect-[4/3]">
                <img
                  src={ambience1}
                  alt="Plant wall"
                  className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <figcaption className="absolute top-4 left-4 text-bone text-[10px] tracking-[0.3em] uppercase bg-forest/60 backdrop-blur px-3 py-1.5">
                  Plate III - Indoor
                </figcaption>
              </figure>
            </Reveal>
          </div>

          <div className="mt-10 flex justify-center">
            <Link
              to="/gallery"
              className="inline-flex items-center gap-3 text-[11px] tracking-[0.3em] uppercase border-b border-foreground/40 hover:border-accent hover:text-accent transition-colors pb-1"
            >
              Lihat album lengkap &gt;
            </Link>
          </div>
        </div>
      </section>

      {/* FACILITIES - vertical numbered list, dark */}
      <section className="py-28 px-6 lg:px-10 bg-secondary/50 border-y border-border">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-12">
          <Reveal className="lg:col-span-4">
            <span className="flex items-center gap-3 text-[10px] tracking-[0.4em] uppercase text-accent">
              <span className="h-px w-8 bg-accent" /> Chapter IV - Fasilitas
            </span>
            <h2 className="font-display text-5xl sm:text-6xl mt-6 leading-[0.95] text-balance">
              Kenyamanan kecil, <span className="italic">ditempatkan dengan niat.</span>
            </h2>
          </Reveal>
          <ul className="lg:col-span-8 divide-y divide-border">
            {[
              { t: "Strong Wi-Fi", d: "Koneksi fiber untuk kerja tenang dan slow scrolling." },
              { t: "Musholla", d: "Ruang ibadah yang bersih dan tenang di sisi garden." },
              { t: "Cozy Seating", d: "Bantal lembut, booth kayu, dan jendela penuh cahaya." },
              {
                t: "Indoor & Outdoor",
                d: "Indoor atau outdoor, pilih suasana yang paling cocok hari ini.",
              },
            ].map((f, i) => (
              <Reveal key={f.t} delay={i * 0.05}>
                <li className="grid grid-cols-12 gap-4 py-7 items-baseline">
                  <span className="col-span-2 sm:col-span-1 font-serif text-3xl text-accent">
                    0{i + 1}
                  </span>
                  <h3 className="col-span-10 sm:col-span-4 font-display text-2xl sm:text-3xl">
                    {f.t}
                  </h3>
                  <p className="col-span-12 sm:col-span-7 text-foreground/65 leading-relaxed">
                    {f.d}
                  </p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* READING ROOM - testimonials */}
      <ReadingRoom />

      {/* RESERVATION CTA - full bleed image */}
      <section className="relative py-40 px-6 lg:px-10 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src={ambience2} alt="" className="h-full w-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-forest/75" />
        </div>
        <div className="max-w-3xl mx-auto text-center text-bone">
          <Reveal>
            <span className="text-[10px] tracking-[0.4em] uppercase text-brass">Reservasi</span>
            <h2 className="font-display text-5xl sm:text-7xl mt-6 leading-[0.95] text-balance">
              Simpan <span className="italic text-brass">kursi favoritmu</span> di bawah teduh.
            </h2>
            <p className="mt-8 text-bone/80 max-w-xl mx-auto text-lg leading-relaxed">
              Buka setiap hari, 08.00 - 24.00. Walk-in tetap bisa, tapi pesan singkat membuat sudut
              favoritmu siap menunggu.
            </p>
            <div className="mt-12 flex flex-wrap gap-4 justify-center">
              <a
                href="https://wa.me/6281328976408"
                className="inline-flex items-center gap-3 rounded-full bg-bone text-forest px-8 py-4 text-xs tracking-[0.25em] uppercase hover:bg-brass transition-colors"
              >
                Pesan Meja
              </a>
              <a
                href="tel:+6281328976408"
                className="inline-flex items-center gap-3 rounded-full border border-bone/40 text-bone px-8 py-4 text-xs tracking-[0.25em] uppercase hover:bg-bone/10 transition-colors"
              >
                +62 813-2897-6408
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* LOCATION */}
      <section className="py-28 px-6 lg:px-10">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-12 items-center">
          <Reveal className="lg:col-span-5">
            <span className="flex items-center gap-3 text-[10px] tracking-[0.4em] uppercase text-accent">
              <span className="h-px w-8 bg-accent" /> Temukan Kami
            </span>
            <h2 className="font-display text-4xl sm:text-6xl mt-6 leading-[0.95] text-balance">
              Sudut tenang di <span className="italic">Semarang Timur.</span>
            </h2>
            <p className="mt-8 text-foreground/70 max-w-md leading-relaxed">
              Parkir lega, suasana teduh, dan pintu yang mudah ditemukan.
            </p>
            <dl className="mt-10 space-y-4 text-sm border-t border-border pt-8">
              <div className="grid grid-cols-3 gap-4">
                <dt className="text-muted-foreground uppercase tracking-[0.25em] text-[10px]">
                  Alamat
                </dt>
                <dd className="col-span-2">Jl. Tirto Usodo Timur No. 29, Semarang</dd>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <dt className="text-muted-foreground uppercase tracking-[0.25em] text-[10px]">
                  Jam buka
                </dt>
                <dd className="col-span-2">Setiap hari - 08.00 - 24.00</dd>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <dt className="text-muted-foreground uppercase tracking-[0.25em] text-[10px]">
                  Telepon
                </dt>
                <dd className="col-span-2">+62 813-2897-6408</dd>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <dt className="text-muted-foreground uppercase tracking-[0.25em] text-[10px]">
                  Instagram
                </dt>
                <dd className="col-span-2">@treetales.coffee</dd>
              </div>
            </dl>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-7">
            <div className="aspect-[4/3] overflow-hidden rounded-sm border border-border shadow-2xl shadow-forest/10">
              <iframe
                title="Treetales location"
                src="https://www.google.com/maps?q=Jl+Tirto+Usodo+Timur+No+29+Semarang&output=embed"
                className="h-full w-full grayscale-[30%]"
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
