import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({
  children,
  className,
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-border/70 bg-card p-8 transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 hover:shadow-2xl",
        className
      )}
    >
      {children}
    </div>
  );
}
