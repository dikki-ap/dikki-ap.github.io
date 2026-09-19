"use client";

import { motion } from "framer-motion";
import { Award, Calendar, ExternalLink } from "lucide-react";
import { certifications } from "@/data/certifications";
import type { Certification } from "@/types";
import { cn } from "@/lib/utils";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

/* Level badge styles — new/unknown levels fall back to the neutral slate style. */
const levelStyles: Record<string, string> = {
  foundational: "bg-[#3d4755] text-[#d4dada] border-[#3d4755]/60",
  associate: "bg-amber-500/15 text-amber-300 border-amber-500/40",
  professional: "bg-rose-500/15 text-rose-300 border-rose-500/40",
};

function levelBadgeClass(level: string) {
  return (
    levelStyles[level.toLowerCase()] ??
    "bg-slate-500/15 text-slate-300 border-slate-500/40"
  );
}

function CertificationCard({ cert }: { cert: Certification }) {
  return (
    <motion.div variants={itemVariants} className="h-full">
      <a
        href={cert.verifyUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Verify ${cert.name} certification`}
        className="glass-card group flex h-full flex-col gap-4 p-6"
      >
        <div className="flex items-start justify-between gap-4">
          {/* Badge image — transparent background, scales down responsively */}
          <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-xl border border-primary-900/40 bg-white/5 p-2.5 md:h-24 md:w-24">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={cert.image}
              alt={cert.name}
              loading="lazy"
              className="h-full w-full object-contain"
            />
          </div>

          <span
            className={cn(
              "shrink-0 rounded-full border px-3 py-1 text-xs font-semibold",
              levelBadgeClass(cert.level)
            )}
          >
            {cert.level}
          </span>
        </div>

        <div className="flex flex-col gap-1.5">
          <h3 className="font-semibold leading-snug text-[#f0fdfa] transition-colors group-hover:text-primary-300">
            {cert.name}
          </h3>
          <p className="flex items-center gap-1.5 text-sm text-primary-200/60">
            <Calendar className="h-3.5 w-3.5" />
            Issued {cert.issuedAt}
          </p>
        </div>

        <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-primary-400">
          Verify
          <ExternalLink className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </span>
      </a>
    </motion.div>
  );
}

export function CertificationsSection() {
  if (certifications.length === 0) return null;

  // Group by issuer, preserving data order so future companies slot in naturally.
  const grouped = certifications.reduce((acc, cert) => {
    (acc[cert.issuer] ??= []).push(cert);
    return acc;
  }, {} as Record<string, Certification[]>);

  return (
    <section id="certifications" className="bg-[#0f1917] py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-[#f0fdfa] md:text-4xl">
            <span className="glow-text text-primary-400">Certifications</span>
          </h2>
          <p className="mx-auto max-w-xl text-primary-200/60">
            Verified credentials backing my hands-on experience
          </p>
          <div className="mx-auto mt-4 h-0.5 w-16 bg-gradient-to-r from-primary-600 to-primary-400" />
        </motion.div>

        <div className="space-y-10">
          {Object.entries(grouped).map(([issuer, certs]) => (
            <motion.div
              key={issuer}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary-600">
                <Award className="h-4 w-4" />
                {issuer}
              </h3>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid gap-5 sm:grid-cols-2"
              >
                {certs.map((cert) => (
                  <CertificationCard key={cert.id} cert={cert} />
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}