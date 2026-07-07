import { Container } from "@/components/common/container";
import { Section } from "@/components/common/section";
import { SectionTitle } from "@/components/common/section-title";
import { ProjectHorizontalCarousel } from "@/components/projects/project-horizontal-carousel";

export function Projects() {
  return (
    <Section id="projects" className="overflow-hidden">
      <Container>
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionTitle
            title="Proyectos"
            subtitle="Una galería interactiva de proyectos donde diseño, desarrollo y estrategia trabajan juntos."
            className="mb-0"
          />

          <p className="max-w-sm text-sm leading-7 text-muted-foreground">
            Pasá el cursor sobre cada proyecto para ver el detalle. Hacé click
            para abrir el caso completo.
          </p>
        </div>

        <ProjectHorizontalCarousel />
      </Container>
    </Section>
  );
}