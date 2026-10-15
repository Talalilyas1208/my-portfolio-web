import React from 'react';
import Image from 'next/image';
import { Cpu } from 'lucide-react';

export default function HeroPortraitCard() {
  return (
    <div className="lg:col-span-5 flex justify-center">
      <div className="relative w-full max-w-md">
        <div className="absolute -inset-3 bg-gradient-to-tr from-cyan-400/20 via-sky-300/15 to-violet-400/15 rounded-[36px] blur-2xl opacity-75 pointer-events-none" />

        <div className="relative rounded-[32px] liquid-glass p-3.5 sm:p-4.5 shadow-liquid-glass-lg transition-all duration-500 hover:border-cyan-400/50 group">
          <div className="relative w-full h-[420px] sm:h-[470px] rounded-[24px] overflow-hidden bg-slate-900 border border-slate-200/40 shadow-inner">
            <Image
              src="/profile.png"
              alt="Muhammad Talal — AI & Full-Stack React Engineer"
              fill
              sizes="(max-width: 768px) 100vw, 450px"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              priority
            />

            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

            <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-mono font-medium liquid-pill text-slate-900 shadow-md">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Active for Hire</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-mono font-medium liquid-pill-primary text-cyan-800 shadow-md">
                <Cpu className="w-3.5 h-3.5 text-cyan-700" />
                <span>AI &amp; React</span>
              </div>
            </div>

            <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-slate-950/70 backdrop-blur-md border border-white/20 text-white space-y-1">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-white text-base">Muhammad Talal</h3>
                <span className="text-[11px] font-mono text-emerald-400 font-semibold">BS AI (2023)</span>
              </div>
              <p className="text-xs text-slate-200 font-mono">
                Autonomous AI Agent Architect &bull; React Specialist
              </p>
            </div>
          </div>

          <div className="mt-3.5 grid grid-cols-2 gap-2 text-center">
            <div className="p-2.5 rounded-2xl liquid-glass-subtle">
              <div className="text-xs font-mono font-bold text-cyan-700">Agentic AI</div>
              <div className="text-[10px] text-slate-600 font-medium">Closed-Loop LLM Systems</div>
            </div>
            <div className="p-2.5 rounded-2xl liquid-glass-subtle">
              <div className="text-xs font-mono font-bold text-sky-700">Next.js 14 &amp; Redux</div>
              <div className="text-[10px] text-slate-600 font-medium">Sub-Second Architectures</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
