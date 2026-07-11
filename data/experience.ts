import {
  Code2,
  GraduationCap,
  Languages,
  Laptop,
  type LucideIcon,
} from "lucide-react";

export type ExperienceItem = {
  title: string;
  organization: string;
  period: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
  icon: LucideIcon;
};

export type EducationItem = {
  title: string;
  institution: string;
  period: string;
  status: string;
  description: string;
  subjects: string[];
  icon: LucideIcon;
};

export type LanguageItem = {
  language: string;
  level: string;
};

export const experienceItems: ExperienceItem[] = [
  {
    title: "Desarrolladora Full Stack",
    organization: "Proyectos académicos y personales",
    period: "2025 — Actualidad",
    description:
      "Desarrollo de aplicaciones web y móviles completas, participando en la arquitectura, diseño de interfaces, creación de APIs, bases de datos y despliegue en producción.",
    responsibilities: [
      "Desarrollo de interfaces modernas y responsivas.",
      "Creación de APIs REST y módulos backend.",
      "Implementación de autenticación y autorización con JWT.",
      "Diseño e integración de bases de datos SQL y NoSQL.",
      "Integración de servicios externos y almacenamiento multimedia.",
      "Deploy de aplicaciones frontend y backend.",
    ],
    technologies: [
      "Angular",
      "Next.js",
      "NestJS",
      "TypeScript",
      "MongoDB",
      "Supabase",
      "Firebase",
      "Ionic",
    ],
    icon: Code2,
  },
  {
    title: "Desarrollo Web Freelance",
    organization: "Proyectos independientes",
    period: "2026 — Actualidad",
    description:
      "Diseño y desarrollo de soluciones digitales para emprendimientos y pequeñas empresas, orientadas a mejorar su presencia online y optimizar procesos internos.",
    responsibilities: [
      "Creación de landing pages profesionales.",
      "Desarrollo de sistemas de gestión personalizados.",
      "Diseño de sitios corporativos y portfolios.",
      "Adaptación responsive para dispositivos móviles.",
      "Configuración de dominios y despliegues.",
      "Mantenimiento y mejora de aplicaciones existentes.",
    ],
    technologies: [
      "Next.js",
      "Angular",
      "Tailwind CSS",
      "NestJS",
      "Vercel",
      "Render",
    ],
    icon: Laptop,
  },
];

export const educationItems: EducationItem[] = [
  {
    title: "Tecnicatura Universitaria en Programación",
    institution: "Universidad Tecnológica Nacional — Facultad Regional Avellaneda",
    period: "2024 — Actualidad",
    status: "En curso",
    description:
      "Formación enfocada en el desarrollo de software, programación orientada a objetos, aplicaciones web, bases de datos, arquitectura de sistemas y metodologías ágiles.",
    subjects: [
      "Programación orientada a objetos",
      "Desarrollo frontend y backend",
      "Bases de datos SQL y NoSQL",
      "Ingeniería de software",
      "Arquitectura de aplicaciones",
      "Sistemas operativos",
      "Git y control de versiones",
      "Metodologías ágiles",
    ],
    icon: GraduationCap,
  },
];

export const languages: LanguageItem[] = [
  {
    language: "Español",
    level: "Nativo",
  },
  {
    language: "Portugués",
    level: "Intermedio",
  },
  {
    language: "Inglés",
    level: "Upper-Intermediate (en formación)",
  },
];

export const languageIcon = Languages;