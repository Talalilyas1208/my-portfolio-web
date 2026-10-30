'use client';

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X, Github, Linkedin, Send } from 'lucide-react';
import { personalData } from '@/data/portfolioData';
import NavBrand from '@/components/NavBrand';
import NavDesktopLinks from '@/components/NavDesktopLinks';
import NavMobileDrawer from '@/components/NavMobileDrawer';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-2.5 sm:py-3 bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-sm'
          : 'py-3.5 sm:py-4 bg-white/85 backdrop-blur-md border-b border-slate-200/70'
      }`}
    >
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-violet-600 via-emerald-500 to-amber-500 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          <NavBrand />
          <NavDesktopLinks />

          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href={personalData.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 rounded-xl liquid-glass text-slate-800 hover:text-slate-950 hover:border-violet-400 transition-all shadow-sm"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personalData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 rounded-xl liquid-glass text-slate-800 hover:text-slate-950 hover:border-indigo-400 transition-all shadow-sm"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-slate-950 liquid-btn-primary rounded-xl"
            >
              <Send className="w-3.5 h-3.5 text-violet-700" />
              <span>Hire Me</span>
            </a>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="lg:hidden p-2.5 rounded-xl liquid-glass text-slate-900 hover:text-slate-950 focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <NavMobileDrawer isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </header>
  );
}
