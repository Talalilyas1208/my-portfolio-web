'use client';

import React, { useState } from 'react';
import { Sparkles, Cpu, Bot, Code2, Database, Shield, Zap, Terminal } from 'lucide-react';

interface TechItem {
  name: string;
  category: string;
  experience?: string;
  icon?: React.ElementType;
}

const innerOrbitTechs: TechItem[] = [
  { name: 'Python 3.12', category: 'AI & Backend', experience: 'Advanced · 3+ yrs', icon: Terminal },
  { name: 'TypeScript', category: 'Type Safety', experience: 'Advanced · 3+ yrs', icon: Code2 },
  { name: 'Gemini 1.5 Pro', category: 'LLM & Agents', experience: 'Core Specialization', icon: Bot },
  { name: 'React 18', category: 'Frontend Architecture', experience: 'Advanced · 3+ yrs', icon: Cpu },
  { name: 'Next.js 14', category: 'Full-Stack SSR', experience: 'Advanced · 2+ yrs', icon: Zap },
];

const middleOrbitTechs: TechItem[] = [
  { name: 'Redux Toolkit', category: 'State Engine', experience: 'Enterprise Scale' },
  { name: 'FastAPI', category: 'Async Python', experience: 'High Throughput' },
  { name: 'Docker', category: 'Sandboxing', experience: 'Containerized CI' },
  { name: 'PostgreSQL', category: 'Relational DB', experience: 'ACID Transactions' },
  { name: 'Tailwind CSS', category: 'Liquid UI', experience: 'Design Systems' },
  { name: 'AST Parser', category: 'Code Analysis', experience: 'Static Syntax Trees' },
];

const outerOrbitTechs: TechItem[] = [
  { name: 'LangChain', category: 'Agent Chains' },
  { name: 'Supabase', category: 'Edge Backend' },
  { name: 'Jest / Testing', category: 'Unit & E2E' },
  { name: 'GitHub Actions', category: 'Automated CI/CD' },
  { name: 'Vercel Edge', category: 'Serverless CDN' },
  { name: 'WebSockets', category: 'Real-time Streams' },
  { name: 'REST / GraphQL', category: 'API Protocol' },
  { name: 'Redis Cache', category: 'In-Memory Store' },
];

