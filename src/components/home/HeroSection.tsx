"use client";

import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/profile";

export function HeroSection() {
  return (
    <section className="hero-gradient min-h-screen flex flex-col items-center justify-center relative overflow-hidden pt-16">
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(20,184,166,1) 1px, transparent 1px), linear-gradient(90deg, rgba(20,184,166,1) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="flex flex-col items-center text-center gap-8">
          {/* Profile photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div
              className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-primary-500/50"
              style={{ boxShadow: "0 0 40px rgba(20,184,166,0.3)" }}
            >
              <img
                src={profile.profileImage}
                alt={profile.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Crect width='160' height='160' fill='%23111f1d'/%3E%3Ccircle cx='80' cy='60' r='30' fill='%230d9488'/%3E%3Ccircle cx='80' cy='140' r='50' fill='%230d9488'/%3E%3C/svg%3E";
                }}
              />
            </div>
            <motion.div
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 rounded-full"
              style={{ boxShadow: "0 0 30px rgba(20,184,166,0.4)" }}
            />
          </motion.div>

          {/* Name + typing animation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <motion.h1
              animate={{
                textShadow: [
                  "0 0 20px rgba(20,184,166,0.3)",
                  "0 0 40px rgba(20,184,166,0.6)",
                  "0 0 20px rgba(20,184,166,0.3)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="text-5xl md:text-7xl font-extrabold text-[#f0fdfa]"
            >
              {profile.name}
            </motion.h1>

            <div className="text-2xl md:text-3xl font-semibold text-primary-400 h-10">
              <TypeAnimation
                sequence={profile.typingTexts.flatMap((text) => [text, 2000])}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <Link
              href="/projects"
              className="px-8 py-3 bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 text-white font-semibold rounded-xl transition-all duration-300"
              style={{ boxShadow: "0 0 20px rgba(20,184,166,0.3)" }}
            >
              View Projects
            </Link>
            <Link
              href="/#contact"
              className="px-8 py-3 border border-primary-600/50 text-primary-400 font-semibold rounded-xl hover:bg-primary-900/30 hover:border-primary-500 transition-all duration-300"
            >
              Contact Me
            </Link>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex items-center gap-6"
          >
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-200/50 hover:text-primary-400 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-200/50 hover:text-primary-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="text-primary-200/50 hover:text-primary-400 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-500/50"
      >
        <ArrowDown className="w-6 h-6" />
      </motion.div>
    </section>
  );
}
