"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, flattenTech } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { ProjectFilter } from "./ProjectFilter";

export function ProjectsClient() {
  const [selected, setSelected] = useState<string[]>([]);

  /** Build grouped tech from all projects, preserving category order */
  const groupedTech = useMemo(() => {
    const categoryOrder: string[] = [];
    const groups: Record<string, Set<string>> = {};

    projects.forEach((project) => {
      project.techStack.forEach((cat) => {
        if (!groups[cat.category]) {
          groups[cat.category] = new Set();
          categoryOrder.push(cat.category);
        }
        cat.items.forEach((item) => groups[cat.category].add(item));
      });
    });

    return Object.fromEntries(
      categoryOrder.map((cat) => [cat, Array.from(groups[cat]).sort()]),
    ) as Record<string, string[]>;
  }, []);

  const handleToggle = (tech: string) =>
    setSelected((prev) =>
      prev.includes(tech) ? prev.filter((t) => t !== tech) : [...prev, tech],
    );

  const filteredProjects = useMemo(() => {
    if (selected.length === 0) return projects;
    return projects.filter((p) =>
      selected.some((tech) => flattenTech(p.techStack).includes(tech)),
    );
  }, [selected]);

  return (
    <div className="min-h-screen bg-[#0a0f0e] pt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Page header */}
        <div className="py-16 bg-[#0f1917] border-b border-primary-900/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#f0fdfa] mb-4">
              All <span className="text-primary-400 glow-text">Projects</span>
            </h1>
            <p className="text-primary-200/60 max-w-xl mx-auto">
              A complete list of personal, learning, and portfolio projects.
              Company-related work is represented only as high-level case
              studies without confidential source code, data, or business
              information.
            </p>
          </div>
        </div>

        {/* Filter panel */}
        <div className="bg-[#0a0f0e] border-b border-primary-900/20 py-4">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <ProjectFilter
              groupedTech={groupedTech}
              selected={selected}
              onToggle={handleToggle}
              onClear={() => setSelected([])}
            />
          </div>
        </div>

        {/* Results */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          {/* Result count */}
          <div className="flex items-center justify-between mb-6">
            <p className="text-sm text-primary-200/50">
              {filteredProjects.length === projects.length
                ? `${projects.length} projects`
                : `${filteredProjects.length} of ${projects.length} projects`}
              {selected.length > 0 && (
                <span className="text-primary-500 ml-1">
                  — filtered by {selected.length} tech
                  {selected.length > 1 ? "nologies" : "nology"}
                </span>
              )}
            </p>
          </div>

          <AnimatePresence mode="wait">
            {filteredProjects.length > 0 ? (
              <motion.div
                key={selected.join(",")}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {filteredProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20 space-y-3"
              >
                <p className="text-primary-200/40 text-lg">
                  No projects match your filters.
                </p>
                <button
                  onClick={() => setSelected([])}
                  className="text-sm text-primary-500 hover:text-primary-400 underline underline-offset-2 transition-colors"
                >
                  Clear filters
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}
