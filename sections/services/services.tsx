import { services } from "@/data/services";
import { Card } from "@/components/common/card";
import { Container } from "@/components/common/container";
import { Section } from "@/components/common/section";
import { SectionTitle } from "@/components/common/section-title";

export function Services() {
  return (
    <Section id="services" className="bg-secondary/40">
      <Container>
        <SectionTitle
          title="Servicios"
          subtitle="Diseño y desarrollo soluciones digitales para marcas, emprendimientos y negocios que necesitan verse profesionales y vender mejor."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Card key={service.title} className="min-h-[230px]">
              <p className="mb-8 text-sm uppercase tracking-[0.25em] text-primary">
                Servicio
              </p>

              <h3 className="text-2xl font-semibold">{service.title}</h3>

              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}