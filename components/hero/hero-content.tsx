"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

import { HeroButtons } from "@/components/hero/hero-buttons";
import { HeroStats } from "@/components/hero/hero-stats";

export function HeroContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="max-w-3xl"
    >
      <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-2 text-sm text-muted-foreground backdrop-blur">
        <Sparkles className="h-4 w-4 text-primary" />
        Diseño · Desarrollo · Estrategia digital
      </div>

      <h1 className="mt-8 font-display text-6xl font-semibold leading-[0.95] tracking-tight text-foreground sm:text-7xl lg:text-8xl">
        Experiencias digitales que convierten visitas en clientes.
      </h1>

      <p className="mt-8 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
        Diseño y desarrollo landing pages, sistemas web, e-commerce y
        aplicaciones modernas con foco en estética, rendimiento y crecimiento
        real para marcas y negocios.
      </p>

      <HeroButtons />
      <HeroStats />
    </motion.div>
  );
}