"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ExternalLink, Github, ZoomIn } from "lucide-react";
import { Project } from "@/types";
import { flattenTech } from "@/data/projects";
import { Lightbox } from "@/components/ui/Lightbox";

const statusConfig = {
  completed:     { label: "Completed",   className: "bg-primary-900/60 text-primary-400 border-primary-700/40" },
  "in-progress": { label: "In Progress", className: "bg-amber-900/60 text-amber-400 border-amber-700/40" },
  archived:      { label: "Archived",    className: "bg-gray-900/60 text-gray-400 border-gray-700/40" },
};

interface Props {
  project: Project;
}

export function ProjectCard({ project }: Props) {
  const [imgError, setImgError] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const status = statusConfig[project.status];
  const allTech = flattenTech(project.techStack);

  return (
    <>
    {!imgError && (
      <Lightbox src={project.thumbnail} alt={project.name} open={lightboxOpen} onClose={() => setLightboxOpen(false)} />
    )}
    <motion.div
      layout
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="glass-card overflow-hidden group flex flex-col"
    >
      {/* Thumbnail */}
      <div className="aspect-video bg-[#0a0f0e] overflow-hidden relative flex items-center justify-center">
        {imgError ? (
          <span style={{ fontSize: "3rem", fontWeight: 900, color: "#0d9488", opacity: 0.3 }}>
            {project.name.charAt(0)}
          </span>
        ) : (
          <>
            <img
              src={project.thumbnail}
              alt={project.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              onError={() => setImgError(true)}
            />
            {/* Zoom overlay on hover */}
            <button
              onClick={(e) => { e.preventDefault(); setLightboxOpen(true); }}
              className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/40 transition-all duration-300 opacity-0 group-hover:opacity-100"
            >
              <ZoomIn className="w-8 h-8 text-white drop-shadow-lg" />
            </button>
          </>
        )}

        {/* Status badge */}
        <div className="absolute top-3 right-3">
          <span className={`text-xs px-2 py-1 rounded-full font-medium border ${status.className}`}>
            {status.label}
          </span>
        </div>
      </div>

      <div className="p-5 space-y-4 flex flex-col flex-1">
        {/* Name + year */}
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-lg font-semibold text-[#f0fdfa] group-hover:text-primary-400 transition-colors">
            {project.name}
          </h3>
          <span className="text-xs text-primary-200/40 flex-shrink-0 mt-1">{project.year}</span>
        </div>

        {/* Description */}
        <p className="text-sm text-primary-200/60 leading-relaxed line-clamp-2">
          {project.shortDescription}
        </p>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-1.5">
          {allTech.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="text-xs font-mono bg-primary-900/40 border border-primary-800/40 text-primary-400 px-2 py-0.5 rounded-full"
            >
              {tech}
            </span>
          ))}
          {allTech.length > 4 && (
            <span className="text-xs text-primary-200/40 px-2 py-0.5">
              +{allTech.length - 4}
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 mt-auto pt-1">
          <Link
            href={`/projects/${project.slug}`}
            className="flex-1 text-center text-sm font-medium text-primary-400 border border-primary-600/40 rounded-lg py-2 hover:bg-primary-900/30 hover:border-primary-500 transition-all duration-200"
          >
            View Details
          </Link>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-primary-200/50 hover:text-primary-400 border border-primary-900/40 rounded-lg hover:border-primary-600/40 transition-all duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              <Github className="w-4 h-4" />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-primary-200/50 hover:text-primary-400 border border-primary-900/40 rounded-lg hover:border-primary-600/40 transition-all duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
    </>
  );
}
