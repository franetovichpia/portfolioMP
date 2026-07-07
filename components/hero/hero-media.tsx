"use client";

import { motion } from "framer-motion";

export function HeroMedia() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
      className="relative mx-auto mt-16 w-full max-w-xl lg:mt-0"
    >
      <div className="absolute -inset-8 rounded-[3rem] bg-primary/10 blur-3xl" />

      <div className="relative rounded-[2rem] border border-border bg-card/80 p-3 shadow-2xl backdrop-blur">
        <div className="overflow-hidden rounded-[1.5rem] border border-border bg-secondary">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="aspect-[16/10] w-full object-cover"
            preload="auto"
            poster="/projects/arqstudio/home.png"
            >
                <source src="/videos/arqstudio.mp4" type="video/mp4" />
                tu navegador no soporta la etiqueta de video.
          </video>
        </div>
            
        <div className="mt-4 flex items-center justify-between px-2 pb-1">
          <div>
            <p className="text-sm font-medium">Preview interactivo</p>
            <p className="text-xs text-muted-foreground">
              Video en loop del proyecto
            </p>
          </div>

          <div className="flex gap-1.5">
            <span className="h-2 w-2 rounded-full bg-primary/70" />
            <span className="h-2 w-2 rounded-full bg-border" />
            <span className="h-2 w-2 rounded-full bg-border" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}