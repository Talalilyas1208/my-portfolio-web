'use client';

import React, { useState, useEffect } from 'react';
import { ArrowUp, MapPin } from 'lucide-react';
import { personalData } from '@/data/portfolioData';
import FooterNav from '@/components/FooterNav';

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
    <footer className="border-t border-slate-200/80 bg-white/80 backdrop-blur-2xl text-slate-600 relative overflow-hidden shadow-[0_-10px_30px_rgba(0,0,0,0.03)]">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4/5 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-slate-200/80">
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-2xl liquid-pill-primary flex items-center justify-center font-mono font-bold text-cyan-800 text-sm">
                MT
              </div>
              <span className="font-bold text-slate-900 text-lg">
                {personalData.name}
              </span>
            </div>
            <p className="text-sm text-slate-600 max-w-md leading-relaxed font-sans">
              AI &amp; Full-Stack React Engineer with a formal degree in Artificial Intelligence (BS AI). Specializing in autonomous LLM agents, self-healing code loops, and high-performance React &amp; Next.js architectures.
            </p>
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-500">
              <span className="flex items-center gap-1.5 liquid-pill px-3 py-1 rounded-full text-slate-700 font-medium">
                <MapPin className="w-3.5 h-3.5 text-cyan-600" />
                Pakistan (Lahore &amp; Sargodha)
              </span>
              {lahoreTime && (
                <span className="flex items-center gap-1.5 px-3 py-1 rounded-full liquid-pill-emerald text-emerald-800 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  {lahoreTime} PKT
                </span>
              )}
            </div>
          </div>

          <FooterNav />
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <span className="text-slate-500">© {new Date().getFullYear()} Muhammad Talal. Built with Next.js 14, TypeScript &amp; Liquid Glass UI.</span>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-700 hover:text-cyan-700 transition-colors liquid-glass-subtle px-3 py-1.5 rounded-xl font-medium"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-cyan-600" />
          </button>
        </div>
      </div>
    </footer>
  );
}
