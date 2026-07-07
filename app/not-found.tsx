import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container flex min-h-[60vh] flex-col items-center justify-center gap-4 text-center">
      <h1 className="font-display text-4xl font-semibold">404</h1>
      <p className="text-muted-foreground">
        No pudimos encontrar la página que buscas.
      </p>
      <Link
        href="/"
        className="text-sm font-medium underline underline-offset-4"
      >
        Volver al inicio
      </Link>
    </div>
  );
}
