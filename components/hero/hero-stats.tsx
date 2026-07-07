const stats = [
  { value: "+4", label: "proyectos publicados" },
  { value: "Full Stack", label: "desarrollo completo" },
  { value: "UI/UX", label: "diseño orientado a conversión" },
];

export function HeroStats() {
  return (
    <div className="mt-14 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-2xl border border-border/70 bg-card/60 p-4 backdrop-blur"
        >
          <p className="text-lg font-semibold text-foreground">{stat.value}</p>
          <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}