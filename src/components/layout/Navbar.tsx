"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code2 } from "lucide-react";
import { profile } from "@/data/profile";

const navLinks = [
  { href: "/#about",    label: "About" },
  { href: "/#skills",   label: "Skills" },
  { href: "/experience", label: "Experience" },
  { href: "/#projects", label: "Projects" },
  { href: "/#contact",  label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0f0e]/90 backdrop-blur-md border-b border-primary-900/40"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Code2 className="w-6 h-6 text-primary-500" />
            <span className="font-bold text-primary-400 group-hover:text-primary-300 transition-colors">
              {profile.name.split(" ")[0]}
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-primary-200/70 hover:text-primary-400 transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/projects"
              className="px-4 py-2 bg-primary-600/20 border border-primary-600/40 text-primary-400 text-sm rounded-lg hover:bg-primary-600/30 hover:border-primary-500/60 transition-all duration-200"
            >
              All Projects
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-primary-400 hover:text-primary-300 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[#0a0f0e]/95 backdrop-blur-md border-b border-primary-900/40"
          >
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-primary-200/70 hover:text-primary-400 transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/projects"
                className="block text-center px-4 py-2 bg-primary-600/20 border border-primary-600/40 text-primary-400 rounded-lg hover:bg-primary-600/30 transition-all"
                onClick={() => setIsOpen(false)}
              >
                All Projects
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
