import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { personalData } from '@/data/portfolioData';

export default function NavBrand() {
  return (
    <Link
      href="/"
      className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 rounded-2xl p-1.5 transition-all"
    >
      <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-slate-900 shadow-sm group-hover:border-slate-900 group-hover:scale-105 transition-all duration-300">
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
          <span className="font-bold text-slate-950 tracking-tight group-hover:text-slate-800 transition-colors">
            {personalData.name}
          </span>
          <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-mono font-bold liquid-pill-emerald text-slate-950">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-900 mr-1.5 animate-pulse" />
            BS AI
          </span>
        </div>
        <span className="text-xs text-slate-700 font-mono hidden md:block">
          AI Agents &bull; Full-Stack React Engineer
        </span>
      </div>
    </Link>
  );
}
