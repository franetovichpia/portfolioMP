"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="container flex min-h-[60vh] flex-col items-center justify-center gap-4 text-center">
      <h1 className="font-display text-2xl font-semibold">
        Algo salió mal
      </h1>
      <p className="text-muted-foreground">
        Ocurrió un error inesperado. Intenta de nuevo.
      </p>
      <button
        onClick={reset}
        className="rounded-md border border-border px-4 py-2 text-sm hover:bg-accent"
      >
        Reintentar
      </button>
    </div>
  );
}
