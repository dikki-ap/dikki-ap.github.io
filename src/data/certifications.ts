import type { Certification } from "@/types";

// ─────────────────────────────────────────────────────────────────────────────
// TODO(owner): Replace the placeholder `verifyUrl` values below with the real
// verification links (e.g. Credly badge links in the form
// `https://www.credly.com/badges/<badge-id>/public_url`).
//
// To add a certification later, just append a new entry — the section groups
// them by `issuer` automatically (any company works) and applies a badge style
// based on `level` (Foundational / Associate / Professional / custom).
// ─────────────────────────────────────────────────────────────────────────────

export const certifications: Certification[] = [
  {
    id: "aws-cloud-practitioner",
    name: "AWS Certified Cloud Practitioner (CLF-C02)",
    issuer: "AWS",
    level: "Foundational",
    issuedAt: "Sep 2026",
    image: "/certifications/aws-foundational-cloud-practitioner.png",
    verifyUrl:
      "https://www.credly.com/badges/ee5d7578-5229-4116-99da-e290ba19d8dd/public_url",
  },
  {
    id: "aws-ai-practitioner",
    name: "AWS Certified AI Practitioner (AIF-C01)",
    issuer: "AWS",
    level: "Foundational",
    issuedAt: "Sep 2026",
    image: "/certifications/aws-foundational-ai-practitioner.webp",
    verifyUrl:
      "https://www.credly.com/badges/51a876bd-68f5-40ca-bc77-681ab2b40354/public_url",
  },
];
