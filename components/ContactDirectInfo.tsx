'use client';

import React, { useState } from 'react';
import { personalData } from '@/data/portfolioData';
import { MapPin, MessageSquare, Copy, Check, Github, Linkedin } from 'lucide-react';

export default function ContactDirectInfo() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="lg:col-span-5 space-y-6">
      <div className="p-6 sm:p-8 rounded-3xl liquid-glass shadow-liquid-glass-lg space-y-6 border border-white/[0.14]">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-mono font-medium liquid-pill-emerald text-emerald-300 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Available for Full-Time &amp; Contract Roles
          </div>
          <h3 className="text-xl font-bold text-slate-100">Let&apos;s build something intelligent.</h3>
          <p className="text-sm text-slate-300 mt-2 leading-relaxed font-sans">
            Based in <strong>Sargodha &amp; Lahore, Pakistan</strong> and serving engineering teams worldwide. Available for autonomous AI agent pipelines, React/Next.js architectures, and full-stack development.
          </p>
        </div>

        <div className="p-4 rounded-2xl liquid-glass-subtle flex items-center gap-3">
          <div className="p-2.5 rounded-xl liquid-glass text-cyan-300">
            <MapPin className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs font-mono font-semibold text-slate-100">Sargodha, Punjab, Pakistan</div>
            <div className="text-[11px] text-slate-400">Primary Base &bull; Remote Worldwide</div>
          </div>
        </div>

        <div className="space-y-2">
          <span className="text-xs font-mono text-slate-400">Instant Chat</span>
          <a
            href={personalData.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 hover:border-emerald-400 text-emerald-200 transition-all group shadow-[0_4px_20px_rgba(16,185,129,0.15)]"
          >
            <div className="flex items-center gap-2.5">
              <MessageSquare className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
              <span className="text-xs font-semibold">Chat directly on WhatsApp</span>
            </div>
            <span className="text-[10px] font-mono liquid-pill-emerald text-emerald-300 px-2.5 py-0.5 rounded-full">
              Quick Response
            </span>
          </a>
        </div>

        <div className="p-4.5 rounded-2xl liquid-glass-subtle space-y-2">
          <span className="text-xs font-mono text-slate-400">Direct Email</span>
          <div className="flex items-center justify-between gap-2">
            <span className="text-sm sm:text-base font-mono font-medium text-cyan-300 truncate">
              {personalData.email}
            </span>
            <button
              type="button"
              onClick={copyEmail}
              className="p-2 rounded-xl liquid-glass text-slate-300 hover:text-cyan-300 transition-all shrink-0"
              title="Copy email to clipboard"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>
          {copied && <p className="text-xs font-mono text-emerald-400 animate-fade-in">✓ Copied to clipboard!</p>}
        </div>

        <div className="space-y-3 pt-2">
          <span className="text-xs font-mono text-slate-400 block">Profiles &amp; Code</span>
          <div className="grid grid-cols-2 gap-2.5">
            <a href={personalData.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 p-3.5 rounded-2xl liquid-glass-subtle hover:border-white/25 text-slate-200 transition-all group">
              <Github className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
              <span className="text-xs font-medium">GitHub</span>
            </a>
            <a href={personalData.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 p-3.5 rounded-2xl liquid-glass-subtle hover:border-white/25 text-slate-200 transition-all group">
              <Linkedin className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
              <span className="text-xs font-medium">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
