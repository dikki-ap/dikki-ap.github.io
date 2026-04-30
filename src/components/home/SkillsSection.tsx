"use client";

import { motion } from "framer-motion";
import {
  Server,
  Network,
  Code,
  Code2,
  Paintbrush,
  Zap,
  Database,
  Box,
  GitMerge,
  Cloud,
  Coffee,
  Atom,
  Layers,
  Share2,
  Cpu,
} from "lucide-react";
import { skills } from "@/data/profile";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  server:      Server,
  network:     Network,
  code:        Code,
  "code-2":    Code2,
  paintbrush:  Paintbrush,
  zap:         Zap,
  database:    Database,
  box:         Box,
  "git-merge": GitMerge,
  cloud:       Cloud,
  coffee:      Coffee,
  atom:        Atom,
  layers:      Layers,
  "share-2":   Share2,
  cpu:         Cpu,
};

const categoryLabels: Record<string, string> = {
  backend:  "Backend",
  frontend: "Frontend",
  database: "Database",
  devops:   "DevOps & Tools",
  tools:    "Tools",
};

const categoryOrder = ["backend", "frontend", "database", "devops", "tools"];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden:  { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
};

export function SkillsSection() {
  const groupedSkills = categoryOrder.reduce((acc, cat) => {
    const catSkills = skills.filter((s) => s.category === cat);
    if (catSkills.length > 0) acc[cat] = catSkills;
    return acc;
  }, {} as Record<string, typeof skills>);

  return (
    <section id="skills" className="py-20 bg-[#0a0f0e]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#f0fdfa] mb-4">
            Tech <span className="text-primary-400 glow-text">Stack</span>
          </h2>
          <p className="text-primary-200/60 max-w-xl mx-auto">
            Technologies and tools I work with regularly
          </p>
          <div className="w-16 h-0.5 bg-gradient-to-r from-primary-600 to-primary-400 mx-auto mt-4" />
        </motion.div>

        <div className="space-y-10">
          {Object.entries(groupedSkills).map(([category, catSkills]) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xs font-semibold text-primary-600 uppercase tracking-widest mb-4">
                {categoryLabels[category]}
              </h3>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-wrap gap-3"
              >
                {catSkills.map((skill) => {
                  const Icon = iconMap[skill.icon] ?? Cpu;
                  return (
                    <motion.div
                      key={skill.name}
                      variants={itemVariants}
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-2 bg-primary-900/40 border border-primary-700/40 text-primary-300 text-sm font-mono px-4 py-2 rounded-full hover:border-primary-500/60 hover:bg-primary-900/60 transition-all duration-200 cursor-default"
                    >
                      <Icon className="w-4 h-4" />
                      {skill.name}
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
