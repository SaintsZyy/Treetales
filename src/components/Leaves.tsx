import { motion } from "framer-motion";
import { useMemo } from "react";

const LeafShape = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.4"
  >
    <path d="M4 20 C4 11 10 4 21 3 C20 14 13 20 4 20 Z" strokeLinejoin="round" />
    <path d="M4 20 L17 7" strokeLinecap="round" />
  </svg>
);

type LeafParticle = {
  delay: number;
  drift: number;
  duration: number;
  left: number;
  rotate: number;
  size: number;
};

export function Leaves({ count = 8, className = "" }: { count?: number; className?: string }) {
  const leaves = useMemo<LeafParticle[]>(
    () =>
      Array.from({ length: count }, (_, i) => ({
        delay: i * 0.7,
        drift: 24 + ((i * 17) % 56),
        duration: 9 + (i % 4) * 1.4,
        left: 8 + ((i * 13) % 84),
        rotate: -30 + ((i * 29) % 90),
        size: 14 + (i % 4) * 5,
      })),
    [count],
  );

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {leaves.map((leaf, i) => (
        <motion.div
          key={i}
          className="absolute -top-10 text-brass/70"
          style={{ left: `${leaf.left}%`, height: leaf.size, width: leaf.size }}
          initial={{ opacity: 0, y: "-10vh", x: 0, rotate: leaf.rotate }}
          animate={{
            opacity: [0, 0.85, 0.7, 0],
            rotate: [leaf.rotate, leaf.rotate + 70, leaf.rotate + 145],
            x: [0, leaf.drift, -leaf.drift * 0.4, leaf.drift * 0.7],
            y: ["-10vh", "35vh", "72vh", "112vh"],
          }}
          transition={{
            delay: leaf.delay,
            duration: leaf.duration,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 1.5,
          }}
        >
          <LeafShape className="h-full w-full" />
        </motion.div>
      ))}
    </div>
  );
}
