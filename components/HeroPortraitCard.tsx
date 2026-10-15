import React from 'react';
import Image from 'next/image';
import { Cpu } from 'lucide-react';

export default function HeroPortraitCard() {
  return (
    <div className="lg:col-span-5 flex justify-center">
      <div className="relative w-full max-w-md">
        <div className="absolute -inset-3 bg-gradient-to-tr from-primary-600/25 via-accent-cyan/20 to-violet-500/20 rounded-[36px] blur-2xl opacity-75 pointer-events-none" />

        <div className="relative rounded-[32px] liquid-glass p-3.5 sm:p-4.5 shadow-liquid-glass-lg transition-all duration-500 hover:border-cyan-400/50 group">
          <div className="relative w-full h-[420px] sm:h-[470px] rounded-[24px] overflow-hidden bg-slate-950/90 border border-white/15 shadow-inner">
            <Image
              src="/profile.png"
              alt="Muhammad Talal — AI & Full-Stack React Engineer"
              fill
              sizes="(max-width: 768px) 100vw, 450px"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              priority
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#05070e] via-transparent to-transparent opacity-85 pointer-events-none" />

            <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-mono font-medium liquid-pill text-slate-100 shadow-lg">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Active for Hire</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-mono font-medium liquid-pill-primary text-cyan-200 shadow-lg">
                <Cpu className="w-3.5 h-3.5 text-cyan-300" />
                <span>AI &amp; React</span>
              </div>
            </div>

            <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl liquid-glass text-slate-100 space-y-1">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-white text-base">Muhammad Talal</h3>
                <span className="text-[11px] font-mono text-emerald-400 font-semibold">BS AI (2023)</span>
              </div>
              <p className="text-xs text-slate-300 font-mono">
                Autonomous AI Agent Architect &bull; React Specialist
              </p>
            </div>
          </div>

          <div className="mt-3.5 grid grid-cols-2 gap-2 text-center">
            <div className="p-2.5 rounded-2xl liquid-glass-subtle">
              <div className="text-xs font-mono font-bold text-cyan-300">Agentic AI</div>
              <div className="text-[10px] text-slate-400">Closed-Loop LLM Systems</div>
            </div>
            <div className="p-2.5 rounded-2xl liquid-glass-subtle">
              <div className="text-xs font-mono font-bold text-primary-300">Next.js 14 &amp; Redux</div>
              <div className="text-[10px] text-slate-400">Sub-Second Architectures</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
