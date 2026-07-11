"use client";

import { motion } from "framer-motion";
import {
  Braces,
  Cloud,
  Code2,
  Database,
  Smartphone,
  Wrench,
  type LucideIcon,
} from "lucide-react";

type SkillCategory = {
  title: string;
  description: string;
  icon: LucideIcon;
  skills: string[];
};

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    description:
      "Interfaces modernas, responsivas y enfocadas en la experiencia del usuario.",
    icon: Code2,
    skills: [
      "Angular",
      "Next.js",
      "React",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
    ],
  },
  {
    title: "Backend",
    description:
      "APIs, autenticación, lógica de negocio y arquitectura de aplicaciones.",
    icon: Braces,
    skills: [
      "NestJS",
      "Node.js",
      "Express",
      "JWT",
      "bcrypt",
      "REST APIs",
    ],
  },
  {
    title: "Bases de datos",
    description:
      "Modelado, almacenamiento y gestión de información en entornos SQL y NoSQL.",
    icon: Database,
    skills: [
      "MongoDB",
      "MySQL",
      "PostgreSQL",
      "Supabase",
      "Firebase",
      "SQLite",
    ],
  },
  {
    title: "Desarrollo mobile",
    description:
      "Aplicaciones móviles y experiencias multiplataforma conectadas a servicios cloud.",
    icon: Smartphone,
    skills: [
      "Ionic",
      "Capacitor",
      "Android",
      "PWA",
      "Push Notifications",
    ],
  },
  {
    title: "Cloud y despliegue",
    description:
      "Publicación, almacenamiento de archivos y despliegues en producción.",
    icon: Cloud,
    skills: [
      "Vercel",
      "Render",
      "Cloudinary",
      "Firebase",
      "Supabase",
    ],
  },
  {
    title: "Herramientas",
    description:
      "Herramientas utilizadas durante el desarrollo, diseño y pruebas.",
    icon: Wrench,
    skills: [
      "Git",
      "GitHub",
      "Docker",
      "Postman",
      "Figma",
      "VS Code",
      "Linux",
    ],
  },
];

export function Skills() {
  return (
    <section
      id="skills"
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
            <Code2 className="h-4 w-4" />
            Herramientas y tecnologías
          </div>

          <h2 className="max-w-3xl font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Skills
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
            Tecnologías que utilizo para desarrollar aplicaciones web, sistemas
            de gestión y experiencias móviles completas.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;

            return (
              <motion.article
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.07,
                }}
                className="group rounded-3xl border border-border/70 bg-card/60 p-6 shadow-sm backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-7"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 transition-transform duration-300 group-hover:scale-105">
                  <Icon className="h-6 w-6 text-primary" />
                </div>

                <h3 className="mt-6 font-display text-2xl font-semibold text-foreground">
                  {category.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {category.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-border bg-background/70 px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}