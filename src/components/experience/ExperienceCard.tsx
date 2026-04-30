"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Calendar, ChevronDown, CheckCircle2, FolderOpen } from "lucide-react";
import { Experience } from "@/types";

interface Props {
  experience: Experience;
  index: number;
}

export function ExperienceCard({ experience, index }: Props) {
  const [projectsOpen, setProjectsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative pl-8 md:pl-12"
    >
      {/* Timeline dot */}
      <div className="absolute left-0 top-6 w-4 h-4 rounded-full border-2 border-primary-500 bg-[#0a0f0e] z-10 flex items-center justify-center">
        <div className={`w-2 h-2 rounded-full ${experience.current ? "bg-primary-400 animate-pulse" : "bg-primary-700"}`} />
      </div>

      <div className="glass-card p-6 md:p-8 space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
          <div>
            <div className="flex items-center gap-3 flex-wrap mb-1">
              <h3 className="text-xl font-bold text-[#f0fdfa]">{experience.company}</h3>
              {experience.current && (
                <span className="text-xs px-2.5 py-0.5 rounded-full font-semibold bg-primary-900/60 text-primary-400 border border-primary-700/40">
                  Current
                </span>
              )}
            </div>
            <p className="text-primary-400 font-semibold">{experience.role}</p>
          </div>

          <div className="flex flex-col gap-1.5 text-sm text-primary-200/50 sm:text-right flex-shrink-0">
            <div className="flex items-center gap-1.5 sm:justify-end">
              <Calendar className="w-3.5 h-3.5" />
              <span>{experience.period}</span>
            </div>
            <div className="flex items-center gap-1.5 sm:justify-end">
              <MapPin className="w-3.5 h-3.5" />
              <span>{experience.location}</span>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-primary-200/70 leading-relaxed">{experience.description}</p>

        {/* Responsibilities */}
        <div>
          <h4 className="text-xs font-semibold text-primary-600 uppercase tracking-widest mb-3">
            Key Responsibilities
          </h4>
          <ul className="space-y-2">
            {experience.responsibilities.map((item, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-primary-200/70">
                <CheckCircle2 className="w-4 h-4 text-primary-500 flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Projects accordion */}
        <div>
          <button
            onClick={() => setProjectsOpen(!projectsOpen)}
            className="flex items-center justify-between w-full group"
          >
            <h4 className="text-xs font-semibold text-primary-600 uppercase tracking-widest flex items-center gap-2">
              <FolderOpen className="w-4 h-4" />
              Projects ({experience.projects.length})
            </h4>
            <motion.div
              animate={{ rotate: projectsOpen ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronDown className="w-4 h-4 text-primary-600" />
            </motion.div>
          </button>

          <AnimatePresence>
            {projectsOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="mt-3 space-y-3">
                  {experience.projects.map((project, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-xl bg-primary-950/30 border border-primary-900/40"
                    >
                      <p className="font-semibold text-[#f0fdfa] text-sm mb-1">{project.name}</p>
                      <p className="text-xs text-primary-200/60 leading-relaxed mb-3">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs font-mono bg-primary-900/50 border border-primary-800/40 text-primary-400 px-2 py-0.5 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Overall tech stack */}
        <div>
          <h4 className="text-xs font-semibold text-primary-600 uppercase tracking-widest mb-3">
            Tech Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {experience.techStack.map((tech) => (
              <span
                key={tech}
                className="text-xs font-mono bg-primary-900/40 border border-primary-700/40 text-primary-300 px-3 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
