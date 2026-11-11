import React from 'react';
import Image from 'next/image';
import { Cpu, Award } from 'lucide-react';

export default function HeroPortraitCard() {
  return (
    <div className="lg:col-span-5 flex justify-center">
      <div className="relative w-full max-w-md">
        <div className="absolute -inset-3 bg-gradient-to-tr from-slate-400/60 via-slate-400/50 to-slate-400/50 rounded-[36px] blur-2xl opacity-80 pointer-events-none" />

        <div className="relative rounded-[32px] liquid-glass p-3.5 sm:p-4.5 shadow-lg transition-all duration-500 hover:border-slate-300 group">
          <div className="relative w-full h-[420px] sm:h-[470px] rounded-[24px] overflow-hidden bg-slate-100 border border-slate-200 shadow-inner">
            <Image
              src="/profile.png"
              alt="Muhammad Talal — AI & Full-Stack React Engineer"
              fill
              sizes="(max-width: 768px) 100vw, 450px"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              priority
            />

            <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-mono font-bold liquid-pill-emerald text-slate-950 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-slate-900 animate-pulse" />
                <span>Active for Hire</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-mono font-bold liquid-pill-violet text-slate-950 shadow-sm">
                <Cpu className="w-3.5 h-3.5 text-slate-800" />
                <span>AI &amp; React</span>
              </div>
            </div>

            <div className="absolute bottom-3.5 left-3.5 right-3.5 p-4 rounded-2xl bg-white/95 backdrop-blur-xl border border-slate-200 text-slate-950 space-y-1 shadow-lg">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-slate-950 text-base">Muhammad Talal</h3>
                <span className="text-[11px] font-mono text-slate-950 liquid-pill-amber px-2 py-0.5 rounded-full font-bold flex items-center gap-1">
                  <Award className="w-3 h-3 text-slate-800" /> BS AI (2023)
                </span>
              </div>
              <p className="text-xs text-slate-800 font-mono font-medium">
                Autonomous AI Agent Architect &bull; React Specialist
              </p>
            </div>
          </div>

          <div className="mt-3.5 grid grid-cols-2 gap-2.5 text-center">
            <div className="p-3 rounded-2xl liquid-pill-violet">
              <div className="text-xs font-mono font-bold text-slate-950">Agentic AI</div>
              <div className="text-[10px] text-slate-800 font-semibold mt-0.5">Closed-Loop LLM Systems</div>
            </div>
            <div className="p-3 rounded-2xl liquid-pill-emerald">
              <div className="text-xs font-mono font-bold text-slate-950">Next.js 14 &amp; Redux</div>
              <div className="text-[10px] text-slate-800 font-semibold mt-0.5">Sub-Second Architectures</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
