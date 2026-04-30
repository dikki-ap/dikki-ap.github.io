"use client";

import { motion } from "framer-motion";
import { MapPin, Briefcase } from "lucide-react";
import { profile } from "@/data/profile";

const stats = [
  { label: "Years Experience", value: "3+" },
  { label: "Projects Completed", value: "20+" },
  { label: "Technologies", value: "15+" },
  { label: "Satisfied Clients", value: "10+" },
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-[#0f1917]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#f0fdfa] mb-4">
            About <span className="text-primary-400 glow-text">Me</span>
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-primary-600 to-primary-400 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-primary-200/80 text-lg leading-relaxed">{profile.bio}</p>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-primary-200/70">
                <Briefcase className="w-5 h-5 text-primary-500 flex-shrink-0" />
                <span>{profile.currentWork}</span>
              </div>
              <div className="flex items-center gap-3 text-primary-200/70">
                <MapPin className="w-5 h-5 text-primary-500 flex-shrink-0" />
                <span>{profile.location}</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary-400 rounded-full animate-pulse" />
              <span className="text-primary-400 text-sm font-medium">
                Available for new opportunities
              </span>
            </div>
          </motion.div>

          {/* Stats grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, i) => (
              <div key={i} className="glass-card p-6 text-center">
                <div className="text-3xl font-bold text-primary-400 mb-1">{stat.value}</div>
                <div className="text-sm text-primary-200/60">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
