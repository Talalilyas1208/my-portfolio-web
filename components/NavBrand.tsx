import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { personalData } from '@/data/portfolioData';

export default function NavBrand() {
  return (
    <Link
      href="/"
      className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded-2xl p-1.5 transition-all"
    >
      <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-violet-400/70 shadow-[0_0_20px_rgba(139,92,246,0.45)] group-hover:border-cyan-400 group-hover:scale-105 transition-all duration-300">
        <Image
          src="/profile.png"
          alt={personalData.name}
          fill
          sizes="40px"
          className="object-cover object-top"
        />
      </div>
      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <span className="font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
            {personalData.name}
          </span>
          <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold liquid-pill-emerald text-emerald-300">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1.5 animate-pulse" />
            BS AI
          </span>
        </div>
        <span className="text-xs text-slate-400 font-mono hidden md:block">
          AI Agents &bull; Full-Stack React Engineer
        </span>
      </div>
    </Link>
  );
}
