import { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    company: "Hyundai AutoEver Indonesia",
    role: "Software Engineer / MES System Analyst",
    location: "South Jakarta, Indonesia",
    period: "Nov 2025 – Present",
    current: true,
    description:
      "Developing and maintaining enterprise MES applications and backend services in a large-scale manufacturing environment. Focused on production reliability, system integration, monitoring automation, CI/CD workflows, and containerized deployments.",
    responsibilities: [
      "Developed and maintained enterprise MES applications and backend services using Java Spring Boot to support reliable production operations across manufacturing environments.",
      "Designed and implemented monitoring, alerting, and automation workflows using Spring Boot schedulers, stored procedures, and Microsoft Teams webhooks to improve incident visibility and response time.",
      "Optimized backend logic, SQL queries, and integration workflows, improving processing efficiency by 20–40%.",
      "Designed and maintained CI/CD deployment workflows using GitLab, Jenkins, Docker, Harbor, Kubernetes, and Rancher for controlled and repeatable production releases.",
      "Implemented release versioning, rollback procedures, and deployment safeguards to reduce production risk and support faster incident recovery.",
      "Supported system integration, CDC monitoring, and cross-platform communication between MES, enterprise systems, and HQ-managed platforms.",
      "Supported containerized application environments to improve deployment reliability, scalability, and production maintainability.",
    ],
    projects: [
      {
        name: "Monitoring & Notification Automation",
        description:
          "Implemented monitoring, alerting, and notification workflows using Spring Boot schedulers, stored procedures, and Microsoft Teams webhooks to improve incident visibility and production response time.",
        techStack: [
          "Java",
          "Spring Boot",
          "Stored Procedures",
          "Microsoft Teams Webhooks API",
        ],
      },
      {
        name: "CI/CD Deployment Workflow",
        description:
          "Designed and maintained controlled deployment workflows from GitLab to Jenkins, Docker, Harbor, Kubernetes, and Rancher to support repeatable production releases, versioning, and rollback readiness.",
        techStack: [
          "GitLab",
          "Jenkins",
          "Docker",
          "Harbor",
          "Kubernetes",
          "Rancher",
        ],
      },
      {
        name: "CDC & Enterprise System Integration Monitoring",
        description:
          "Supported CDC and integration server monitoring to maintain stable communication between MES, enterprise systems, and HQ-managed platforms.",
        techStack: ["Java", "Spring Boot", "SQL", "CDC", "System Integration"],
      },
    ],
    techStack: [
      "Java",
      "Spring Boot",
      "MySQL / MariaDB",
      "Tibero",
      "Docker",
      "Kubernetes",
      "Jenkins",
      "Harbor",
      "Rancher",
    ],
  },
  {
    company: "Indonesia EPSON Industry",
    role: "Software Engineer",
    location: "Cikarang, West Java, Indonesia",
    period: "May 2023 – Nov 2025",
    current: false,
    description:
      "Designed, developed, and deployed enterprise web applications to automate manufacturing, inventory, HR, and production planning processes. Delivered end-to-end solutions covering requirements analysis, system design, backend APIs, frontend interfaces, database design, cloud infrastructure, documentation, and production support.",
    responsibilities: [
      "Designed, developed, and deployed enterprise web applications using ASP.NET Core, React.js, and SQL-based relational databases to automate business processes and support cross-department system integration.",
      "Analyzed business requirements and translated them into technical system designs, application workflows, database structures, and scalable implementation plans.",
      "Developed and maintained REST APIs, real-time application features, and system integration workflows to support manufacturing, inventory, HR, and production planning processes.",
      "Created and maintained technical documentation including system architecture diagrams, ERD, integration flow diagrams, functional specifications, and project timelines.",
      "Improved existing applications by optimizing application logic, database queries, and deployment workflows to enhance performance, scalability, and maintainability.",
      "Automated build and deployment processes using GitLab CI, GitHub Actions, Docker, and AWS services including ECS, EC2, ECR, and Lambda.",
    ],
    projects: [
      {
        name: "Apollo Project – Real-Time Production Management System",
        description:
          "Designed and developed a real-time production management web application to enable real-time monitoring, streamline manufacturing operations, and reduce production processing time by 75% through workflow automation and cycle time optimization.",
        techStack: [
          "ASP.NET Core",
          "React.js",
          "WinForms C#",
          "REST APIs",
          "SignalR WebSocket",
          "SQL Server",
        ],
      },
      {
        name: "E-Leave Project – Employee Leave Management System",
        description:
          "Developed and maintained an enterprise leave management system using ASP.NET Core and Hangfire to integrate Odoo, Sunfish, and internal applications, enabling automated synchronization and centralized employee absence management.",
        techStack: [
          "ASP.NET Core",
          "Hangfire",
          "REST APIs",
          "SQL Server",
          "PostgreSQL",
          "Odoo Integration",
          "Sunfish Integration",
        ],
      },
      {
        name: "Expiry Inventory Control – Ink & Grease Products",
        description:
          "Designed and developed a real-time inventory labeling web application to support FIFO inventory management, automate production and expiry date labeling, and prevent up to 70% of annual repurchases caused by expired stock.",
        techStack: [
          "ASP.NET Core",
          "React.js",
          "WinForms C#",
          "REST APIs",
          "SignalR",
          "MySQL",
        ],
      },
      {
        name: "AWS & On-Premise Containerization Projects",
        description:
          "Designed and implemented containerized application deployment architecture using Docker, AWS ECS, EC2, ECR, and on-premise Rocky Linux servers to support scalable, reliable, and portable enterprise application deployments.",
        techStack: [
          "Docker",
          "AWS ECS",
          "AWS EC2",
          "AWS ECR",
          "AWS Route 53",
          "AWS Application Load Balancer",
          "AWS Lambda",
          "AWS RDS",
          "AWS S3",
          "AWS Auto Scalling Group",
          "AWS EFS",
          "AWS Security Group",
          "AWS IAM Roles",
          "Rocky Linux",
        ],
      },
      {
        name: "Laplace Project – Sequential Label Production System",
        description:
          "Developed a web-based label production system using ASP.NET Core, React.js, REST APIs, ZPL, and ESC/POS label integration to generate dynamic label templates and improve manufacturing labeling accuracy.",
        techStack: [
          "ASP.NET Core",
          "React.js",
          "WinForms C#",
          "REST APIs",
          "MySQL",
          "ZPL",
          "ESC Label Integration",
        ],
      },
    ],
    techStack: [
      "ASP.NET Core",
      "C#",
      "React.js",
      "WinForms C#",
      "TypeScript",
      "SQL Server",
      "PostgreSQL",
      "MySQL / MariaDB",
      "SignalR",
      "Hangfire",
      "AWS",
      "Docker",
      "GitLab CI",
      "GitHub Actions",
    ],
  },
  {
    company: "Freelance",
    role: "Flutter Developer",
    location: "Medan, North Sumatra, Indonesia",
    period: "Jan 2022 – May 2023",
    current: false,
    description:
      "Developed mobile applications and backend APIs for client requirements, focusing on application functionality, API integration, and data management.",
    responsibilities: [
      "Developed mobile applications using Flutter and built backend APIs with Laravel to support user requirements, application integration, and data management.",
    ],
    projects: [],
    techStack: ["Flutter", "Dart", "Laravel", "PHP", "REST APIs"],
  },
];