export default function TechOrbitSystem() {
  const [activeTech, setActiveTech] = useState<TechItem | null>(null);

  return (
    <section className="relative py-16 overflow-hidden select-none">
      {/* Background radial accent glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
        {/* Section Header */}
        <div className="space-y-2 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-semibold liquid-pill text-cyan-300">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            Planetary Tech Orbit
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Integrated Technology Universe
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
            Concentric planetary rings rotating across AI agents, React architecture, and containerized backend systems. Hover over any node to inspect capabilities.
          </p>
        </div>

        {/* Desktop Interactive Orbit (Hidden on mobile) */}
        <div className="hidden lg:flex items-center justify-center pt-8 pb-12">
          <div className="orbit-container relative w-[680px] h-[680px] flex items-center justify-center">
            {/* Background CAD grid alignment lines */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none opacity-30"
              viewBox="-340 -340 680 680"
            >
              <line x1="0" y1="-320" x2="0" y2="320" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" strokeDasharray="4 6" />
              <line x1="-320" y1="0" x2="320" y2="0" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" strokeDasharray="4 6" />
              <circle cx="0" cy="0" r="130" stroke="rgba(6,182,212,0.3)" strokeWidth="1" strokeDasharray="3 5" fill="none" />
              <circle cx="0" cy="0" r="215" stroke="rgba(59,130,246,0.25)" strokeWidth="1" strokeDasharray="3 5" fill="none" />
              <circle cx="0" cy="0" r="300" stroke="rgba(139,92,246,0.2)" strokeWidth="1" strokeDasharray="3 5" fill="none" />
            </svg>

            {/* Central Glowing Core Badge */}
            <div className="absolute z-30 flex flex-col items-center justify-center">
              <div className="relative flex items-center justify-center">
                {/* Pulse Ping Rings */}
                <div className="absolute w-28 h-28 rounded-full bg-cyan-400/20 animate-ping pointer-events-none"></div>
                <div className="w-20 h-20 rounded-full liquid-glass border border-cyan-400/60 shadow-liquid-glow flex flex-col items-center justify-center text-center backdrop-blur-2xl">
                  <span className="font-mono font-extrabold text-xl text-gradient-liquid tracking-wider">
                    MT
                  </span>
                  <span className="text-[9px] font-mono text-cyan-300 font-bold uppercase tracking-widest mt-0.5">
                    BS AI
                  </span>
                </div>
              </div>
              <div className="mt-3 px-3 py-1 rounded-full liquid-pill text-[11px] font-mono text-slate-300 min-h-[26px]">
                {activeTech ? (
                  <span className="text-cyan-300 font-semibold">{activeTech.name} &bull; {activeTech.category}</span>
                ) : (
                  <span>Hover to Inspect</span>
                )}
              </div>
            </div>

            {/* RING 1: INNER ORBIT (Radius 130px, 25s rotation) */}
            <div className="orbit-track absolute w-[260px] h-[260px] rounded-full animate-orbit-cw-25 flex items-center justify-center">
              {innerOrbitTechs.map((tech, idx) => {
                const angle = (idx / innerOrbitTechs.length) * 2 * Math.PI;
                const x = 130 * Math.cos(angle);
                const y = 130 * Math.sin(angle);

                return (
                  <div
                    key={tech.name}
                    style={{
                      transform: `translate(${x}px, ${y}px)`,
                    }}
                    onMouseEnter={() => setActiveTech(tech)}
                    onMouseLeave={() => setActiveTech(null)}
                    className="absolute"
                  >
                    {/* Counter-rotating badge so text remains horizontal */}
                    <div className="orbit-badge animate-orbit-ccw-25">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold liquid-pill-primary text-cyan-100 hover:scale-110 hover:border-cyan-300 transition-all cursor-pointer shadow-liquid-glow">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                        {tech.name}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* RING 2: MIDDLE ORBIT (Radius 215px, 45s reverse rotation) */}
            <div className="orbit-track absolute w-[430px] h-[430px] rounded-full animate-orbit-ccw-45 flex items-center justify-center">
              {middleOrbitTechs.map((tech, idx) => {
                const angle = (idx / middleOrbitTechs.length) * 2 * Math.PI;
                const x = 215 * Math.cos(angle);
                const y = 215 * Math.sin(angle);

                return (
                  <div
                    key={tech.name}
                    style={{
                      transform: `translate(${x}px, ${y}px)`,
                    }}
                    onMouseEnter={() => setActiveTech(tech)}
                    onMouseLeave={() => setActiveTech(null)}
                    className="absolute"
                  >
                    <div className="orbit-badge animate-orbit-cw-45">
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-mono font-medium liquid-glass text-slate-200 hover:scale-110 hover:border-white/40 transition-all cursor-pointer">
                        {tech.name}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* RING 3: OUTER ORBIT (Radius 300px, 70s rotation) */}
            <div className="orbit-track absolute w-[600px] h-[600px] rounded-full animate-orbit-cw-70 flex items-center justify-center">
              {outerOrbitTechs.map((tech, idx) => {
                const angle = (idx / outerOrbitTechs.length) * 2 * Math.PI;
                const x = 300 * Math.cos(angle);
                const y = 300 * Math.sin(angle);

                return (
                  <div
                    key={tech.name}
                    style={{
                      transform: `translate(${x}px, ${y}px)`,
                    }}
                    onMouseEnter={() => setActiveTech(tech)}
                    onMouseLeave={() => setActiveTech(null)}
                    className="absolute"
                  >
                    <div className="orbit-badge animate-orbit-ccw-70">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-mono liquid-glass-subtle text-slate-300 hover:scale-110 hover:border-cyan-400/40 transition-all cursor-pointer">
                        {tech.name}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile / Tablet Responsive Fallback Grid */}
        <div className="flex lg:hidden flex-wrap justify-center gap-2 pt-4">
          {[...innerOrbitTechs, ...middleOrbitTechs, ...outerOrbitTechs].map((tech) => (
            <span
              key={tech.name}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-2xl text-xs font-mono liquid-glass-subtle text-slate-200 border border-white/[0.08]"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
              {tech.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
