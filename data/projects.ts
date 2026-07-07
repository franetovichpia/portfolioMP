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
    title: "La Piccola",
    slug: "la-piccola",
    category: "App Mobile",
    status: "Finalizado",
    year: "2026",
    description:
      "Aplicación móvil de gestión integral para restaurante, desarrollada con Ionic y Angular. Permite administrar clientes, mesas, pedidos, cocina, bar, mozos, pagos, facturación, juegos con descuentos, encuestas, reportes y notificaciones.",
    longDescription:
      "La Piccola es una app mobile orientada a la gestión completa de un restaurante. Incluye distintos perfiles de usuario como dueño, supervisor, metre, mozo, cocinero, cantinero, cliente registrado y cliente anónimo. El sistema permite gestionar altas, aprobación de clientes, QR de ingreso y mesas, menú, carrito, chat con mozo, pedidos por sector, cuenta, propinas, factura PDF por email y reportes.",
    technologies: [
      "Ionic",
      "Angular",
      "Supabase",
      "PostgreSQL",
      "Capacitor",
      "Push Notifications",
      "QR Scanner",
      "Camera",
      "EmailJS",
      "PDF",
      "Git",
      "GitHub"],
    role:
      "Desarrollo mobile y funcionalidades principales: alta de empleados, platos, bebidas y mesas; registro y aprobación de clientes; ingreso anónimo; asignación de mesa; menú, carrito de compras, chat con mozo, autenticación, Supabase y servicios móviles.",
    features: [
      "Gestión de empleados, clientes, platos, bebidas y mesas",
      "Ingreso de clientes registrados y anónimos mediante QR",
      "Asignación de mesas por metre",
      "Menú digital con carrito de compras",
      "Chat en vivo entre cliente y mozo",
      "Gestión de pedidos por cocina y bar",
      "Juegos con descuentos para clientes registrados",
      "Encuestas de satisfacción y reportes",
      "Confirmación de pago, liberación de mesa y factura PDF por email",
      "Notificaciones push, sonidos y vibración"],
    image: "/projects/la-piccola/cover.png",
    images: [
      "/projects/la-piccola/inicio-registro1.png",
      "/projects/la-piccola/ingreso.jpeg",
      "/projects/la-piccola/menu.jpeg",
      "/projects/la-piccola/mail.jpeg",
      "/projects/la-piccola/reportes.jpeg",
      "/projects/la-piccola/panel-dueño.jpeg",
      "/projects/la-piccola/branding.png"],
    githubUrl: "https://github.com/julian-deca/grupo1-2026",
    demoUrl: "",
    type: "mobile"
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