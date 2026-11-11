import React from 'react';
import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';
import { personalData, projectsData } from '@/data/portfolioData';

export default function FooterNav() {
  return (
    <>
      <div className="space-y-3">
        <h4 className="text-xs font-mono uppercase tracking-wider text-slate-950 font-bold">
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
              <Link href={item.href} className="text-slate-800 hover:text-black hover:underline transition-colors font-medium">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="space-y-3">
        <h4 className="text-xs font-mono uppercase tracking-wider text-slate-950 font-bold">
          Case Studies &amp; Systems
        </h4>
        <ul className="space-y-2 text-xs">
          {projectsData.map((p) => (
            <li key={p.slug}>
              <Link
                href={`/projects/${p.slug}`}
                className="text-slate-800 hover:text-black hover:underline transition-colors font-medium line-clamp-1"
              >
                {p.title}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 pt-2">
          <a
            href={personalData.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-2.5 rounded-xl bg-white border border-slate-300 hover:border-slate-900 text-slate-800 hover:text-slate-950 transition-all"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={personalData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-2.5 rounded-xl bg-white border border-slate-300 hover:border-slate-900 text-slate-800 hover:text-slate-950 transition-all"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${personalData.email}`}
            aria-label="Email"
            className="p-2.5 rounded-xl bg-white border border-slate-300 hover:border-slate-900 text-slate-800 hover:text-slate-950 transition-all"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </div>
    </>
  );
}
