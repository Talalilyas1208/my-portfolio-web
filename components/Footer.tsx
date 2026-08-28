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
    <footer className="border-t border-white/[0.1] bg-[#05070e]/80 backdrop-blur-2xl text-slate-400 relative overflow-hidden">
      {/* Subtle top specular liquid glow line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4/5 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-white/[0.08]">
          {/* Col 1: Bio & Positioning */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-2xl liquid-pill-primary flex items-center justify-center font-mono font-bold text-cyan-300 text-sm">
                MT
              </div>
              <span className="font-bold text-slate-100 text-lg">
                {personalData.name}
              </span>
            </div>
            <p className="text-sm text-slate-300 max-w-md leading-relaxed font-sans">
              AI &amp; Full-Stack React Engineer with a formal degree in Artificial Intelligence (BS AI). Specializing in autonomous LLM agents, self-healing code loops, and high-performance React &amp; Next.js architectures.
            </p>
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5 liquid-pill px-3 py-1 rounded-full text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                Pakistan (Lahore &amp; Sargodha)
              </span>
              {lahoreTime && (
                <span className="flex items-center gap-1.5 px-3 py-1 rounded-full liquid-pill-emerald text-emerald-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  {lahoreTime} PKT
                </span>
              )}
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-200 font-semibold">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-cyan-300 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-cyan-300 transition-colors">
                  Featured Projects
                </Link>
              </li>
              <li>
                <Link href="/experience" className="hover:text-cyan-300 transition-colors">
                  Experience &amp; Education
                </Link>
              </li>
              <li>
                <Link href="/skills" className="hover:text-cyan-300 transition-colors">
                  Technical Skills
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-cyan-300 transition-colors">
                  Engineering Notes / Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-cyan-300 transition-colors">
                  Contact &amp; Inquiries
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
              className="block p-3.5 rounded-2xl liquid-glass-subtle hover:border-cyan-400/40 transition-all group"
            >
              <div className="flex items-center gap-2 mb-1">
                <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                <span className="text-xs font-semibold text-slate-200 group-hover:text-cyan-300 transition-colors">
                  Autonomous Code-Fixer
                </span>
              </div>
              <p className="text-[11px] text-slate-400 line-clamp-2">
                Self-healing developer agent powered by Google Gemini API &amp; AST parsing.
              </p>
            </Link>

            <div className="flex items-center gap-2 pt-1">
              <a
                href={personalData.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2.5 rounded-xl liquid-glass-subtle hover:border-white/25 text-slate-300 hover:text-white transition-all"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personalData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2.5 rounded-xl liquid-glass-subtle hover:border-white/25 text-slate-300 hover:text-white transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalData.email}`}
                aria-label="Email"
                className="p-2.5 rounded-xl liquid-glass-subtle hover:border-white/25 text-slate-300 hover:text-white transition-all"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} Muhammad Talal. Built with Next.js 14, TypeScript &amp; Liquid Glass UI.</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-slate-300 hover:text-cyan-300 transition-colors liquid-glass-subtle px-3 py-1.5 rounded-xl"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
