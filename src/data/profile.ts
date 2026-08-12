import { Profile, Skill } from "@/types";

export const profile: Profile = {
  name: "Dikki Agung Prasetyo",
  title: "Software Engineer | Enterprise Systems & DevOps Automation",
  typingTexts: [
    "Software Engineer",
    "Backend & System Integration",
    "Full-Stack Development",
    "End-To-End Solutions",
    "Backend & Cloud Engineering",
    "DevOps Automation",
  ],
  bio: "I’m a Software Engineer specializing in backend development, system integration, and DevOps automation. I build production-grade enterprise applications using ASP.NET Core, React.js, Java Spring Boot, SQL-based relational databases, Docker, Kubernetes, and AWS. My focus is on designing and delivering scalable systems, automating CI/CD pipelines, and operating reliable production infrastructure.",
  currentWork: "Software Engineer at Hyundai AutoEver Indonesia",
  location: "Indonesia",
  email: "dikki.1710@gmail.com",
  github: "https://github.com/dikki-ap",
  linkedin: "https://linkedin.com/in/dikki-ap",
  profileImage: "/profile.png",
};

export const skills: Skill[] = [
  // Backend
  { name: "C# / ASP.NET Core", category: "backend", icon: "code-2" },
  { name: "Java / Spring Boot", category: "backend", icon: "coffee" },

  // Frontend
  { name: "React.js", category: "frontend", icon: "atom" },
  { name: "JavaScript / TypeScript", category: "frontend", icon: "code" },
  { name: "Next.js", category: "frontend", icon: "zap" },
  { name: "Tailwind CSS", category: "frontend", icon: "paintbrush" },

  // Database
  { name: "MySQL / MariaDB", category: "database", icon: "database" },
  { name: "SQL Server", category: "database", icon: "database" },
  { name: "PostgreSQL", category: "database", icon: "database" },
  { name: "Tibero", category: "database", icon: "database" },

  // DevOps & Cloud
  { name: "Docker", category: "devops", icon: "box" },
  { name: "Kubernetes", category: "devops", icon: "layers" },
  { name: "Jenkins", category: "devops", icon: "git-merge" },
  { name: "AWS", category: "devops", icon: "cloud" },
  { name: "GitLab CI/CD", category: "devops", icon: "git-branch" },
  { name: "GitHub Actions", category: "devops", icon: "github" },
  { name: "Harbor", category: "devops", icon: "package" },
  { name: "Nexus", category: "devops", icon: "archive" },
  { name: "ArgoCD", category: "devops", icon: "refresh-cw" },
  { name: "Rancher", category: "devops", icon: "server" },
];
