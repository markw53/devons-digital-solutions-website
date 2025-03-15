"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname(); // Get current page path

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0 }} // Start transparent
        animate={{ opacity: 1 }} // Fade in
        exit={{ opacity: 0 }} // Fade out
        transition={{ duration: 0.5 }} // Animation duration
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
