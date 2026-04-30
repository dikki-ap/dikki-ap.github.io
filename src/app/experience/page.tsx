import type { Metadata } from "next";
import { ExperiencePageClient } from "@/components/experience/ExperiencePageClient";

export const metadata: Metadata = {
  title: "Experience",
};

export default function ExperiencePage() {
  return <ExperiencePageClient />;
}
