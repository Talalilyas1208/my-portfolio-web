'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Github, Linkedin, Mail, ArrowUp, Sparkles, MapPin, Terminal } from 'lucide-react';
import { personalData } from '@/data/portfolioData';

export default function Footer() {
  const [lahoreTime, setLahoreTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Karachi',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setLahoreTime(new Intl.DateTimeFormat('en-US', options).format(new Date()));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-surface-border bg-[#05070e] text-slate-400 relative overflow-hidden">
      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-primary-500/30 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-surface-border">
          {/* Col 1: Bio & Positioning */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-primary-600/20 border border-primary-500/30 flex items-center justify-center font-mono font-bold text-primary-400 text-sm">
                MT
              </div>
              <span className="font-semibold text-slate-100 text-lg">
                {personalData.name}
              </span>
            </div>
            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              AI & Full-Stack React Engineer with a formal degree in Artificial Intelligence (BS AI). Specializing in autonomous LLM agents, self-healing code loops, and high-performance React & Next.js architectures.
            </p>
            <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-primary-400" />
                Pakistan (Lahore &amp; Sargodha)
              </span>
              {lahoreTime && (
                <span className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-surface-200 border border-white/[0.06]">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  {lahoreTime} PKT (Pakistan Standard Time)
                </span>
              )}
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-200 font-semibold">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-primary-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-primary-400 transition-colors">
                  Featured Projects
                </Link>
              </li>
              <li>
                <Link href="/experience" className="hover:text-primary-400 transition-colors">
                  Experience & Education
                </Link>
              </li>
              <li>
                <Link href="/skills" className="hover:text-primary-400 transition-colors">
                  Technical Skills
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-primary-400 transition-colors">
                  Engineering Notes / Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary-400 transition-colors">
                  Contact & Inquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Flagship Project & Socials */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-200 font-semibold">
              Flagship Project
            </h4>
            <Link
              href="/projects/autonomous-gemini-code-fixer"
              className="block p-3 rounded-xl bg-surface-200/70 border border-white/[0.06] hover:border-primary-500/40 hover:bg-surface-200 transition-all group"
            >
              <div className="flex items-center gap-2 mb-1">
                <Terminal className="w-3.5 h-3.5 text-primary-400" />
                <span className="text-xs font-medium text-slate-200 group-hover:text-primary-400 transition-colors">
                  Autonomous Code-Fixer
                </span>
              </div>
              <p className="text-[11px] text-slate-400 line-clamp-2">
                Self-healing developer agent powered by Google Gemini API & AST parsing.
              </p>
            </Link>

            <div className="flex items-center gap-2 pt-1">
              <a
                href={personalData.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2.5 rounded-lg bg-surface-200 hover:bg-primary-600/20 hover:text-primary-400 text-slate-400 border border-white/[0.06] transition-all"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personalData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2.5 rounded-lg bg-surface-200 hover:bg-primary-600/20 hover:text-primary-400 text-slate-400 border border-white/[0.06] transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalData.email}`}
                aria-label="Email"
                className="p-2.5 rounded-lg bg-surface-200 hover:bg-primary-600/20 hover:text-primary-400 text-slate-400 border border-white/[0.06] transition-all"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} Muhammad Talal. Built with Next.js 14, TypeScript & Tailwind CSS.</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
