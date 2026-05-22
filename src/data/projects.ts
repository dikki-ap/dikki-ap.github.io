import { Project, TechCategory } from "@/types";

/** Flatten all items across categories — used for filtering */
export function flattenTech(techStack: TechCategory[]): string[] {
  return techStack.flatMap((cat) => cat.items);
}

export const projects: Project[] = [
  {
    id: "3",
    slug: "inventory-management-system",
    name: "Inventory Management System",
    shortDescription:
      "Real-time inventory management application for retail businesses.",
    description: `A comprehensive inventory management system built to help retail businesses monitor stock levels in real-time, generate automated reports, and manage multi-user access with role-based permissions.

The system supports multi-branch operations and integrates with barcode scanners for fast stock updates. Automated low-stock alerts keep managers informed without manual monitoring.`,
    thumbnail: "/projects/inventory-management-system/thumbnail.png",
    techStack: [
      { category: "Backend", items: ["ASP.NET Core", "C#", "REST API"] },
      {
        category: "Frontend",
        items: ["React.js", "TypeScript", "Tailwind CSS"],
      },
      { category: "Database", items: ["SQL Server"] },
      { category: "DevOps", items: ["Docker", "AWS ECS", "Nginx"] },
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
        images: ["/projects/inventory-management-system/feature-report-1.png"],
      },
      {
        title: "Role-Based Access Control",
        description:
          "Role-based authentication system (Admin, Manager, Staff) with granular permissions per module. Audit logs track all changes for accountability.",
        images: ["/projects/inventory-management-system/feature-roles-1.png"],
      },
    ],
  },
  {
    id: "4",
    slug: "ecommerce-platform",
    name: "E-Commerce Platform",
    shortDescription:
      "Full-featured e-commerce platform with payment gateway integration.",
    description: `A scalable e-commerce platform supporting product management, shopping cart, order processing, and integrated payment gateways. Built with performance and security as top priorities.

The platform handles thousands of products with advanced filtering and search, and supports multiple payment providers including credit cards and digital wallets.`,
    thumbnail: "/projects/ecommerce-platform/thumbnail.png",
    techStack: [
      { category: "Backend", items: ["ASP.NET Core", "C#", "REST API"] },
      {
        category: "Frontend",
        items: ["Next.js", "TypeScript", "Tailwind CSS"],
      },
      { category: "Database", items: ["PostgreSQL"] },
      { category: "Message Broker", items: ["RabbitMQ"] },
      { category: "DevOps", items: ["Docker", "AWS EC2", "Nginx"] },
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
        images: ["/projects/ecommerce-platform/feature-products-1.png"],
      },
      {
        title: "Payment Gateway",
        description:
          "Secure payment processing with multiple provider support and full transaction history. PCI-compliant implementation with fraud detection hooks.",
        images: ["/projects/ecommerce-platform/feature-payment-1.png"],
      },
    ],
  },
  {
    id: "1",
    slug: "job-portal",
    name: "Job Portal",
    shortDescription:
      "A recruitment management system available for purchase — fully customizable branding, end-to-end hiring lifecycle, and full deployment support included.",
    description: `A full-stack recruitment platform available for companies looking to implement a modern, end-to-end hiring system. Covers the entire recruitment lifecycle — from publishing job posts and collecting applications, to multi-step evaluation pipelines, multi-level approval workflows, and candidate re-engagement via a Talent Pool.

This is a commercial product. The source code is private and the system is sold to companies interested in adopting it. Full deployment support is available under a separate service fee — covering infrastructure setup, cloud provisioning, and configuration of any technology stack the company does not yet have in place.

**All branding is fully customizable per client** — company name, logo, colors, gradients, and contact information are all configurable from the admin UI without redeployment. The design shown is only a reference implementation; the actual appearance is tailored entirely to the purchasing company's identity.

**50% of revenue from this product is donated: 25% to pet shelters, and 25% to orphanages or other foundations in need.**

Built with Clean Architecture and CQRS on the backend (ASP.NET Core 10 + MediatR), and a React 19 SPA on the frontend. Authentication is handled by Keycloak with mandatory TOTP 2FA. Documents are stored in MinIO/S3 with presigned URLs.`,
    thumbnail: "/projects/job-portal/thumbnail.png",
    techStack: [
      {
        category: "Backend",
        items: ["ASP.NET Core", "C#", "Entity Framework Core"],
      },
      { category: "Database", items: ["MySQL / MariaDB"] },
      { category: "Auth & Storage", items: ["Keycloak", "MinIO / S3"] },
      { category: "Frontend", items: ["React", "TypeScript", "Tailwind CSS"] },
      { category: "State Management", items: ["Redux Toolkit"] },
      { category: "DevOps", items: ["Docker"] },
    ],
    status: "completed",
    visibility: "private",
    featured: true,
    year: 2026,
    githubUrl: "https://github.com/dikki-ap/job-portal",
    features: [
      {
        title: "Company Profile & Careers Page",
        description:
          "Public-facing company homepage with Hero, services, projects, about, stats, and contact sections. Careers page features employer branding (Why Join Us, Life at Company stats bar) alongside a fully searchable and filterable job listing. Every visual element — company name, logo, primary color, gradient, and contact info — is fully customizable from the admin UI without redeployment. The design shown is a reference implementation only; the actual appearance is tailored entirely to each client's brand identity.",
        images: [
          "/projects/job-portal/feature-home.png",
          "/projects/job-portal/feature-careers.png",
        ],
      },
      {
        title: "Job Application Flow",
        description:
          "Candidates browse job detail pages, view the hiring steps preview, then submit applications with required documents per document type. A configurable UU PDP No. 27/2022 privacy consent gate must be accepted before applying.",
        images: [
          "/projects/job-portal/feature-career-apply-1.png",
          "/projects/job-portal/feature-career-apply-2.png",
          "/projects/job-portal/feature-career-apply-3.png",
        ],
      },
      {
        title: "Candidate Profile & My Applications",
        description:
          "Candidates manage personal info, highest education (level, major, institution with autocomplete, start/end year), and upload/download their CV. The My Applications page lets candidates track all submitted applications with full step history and current status.",
        images: [
          "/projects/job-portal/feature-candidate-profile.png",
          "/projects/job-portal/feature-candidate-my-applications.png",
          "/projects/job-portal/feature-candidate-my-applications-detail.png",
        ],
      },
      {
        title: "Job Management & Approval Workflow",
        description:
          "HR creates job posts through a Draft → Submit for Approval → Published → Closed lifecycle. A configurable multi-level approval chain notifies each approver by email; approvers can approve or reject with comments from a dedicated review page without needing an HR account.",
        images: [
          "/projects/job-portal/master-approval-levels.png",
          "/projects/job-portal/feature-job-approval-list.png",
          "/projects/job-portal/feature-job-approval-confirm.png",
          "/projects/job-portal/feature-job-approval-reject.png",
        ],
      },
      {
        title: "Step-based Hiring Pipeline",
        description:
          "Each job post defines an ordered set of hiring steps. HR evaluates candidates step by step — pass or fail — and the system sends branded email notifications to the candidate on each outcome. Bulk accept/reject/step-pass actions are available for high-volume positions.",
        images: [
          "/projects/job-portal/feature-job-management-list.png",
          "/projects/job-portal/feature-job-management-create-1.png",
          "/projects/job-portal/feature-job-management-create-2.png",
          "/projects/job-portal/feature-job-management-create-3.png",
          "/projects/job-portal/feature-job-management-create-4.png",
        ],
      },
      {
        title: "Application Management & Rating",
        description:
          "HR views all applications in a filterable table with candidate details including education history. Each application can be rated from 1–10 with a note. Direct accept/reject actions are also available outside the step flow.",
        images: [
          "/projects/job-portal/feature-applications-list.png",
          "/projects/job-portal/feature-applications-multi-action.png",
          "/projects/job-portal/feature-applications-detail.png",
        ],
      },
      {
        title: "Talent Pool & Re-engagement",
        description:
          "Rejected candidates worth keeping can be saved to the Talent Pool with notes. When a suitable position opens, HR can re-engage them — the system creates a new application, removes the candidate from the pool, and sends a re-engagement email automatically.",
        images: [
          "/projects/job-portal/feature-talent-pool-1.png",
          "/projects/job-portal/feature-talent-pool-2.png",
        ],
      },
      {
        title: "Analytics Dashboard",
        description:
          "Visual hiring funnel showing application counts by status, pass/fail rates per hiring step, and trend charts powered by Recharts. Gives HR a quick overview of recruitment health across all open positions.",
        images: [
          "/projects/job-portal/feature-analytics-1.png",
          "/projects/job-portal/feature-analytics-2.png",
        ],
      },
      {
        title: "Hiring Templates",
        description:
          "Reusable pipeline templates define a standard set of hiring steps that can be applied to any new job post. Each step carries rich-text pass/fail email templates with placeholder support (candidate name, job title, etc.) built using the Tiptap editor.",
        images: ["/projects/job-portal/master-hiring-templates.png"],
      },
      {
        title: "Department Managers",
        description:
          "Admin assigns department managers by email (many-to-many with departments). Managers can log in using their candidate account and access a scoped view showing only applications from their assigned departments — no full HR dashboard needed.",
        images: [
          "/projects/job-portal/master-department-managers.png",
          "/projects/job-portal/feature-department-managers.png",
        ],
      },
      {
        title: "Master Data",
        description:
          "Admin manages all lookup data: currency types, departments, document types, education levels and majors, employment types, approval levels, department managers, hiring templates, job categories and levels, privacy consent, skills, SMTP settings, and work modes — all editable from the UI without redeployment.",
        images: [
          "/projects/job-portal/master-currency-types.png",
          "/projects/job-portal/master-departments.png",
          "/projects/job-portal/master-document-types.png",
          "/projects/job-portal/master-education-levels.png",
          "/projects/job-portal/master-education-majors.png",
          "/projects/job-portal/master-employment-types.png",
          "/projects/job-portal/master-approval-levels.png",
          "/projects/job-portal/master-department-managers.png",
          "/projects/job-portal/master-hiring-templates.png",
          "/projects/job-portal/master-job-categories.png",
          "/projects/job-portal/master-job-levels.png",
          "/projects/job-portal/master-privacy-consent.png",
          "/projects/job-portal/master-skills.png",
          "/projects/job-portal/master-smtp-settings.png",
          "/projects/job-portal/master-work-modes.png",
        ],
      },
      {
        title: "Terms & Policy Management",
        description:
          "Admin configures the company's legal content — Terms of Service and Privacy Policy — directly from the UI. These pages are accessible to candidates from the login page before they register or apply, ensuring compliance with data protection regulations.",
        images: [
          "/projects/job-portal/legal-terms-policy.png",
          "/projects/job-portal/legal-terms.png",
          "/projects/job-portal/legal-policy.png",
        ],
      },
      {
        title: "Keycloak SSO, Document Storage & Audit Log",
        description:
          "Authentication via Keycloak OIDC with mandatory TOTP (2FA) enforced on first login and role sync on every request. Documents are stored in MinIO/S3 with 15-minute presigned URLs and per-user folder isolation. All entity changes are tracked in an automatic audit log.",
        images: [
          "/projects/job-portal/feature-login-page.png",
          "/projects/job-portal/feature-keycloack-login.png",
          "/projects/job-portal/feature-keycloak-login-otp.png",
          "/projects/job-portal/feature-keycloak-register.png",
          "/projects/job-portal/feature-object-storage.png",
          "/projects/job-portal/feature-db-audit-logs.png",
        ],
      },
    ],
  },
  {
    id: "2",
    slug: "nexflo",
    name: "NexFlo",
    shortDescription:
      "Privacy-first personal finance app built with Flutter — syncs to your own Google Sheets, zero developer access.",
    description: `A personal finance management app built with Flutter and Dart. Track income, expenses, and transfers across multiple wallets — with beautiful charts, budget tracking, savings goals, and debt management.

All data is stored locally on your device (SQLite via Drift) and syncs to a spreadsheet in your own Google Drive. The developer has absolutely zero access to your financial data — no backend, no server, no analytics. Uses Google Sheets API purely as a zero-cost, user-owned cloud storage layer.`,
    thumbnail: "/projects/nexflo/thumbnail.png",
    techStack: [
      { category: "Framework", items: ["Flutter"] },
      { category: "Language", items: ["Dart"] },
      { category: "State Management", items: ["GetX"] },
      { category: "Database", items: ["SQLite (Drift)"] },
      {
        category: "Auth & Sync",
        items: ["Google Sign-In", "Google Sheets API"],
      },
      { category: "ML / OCR", items: ["Google ML Kit"] },
    ],
    status: "completed",
    visibility: "public",
    featured: true,
    year: 2026,
    githubUrl: "https://github.com/dikki-ap/nexflo",
    features: [
      {
        title: "Multi-Wallet Management",
        description:
          "Support for multiple wallet types: Cash, Bank, E-Wallet, Credit Card, Investment, and Savings. Each wallet has a custom name, color, icon, and its own currency. Wallets can be reordered via drag & drop, archived without losing history, or have their balance adjusted with or without creating a transaction record.",
        images: [
          "/projects/nexflo/feature-wallet-1.png",
          "/projects/nexflo/feature-wallet-2.png",
        ],
      },
      {
        title: "Transaction Tracking",
        description:
          "Three transaction types — Expense, Income, and Transfer between wallets. Each transaction supports category & sub-category with custom icons and colors, notes, and a receipt photo. Transactions are displayed in a grouped and searchable list with flexible date filters: This Month, 1M, 3M, 6M, 1Y, 3Y, 5Y, All Time, and Custom Range. A cutoff date setting lets you define your own 'month start' (e.g. salary on the 25th).",
        images: [
          "/projects/nexflo/feature-transaction-1.png",
          "/projects/nexflo/feature-transaction-2.png",
        ],
      },
      {
        title: "OCR Receipt Scanning",
        description:
          "Capture a photo of any receipt and the app uses Google ML Kit's on-device text recognition to auto-fill the transaction amount and merchant name — no API key required, fully offline. Speeds up expense entry significantly.",
        images: ["/projects/nexflo/feature-ocr-1.png"],
      },
      {
        title: "Statistics & Reports",
        description:
          "Rich analytics with multiple chart types: donut/pie chart for expense by category, bar chart for income vs expense comparison, line chart for balance trend, area chart for cashflow, and a net worth chart showing total assets over time. Highlights top spending categories and transactions. Export to CSV and PDF for offline analysis.",
        images: [
          "/projects/nexflo/feature-stats-1.png",
          "/projects/nexflo/feature-stats-2.png",
        ],
      },
      {
        title: "Budget Tracking",
        description:
          "Set budgets per category or globally for monthly, weekly, or yearly periods. Unused budget can roll over to the next period. Color-coded progress bars shift from green → yellow → orange → red as spending approaches the limit, with push notifications triggered at 80% and 100% usage.",
        images: [
          "/projects/nexflo/feature-budget-1.png",
          "/projects/nexflo/feature-budget-2.png",
        ],
      },
      {
        title: "Savings Goals",
        description:
          "Create savings goals with a target amount, deadline, and linked wallet. Track progress with a projected completion date and an 'On track' / 'Behind schedule' indicator. Allocate funds manually from a wallet balance towards any active goal.",
        images: ["/projects/nexflo/feature-savings-1.png"],
      },
      {
        title: "Debt Management",
        description:
          "Track both debts you owe and debts owed to you. Record partial payments with a full payment history per debt. Overdue debts are clearly flagged, and a settlement flow closes the debt with a complete audit trail.",
        images: ["/projects/nexflo/feature-debt-1.png"],
      },
      {
        title: "Recurring Transactions",
        description:
          "Set up recurring transactions on daily, weekly, monthly, or yearly schedules. They are auto-processed when the app opens and handled in the background via WorkManager. Each recurrence can also be skipped or executed manually.",
        images: ["/projects/nexflo/feature-recurring-1.png"],
      },
      {
        title: "Multi-Currency Support",
        description:
          "Each wallet can hold a different currency (e.g. a USD wallet alongside an IDR wallet). Set one base currency for all statistics and charts. Exchange rates are fetched daily from the Frankfurter API (free, no API key) and historical rates per transaction are preserved so old reports remain accurate.",
        images: ["/projects/nexflo/feature-currency-1.png"],
      },
      {
        title: "Privacy-First Google Sheets Sync",
        description:
          "All data is stored locally on your device first — the app works 100% offline. On first login, NexFlo auto-creates a spreadsheet in your own Google Drive and syncs changes in the background when online. The developer has zero access to your spreadsheet or financial data — no backend, no server, no analytics.",
        images: ["/projects/nexflo/feature-sync-1.png"],
      },
      {
        title: "Security & Biometric Lock",
        description:
          "Sign in with Google OAuth 2.0 — no password stored. Lock the app with fingerprint, face ID, or a 4–6 digit PIN (stored as SHA-256 hash). Auto-lock engages after a configurable background timeout. Auth tokens are stored in flutter_secure_storage (encrypted keystore).",
        images: ["/projects/nexflo/feature-security-1.png"],
      },
      {
        title: "Theming & Customization",
        description:
          "Full Light, Dark, and System theme support with a consistent Material 3 design. Choose from seven accent colors — Teal (default), Blue, Purple, Green, Orange, Pink — or set a fully custom color. All UI elements adapt to the selected accent and theme.",
        images: ["/projects/nexflo/feature-theme-1.png"],
      },
    ],
  },
  {
    id: "5",
    slug: "vehicle-data-integration-platform",
    name: "Vehicle Data Integration Platform",
    shortDescription:
      "Real-time integration layer connecting manufacturing systems with analytics platforms.",
    description: `A high-throughput integration platform connecting multiple upstream manufacturing systems (ERP, MES, SCADA) with downstream reporting and analytics services.

Handles real-time event streams and guarantees data consistency across distributed microservices. Deployed on Kubernetes with full High Availability configuration and automated failover.`,
    thumbnail: "/projects/vehicle-data-integration-platform/thumbnail.png",
    techStack: [
      {
        category: "Backend",
        items: ["Java", "Spring Boot", "REST API", "Microservices"],
      },
      { category: "Message Broker", items: ["Kafka"] },
      { category: "Database", items: ["PostgreSQL"] },
      {
        category: "DevOps",
        items: ["Docker", "Kubernetes", "Rancher", "Jenkins"],
      },
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
