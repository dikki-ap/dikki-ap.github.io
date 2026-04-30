import type { Metadata } from "next";
import { HeroSection } from "@/components/home/HeroSection";

export const metadata: Metadata = {
  title: "Dikki AP — Software Engineer",
};
import { AboutSection } from "@/components/home/AboutSection";
import { SkillsSection } from "@/components/home/SkillsSection";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { ContactSection } from "@/components/home/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <FeaturedProjects />
      <ContactSection />
    </>
  );
}
