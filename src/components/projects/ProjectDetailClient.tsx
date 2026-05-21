"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ExternalLink, Github, Calendar, Lock, ZoomIn } from "lucide-react";
import { Project } from "@/types";
import { FeatureAccordion } from "./FeatureAccordion";
import { Lightbox } from "@/components/ui/Lightbox";

const statusConfig = {
  completed:     { label: "Completed",   className: "bg-primary-900/60 text-primary-400 border-primary-700/40" },
  "in-progress": { label: "In Progress", className: "bg-amber-900/60 text-amber-400 border-amber-700/40" },
  archived:      { label: "Archived",    className: "bg-gray-900/60 text-gray-400 border-gray-700/40" },
};

/** Subtle distinct colors per category label */
const categoryColor: Record<string, string> = {
  Backend:        "text-sky-400 border-sky-800/40 bg-sky-900/20",
  Frontend:       "text-violet-400 border-violet-800/40 bg-violet-900/20",
  Database:       "text-amber-400 border-amber-800/40 bg-amber-900/20",
  DevOps:         "text-rose-400 border-rose-800/40 bg-rose-900/20",
  "Message Broker": "text-orange-400 border-orange-800/40 bg-orange-900/20",
  Cloud:          "text-cyan-400 border-cyan-800/40 bg-cyan-900/20",
  Framework:      "text-emerald-400 border-emerald-800/40 bg-emerald-900/20",
  Mobile:         "text-pink-400 border-pink-800/40 bg-pink-900/20",
};

const defaultColor = "text-primary-400 border-primary-800/40 bg-primary-900/20";

interface Props {
  project: Project;
}

export function ProjectDetailClient({ project }: Props) {
  const [imgError, setImgError] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const status = statusConfig[project.status];

  return (
    <div className="min-h-screen bg-[#0a0f0e] pt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Hero header */}
        <div className="py-16 bg-[#0f1917] border-b border-primary-900/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-primary-200/60 hover:text-primary-400 transition-colors mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              All Projects
            </Link>

            {/* Status + Year */}
            <div className="flex items-center gap-3 mb-4">
              <span className={`text-xs px-3 py-1 rounded-full font-medium border ${status.className}`}>
                {status.label}
              </span>
              {project.visibility === "private" && (
                <span className="flex items-center gap-1 text-xs px-3 py-1 rounded-full font-medium border bg-gray-900/70 text-gray-400 border-gray-700/50">
                  <Lock className="w-3 h-3" />
                  Private
                </span>
              )}
              <div className="flex items-center gap-1 text-primary-200/40 text-sm">
                <Calendar className="w-4 h-4" />
                {project.year}
              </div>
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold text-[#f0fdfa] mb-4">
              {project.name}
            </h1>
            <p className="text-primary-200/70 text-lg mb-8">{project.shortDescription}</p>

            {/* Links */}
            <div className="flex flex-wrap items-center gap-3">
              {project.visibility === "public" && project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary-600 to-primary-500 text-white font-semibold rounded-xl hover:from-primary-500 hover:to-primary-400 transition-all duration-300 text-sm"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
              )}
              {project.visibility === "public" && project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 border border-primary-600/40 text-primary-400 font-semibold rounded-xl hover:bg-primary-900/30 hover:border-primary-500 transition-all duration-200 text-sm"
                >
                  <Github className="w-4 h-4" />
                  Source Code
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
          {/* Thumbnail */}
          {!imgError && (
            <Lightbox src={project.thumbnail} alt={project.name} open={lightboxOpen} onClose={() => setLightboxOpen(false)} />
          )}
          <div className="rounded-2xl overflow-hidden border border-primary-900/30 bg-[#111f1d] flex items-center justify-center min-h-[200px] relative group cursor-pointer">
            {imgError ? (
              <div style={{ padding: "4rem", textAlign: "center" }}>
                <span style={{ fontSize: "5rem", fontWeight: 900, color: "#0d9488", opacity: 0.2 }}>
                  {project.name.charAt(0)}
                </span>
              </div>
            ) : (
              <>
                <Image
                  src={project.thumbnail}
                  alt={project.name}
                  width={1280}
                  height={720}
                  className="w-full max-h-[480px] object-cover object-top"
                  onError={() => setImgError(true)}
                />
                <button
                  onClick={() => setLightboxOpen(true)}
                  className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/40 transition-all duration-300 opacity-0 group-hover:opacity-100"
                >
                  <ZoomIn className="w-10 h-10 text-white drop-shadow-lg" />
                </button>
              </>
            )}
          </div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-[#f0fdfa] mb-4">About this Project</h2>
            <div className="text-primary-200/70 leading-relaxed text-lg space-y-4">
              {project.description.split("\n\n").map((para, i) => (
                <p key={i}>
                  {para.split(/\*\*(.+?)\*\*/g).map((chunk, j) =>
                    j % 2 === 1
                      ? <strong key={j} className="text-primary-300 font-semibold">{chunk}</strong>
                      : chunk
                  )}
                </p>
              ))}
            </div>
          </motion.div>

          {/* Tech Stack — categorized breakdown */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-[#f0fdfa] mb-6">Tech Stack</h2>
            <div className="glass-card p-6 space-y-5">
              {project.techStack.map((cat, i) => {
                const color = categoryColor[cat.category] ?? defaultColor;
                return (
                  <motion.div
                    key={cat.category}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="flex flex-col sm:flex-row sm:items-center gap-3"
                  >
                    {/* Category label */}
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full border w-fit sm:w-32 flex-shrink-0 text-center ${color}`}>
                      {cat.category}
                    </span>
                    {/* Items */}
                    <div className="flex flex-wrap gap-2">
                      {cat.items.map((item) => (
                        <span
                          key={item}
                          className="font-mono text-sm bg-primary-950/60 border border-primary-800/30 text-primary-200 px-3 py-1 rounded-lg"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Features */}
          {project.features.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-[#f0fdfa] mb-6">Features</h2>
              <FeatureAccordion features={project.features} />
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
