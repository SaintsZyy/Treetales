import { Reveal } from "./Reveal";

const quotes = [
  {
    body: "It feels like a chapter you don't want to end. The light through the leaves, the hum of the brewer - a quiet kind of beautiful.",
    by: "Ayu - visiting from Jakarta",
  },
  {
    body: "I came in for a quick coffee and stayed three hours writing. The trees do something to your shoulders.",
    by: "Reza - remote worker",
  },
  {
    body: "Their slow pour is a small ceremony. You leave with more than caffeine.",
    by: "Mira - coffee diary",
  },
];

export function ReadingRoom() {
  return (
    <section className="relative py-32 px-6 lg:px-10 overflow-hidden">
      <div className="max-w-[1100px] mx-auto">
        <Reveal>
          <div className="text-center">
            <span className="inline-flex items-center gap-3 text-[10px] tracking-[0.4em] uppercase text-accent">
              <span className="h-px w-8 bg-accent" /> The Reading Room
              <span className="h-px w-8 bg-accent" />
            </span>
            <h2 className="font-display text-5xl sm:text-6xl mt-6 leading-[0.95] text-balance">
              Pages, <span className="italic">left behind.</span>
            </h2>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <figure className="mt-20 max-w-3xl mx-auto text-center">
            <p className="font-serif text-2xl sm:text-3xl leading-[1.5] text-foreground/85 italic">
              <span className="font-display not-italic float-left text-[5.5rem] leading-[0.85] mr-3 mt-2 text-accent">
                {quotes[0].body.charAt(0)}
              </span>
              {quotes[0].body.slice(1)}
            </p>
            <figcaption className="mt-8 text-[11px] tracking-[0.3em] uppercase text-muted-foreground">
              * &nbsp; {quotes[0].by} &nbsp; *
            </figcaption>
          </figure>
        </Reveal>

        <div className="mt-20 grid md:grid-cols-2 gap-10">
          {quotes.slice(1).map((q, i) => (
            <Reveal key={q.by} delay={0.15 + i * 0.08}>
              <blockquote className="border-l border-accent pl-6 py-2">
                <p className="font-serif italic text-xl text-foreground/80 leading-relaxed">
                  "{q.body}"
                </p>
                <footer className="mt-4 text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
                  {q.by}
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
