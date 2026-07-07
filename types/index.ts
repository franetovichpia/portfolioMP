import type { LucideIcon } from "lucide-react";

export interface NavLink {
  label: string;
  href: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  client: string;
  category: string;
  coverImage: string;
  year: number;
  featured?: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatar: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: LucideIcon;
}
