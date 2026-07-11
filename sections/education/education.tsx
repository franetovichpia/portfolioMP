"use client";

import { motion } from "framer-motion";
import { BookOpen, Languages } from "lucide-react";

import { educationItems, languages } from "@/data/experience";

export function Education() {
  return (
    <section
      id="education"
      className="relative bg-muted/30 px-6 py-24 sm:px-8 lg:px-12"
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
            <BookOpen className="h-4 w-4" />
            Formación
          </div>

          <h2 className="font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Educación
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
            Mi formación combina fundamentos de programación, arquitectura de
            software y experiencia práctica desarrollando productos completos.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[1.5fr_0.8fr]">
          <div className="space-y-6">
            {educationItems.map((education, index) => {
              const Icon = education.icon;

              return (
                <motion.article
                  key={education.title}
                  initial={{ opacity: 0, x: -25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.1,
                  }}
                  className="rounded-3xl border border-border/70 bg-background/80 p-6 shadow-sm backdrop-blur-sm sm:p-8"
                >
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-col justify-between gap-3 xl:flex-row xl:items-start">
                        <div>
                          <h3 className="font-display text-2xl font-semibold text-foreground">
                            {education.title}
                          </h3>

                          <p className="mt-2 font-medium leading-6 text-primary">
                            {education.institution}
                          </p>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          <span className="rounded-full border border-border px-3 py-1.5 text-xs text-muted-foreground">
                            {education.period}
                          </span>

                          <span className="rounded-full bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary">
                            {education.status}
                          </span>
                        </div>
                      </div>

                      <p className="mt-6 leading-7 text-muted-foreground">
                        {education.description}
                      </p>

                      <div className="mt-7 grid gap-3 sm:grid-cols-2">
                        {education.subjects.map((subject) => (
                          <div
                            key={subject}
                            className="flex items-center gap-3 rounded-2xl border border-border/60 bg-muted/30 px-4 py-3 text-sm text-muted-foreground"
                          >
                            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                            {subject}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>

          <motion.aside
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
            className="h-fit rounded-3xl border border-border/70 bg-background/80 p-6 shadow-sm backdrop-blur-sm sm:p-8"
          >
            <div className="mb-7 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10">
                <Languages className="h-5 w-5 text-primary" />
              </div>

              <div>
                <p className="text-sm text-muted-foreground">
                  Comunicación
                </p>

                <h3 className="font-display text-xl font-semibold text-foreground">
                  Idiomas
                </h3>
              </div>
            </div>

            <div className="space-y-4">
              {languages.map((item) => (
                <div
                  key={item.language}
                  className="flex items-center justify-between gap-4 border-b border-border/60 pb-4 last:border-none last:pb-0"
                >
                  <span className="font-medium text-foreground">
                    {item.language}
                  </span>

                  <span className="rounded-full bg-muted px-3 py-1.5 text-xs text-muted-foreground">
                    {item.level}
                  </span>
                </div>
              ))}
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}