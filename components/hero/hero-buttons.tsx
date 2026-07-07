import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function HeroButtons() {
  return (
    <div className="mt-10 flex flex-wrap items-center gap-4">
      <Link
        href="#projects"
        className="group inline-flex h-12 items-center justify-center rounded-full bg-primary px-7 text-sm font-medium text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90"
      >
        Ver proyectos
        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </Link>

      <Link
        href="#contact"
        className="inline-flex h-12 items-center justify-center rounded-full border border-border bg-card/70 px-7 text-sm font-medium text-foreground backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-secondary"
      >
        Contactarme
      </Link>
    </div>
  );
}