import Link from "next/link";
import { Container } from "@/components/common/container";
import { siteConfig } from "@/data/site";


export function Footer() {
  return (
    <footer className="border-t border-border">
      <Container>
        <div className="flex flex-col items-center justify-between gap-6 py-10 md:flex-row">
          <div>
            <h3 className="text-lg font-semibold">{siteConfig.name}</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              {siteConfig.description}
            </p>
          </div>

          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link href={siteConfig.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </Link>
            <Link href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </Link>
            <Link href={`mailto:${siteConfig.email}`}>
              Email
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
