import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { personalData } from '@/data/portfolioData';

export default function NavBrand() {
  return (
    <Link
      href="/"
      className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded-2xl p-1.5 transition-all"
    >
      <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-primary-400/70 shadow-[0_0_20px_rgba(59,130,246,0.4)] group-hover:border-accent-cyan group-hover:scale-105 transition-all duration-300">
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
          <span className="font-bold text-slate-900 tracking-tight group-hover:text-primary-600 transition-colors">
            {personalData.name}
          </span>
          <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-mono font-medium liquid-pill-emerald text-emerald-800">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5 animate-pulse" />
            BS AI
          </span>
        </div>
        <span className="text-xs text-slate-500 font-mono hidden md:block">
          AI &amp; Full-Stack React Engineer
        </span>
      </div>
    </Link>
  );
}
