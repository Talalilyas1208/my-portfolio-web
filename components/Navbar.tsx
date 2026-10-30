'use client';

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X, Github, Linkedin, Sparkles } from 'lucide-react';
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'py-2.5 sm:py-3 bg-[#060913]/85 backdrop-blur-2xl border-b border-white/[0.1] shadow-[0_12px_40px_rgba(0,0,0,0.55)]'
          : 'py-3.5 sm:py-4 bg-[#060913]/45 backdrop-blur-md border-b border-white/[0.05]'
      }`}
    >
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-violet-400/60 to-cyan-400/60 pointer-events-none" />

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
              className="p-2 rounded-xl liquid-glass text-slate-300 hover:text-white hover:border-violet-400/50 transition-all shadow-sm"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personalData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 rounded-xl liquid-glass text-slate-300 hover:text-white hover:border-cyan-400/50 transition-all shadow-sm"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white liquid-btn-primary rounded-xl"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Hire Me</span>
            </a>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="lg:hidden p-2.5 rounded-xl liquid-glass text-slate-200 hover:text-white focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <NavMobileDrawer isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </header>
  );
}
