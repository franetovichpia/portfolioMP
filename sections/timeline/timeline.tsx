"use client";

import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  GraduationCap,
  Laptop,
  Rocket,
  Smartphone,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

type TimelineItem = {
  year: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

const timelineItems: TimelineItem[] = [
  {
    year: "2024",
    title: "Inicio en la UTN",
    description:
      "Comencé la Tecnicatura Universitaria en Programación en la Facultad Regional Avellaneda, incorporando fundamentos de programación, bases de datos y desarrollo de software.",
    icon: GraduationCap,
  },
  {
    year: "2025",
    title: "Primeros proyectos completos",
    description:
      "Desarrollé aplicaciones aplicando programación orientada a objetos, bases de datos y arquitectura de software, avanzando desde proyectos académicos hacia soluciones más completas.",
    icon: Laptop,
  },
  {
    year: "2026",
    title: "Desarrollo Full Stack",
    description:
      "Construí aplicaciones web con Angular, Next.js, NestJS y MongoDB, implementando autenticación, APIs REST, paneles administrativos y despliegues en producción.",
    icon: BriefcaseBusiness,
  },
  {
    year: "2026",
    title: "Aplicaciones móviles",
    description:
      "Desarrollé aplicaciones con Ionic y Capacitor, integrando Firebase, Supabase, notificaciones push y funcionalidades adaptadas a dispositivos móviles.",
    icon: Smartphone,
  },
  {
    year: "Actualidad",
    title: "Desarrollo freelance",
    description:
      "Creo landing pages, sistemas de gestión, aplicaciones móviles y soluciones digitales orientadas a emprendimientos y pequeñas empresas.",
    icon: Rocket,
  },
  {
    year: "Próximo objetivo",
    title: "Crecer con Novaire",
    description:
      "Desarrollar una agencia digital enfocada en crear soluciones modernas, funcionales y escalables para empresas que buscan mejorar sus procesos y presencia online.",
    icon: Sparkles,
  },
];

export function Timeline() {
  return (
    <section
      id="timeline"
      className="relative bg-muted/30 px-6 py-24 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="mb-4 flex items-center gap-2 text-sm font-medium uppercase tracking-[0.2em] text-primary">
            <Rocket className="h-4 w-4" />
            Evolución profesional
          </div>

          <h2 className="max-w-3xl font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Mi recorrido
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
            Un recorrido de aprendizaje, proyectos y crecimiento continuo en el
            desarrollo de software.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute bottom-0 left-6 top-0 w-px bg-border md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-10">
            {timelineItems.map((item, index) => {
              const Icon = item.icon;
              const isLeft = index % 2 === 0;

              return (
                <motion.article
                  key={`${item.year}-${item.title}`}
                  initial={{
                    opacity: 0,
                    x: isLeft ? -30 : 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.06,
                  }}
                  className="relative grid md:grid-cols-2"
                >
                  <div
                    className={`ml-16 md:ml-0 ${
                      isLeft
                        ? "md:col-start-1 md:pr-12"
                        : "md:col-start-2 md:pl-12"
                    }`}
                  >
                    <div className="rounded-3xl border border-border/70 bg-background/80 p-6 shadow-sm backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-7">
                      <span className="inline-flex rounded-full bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary">
                        {item.year}
                      </span>

                      <h3 className="mt-4 font-display text-2xl font-semibold text-foreground">
                        {item.title}
                      </h3>

                      <p className="mt-4 text-sm leading-7 text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div className="absolute left-6 top-6 z-10 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border border-border bg-background shadow-sm md:left-1/2">
                    <Icon className="h-5 w-5 text-primary" />
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