export const SITE_CONFIG = {
  name: "Nombre Agencia",
  shortName: "Agencia",
  description:
    "Agencia digital especializada en diseño y desarrollo de productos web.",
  url: "https://www.example.com",
  ogImage: "/images/og-image.jpg",
  locale: "es_ES",
  links: {
    twitter: "https://twitter.com/agencia",
    instagram: "https://instagram.com/agencia",
    linkedin: "https://linkedin.com/company/agencia",
    github: "https://github.com/agencia",
  },
} as const;

export const NAV_LINKS = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: "/#servicios" },
  { label: "Proyectos", href: "/#proyectos" },
  { label: "Nosotros", href: "/#nosotros" },
  { label: "Contacto", href: "/#contacto" },
] as const;
