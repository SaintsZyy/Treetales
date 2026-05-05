import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const logoDrawPaths = [
  { d: "M75 68 C75 56 75 44 75 31 M61 41 C72 41 85 41 98 41", duration: 1.32 },
  { d: "M111 68 C111 56 111 45 111 39 C111 33 120 32 130 40", duration: 1.46 },
  {
    d: "M146 53 C146 35 178 35 178 52 C178 66 157 68 146 58 C157 58 169 58 180 58",
    duration: 1.39,
  },
  { d: "M195 53 C195 35 227 35 227 52 C227 66 206 68 195 58 C206 58 218 58 229 58", duration: 1.5 },
  { d: "M248 68 C248 56 248 43 248 31 M234 41 C246 41 259 41 271 41", duration: 1.35 },
  { d: "M291 68 C275 68 274 37 296 37 C317 37 317 68 291 68", duration: 1.55 },
  { d: "M330 68 C330 57 330 43 330 30", duration: 1.28 },
  {
    d: "M350 53 C350 35 382 35 382 52 C382 66 361 68 350 58 C361 58 373 58 384 58",
    duration: 1.44,
  },
  {
    d: "M403 41 C392 34 374 40 386 51 C398 61 417 57 405 68 C394 76 378 68 376 64",
    duration: 1.52,
  },
];

export function Intro() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const seen = sessionStorage.getItem("tt_intro_seen");
    if (seen || reduce) return;
    setShow(true);
    document.body.style.overflow = "hidden";
    const t = window.setTimeout(() => {
      setShow(false);
      sessionStorage.setItem("tt_intro_seen", "1");
      document.body.style.overflow = "";
    }, 3200);
    return () => {
      window.clearTimeout(t);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="intro"
          initial={{ clipPath: "inset(0 0 0 0)" }}
          exit={{ clipPath: "inset(0 0 100% 0)" }}
          transition={{ duration: 1.05, ease: [0.76, 0, 0.24, 1], delay: 0.08 }}
          className="fixed inset-0 z-10000 bg-forest text-bone grid place-items-center overflow-hidden"
        >
          <motion.div
            className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(190,141,66,0.22),transparent_34%),linear-gradient(140deg,rgba(246,239,219,0.08),transparent_42%)]"
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          />
          <motion.div
            className="absolute inset-x-8 top-8 h-px bg-bone/15 sm:inset-x-16"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          />
          <motion.div
            className="absolute inset-x-8 bottom-8 h-px bg-bone/15 sm:inset-x-16"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          />

          <div className="relative flex flex-col items-center gap-8 px-6">
            <motion.div
              aria-label="treetales"
              role="img"
              className="rounded-lg bg-bone px-6 py-4 text-forest drop-shadow-[0_18px_38px_rgba(0,0,0,0.22)] sm:px-8 sm:py-5"
              initial={{ opacity: 0, y: 16, scale: 0.92 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <svg
                viewBox="0 0 430 96"
                className="block h-14 w-65 overflow-visible sm:h-20 sm:w-90"
              >
                <defs>
                  <mask id="treetales-draw-mask" maskUnits="userSpaceOnUse">
                    <rect width="430" height="96" fill="black" />
                    {logoDrawPaths.map(({ d, duration }) => (
                      <motion.path
                        key={d}
                        d={d}
                        fill="none"
                        stroke="white"
                        strokeWidth="42"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{
                          duration,
                          ease: "easeInOut",
                        }}
                      />
                    ))}
                  </mask>
                </defs>
                <text
                  x="215"
                  y="65"
                  textAnchor="middle"
                  className="font-sans text-[68px] font-black lowercase leading-none"
                  fill="currentColor"
                  mask="url(#treetales-draw-mask)"
                >
                  treetales
                </text>
              </svg>
            </motion.div>

            <motion.div
              className="h-px w-40 overflow-hidden bg-bone/15"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 1.85 }}
            >
              <motion.div
                className="h-full bg-brass"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 1, delay: 1.9, ease: [0.76, 0, 0.24, 1] }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
