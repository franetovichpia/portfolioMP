"use client";

import { useEffect, useState } from "react";

/**
 * Hook base para detectar la posición de scroll.
 * Útil para headers con cambio de estilo al hacer scroll.
 */
export function useScrollPosition(threshold = 10): boolean {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return scrolled;
}
