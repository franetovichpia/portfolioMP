import Link from "next/link";
import { Mail, Github, Linkedin, MessageCircle } from "lucide-react";

import { Container } from "@/components/common/container";
import { Section } from "@/components/common/section";

const links = [
  {
    label: "Email",
    value: "franetovichmariapia@gmail.com",
    href: "mailto:franetovichmariapia@gmail.com",
    icon: Mail,
  },
  {
    label: "GitHub",
    value: "franetovichpia",
    href: "https://github.com/franetovichpia",
    icon: Github,
  },
  {
    label: "LinkedIn",
    value: "Perfil profesional",
    href: "https://linkedin.com/in/franetovichpia",
    icon: Linkedin,
  },
  {
    label: "WhatsApp",
    value: "Enviar mensaje",
    href: "https://wa.me/5491121542210",
    icon: MessageCircle,
  },
];

export function Contact() {
  return (
    <Section id="contact">
      <Container>
        <div className="rounded-[2rem] border border-border bg-card p-8 md:p-14">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.3em] text-primary">
              Contacto
            </p>

            <h2 className="mt-6 font-display text-5xl font-semibold leading-tight md:text-7xl">
              ¿Creamos algo juntas?
            </h2>

            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Si tenés una idea, negocio o proyecto digital, puedo ayudarte a
              convertirlo en una experiencia profesional y lista para crecer.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {links.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  className="group rounded-2xl border border-border bg-secondary/50 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
                >
                  <Icon className="h-5 w-5 text-primary" />

                  <p className="mt-4 font-medium">{item.label}</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {item.value}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}