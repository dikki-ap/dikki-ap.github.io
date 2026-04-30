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
