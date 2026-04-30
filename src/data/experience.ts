import { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    company: "Hyundai AutoEver Indonesia",
    role: "Software Engineer",
    location: "Jakarta, Indonesia",
    period: "November 2025 – Present",
    current: true,
    description:
      "Developing and maintaining critical production systems in a large-scale automotive manufacturing environment. Responsible for the full lifecycle of enterprise backend services — from design and development to CI/CD, containerized deployment, and production operations.",
    responsibilities: [
      "Design and develop high-performance backend services using Java Spring Boot in a microservices architecture",
      "Implement and maintain CI/CD pipelines with Jenkins for automated testing, building, and deployment",
      "Manage containerized deployments using Docker and Kubernetes (Rancher) across staging and production environments",
      "Ensure High Availability (HA) and fault tolerance for business-critical services through load balancing and health monitoring",
      "Collaborate with cross-functional teams including QA, DevOps, and business analysts to deliver end-to-end features",
      "Monitor system performance, investigate production incidents, and implement root-cause fixes",
      "Produce technical documentation covering system architecture, API contracts, and runbooks",
    ],
    projects: [
      {
        name: "Vehicle Data Integration Platform",
        description:
          "Real-time integration layer connecting multiple upstream manufacturing systems (ERP, MES, SCADA) with downstream reporting and analytics platforms. Handles high-throughput event streams and guarantees data consistency across distributed services.",
        techStack: ["Java", "Spring Boot", "Kafka", "PostgreSQL", "Docker", "Kubernetes"],
      },
      {
        name: "Production Monitoring System",
        description:
          "Live dashboard system for monitoring production line status, shift output, and defect rates across multiple factory floors. Delivers real-time alerts to operators and management via WebSocket with sub-second latency.",
        techStack: ["Java", "Spring Boot", "WebSocket", "PostgreSQL", "React.js", "Jenkins"],
      },
      {
        name: "CI/CD Pipeline Overhaul",
        description:
          "Redesigned the legacy manual deployment process into a fully automated Jenkins-based CI/CD pipeline with Docker image builds, automated integration testing, and blue-green deployments on Kubernetes, reducing release time by 70%.",
        techStack: ["Jenkins", "Docker", "Kubernetes", "Rancher", "Shell Script"],
      },
    ],
    techStack: ["Java", "Spring Boot", "Docker", "Kubernetes", "Jenkins", "PostgreSQL", "Kafka", "Rancher"],
  },
  {
    company: "PT. Indonesia EPSON Industry",
    role: "Software Engineer",
    location: "Bekasi, Indonesia",
    period: "May 2023 – November 2025",
    current: false,
    description:
      "Built and maintained internal enterprise applications supporting manufacturing operations across multiple departments. Delivered end-to-end solutions spanning backend APIs, frontend interfaces, cloud infrastructure, and system integrations — fully owned from requirements gathering through to production deployment.",
    responsibilities: [
      "Develop RESTful backend services using ASP.NET Core (C#) for internal manufacturing and HR systems",
      "Build responsive frontend interfaces with React.js and TypeScript for production floor and office users",
      "Design and manage relational databases (PostgreSQL, SQL Server) including schema design and query optimization",
      "Deploy and manage applications on AWS (ECS, ECR, EC2, Lambda) with a focus on cost-efficiency and availability",
      "Conduct requirements analysis with department stakeholders and translate business needs into technical specifications",
      "Author system design documents, API documentation, and user manuals as sole engineer on multiple projects",
      "Perform end-to-end QA including unit testing, integration testing, and UAT coordination with business users",
    ],
    projects: [
      {
        name: "Manufacturing Execution System (MES)",
        description:
          "Custom MES handling work-order tracking, production scheduling, and real-time machine status monitoring across the assembly line. Integrated with barcode scanners and PLC systems for automated data capture.",
        techStack: ["ASP.NET Core", "React.js", "TypeScript", "SQL Server", "AWS ECS", "Docker"],
      },
      {
        name: "Inventory & Supply Chain Portal",
        description:
          "Web portal for managing raw material inventory, supplier purchase orders, and delivery tracking. Features automated low-stock alerts, PDF/Excel report generation, and role-based access for warehouse, procurement, and management teams.",
        techStack: ["ASP.NET Core", "React.js", "PostgreSQL", "AWS EC2", "Nginx", "Docker"],
      },
      {
        name: "Employee Self-Service Portal",
        description:
          "Internal HR portal enabling employees to manage leave requests, view payslips, and access company announcements. Integrated with the existing HR system via REST API and deployed on AWS Lambda for serverless cost optimization.",
        techStack: ["ASP.NET Core", "React.js", "TypeScript", "PostgreSQL", "AWS Lambda", "AWS S3"],
      },
    ],
    techStack: ["ASP.NET Core", "C#", "React.js", "TypeScript", "PostgreSQL", "SQL Server", "AWS", "Docker", "Nginx"],
  },
];
