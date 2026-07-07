interface TechPillProps {
  name: string;
}

export function TechPill({ name }: TechPillProps) {
  return (
    <span className="rounded-full border border-border bg-background/70 px-4 py-2 text-sm text-muted-foreground backdrop-blur-sm transition-all duration-300 hover:border-foreground hover:text-foreground">
      {name}
    </span>
  );
}