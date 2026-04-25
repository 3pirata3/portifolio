/**
 * Core TypeScript interfaces for the Xgrowth portfolio
 * Based on SPECIFICATION.md data model requirements
 */

export type ProjectCategory = 'ads' | 'social' | 'branding' | 'landing-page' | 'automation';

export type AspectRatio = 'portrait' | 'landscape' | 'square';

export interface ProjectImage {
  id: string;
  src: string;
  alt: string;
  aspectRatio: AspectRatio;
  caption?: string;
}

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  year: string;
  coverImage: string;
  images: ProjectImage[];
  description: string;
  client?: string;
  deliverables?: string;
  location?: string;
  slug: string;
}

export interface PhotographerInfo {
  name: string;
  tagline: string;
  heroIntroduction: string;
  biography: string;
  approach: string;
  awards: string[];
  clients: string[];
  education: string;
  location: string;
  email: string;
  phone: string;
  availability: string;
  socialLinks: {
    instagram?: string;
    linkedin?: string;
    behance?: string;
  };
  portraitImage: string;
}

export interface ContactSubmission {
  name: string;
  email: string;
  projectType: 'creative' | 'traffic' | 'brand';
  message: string;
  timestamp: Date;
}
