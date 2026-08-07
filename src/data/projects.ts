import { Project, TechCategory } from "@/types";

/** Flatten all items across categories — used for filtering */
export function flattenTech(techStack: TechCategory[]): string[] {
  return techStack.flatMap((cat) => cat.items);
}

export const projects: Project[] = [
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
          "Each job post defines an ordered set of hiring steps. HR evaluates candidates step by step — pass or fail — and the system sends branded email notifications to the candidate on each outcome. Interview scheduling per step is supported directly from the step evaluation view. Bulk accept/reject/step-pass actions are available for high-volume positions.",
        images: [
          "/projects/job-portal/feature-job-management-list.png",
          "/projects/job-portal/feature-job-management-create-1.png",
          "/projects/job-portal/feature-job-management-create-2.png",
          "/projects/job-portal/feature-job-management-create-3.png",
          "/projects/job-portal/feature-job-management-create-4.png",
        ],
      },
      {
        title: "Email Notifications",
        description:
          "Every key event in the recruitment lifecycle triggers an automatic branded email. Candidates receive a confirmation when their application is submitted, then individual pass or fail notifications for each hiring step — subject line and rich-text body are configured per step via the Tiptap editor with placeholder support (candidate name, job title, company name, etc.). Approvers receive an email with a direct link to review the job post when an approval request reaches their level. Direct accept/reject actions outside the step flow and talent pool re-engagement each send their own dedicated email. All emails are wrapped in a consistent branded HTML container using the company's primary color, ensuring every notification looks on-brand without any additional configuration.",
        images: [
          "/projects/job-portal/feature-mail-job-approval.png",
          "/projects/job-portal/feature-mail-application-received.png",
          "/projects/job-portal/feature-mail-application-step-passed.png",
          "/projects/job-portal/feature-mail-application-final-step-passed.png",
          "/projects/job-portal/feature-mail-application-step-failed.png",
          "/projects/job-portal/feature-mail-talent-pool-reengage.png",
        ],
      },
      {
        title: "Application Management & Rating",
        description:
          "HR views all applications in a filterable table with candidate details including education history and application source (LinkedIn, Indeed, etc.). Each application can be rated 1–10 with a note; the Department Manager's rating is also visible in the list for quick comparison. Direct accept/reject actions are available outside the step flow. HR can upload, replace, and delete company-specific documents per application — visible only to internal users, never to candidates.",
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
          "Visual hiring funnel showing application counts by status, pass/fail rates per hiring step, application source distribution (LinkedIn, Indeed, referral, etc.), and dropout rate trends — all powered by Recharts. Supports date range filtering (30 days to 1 year) and one-click XLSX export. Gives HR a quick read on recruitment health and candidate source effectiveness across all open positions.",
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
          "Admin assigns department managers by email (many-to-many with departments). Managers log in with their candidate account and access a scoped view showing only applications from their assigned departments. Managers can add their own 1–10 rating per applicant (visible alongside the HR rating) and manage company-specific documents — upload, replace, and delete — without needing full HR dashboard access.",
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
          "/projects/job-portal/feature-keycloak-login.png",
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
    slug: "procure-hub",
    name: "Procurement Hub",
    shortDescription:
      "An enterprise procurement management system for manufacturing companies — full PR-to-payment lifecycle, vendor portal, multi-level approvals, and Indonesian tax compliance.",
    description: `A full-stack B2B procurement platform built for manufacturing companies that need a structured, auditable, and configurable purchasing workflow. Covers the entire procurement lifecycle — from Purchase Requisition through RFQ, competitive bidding, multi-level approval, Purchase Order issuance, Goods Receipt, invoice verification, and payment confirmation.

This is a commercial product currently in the User Acceptance Testing (UAT) phase. The source code is private. Full deployment support is available, covering infrastructure setup, cloud provisioning, Keycloak realm configuration, and environment hardening.

The system consists of two distinct portals running on the same platform: an **Internal Portal** for company staff (requester, purchasing, approver, finance, management, super admin) and a **Vendor Portal** where suppliers self-register, manage their compliance documents, and submit quotations independently — no manual vendor onboarding required.

**Indonesian tax compliance is built-in**: PPN 11% is automatically calculated for PKP-registered vendors, and PPh withholding is applied at per-vendor-configured rates on every purchase transaction.

Built with Clean Architecture and modular CQRS on the backend (.NET 8 + MediatR), a React 19 SPA with shadcn/ui on the frontend, and real-time notifications via SignalR. Every data mutation is immutably recorded in a full audit trail with before/after JSON diff, actor identity, and UTC timestamp.

**The system is delivered as a fully customizable solution** — every module, workflow, field structure, and business rule can be tailored to match the purchasing company's internal processes and organizational needs. For companies that already have an ERP system (SAP, Oracle, Odoo, etc.), Procurement Hub can be integrated alongside it — handling procurement workflows while syncing data with the existing ERP rather than replacing it. For companies that do not yet have an ERP, Procurement Hub can be implemented as a standalone procurement system from the ground up.`,
    thumbnail: "/projects/procure-hub/thumbnail.png",
    techStack: [
      {
        category: "Backend",
        items: ["ASP.NET Core (.NET 8)", "C#", "Entity Framework Core"],
      },
      { category: "Database", items: ["MariaDB 11.4"] },
      { category: "Auth & Storage", items: ["Keycloak", "SeaweedFS (S3)"] },
      {
        category: "Frontend",
        items: ["React 19", "TypeScript", "Tailwind CSS", "shadcn/ui"],
      },
      { category: "Real-time & Jobs", items: ["SignalR", "Hangfire"] },
      { category: "DevOps & Testing", items: ["Docker", "xUnit", "Testcontainers"] },
    ],
    status: "in-progress",
    visibility: "private",
    featured: true,
    year: 2026,
    features: [
      {
        title: "End-to-End Procurement Lifecycle",
        description:
          "Structured workflow covering the full procurement cycle: Purchase Requisition (PR) → Request for Quotation (RFQ) → Vendor Bidding → Bid Evaluation → Multi-Level Approval → Purchase Order (PO) → Goods Receipt Note (GRN) → Invoice → Payment Confirmation. Each stage has its own status machine, role-gated actions, and email notifications to relevant parties.",
        images: [
          "/projects/procure-hub/feature-lifecycle-1.png",
          "/projects/procure-hub/feature-lifecycle-2.png",
          "/projects/procure-hub/feature-lifecycle-3.png",
        ],
      },
      {
        title: "Vendor Self-Registration Portal",
        description:
          "Vendors register independently via a public self-registration form — no manual onboarding by internal staff needed. After registration, vendor admins complete their company profile, upload compliance documents (SIUP, NPWP, ISO certifications, etc.), and manage their own vendor user accounts. Vendor staff can then log in to respond to RFQs and submit quotations.",
        images: [
          "/projects/procure-hub/feature-vendor-portal-1.png",
          "/projects/procure-hub/feature-vendor-portal-2.png",
          "/projects/procure-hub/feature-vendor-portal-3.png",
        ],
      },
      {
        title: "Competitive Bidding & Bid Evaluation",
        description:
          "Purchasing staff create an RFQ and invite multiple vendors simultaneously. Each vendor submits their quotation independently through the vendor portal. Purchasing then performs a structured evaluation — comparing price, delivery terms, and vendor tier — before awarding the bid to a selected vendor. The full evaluation history is preserved for audit purposes.",
        images: [
          "/projects/procure-hub/feature-bidding-1.png",
          "/projects/procure-hub/feature-bidding-2.png",
        ],
      },
      {
        title: "Configurable Multi-Level Approval Engine",
        description:
          "A fully configurable approval workflow engine that supports different approval chains per document type (PR, PO, RFQ) and value threshold. Each level is assigned to a named approver role. Approvers can Approve, Soft Reject (return to the previous level for revision), or Hard Reject (restart the approval chain from the beginning). The approval matrix is managed from the admin UI without code changes.",
        images: [
          "/projects/procure-hub/feature-approval-1.png",
          "/projects/procure-hub/feature-approval-2.png",
          "/projects/procure-hub/feature-approval-3.png",
        ],
      },
      {
        title: "3-Way Matching & Invoice Verification",
        description:
          "Before a finance officer can confirm payment, the system enforces 3-way matching: the invoice amount and line items are automatically validated against the original Purchase Order and the Goods Receipt Note. Discrepancies in quantity or price are flagged and must be resolved before the invoice proceeds to payment confirmation.",
        images: [
          "/projects/procure-hub/feature-3way-matching-1.png",
          "/projects/procure-hub/feature-3way-matching-2.png",
        ],
      },
      {
        title: "Indonesian Tax Compliance (PPN & PPh)",
        description:
          "Tax calculations are built into every purchase transaction. PPN 11% is automatically applied for vendors registered as PKP (Pengusaha Kena Pajak). PPh withholding tax is applied at a per-vendor-configured rate and deducted from payment. Both values are reflected on the generated PDF documents, ensuring compliance with Indonesian tax regulations without manual calculation.",
        images: [
          "/projects/procure-hub/feature-tax-1.png",
          "/projects/procure-hub/feature-tax-2.png",
        ],
      },
      {
        title: "Vendor Performance Scoring (KPI)",
        description:
          "After each completed procurement transaction, the system automatically updates the vendor's KPI scorecard based on three dimensions: product/service quality, on-time delivery, and pricing competitiveness. The accumulated score determines the vendor's tier (Gold, Silver, Bronze, Probation), which influences future bid invitations and purchasing decisions.",
        images: [
          "/projects/procure-hub/feature-vendor-scoring-1.png",
          "/projects/procure-hub/feature-vendor-scoring-2.png",
        ],
      },
      {
        title: "Contract Management",
        description:
          "Contracts are generated from one or more awarded Purchase Orders and stored with a defined validity period. The system tracks contract status and sends automatic reminder notifications before the expiry date, giving purchasing staff time to renegotiate or renew. All contract documents are stored in SeaweedFS with access logging.",
        images: [
          "/projects/procure-hub/feature-contracts-1.png",
          "/projects/procure-hub/feature-contracts-2.png",
        ],
      },
      {
        title: "Compliance Document Management",
        description:
          "Vendor compliance documents (SIUP, NPWP, ISO certifications, bank guarantees, etc.) are tracked with upload date, version history, and expiry date. The system flags documents approaching expiry and blocks vendors with expired mandatory documents from participating in new RFQs. Every document access and download is recorded in the audit trail — who, when, which file, from which IP.",
        images: [
          "/projects/procure-hub/feature-documents-1.png",
          "/projects/procure-hub/feature-documents-2.png",
        ],
      },
      {
        title: "Real-time Notifications",
        description:
          "Key procurement events — new approval requests, bid submissions, PO acknowledgements, GRN submissions, invoice receipt — trigger real-time push notifications via SignalR for online users. For users who are offline, notifications are persisted to the database and delivered on next login. All notifications include a direct link to the relevant document.",
        images: [
          "/projects/procure-hub/feature-notifications-1.png",
          "/projects/procure-hub/feature-notifications-2.png",
        ],
      },
      {
        title: "Spend Analytics Dashboard",
        description:
          "Role-based analytics dashboards tailored to each user type. Purchasing staff see the full procurement funnel: PR counts by status, RFQ-to-PO conversion rates, and pending approvals. Management sees spend by category, vendor, and time period — with trend charts to identify cost patterns. All data is scoped to the user's role and department access.",
        images: [
          "/projects/procure-hub/feature-analytics-1.png",
          "/projects/procure-hub/feature-analytics-2.png",
        ],
      },
      {
        title: "Complete Audit Trail",
        description:
          "Every create, update, and delete across all entities is immutably recorded in the audit log: before/after state as JSON diff, the actor's identity (internal user or vendor), action type, entity type and ID, and a UTC timestamp. The audit log is append-only and accessible to super admins for compliance review. Document access and downloads are separately logged with the requesting IP address.",
        images: [
          "/projects/procure-hub/feature-audit-1.png",
          "/projects/procure-hub/feature-audit-2.png",
        ],
      },
    ],
  },
  {
    id: "3",
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
    status: "in-progress",
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
    id: "4",
    slug: "us-stock-research-platform",
    name: "US Stock Research Platform",
    shortDescription:
      "A personal investment research platform for the US stock market — live quotes, candlestick charts, technical indicators, earnings calendar, and automated background data collection.",
    description: `A personal investment research platform for the US stock market built on ASP.NET Core 10 and React 18. Automatically collects historical market data, builds a private stock database, and generates trading analytics to support rational, data-backed investment decisions.

The platform is not a trading bot — it is a research tool. Every decision is backed by data: historical OHLCV prices, corporate events, earnings results, and macro context. All data is sourced from Yahoo Finance (primary) and Finnhub (news, earnings, live quotes).

The backend runs a set of fully automated Hangfire background jobs that collect minute candles during market hours, aggregate session OHLCV, calculate end-of-day metrics (RSI, MACD, EMA, ATR, Gap%), fetch company news, and sync upcoming earnings calendars — all on a configurable schedule with Eastern Time awareness. Jobs can also be triggered manually from the frontend or the Hangfire dashboard.

Built with Clean Architecture (Domain / Application / Infrastructure / Api), EF Core migrations, and a React 18 + TypeScript + Vite frontend.`,
    thumbnail: "/projects/us-stock-research-platform/thumbnail.png",
    techStack: [
      {
        category: "Backend",
        items: ["ASP.NET Core 10", "C#", "Entity Framework Core"],
      },
      { category: "Database", items: ["MariaDB 11.4"] },
      { category: "Cache & Jobs", items: ["Redis (optional)", "Hangfire"] },
      {
        category: "Frontend",
        items: ["React 18", "TypeScript", "Vite", "Tailwind CSS"],
      },
      {
        category: "Charts & Indicators",
        items: [
          "TradingView Lightweight Charts v5",
          "Skender.Stock.Indicators",
        ],
      },
      { category: "Data Sources", items: ["Yahoo Finance", "Finnhub"] },
    ],
    status: "completed",
    visibility: "public",
    featured: true,
    year: 2026,
    githubUrl: "https://github.com/dikki-ap/us-stock-research-platform",
    features: [
      {
        title: "Live Quotes & Market Status",
        description:
          "Real-time stock price with pre-market and after-hours support via Finnhub WebSocket. Displays current price, change %, previous close, and a LIVE badge during market hours with Eastern Time awareness. Automatically shows pre/post-market price outside regular session hours.",
        images: [],
      },
      {
        title: "Candlestick Charts with Volume Overlay",
        description:
          "Interactive candlestick chart powered by TradingView Lightweight Charts v5. Supports daily and intraday timeframes. Volume is overlaid as a histogram on the price pane. Price alert markers are plotted directly on the chart. Smooth dark theme with responsive layout.",
        images: [],
      },
      {
        title: "Technical Indicators",
        description:
          "Calculated server-side on every End-of-Day run using Skender.Stock.Indicators: RSI (14), MACD (12/26/9), EMA 20/50/200, ATR (14), Gap % from previous close, and Relative Strength vs QQQ. All indicators are stored per symbol and exposed via the metrics API.",
        images: [],
      },
      {
        title: "Earnings Calendar — All US Stocks",
        description:
          "Upcoming earnings calendar for all US-listed stocks fetched from Finnhub, showing report date, BMO / AMC / DMH timing, estimated EPS, and days until earnings. Results are split into two sections: watchlist symbols highlighted at the top, and all other US stocks below. Watchlist-only recent results show actual vs estimated EPS with Beat / Miss badge and surprise %.",
        images: [],
      },
      {
        title: "Excel Export — Earnings Calendar",
        description:
          "One-click client-side export of the full upcoming earnings calendar to a .xlsx file using SheetJS CE (Apache 2.0). Generates two sheets — 'In Watchlist' and 'Other US Stocks' — with all columns including days until earnings and report timing.",
        images: [],
      },
      {
        title: "Sector Heatmap — Semiconductors",
        description:
          "Semiconductor comparison table showing all tracked chip stocks side-by-side with period returns (1D, 1W, 1M, 3M, 6M, 1Y), RSI, ATR, Gap %, and Relative Strength vs QQQ. Color-coded by performance for a quick visual read of sector rotation.",
        images: [],
      },
      {
        title: "Price Correlation Matrix",
        description:
          "Pearson correlation heatmap across all watchlist symbols for a selected lookback period. Identifies which stocks move together and which are uncorrelated — useful for portfolio diversification analysis. Computed server-side from historical daily close prices.",
        images: [],
      },
      {
        title: "News & Sentiment Scoring",
        description:
          "Company-specific news fetched every 30 minutes from Finnhub. Each article is scored for bullish / bearish sentiment and displayed with headline, source, and timestamp. Sentiment trend over time is visualized as a line chart.",
        images: [],
      },
      {
        title: "Daily Market Report",
        description:
          "Auto-generated market summary at 5:30 PM ET every trading day. Reports top gainers, top losers, gap up / gap down stocks, and volume leaders across all tracked symbols. Historical reports are stored and retrievable by date.",
        images: [],
      },
      {
        title: "Trading Journal",
        description:
          "Full CRUD trading journal with entry and exit price, quantity, direction, strategy tag, and notes per trade. Aggregated statistics: win rate, average profit, profit factor, and strategy performance breakdown. Separate view for open positions vs closed trades.",
        images: [],
      },
      {
        title: "Strategy Backtesting",
        description:
          "5 built-in backtesting strategies runnable on any watchlist symbol over a custom date range: EMA Crossover (20/50), RSI Mean Reversion, MACD Cross, Gap Up, and Gap Down. Returns trade-by-trade results with entry/exit dates, return %, and summary statistics.",
        images: [],
      },
      {
        title: "Automated Background Jobs (Hangfire)",
        description:
          "Fully automated data pipeline via Hangfire InMemory scheduler with ET timezone awareness: minute candles every market minute, session OHLCV aggregation hourly, End-of-Day OHLCV at 4:35 PM ET, metrics calculation at 5:00 PM ET, daily report at 5:30 PM ET, news every 30 minutes, and earnings sync every Sunday. All jobs are manually triggerable from the frontend Jobs page or the Hangfire dashboard.",
        images: [],
      },
    ],
  },
];

export const getFeaturedProjects = () => projects.filter((p) => p.featured);

export const getProjectBySlug = (slug: string) =>
  projects.find((p) => p.slug === slug);
