import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { Divider } from "@/components/Divider";
import coffee from "@/assets/coffee.jpg";
import pour from "@/assets/pour.jpg";
import plants from "@/assets/plants.jpg";
import ambience1 from "@/assets/ambience1.jpg";

export const journals = [
  {
    slug: "the-quiet-art-of-the-pour",
    title: "The Quiet Art of the Pour",
    excerpt: "On patience, gravity, and why a slow brew tastes like a Sunday morning.",
    date: "April 12, 2026",
    read: "5 min",
    img: pour,
    body: [
      "There is a particular kind of stillness that lives inside a pour. The kettle tilts, the spout breathes, and a small spiral of water finds its way through coffee grounds - taking, with it, almost everything worth saying.",
      "We brew slowly because the bean asks us to. Hurry it, and the cup turns sharp. Wait, and it opens - chocolate, citrus, a quiet sweetness that lingers like a held note.",
      "The first bloom is our favourite moment. The grounds rise, exhale, and settle. Coffee, like trees, prefers to be unhurried.",
    ],
  },
  {
    slug: "from-java-highlands-with-love",
    title: "From Java Highlands, with Love",
    excerpt: "A short letter to the farmers, the slopes, and the mornings that shaped our beans.",
    date: "March 28, 2026",
    read: "4 min",
    img: coffee,
    body: [
      "Every bag we open carries the breath of a hillside. The farmers we work with in Central Java tend their plots with the kind of attention you only see in small, patient places.",
      "We visit when we can. We listen more than we ask. We come back with cherries that have known fog, sun, and the songs of strangers.",
      "If a cup of Treetales tastes like somewhere - it tastes like there.",
    ],
  },
  {
    slug: "growing-a-room",
    title: "Growing a Room",
    excerpt: "How the plants moved in, took over, and made the cafe feel like home.",
    date: "March 02, 2026",
    read: "3 min",
    img: plants,
    body: [
      "It began with one fiddle-leaf by the window. Then a monstera. Then a corner that wouldn't stop turning into a small jungle.",
      "Plants change a room the way music changes a silence. They listen back.",
      "Today, half the staff are botanists by accident. We water on Tuesdays and Fridays. We talk to them sometimes. They seem to like the espresso machine.",
    ],
  },
  {
    slug: "rainy-afternoons-and-other-good-reasons",
    title: "Rainy Afternoons & Other Good Reasons",
    excerpt: "A small love letter to weather, window seats, and staying a while longer.",
    date: "February 14, 2026",
    read: "3 min",
    img: ambience1,
    body: [
      "Some afternoons arrive with rain and a soft request: stay. We have learned to listen.",
      "The window seat fills up first. Then the booths. Then the corner table where someone always brings a notebook.",
      "If you find yourself here on a wet Tuesday - order the cocoa. Watch the leaves. The world will be there when you return.",
    ],
  },
];

export const Route = createFileRoute("/journal")({
  head: () => ({
    meta: [
      { title: "Journal - Treetales Coffee & Eatery" },
      {
        name: "description",
        content: "Esai pendek tentang kopi, tanaman, dan ritual pelan di botanical cafe Semarang.",
      },
      { property: "og:title", content: "Journal - Treetales" },
      {
        property: "og:description",
        content: "Esai pendek tentang kopi, tanaman, dan slow ceremonies.",
      },
    ],
  }),
  component: JournalIndex,
});

function JournalIndex() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <section className="pt-40 pb-20 px-6 lg:px-10">
        <div className="max-w-[1200px] mx-auto">
          <Reveal>
            <span className="flex items-center gap-3 text-[10px] tracking-[0.4em] uppercase text-accent">
              <span className="h-px w-8 bg-accent" /> Volume 06 - Journal
            </span>
            <h1 className="font-display text-6xl sm:text-8xl mt-6 leading-[0.9] text-balance">
              Catatan dari <span className="italic">bawah teduh.</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg text-foreground/65 italic font-serif">
              Slow essays tentang kopi, tanaman, dan ritual kecil di sore hari.
            </p>
          </Reveal>

          <Divider className="!my-16" />

          <ul className="divide-y divide-border">
            {journals.map((j, i) => (
              <Reveal key={j.slug} delay={i * 0.05}>
                <li>
                  <Link
                    to="/journal/$slug"
                    params={{ slug: j.slug }}
                    data-cursor="Read"
                    className="group grid grid-cols-12 gap-6 py-10 items-center"
                  >
                    <span className="col-span-1 text-[10px] tracking-[0.3em] text-accent">
                      0{i + 1}
                    </span>
                    <div className="col-span-11 sm:col-span-6">
                      <p className="text-[10px] tracking-[0.35em] uppercase text-muted-foreground mb-2">
                        {j.date} - {j.read}
                      </p>
                      <h2 className="font-display text-3xl sm:text-4xl leading-tight group-hover:italic transition-all">
                        {j.title}
                      </h2>
                      <p className="mt-3 text-foreground/65 max-w-md leading-relaxed">
                        {j.excerpt}
                      </p>
                    </div>
                    <div className="hidden sm:block sm:col-span-5 aspect-[5/3] overflow-hidden rounded-sm">
                      <img
                        src={j.img}
                        alt={j.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  </Link>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
      <Footer />
    </div>
  );
}
