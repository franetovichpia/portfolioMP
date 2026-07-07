import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";

import { projects } from "@/data/projects";
import { Container } from "@/components/common/container";
import { Badge } from "@/components/common/badge";
import { ProjectGallery } from "@/components/projects/project-gallery";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) notFound();

  return (
    <main className="pt-28">
      <Container>
        <Link
          href="/#projects"
          className="mb-10 inline-flex items-center text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Volver a proyectos
        </Link>

        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-6">
            <div className="overflow-hidden rounded-[2rem] border border-border bg-card p-3">
              {project.video ? (
                <video
                  src={project.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="aspect-[16/10] w-full rounded-[1.4rem] object-cover"
                />
              ) : project.images?.[0] ? (
                <Image
                  src={project.images[0]}
                  alt={project.title}
                  width={1400}
                  height={900}
                  className="rounded-[1.4rem] object-cover"
                />
              ) : (
                <div className="flex aspect-[16/10] items-center justify-center rounded-[1.4rem] bg-secondary text-muted-foreground">
                  Preview próximamente
                </div>
              )}
            </div>

            <ProjectGallery title={project.title} images={project.images} />
          </div>

          <aside className="lg:sticky lg:top-28 lg:h-fit">
            <div className="rounded-[2rem] border border-border bg-card p-8">
              <p className="text-sm uppercase tracking-[0.3em] text-primary">
                {project.category}
              </p>

              <h1 className="mt-5 font-display text-5xl font-semibold leading-tight md:text-6xl">
                {project.title}
              </h1>

              <p className="mt-6 text-base leading-8 text-muted-foreground">
                {project.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>

              <div className="mt-8 space-y-4 border-t border-border pt-8 text-sm">
                {project.role && (
                  <div className="flex justify-between gap-6">
                    <span className="text-muted-foreground">Rol</span>
                    <span className="text-right">{project.role}</span>
                  </div>
                )}

                {project.year && (
                  <div className="flex justify-between gap-6">
                    <span className="text-muted-foreground">Año</span>
                    <span>{project.year}</span>
                  </div>
                )}

                {project.client && (
                  <div className="flex justify-between gap-6">
                    <span className="text-muted-foreground">Cliente</span>
                    <span>{project.client}</span>
                  </div>
                )}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {project.github && (
                  <Link
                    href={project.github}
                    target="_blank"
                    className="inline-flex h-11 items-center justify-center rounded-full border border-border px-5 text-sm transition-colors hover:bg-secondary"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Repositorio
                  </Link>
                )}

                {project.demo && (
                  <Link
                    href={project.demo}
                    target="_blank"
                    className="inline-flex h-11 items-center justify-center rounded-full bg-primary px-5 text-sm text-primary-foreground transition-colors hover:bg-primary/90"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Deploy
                  </Link>
                )}
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </main>
  );
}