"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import { projects } from "@/data/projects";

export function ProjectHorizontalCarousel() {
  return (
    <div className="relative">
      <div className="flex gap-6 overflow-x-auto pb-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {projects.map((project) => {
          const preview = project.images?.[0];

          return (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="group relative h-[430px] min-w-[260px] overflow-hidden rounded-[2rem] border border-border bg-black shadow-sm transition-all duration-500 hover:min-w-[82vw] hover:border-primary/40 hover:shadow-2xl md:min-w-[300px] md:hover:min-w-[720px] lg:hover:min-w-[820px]"
            >
              <Link href={`/proyectos/${project.slug}`} className="block h-full">
                {preview && (
                  <Image
                    src={preview}
                    alt={project.title}
                    fill
                    className="object-cover opacity-20 blur-[2px] grayscale transition-all duration-700 group-hover:scale-105 group-hover:opacity-100 group-hover:blur-0 group-hover:grayscale-0"
                  />
                )}

                <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-black/40 transition-opacity duration-700 group-hover:from-black/75 group-hover:via-black/35 group-hover:to-transparent" />

                <div className="absolute inset-0 flex flex-col justify-center p-8 transition-all duration-500 group-hover:items-start">
                  <div className="min-h-[26px]">
                    <p className="text-xs uppercase tracking-[0.35em] text-white/45 transition-colors group-hover:text-white/70">
                      {project.category}
                    </p>
                  </div>

                  <div className="mt-5 max-w-sm">
                    <h3 className="font-display text-4xl font-semibold leading-none text-white md:text-5xl">
                      {project.title}
                    </h3>

                    <p className="mt-5 translate-y-4 text-sm leading-7 text-white/75 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                      {project.shortDescription}
                    </p>
                  </div>
                </div>

                <div className="absolute bottom-8 left-8 inline-flex translate-y-6 items-center rounded-full bg-white px-5 py-3 text-sm font-medium text-black opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  Ver proyecto
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </Link>
            </motion.article>
          );
        })}
      </div>
    </div>
  );
}