import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "sonrisa-odonto",
    slug: "sonrisa-odonto",
    title: "Sonrisa Odonto",
    shortDescription:
      "Sistema odontológico con gestión de pacientes, turnos y administración.",
    description:
      "Proyecto orientado a clínicas odontológicas. Permite presentar servicios, organizar información importante y mostrar una experiencia digital profesional para pacientes.",
    technologies: ["Angular", "NestJS", "MongoDB", "JWT"],
    images: [
      "/projects/sonrisa-odonto/1.png",
      "/projects/sonrisa-odonto/home.png",
      "/projects/sonrisa-odonto/opiniones.png",
      "/projects/sonrisa-odonto/servicios.png",
    ],
    github: "https://github.com/franetovichpia/SonrisaOdonto",
    category: "Full Stack",
    year: 2026,
    role: "Diseño UI y desarrollo Full Stack",
    featured: true,
  },
  {
    id: "arqstudio",
    slug: "arqstudio",
    title: "ArqStudio",
    shortDescription:
      "Landing page minimalista para estudio de arquitectura.",
    description:
      "Sitio institucional pensado para transmitir estética, confianza y profesionalismo. El diseño prioriza imágenes, jerarquía visual y navegación clara.",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    images: [
      "/projects/arqstudio/home.png",
      "/projects/arqstudio/servicios.png",
      "/projects/arqstudio/contacto.png",
    ],
    github: "https://github.com/franetovichpia/ArqStudio",
    category: "Frontend",
    year: 2026,
    role: "Diseño UI y desarrollo Frontend",
    featured: true,
  },
  {
    id: "pipi-balloons",
    slug: "pipi-balloons",
    title: "Pipi Balloons",
    shortDescription:
      "E-commerce visual para catálogo y venta de globos personalizados.",
    description:
      "Proyecto pensado para mostrar productos de forma atractiva, facilitar consultas y construir una presencia digital más profesional para un emprendimiento.",
    technologies: ["React", "Node.js", "Express"],
    images: [
      "/projects/pipi-balloons/home.png",
      "/projects/pipi-balloons/general.png",
      "/projects/pipi-balloons/servicios.png",
      "/projects/pipi-balloons/trabajos.png",
      "/projects/pipi-balloons/trabajos2.png",
      "/projects/pipi-balloons/contacto.png",
    ],
    github: "https://github.com/franetovichpia/PipiBalloons",
    category: "Full Stack",
    year: 2026,
    role: "Diseño y desarrollo web",
    featured: true,
  },
  {
    id: "red-social",
    slug: "red-social",
    title: "Red Social Full Stack",
    shortDescription:
      "Red social con autenticación, publicaciones, panel admin y multimedia.",
    description:
      "Aplicación full stack desarrollada con arquitectura frontend y backend, autenticación JWT, gestión de publicaciones, roles de usuario y carga de archivos multimedia.",
    technologies: ["Angular", "NestJS", "MongoDB", "JWT", "Cloudinary"],
    github:
      "https://github.com/franetovichpia/Pia-Franetovich-TP2-PROG4-2026-C1",
    category: "Full Stack",
    year: 2026,
    role: "Arquitectura y desarrollo Full Stack",
    featured: true,
  },
];