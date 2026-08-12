import { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    company: "Hyundai AutoEver Indonesia",
    role: "Software Engineer",
    location: "South Jakarta, Indonesia",
    period: "Nov 2025 – Present",
    current: true,
    description:
      "Developing and maintaining enterprise backend services and daemon processes in a large-scale enterprise environment. Focused on production reliability, system integration, monitoring automation, and CI/CD infrastructure — including a large-scale GitOps platform migration across GitLab EE, Jenkins, Nexus, Harbor, and ArgoCD, enabling automated deployments to Rancher-managed Kubernetes clusters.",
    responsibilities: [
      "Developed and maintained enterprise backend services and daemon processes using Java Spring Boot, ensuring reliable data synchronization, scheduling, and integration across cross-platform enterprise systems.",
      "Designed and implemented monitoring, alerting, and automation workflows using Spring Boot schedulers, stored procedures, and Microsoft Teams webhooks to improve incident visibility and response time.",
      "Optimized backend logic, SQL queries, and integration workflows, improving processing efficiency by 20–40%.",
      "Led a large-scale CI/CD infrastructure migration: standardized GitLab group and project structures, rewrote Jenkinsfiles with clearly defined stage-by-stage pipelines for better visibility and maintainability, standardized Harbor container registry repositories with consistent naming conventions, managed private artifact repositories in Nexus, and implemented ArgoCD from scratch — enabling automated GitOps-based deployments to Rancher-managed Kubernetes clusters where no such automation previously existed.",
      "Implemented release versioning, rollback procedures, and deployment safeguards to reduce production risk and support faster incident recovery.",
      "Supported system integration and cross-platform communication across enterprise systems and HQ-managed platforms, ensuring data consistency and operational continuity.",
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
        name: "CI/CD Infrastructure Migration & ArgoCD Implementation",
        description:
          "Led a comprehensive migration and modernization of the organization's CI/CD infrastructure. Standardized GitLab group and project structures across all repositories. Rewrote and standardized Jenkinsfiles with explicit, stage-by-stage pipeline definitions — replacing inconsistent legacy scripts with clear, maintainable workflows. Standardized Harbor container registry repositories with consistent naming conventions and access controls. Introduced and managed private artifact repositories in Nexus for internal dependency management. Designed and implemented ArgoCD from the ground up — the organization had no existing GitOps tooling — enabling automated, declarative application deployments to Rancher-managed Kubernetes clusters.",
        techStack: [
          "GitLab",
          "Jenkins",
          "Docker",
          "Harbor",
          "Nexus",
          "ArgoCD",
          "Kubernetes",
          "Rancher",
        ],
      },
      {
        name: "Enterprise System Integration Monitoring",
        description:
          "Supported system integration and cross-platform communication monitoring to maintain stable data flow across enterprise systems and HQ-managed platforms, ensuring data consistency and operational continuity.",
        techStack: ["Java", "Spring Boot", "SQL", "System Integration"],
      },
      {
        name: "DB Lock Kill Implementation",
        description:
          "Designed and implemented a self-service DB lock management interface enabling operators to identify and terminate blocking database sessions directly from the application UI during night shifts — eliminating dependency on the infrastructure team for on-call intervention and preventing production downtime caused by unresolved lock contention.",
        techStack: ["Java", "Spring Boot", "SQL", "Tibero"],
      },
      {
        name: "Docker Image Size Optimization",
        description:
          "Analyzed and restructured Docker build configurations for backend alarm services, reducing image sizes by up to 70% through multi-stage builds and dependency pruning — significantly improving deployment speed and registry storage efficiency.",
        techStack: ["Docker", "Harbor"],
      },
      {
        name: "Enterprise Web – Multi-Schema Table Data Management",
        description:
          "Extended the Table Data Management module to support multiple database schemas. Previously limited to a single schema via connection string, the module was enhanced with a schema selection dropdown allowing navigation into schema-specific master data. Table deletion operations are executed through Stored Procedures based on configurable conditions defined in the master data, enabling controlled and auditable data cleanup across multiple schemas.",
        techStack: ["Java", "Spring Boot", "Tibero"],
      },
      {
        name: "System Monitoring WPF – Enhancements & Teams Integration",
        description:
          "Resolved UI thread freezes caused by synchronous data loading on large datasets by refactoring blocking calls to async methods, keeping the UI responsive during heavy operations. Extended the application with new monitoring modules and refactored existing forms to support initial alarm detection and a report function. Integrated real-time monitoring notifications with Microsoft Teams via a Java Spring Boot scheduler that sends structured webhook messages on alarm events.",
        techStack: [
          "WPF",
          "C#",
          "Java",
          "Spring Boot",
          "Microsoft Teams Webhooks API",
        ],
      },
    ],
    techStack: [
      "Java",
      "Spring Boot",
      "MySQL / MariaDB",
      "Tibero",
      "WPF",
      "C#",
      "Docker",
      "Kubernetes",
      "Jenkins",
      "Harbor",
      "Nexus",
      "ArgoCD",
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
          "Developed and maintained an enterprise leave management system using ASP.NET Core and Hangfire to integrate Odoo, Sunfish, and internal applications — reducing labor costs by over 70%, eliminating paper-based processes entirely, and cutting yearly administrative processing time by 95% through full automation of leave synchronization and absence management workflows.",
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
          "Designed and developed a real-time inventory labeling web application to support FIFO inventory management and automate expiry date labeling — preventing approximately $28,000 USD/year in losses from expired stock write-offs, urgent shipping costs, and label-related rework.",
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
          "Developed a web-based label production system using ASP.NET Core, React.js, REST APIs, ZPL, and ESC/POS label integration to automate sequential label generation across 4 product models — eliminating approximately 32 labor-hours/day of manual labeling and reducing double serial number rework by 100 pcs/day.",
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
