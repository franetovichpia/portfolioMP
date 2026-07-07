"use client";

import { motion } from "framer-motion";

export function BackgroundWaves() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <motion.svg
        className="absolute inset-0 h-full w-full opacity-70"
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 1 }}
      >
        <motion.path
          d="M-100 620 C 180 420, 360 780, 650 580 S 1120 390, 1540 640"
          fill="none"
          stroke="hsl(var(--border))"
          strokeWidth="1.4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.2, ease: "easeInOut" }}
        />

        <motion.path
          d="M-100 690 C 180 490, 390 840, 720 640 S 1140 470, 1540 720"
          fill="none"
          stroke="#d6cbbb"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.6, ease: "easeInOut", delay: 0.2 }}
        />

        <motion.path
          d="M-100 760 C 200 560, 430 900, 780 720 S 1150 560, 1540 790"
          fill="none"
          stroke="#e7ded0"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, ease: "easeInOut", delay: 0.4 }}
        />
      </motion.svg>

      <div className="absolute left-[-12%] top-[18%] h-[420px] w-[420px] rounded-full bg-primary/10 blur-[120px]" />
      <div className="absolute right-[-10%] top-[8%] h-[360px] w-[360px] rounded-full bg-[#efe7dc] blur-[120px]" />
      <div className="absolute bottom-[-20%] left-[30%] h-[420px] w-[420px] rounded-full bg-white/60 blur-[130px]" />
    </div>
  );
}