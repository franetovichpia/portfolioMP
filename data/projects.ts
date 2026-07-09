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
    id: "la-piccola",
    slug: "la-piccola",
    title: "La Piccola",
    shortDescription:
      "Aplicación móvil para la gestión integral de restaurantes.",
    description:
      "Aplicación desarrollada con Ionic y Angular para administrar clientes, mesas, pedidos, cocina, bar, pagos, reportes y notificaciones push.",
    technologies: [
      "Ionic",
      "Angular",
      "Supabase",
      "PostgreSQL",
      "Capacitor",
      "Push Notifications",
      "QR Scanner",
      "Camera",
    ],
    images: [
      "/projects/la-piccola/inicio-registro1.png",
      "/projects/la-piccola/ingreso.jpeg",
      "/projects/la-piccola/menu.jpeg",
      "/projects/la-piccola/mail.jpeg",
      "/projects/la-piccola/reportes.jpeg",
      "/projects/la-piccola/panel-dueño.jpeg",
      "/projects/la-piccola/branding.png",
    ],
    github: "https://github.com/julian-deca/grupo1-2026",
    category: "Mobile",
    year: 2026,
    role: "Desarrollo mobile con Ionic, Angular y Supabase.",
    featured: true,
  },

  {
    id: "gestoria-automotor",
    slug: "gestoria-automotor",
    title: "Gestoría Automotor",
    shortDescription:
      "Landing page profesional para una mandataria automotor.",
    description:
      "Landing desarrollada en Next.js con diseño minimalista y elegante, orientada a captar consultas para servicios de gestoría automotor. Incluye secciones de servicios, proceso de trabajo, preguntas frecuentes, contacto y una identidad visual propia.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Vercel",
    ],
    images: [
      "/projects/gestoria-automotor/home.png",
      "/projects/gestoria-automotor/services.png",
      "/projects/gestoria-automotor/contact.png",
    ],
    github: "https://github.com/franetovichpia/gestoria",
    category: "Frontend",
    year: 2026,
    role: "Diseño UI/UX y desarrollo Frontend.",
    featured: true,
  },

  {
    id: "red-social",
    slug: "red-social",
    title: "Red Social Full Stack",
    shortDescription:
      "Red social con autenticación, publicaciones y panel administrativo.",
    description:
      "Aplicación full stack desarrollada con Angular y NestJS. Incluye autenticación JWT, publicaciones multimedia, roles de usuario, panel de administración y almacenamiento de imágenes en Cloudinary.",
    technologies: [
      "Angular",
      "NestJS",
      "MongoDB",
      "JWT",
      "Cloudinary",
    ],
    github:
      "https://github.com/franetovichpia/Pia-Franetovich-TP2-PROG4-2026-C1",
    category: "Full Stack",
    year: 2026,
    role: "Arquitectura y desarrollo Full Stack.",
    featured: true,
  },
];