"use client";

import { motion } from "framer-motion";

export function PageTransition() {
  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: "-100%" }}
      transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
      className="pointer-events-none fixed inset-0 z-[9999] bg-primary"
    />
  );
}