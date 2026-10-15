import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Github, Linkedin } from 'lucide-react';
import { navItems } from '@/components/NavDesktopLinks';
import { personalData } from '@/data/portfolioData';

interface NavMobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NavMobileDrawer({ isOpen, onClose }: NavMobileDrawerProps) {
  const pathname = usePathname();
  if (!isOpen) return null;

  return (
    <div className="lg:hidden border-b border-slate-200/80 bg-white/95 backdrop-blur-3xl animate-fade-in shadow-xl">
      <div className="px-4 pt-3 pb-6 space-y-2 max-w-md mx-auto">
        <div className="p-3.5 mb-3 rounded-2xl liquid-glass flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs text-slate-200 font-medium">Available for AI &amp; React Roles</span>
          </div>
          <span className="text-[11px] font-mono text-slate-400">Pakistan 🇵🇰</span>
        </div>

        {navItems.map((link) => {
          const isActive =
            link.href === '/' ? pathname === '/' : pathname.startsWith(link.href);
          const Icon = link.icon;

          return (
            <Link
              key={link.name}
              href={link.href}
              onClick={onClose}
              className={`flex items-center justify-between px-4 py-3 rounded-2xl text-sm font-medium transition-all ${
                isActive
                  ? 'liquid-pill-primary text-white font-semibold'
                  : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <div className="flex items-center gap-3">
                <Icon className="w-4 h-4 text-cyan-600" />
                <span>{link.name}</span>
              </div>
              {isActive && <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />}
            </Link>
          );
        })}

        <div className="pt-4 mt-3 border-t border-slate-200 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <a
              href={personalData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl liquid-glass text-slate-200 hover:text-white"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personalData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl liquid-glass text-slate-200 hover:text-white"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
          <Link
            href="/contact"
            onClick={onClose}
            className="flex-1 py-3 text-center text-xs font-semibold text-white liquid-btn-primary rounded-xl"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
}
