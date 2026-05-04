import { Project, TechCategory } from "@/types";

/** Flatten all items across categories — used for filtering */
export function flattenTech(techStack: TechCategory[]): string[] {
  return techStack.flatMap((cat) => cat.items);
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "inventory-management-system",
    name: "Inventory Management System",
    shortDescription: "Real-time inventory management application for retail businesses.",
    description: `A comprehensive inventory management system built to help retail businesses monitor stock levels in real-time, generate automated reports, and manage multi-user access with role-based permissions.

The system supports multi-branch operations and integrates with barcode scanners for fast stock updates. Automated low-stock alerts keep managers informed without manual monitoring.`,
    thumbnail: "/projects/inventory-management-system/thumbnail.png",
    techStack: [
      { category: "Backend",   items: ["ASP.NET Core", "C#", "REST API"] },
      { category: "Frontend",  items: ["React.js", "TypeScript", "Tailwind CSS"] },
      { category: "Database",  items: ["SQL Server"] },
      { category: "DevOps",    items: ["Docker", "AWS ECS", "Nginx"] },
    ],
    status: "completed",
    visibility: "public",
    featured: true,
    year: 2025,
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/dikki-ap/inventory-management-system",
    features: [
      {
        title: "Real-time Dashboard",
        description:
          "Monitor stock levels in real-time with interactive charts and automatic low-stock notifications. The dashboard provides a bird's-eye view of all branches and product categories.",
        images: [
          "/projects/inventory-management-system/feature-dashboard-1.png",
          "/projects/inventory-management-system/feature-dashboard-2.png",
        ],
      },
      {
        title: "Automated Reports",
        description:
          "Generate PDF and Excel reports automatically with filters by period, category, and branch. Schedule recurring reports to be delivered via email.",
        images: [
          "/projects/inventory-management-system/feature-report-1.png",
        ],
      },
      {
        title: "Role-Based Access Control",
        description:
          "Role-based authentication system (Admin, Manager, Staff) with granular permissions per module. Audit logs track all changes for accountability.",
        images: [
          "/projects/inventory-management-system/feature-roles-1.png",
        ],
      },
    ],
  },
  {
    id: "2",
    slug: "ecommerce-platform",
    name: "E-Commerce Platform",
    shortDescription: "Full-featured e-commerce platform with payment gateway integration.",
    description: `A scalable e-commerce platform supporting product management, shopping cart, order processing, and integrated payment gateways. Built with performance and security as top priorities.

The platform handles thousands of products with advanced filtering and search, and supports multiple payment providers including credit cards and digital wallets.`,
    thumbnail: "/projects/ecommerce-platform/thumbnail.png",
    techStack: [
      { category: "Backend",        items: ["ASP.NET Core", "C#", "REST API"] },
      { category: "Frontend",       items: ["Next.js", "TypeScript", "Tailwind CSS"] },
      { category: "Database",       items: ["PostgreSQL"] },
      { category: "Message Broker", items: ["RabbitMQ"] },
      { category: "DevOps",         items: ["Docker", "AWS EC2", "Nginx"] },
    ],
    status: "completed",
    visibility: "private",
    featured: true,
    year: 2025,
    features: [
      {
        title: "Product Management",
        description:
          "Comprehensive product catalog with categories, variants (size, color), and bulk CSV upload support. Includes SEO-friendly product pages with structured data.",
        images: [
          "/projects/ecommerce-platform/feature-products-1.png",
        ],
      },
      {
        title: "Payment Gateway",
        description:
          "Secure payment processing with multiple provider support and full transaction history. PCI-compliant implementation with fraud detection hooks.",
        images: [
          "/projects/ecommerce-platform/feature-payment-1.png",
        ],
      },
    ],
  },
  {
    id: "3",
    slug: "vehicle-data-integration-platform",
    name: "Vehicle Data Integration Platform",
    shortDescription: "Real-time integration layer connecting manufacturing systems with analytics platforms.",
    description: `A high-throughput integration platform connecting multiple upstream manufacturing systems (ERP, MES, SCADA) with downstream reporting and analytics services.

Handles real-time event streams and guarantees data consistency across distributed microservices. Deployed on Kubernetes with full High Availability configuration and automated failover.`,
    thumbnail: "/projects/vehicle-data-integration-platform/thumbnail.png",
    techStack: [
      { category: "Backend",        items: ["Java", "Spring Boot", "REST API", "Microservices"] },
      { category: "Message Broker", items: ["Kafka"] },
      { category: "Database",       items: ["PostgreSQL"] },
      { category: "DevOps",         items: ["Docker", "Kubernetes", "Rancher", "Jenkins"] },
    ],
    status: "in-progress",
    visibility: "private",
    featured: true,
    year: 2026,
    features: [
      {
        title: "Real-time Event Streaming",
        description:
          "High-throughput Kafka pipelines ingesting events from ERP, MES, and SCADA systems with at-least-once delivery guarantees and dead-letter queue handling.",
        images: [
          "/projects/vehicle-data-integration-platform/feature-streaming-1.png",
        ],
      },
      {
        title: "High Availability Deployment",
        description:
          "Kubernetes-managed deployment with replica sets, liveness/readiness probes, and automated horizontal pod autoscaling to handle peak load without downtime.",
        images: [
          "/projects/vehicle-data-integration-platform/feature-ha-1.png",
        ],
      },
    ],
  },
];

export const getFeaturedProjects = () => projects.filter((p) => p.featured);

export const getProjectBySlug = (slug: string) =>
  projects.find((p) => p.slug === slug);
