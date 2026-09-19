export interface TechCategory {
  category: string;
  items: string[];
}

export interface ProjectFeature {
  title: string;
  description: string;
  images: string[];
}

export interface Project {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  thumbnail: string;
  techStack: TechCategory[];
  features: ProjectFeature[];
  liveUrl?: string;
  githubUrl?: string;
  year: number;
  status: "completed" | "in-progress" | "archived";
  visibility: "public" | "private";
  featured: boolean;
}

export interface Skill {
  name: string;
  icon: string;
  category: "frontend" | "backend" | "database" | "devops" | "tools";
}

export interface ExperienceProject {
  name: string;
  description: string;
  techStack: string[];
}

export interface Experience {
  company: string;
  role: string;
  location: string;
  period: string;
  current: boolean;
  description: string;
  responsibilities: string[];
  projects: ExperienceProject[];
  techStack: string[];
}

export interface Profile {
  name: string;
  title: string;
  typingTexts: string[];
  bio: string;
  currentWork: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  profileImage: string;
}

/**
 * A professional certification/badge.
 *
 * `issuer` is the company or body that issued it (e.g. "AWS") and is used to
 * group certifications on the page. `level` is free-form on purpose so future
 * levels from any issuer ("Associate", "Professional", "Expert", …) work
 * without code changes — unknown levels fall back to a neutral badge style.
 */
export interface Certification {
  id: string;
  name: string;
  issuer: string;
  level: string;
  issuedAt: string;
  image: string;
  /** Link to the official verification page. Opened in a new tab. */
  verifyUrl: string;
}
