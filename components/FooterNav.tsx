import React from 'react';
import Link from 'next/link';
import { Terminal, Github, Linkedin, Mail } from 'lucide-react';
import { personalData } from '@/data/portfolioData';

export default function FooterNav() {
  return (
    <>
      <div className="space-y-3">
        <h4 className="text-xs font-mono uppercase tracking-wider text-slate-200 font-semibold">
          Navigation
        </h4>
        <ul className="space-y-2.5 text-sm">
          {[
            { name: 'Home', href: '/' },
            { name: 'Featured Projects', href: '/projects' },
            { name: 'Experience & Education', href: '/experience' },
            { name: 'Technical Skills', href: '/skills' },
            { name: 'Engineering Notes', href: '/blog' },
            { name: 'Contact & Inquiries', href: '/contact' },
          ].map((item) => (
            <li key={item.name}>
              <Link href={item.href} className="hover:text-cyan-300 transition-colors">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

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
          <p className="text-[11px] text-slate-300 line-clamp-2">
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
    </>
  );
}
