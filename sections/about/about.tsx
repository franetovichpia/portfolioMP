import { Container } from "@/components/common/container";
import { Section } from "@/components/common/section";

export function About() {
  return (
    <Section id="about" className="bg-primary text-primary-foreground">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] opacity-70">
              Quién soy
            </p>

            <h2 className="mt-6 font-display text-5xl font-semibold leading-tight md:text-7xl">
              Diseño con intención. Desarrollo con estructura.
            </h2>
          </div>

          <div className="space-y-6 text-base leading-8 opacity-90 md:text-lg">
            <p>
              Soy Pia, desarrolladora Full Stack enfocada en crear experiencias
              digitales modernas, funcionales y visualmente cuidadas.
            </p>

            <p>
              Trabajo combinando desarrollo web, diseño UI/UX y visión de
              negocio para construir sitios, sistemas y aplicaciones que no solo
              se vean bien, sino que también ayuden a crecer.
            </p>

            <p>
              Mi objetivo es crear productos digitales claros, escalables y
              profesionales, pensados para marcas que quieren destacarse.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}