export interface Project {
  id: string;
  slug: string;

  title: string;
  shortDescription: string;
  description: string;

  technologies: string[];

  video?: string;
  images?: string[];

  github?: string;
  demo?: string;

  featured?: boolean;

  category?: "Frontend" | "Backend" | "Full Stack" | "Mobile";

  year?: number;
  client?: string;
  role?: string;
}