"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { experiences } from "@/data/experience";
import { ExperienceCard } from "./ExperienceCard";

export function ExperiencePageClient() {
  const totalYears = (() => {
    const start = new Date("2023-05-01");
    const now = new Date();
    const diff =
      (now.getTime() - start.getTime()) / (1000 * 60 * 60 * 24 * 365);
    return Math.floor(diff);
  })();

  return (
    <div className="min-h-screen bg-[#0a0f0e] pt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Page header */}
        <div className="py-16 bg-[#0f1917] border-b border-primary-900/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 bg-primary-900/40 border border-primary-700/40 text-primary-400 text-sm px-4 py-1.5 rounded-full mb-6">
              <Briefcase className="w-4 h-4" />
              {totalYears}+ Years of Experience
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#f0fdfa] mb-4">
              Work{" "}
              <span className="text-primary-400 glow-text">Experiences</span>
            </h1>
            <p className="text-primary-200/60 max-w-xl mx-auto">
              End-to-end ownership across every role — from requirements to
              production.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="relative">
            <div className="absolute left-[7px] top-0 bottom-0 w-px bg-gradient-to-b from-primary-500/60 via-primary-700/40 to-transparent" />
            <div className="space-y-10">
              {experiences.map((exp, i) => (
                <ExperienceCard key={i} experience={exp} index={i} />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
