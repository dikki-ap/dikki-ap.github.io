import { Profile, Skill } from "@/types";

export const profile: Profile = {
  name: "Dikki Agung Prasetyo",
  title: "Software Engineer | End-to-End Solutions",
  typingTexts: [
    "End-to-End Software Engineer",
    "From Idea to Production",
    "Backend & Cloud Architect",
    "Microservices & High Availability",
    "Full Lifecycle Developer",
  ],
  bio: "Software Engineer with end-to-end ownership of the full software lifecycle — from requirements analysis and system design to development, CI/CD, cloud deployment, and production support. I don't just write code; I architect, build, ship, and maintain systems that scale. Currently delivering critical enterprise systems at Hyundai AutoEver using Java Spring Boot, containerized with Docker and Kubernetes, running on cloud infrastructure.",
  currentWork: "Software Engineer at Hyundai AutoEver",
  location: "Indonesia",
  email: "dikki.1710@gmail.com",
  github: "https://github.com/dikki-ap",
  linkedin: "https://linkedin.com/in/dikki-ap",
  profileImage: "/profile.png",
};

export const skills: Skill[] = [
  // Backend
  { name: "ASP.NET Core / C#", category: "backend", icon: "code-2" },
  { name: "Java / Spring Boot", category: "backend", icon: "coffee" },
  { name: "REST API", category: "backend", icon: "network" },
  { name: "Microservices", category: "backend", icon: "share-2" },
  // Frontend
  { name: "React.js", category: "frontend", icon: "atom" },
  { name: "TypeScript", category: "frontend", icon: "code" },
  { name: "Next.js", category: "frontend", icon: "zap" },
  { name: "Tailwind CSS", category: "frontend", icon: "paintbrush" },
  // Database
  { name: "MySQL / Maria DB", category: "database", icon: "database" },
  { name: "PostgreSQL", category: "database", icon: "database" },
  { name: "SQL Server", category: "database", icon: "database" },
  { name: "Tibero", category: "database", icon: "database" },
  // DevOps & Cloud
  { name: "Docker", category: "devops", icon: "box" },
  { name: "Kubernetes", category: "devops", icon: "layers" },
  { name: "Jenkins", category: "devops", icon: "git-merge" },
  { name: "AWS", category: "devops", icon: "cloud" },
];
