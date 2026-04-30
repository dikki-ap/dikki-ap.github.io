import Link from "next/link";
import { Github, Linkedin, Mail, Code2 } from "lucide-react";
import { profile } from "@/data/profile";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-primary-900/30 bg-[#0a0f0e]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <Code2 className="w-5 h-5 text-primary-500" />
            <span className="font-bold text-primary-400">{profile.name}</span>
            <span className="text-primary-200/30 text-sm ml-1">— {profile.title}</span>
          </div>

          {/* Nav links */}
          <nav className="flex items-center gap-6 text-sm text-primary-200/50">
            <Link href="/#about"     className="hover:text-primary-400 transition-colors">About</Link>
            <Link href="/#skills"    className="hover:text-primary-400 transition-colors">Skills</Link>
            <Link href="/experience" className="hover:text-primary-400 transition-colors">Experience</Link>
            <Link href="/projects"   className="hover:text-primary-400 transition-colors">Projects</Link>
            <Link href="/#contact"   className="hover:text-primary-400 transition-colors">Contact</Link>
          </nav>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-200/50 hover:text-primary-400 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-200/50 hover:text-primary-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="text-primary-200/50 hover:text-primary-400 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-primary-900/20 text-center text-sm text-primary-200/30">
          © {year} {profile.name}. Built with Next.js &amp; Tailwind CSS.
        </div>
      </div>
    </footer>
  );
}
