import { Reveal } from "./Reveal";

const steps = [
  {
    roman: "I",
    title: "Bean",
    note: "Coffea arabica",
    desc: "Cherry kopi pilihan dari dataran tinggi Jawa.",
    icon: (
      <svg
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      >
        <ellipse cx="32" cy="32" rx="14" ry="22" />
        <path d="M32 12 C 28 22 28 42 32 52" />
      </svg>
    ),
  },
  {
    roman: "II",
    title: "Roast",
    note: "Medium-dark profile",
    desc: "Disangrai pelan, lalu diistirahatkan untuk rasa yang lebih jernih.",
    icon: (
      <svg
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      >
        <path d="M16 50 Q 32 30 48 50" />
        <path d="M22 38 Q 22 30 28 28" />
        <path d="M32 36 Q 32 26 38 24" />
        <path d="M42 38 Q 42 30 48 28" />
      </svg>
    ),
  },
  {
    roman: "III",
    title: "Grind",
    note: "Burr-milled, by cup",
    desc: "Setiap porsi digiling tepat sebelum diseduh.",
    icon: (
      <svg
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      >
        <circle cx="32" cy="32" r="18" />
        <path d="M32 14 L32 50 M14 32 L50 32 M19 19 L45 45 M45 19 L19 45" />
      </svg>
    ),
  },
  {
    roman: "IV",
    title: "Brew",
    note: "Hand poured - 92 degC",
    desc: "Bloom yang sabar, spiral yang stabil, dan waktu yang cukup.",
    icon: (
      <svg
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      >
        <path d="M22 10 L42 10 L40 24 L24 24 Z" />
        <path d="M24 24 Q 18 36 32 50 Q 46 36 40 24" />
        <path d="M32 14 L32 6" />
      </svg>
    ),
  },
  {
    roman: "V",
    title: "Cup",
    note: "Disajikan hangat, dengan cerita",
    desc: "Milikmu, selama kamu ingin tinggal lebih lama.",
    icon: (
      <svg
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      >
        <path d="M14 22 L46 22 L42 50 L18 50 Z" />
        <path d="M46 28 Q 56 28 56 36 Q 56 44 46 44" />
        <path d="M26 14 Q 30 18 26 22 M34 12 Q 38 16 34 20" />
      </svg>
    ),
  },
];

export function Anatomy() {
  return (
    <section className="relative py-32 px-6 lg:px-10 bg-bone border-y border-border overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-3 text-[10px] tracking-[0.4em] uppercase text-accent">
              <span className="h-px w-8 bg-accent" /> Plate - Fig. I
              <span className="h-px w-8 bg-accent" />
            </span>
            <h2 className="font-display text-5xl sm:text-6xl mt-6 leading-[0.95] text-balance">
              Anatomi <span className="italic">a cup.</span>
            </h2>
            <p className="mt-6 text-foreground/65 italic font-serif">
              Dari biji hingga ke tanganmu - lima langkah yang tenang.
            </p>
          </div>
        </Reveal>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-5 gap-y-14 gap-x-6 relative">
          {/* horizontal botanical rule */}
          <div className="hidden md:block absolute top-[58px] left-[10%] right-[10%] border-t border-dashed border-border pointer-events-none" />
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08} className="text-center relative">
              <div className="mx-auto mb-6 grid place-items-center h-28 w-28 rounded-full bg-background border border-border text-forest relative z-10">
                <div className="h-14 w-14">{s.icon}</div>
              </div>
              <span className="block font-serif italic text-brass text-sm tracking-wider">
                - {s.roman} -
              </span>
              <h3 className="font-display text-2xl mt-2">{s.title}</h3>
              <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mt-2">
                {s.note}
              </p>
              <p className="text-sm text-foreground/65 mt-3 leading-relaxed max-w-[14rem] mx-auto">
                {s.desc}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
