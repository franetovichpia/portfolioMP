import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionTitle({
  title,
  subtitle,
  className,
}: SectionTitleProps) {
  return (
    <div className={cn("mb-16 max-w-2xl", className)}>
      <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}