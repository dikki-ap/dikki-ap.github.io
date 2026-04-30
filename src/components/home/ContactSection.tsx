"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, MessageCircle } from "lucide-react";
import { profile } from "@/data/profile";

export function ContactSection() {
  const contacts = [
    {
      icon: Mail,
      label: "Email",
      value: profile.email,
      href: `mailto:${profile.email}`,
      external: false,
    },
    {
      icon: Github,
      label: "GitHub",
      value: profile.github.replace("https://", ""),
      href: profile.github,
      external: true,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: profile.linkedin.replace("https://", ""),
      href: profile.linkedin,
      external: true,
    },
  ];

  return (
    <section id="contact" className="py-20 bg-[#0a0f0e]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#f0fdfa] mb-4">
            Get In <span className="text-primary-400 glow-text">Touch</span>
          </h2>
          <p className="text-primary-200/60 max-w-xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out.
          </p>
          <div className="w-16 h-0.5 bg-gradient-to-r from-primary-600 to-primary-400 mx-auto mt-4" />
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8 space-y-6"
          >
            <div className="flex items-start gap-3">
              <MessageCircle className="w-6 h-6 text-primary-500 flex-shrink-0 mt-0.5" />
              <p className="text-primary-200/80 leading-relaxed">
                I&apos;m currently open to new opportunities. Whether you have a project, a question,
                or just want to say hello — my inbox is always open!
              </p>
            </div>

            <div className="space-y-3">
              {contacts.map((contact, i) => (
                <motion.a
                  key={i}
                  href={contact.href}
                  target={contact.external ? "_blank" : undefined}
                  rel={contact.external ? "noopener noreferrer" : undefined}
                  whileHover={{ x: 6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="flex items-center gap-4 p-4 rounded-xl border border-primary-900/40 hover:border-primary-500/50 hover:bg-primary-900/20 transition-all duration-200 group"
                >
                  <div className="p-2 bg-primary-900/40 rounded-lg border border-primary-700/40 group-hover:border-primary-500/60 transition-colors">
                    <contact.icon className="w-5 h-5 text-primary-400" />
                  </div>
                  <div>
                    <div className="text-xs text-primary-200/40 font-medium uppercase tracking-wide">
                      {contact.label}
                    </div>
                    <div className="text-[#f0fdfa] font-medium group-hover:text-primary-400 transition-colors">
                      {contact.value}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
