"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ExternalLink, Github, ZoomIn } from "lucide-react";
import { getFeaturedProjects, flattenTech } from "@/data/projects";
import { Project } from "@/types";
import { Lightbox } from "@/components/ui/Lightbox";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden:  { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const statusConfig = {
  completed:     { label: "Completed",   className: "bg-primary-900/60 text-primary-400 border-primary-700/40" },
  "in-progress": { label: "In Progress", className: "bg-amber-900/60 text-amber-400 border-amber-700/40" },
  archived:      { label: "Archived",    className: "bg-gray-900/60 text-gray-400 border-gray-700/40" },
};

function FeaturedCard({ project }: { project: Project }) {
  const [imgError, setImgError] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const status = statusConfig[project.status];
  const allTech = flattenTech(project.techStack);

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="glass-card overflow-hidden group flex flex-col"
    >
      {!imgError && (
        <Lightbox src={project.thumbnail} alt={project.name} open={lightboxOpen} onClose={() => setLightboxOpen(false)} />
      )}
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
            <button
              onClick={(e) => { e.preventDefault(); setLightboxOpen(true); }}
              className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/40 transition-all duration-300 opacity-0 group-hover:opacity-100"
            >
              <ZoomIn className="w-8 h-8 text-white drop-shadow-lg" />
            </button>
          </>
        )}
      </div>

      <div className="p-5 space-y-4 flex flex-col flex-1">
        {/* Status + Year */}
        <div className="flex items-center justify-between">
          <span className={`text-xs px-2 py-0.5 rounded-full font-medium border ${status.className}`}>
            {status.label}
          </span>
          <span className="text-xs text-primary-200/40">{project.year}</span>
        </div>

        {/* Name & description */}
        <div>
          <h3 className="text-lg font-semibold text-[#f0fdfa] mb-1 group-hover:text-primary-400 transition-colors">
            {project.name}
          </h3>
          <p className="text-sm text-primary-200/60 leading-relaxed line-clamp-2">
            {project.shortDescription}
          </p>
        </div>

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
              +{allTech.length - 4} more
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
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export function FeaturedProjects() {
  const featured = getFeaturedProjects();

  return (
    <section id="projects" className="py-20 bg-[#0f1917]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#f0fdfa] mb-4">
            Featured <span className="text-primary-400 glow-text">Projects</span>
          </h2>
          <p className="text-primary-200/60 max-w-xl mx-auto">
            A selection of projects I&apos;ve built and shipped
          </p>
          <div className="w-16 h-0.5 bg-gradient-to-r from-primary-600 to-primary-400 mx-auto mt-4" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {featured.map((project) => (
            <FeaturedCard key={project.id} project={project} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-10"
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 font-semibold group transition-colors"
          >
            View All Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
