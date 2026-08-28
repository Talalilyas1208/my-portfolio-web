'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { 
  Terminal, 
  Layers, 
  Briefcase, 
  Cpu, 
  Mail, 
  BookOpen, 
  Menu, 
  X, 
  Github, 
  Linkedin,
  FileText,
  Sparkles
} from 'lucide-react';
import { personalData } from '@/data/portfolioData';

const navLinks = [
  { name: 'Home', href: '/', icon: Terminal },
  { name: 'Projects', href: '/projects', icon: Layers },
  { name: 'Experience', href: '/experience', icon: Briefcase },
  { name: 'Skills', href: '/skills', icon: Cpu },
  { name: 'Articles', href: '/blog', icon: BookOpen },
  { name: 'Contact', href: '/contact', icon: Mail },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'py-2 sm:py-3 bg-[#05070e]/80 backdrop-blur-2xl border-b border-white/[0.12] shadow-[0_10px_35px_rgba(0,0,0,0.65)]'
          : 'py-3 sm:py-4 bg-transparent border-b border-white/[0.05]'
      }`}
    >
      {/* Top subtle liquid edge reflection line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo / Brand Name */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded-2xl p-1.5 transition-all"
          >
            <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-primary-400/70 shadow-[0_0_20px_rgba(59,130,246,0.4)] group-hover:border-accent-cyan group-hover:scale-105 transition-all duration-300">
              <Image
                src="/profile.png"
                alt="Muhammad Talal"
                fill
                sizes="40px"
                className="object-cover object-top"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-bold text-slate-100 tracking-tight group-hover:text-primary-300 transition-colors">
                  Muhammad Talal Ilyas
                </span>
                <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-mono font-medium liquid-pill-emerald text-emerald-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1.5 animate-pulse"></span>
                  BS AI
                </span>
              </div>
              <span className="text-xs text-slate-400 font-mono hidden md:block">
                AI & Full-Stack React Engineer
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links (Floating Liquid Pill) */}
          <nav className="hidden lg:flex items-center gap-1.5 liquid-glass px-3 py-1.5 rounded-full shadow-liquid-glass">
            {navLinks.map((link) => {
              const isActive =
                link.href === '/'
                  ? pathname === '/'
                  : pathname.startsWith(link.href);
              const Icon = link.icon;

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-300 relative ${
                    isActive
                      ? 'liquid-pill-primary text-white font-semibold shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-white/[0.08]'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-cyan-300' : 'text-slate-400'}`} />
                  <span>{link.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs & Socials */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href={personalData.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 rounded-xl liquid-glass-subtle text-slate-300 hover:text-white hover:border-white/25 transition-all"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personalData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 rounded-xl liquid-glass-subtle text-slate-300 hover:text-white hover:border-white/25 transition-all"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white liquid-btn-primary rounded-xl"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Hire Me</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="lg:hidden p-2.5 rounded-xl liquid-glass-subtle text-slate-300 hover:text-white focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu (Liquid Glass) */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-white/[0.12] bg-[#05070e]/95 backdrop-blur-3xl animate-fade-in shadow-2xl">
          <div className="px-4 pt-3 pb-6 space-y-2 max-w-md mx-auto">
            <div className="p-3.5 mb-3 rounded-2xl liquid-glass-subtle flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="text-xs text-slate-200 font-medium">Available for AI & React Roles</span>
              </div>
              <span className="text-[11px] font-mono text-slate-400">Pakistan 🇵🇰</span>
            </div>

            {navLinks.map((link) => {
              const isActive =
                link.href === '/'
                  ? pathname === '/'
                  : pathname.startsWith(link.href);
              const Icon = link.icon;

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`flex items-center justify-between px-4 py-3 rounded-2xl text-sm font-medium transition-all ${
                    isActive
                      ? 'liquid-pill-primary text-white font-semibold'
                      : 'text-slate-300 hover:text-white hover:bg-white/[0.06]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-4 h-4 text-cyan-400" />
                    <span>{link.name}</span>
                  </div>
                  {isActive && <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]"></span>}
                </Link>
              );
            })}

            <div className="pt-4 mt-3 border-t border-white/[0.08] flex items-center justify-between gap-3">
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
                className="flex-1 py-3 text-center text-xs font-semibold text-white liquid-btn-primary rounded-xl"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
