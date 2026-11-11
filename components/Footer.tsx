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
    <footer className="border-t border-slate-300 bg-[#F5F5F5] text-slate-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-slate-300">
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-2xl bg-white border border-slate-300 flex items-center justify-center font-mono font-bold text-slate-950 text-sm">
                MT
              </div>
              <span className="font-bold text-slate-950 text-lg">
                {personalData.name}
              </span>
            </div>
            <p className="text-sm text-slate-800 max-w-md leading-relaxed font-sans">
              AI &amp; Full-Stack React Engineer with a formal degree in Artificial Intelligence (BS AI). Specializing in autonomous LLM agents, self-healing code loops, and high-performance React &amp; Next.js architectures.
            </p>
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
              <span className="flex items-center gap-1.5 bg-white border border-slate-300 px-3 py-1 rounded-full text-slate-900 font-medium">
                <MapPin className="w-3.5 h-3.5 text-slate-800" />
                Pakistan (Lahore &amp; Sargodha)
              </span>
              {lahoreTime && (
                <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-300 text-slate-950 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-900 animate-pulse" />
                  {lahoreTime} PKT
                </span>
              )}
            </div>
          </div>

          <FooterNav />
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <span className="text-slate-700 font-medium">© {new Date().getFullYear()} Muhammad Talal. Built with Next.js, TypeScript &amp; #F5F5F5 Architectural System.</span>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-900 hover:text-black transition-colors bg-white border border-slate-300 px-3.5 py-1.5 rounded-xl font-semibold"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-slate-900" />
          </button>
        </div>
      </div>
    </footer>
  );
}
