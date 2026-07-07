/**
 * Utilidades de formato generales (no específicas de UI).
 * Ejemplo: formateo de fechas, números, strings, etc.
 */

export function formatYear(date: Date = new Date()): string {
  return date.getFullYear().toString();
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
