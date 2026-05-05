import { AnimatePresence, motion } from "framer-motion";
import { useRouterState } from "@tanstack/react-router";

export function PageTransition() {
  const { location } = useRouterState();
  const path = location.pathname;
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={path}
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
        style={{ transformOrigin: "top" }}
        className="fixed inset-0 z-[9990] bg-forest pointer-events-none"
      />
    </AnimatePresence>
  );
}
