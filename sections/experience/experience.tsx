"use client";

import { motion } from "framer-motion";
import { BriefcaseBusiness } from "lucide-react";

import { experienceItems } from "@/data/experience";

export function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden px-6 py-24 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="mb-4 flex items-center gap-2 text-sm font-medium uppercase tracking-[0.2em] text-primary">
            <BriefcaseBusiness className="h-4 w-4" />
            Trayectoria profesional
          </div>

          <h2 className="max-w-3xl font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Experiencia
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
            Experiencia construyendo aplicaciones web y móviles completas,
            desde la idea inicial hasta su despliegue en producción.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute bottom-0 left-5 top-0 hidden w-px bg-border md:block" />

          <div className="space-y-8">
            {experienceItems.map((experience, index) => {
              const Icon = experience.icon;

              return (
                <motion.article
                  key={`${experience.title}-${experience.organization}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.1,
                  }}
                  className="relative md:pl-16"
                >
                  <div className="absolute left-0 top-8 z-10 hidden h-10 w-10 items-center justify-center rounded-full border border-border bg-background md:flex">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>

                  <div className="rounded-3xl border border-border/70 bg-card/60 p-6 shadow-sm backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8">
                    <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-start">
                      <div>
                        <h3 className="font-display text-2xl font-semibold text-foreground">
                          {experience.title}
                        </h3>

                        <p className="mt-1 font-medium text-primary">
                          {experience.organization}
                        </p>
                      </div>

                      <span className="w-fit rounded-full border border-border bg-background/70 px-4 py-2 text-sm text-muted-foreground">
                        {experience.period}
                      </span>
                    </div>

                    <p className="mt-6 max-w-4xl leading-7 text-muted-foreground">
                      {experience.description}
                    </p>

                    <div className="mt-7 grid gap-8 lg:grid-cols-[1.3fr_1fr]">
                      <div>
                        <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-foreground">
                          Principales tareas
                        </h4>

                        <ul className="space-y-3">
                          {experience.responsibilities.map((responsibility) => (
                            <li
                              key={responsibility}
                              className="flex gap-3 text-sm leading-6 text-muted-foreground"
                            >
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                              {responsibility}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-foreground">
                          Tecnologías
                        </h4>

                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((technology) => (
                            <span
                              key={technology}
                              className="rounded-full border border-border bg-background/60 px-3 py-1.5 text-xs font-medium text-muted-foreground"
                            >
                              {technology}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}