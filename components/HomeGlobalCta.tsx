import React from 'react';
import Link from 'next/link';
import { MapPin, MessageSquare, Mail } from 'lucide-react';
import { personalData } from '@/data/portfolioData';

export default function HomeGlobalCta() {
  return (
    <>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-3xl liquid-glass border border-cyan-500/30 shadow-liquid-glass-lg space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-medium liquid-pill-emerald text-emerald-300">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                🌐 Worldwide Remote &bull; Global AI &amp; React Engineering
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Global AI &amp; Full-Stack React Software Engineering
              </h2>
              <p className="text-sm text-slate-300 max-w-2xl leading-relaxed font-sans">
                Looking for world-class software &amp; AI engineering talent for your team or startup? Muhammad Talal delivers cutting-edge autonomous AI pipelines, Google Gemini &amp; OpenAI integrations, and modern React 18/Next.js 14 web applications with 100% type safety and sub-second Core Web Vitals across US, European, and Asian timezones.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
              <a
                href={personalData.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl liquid-btn-emerald text-white font-medium text-xs shadow-lg shadow-emerald-900/40"
              >
                <MessageSquare className="w-4 h-4" /> <span>WhatsApp Connect</span>
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl liquid-btn-primary text-white font-medium text-xs shadow-lg shadow-primary-900/40"
              >
                <Mail className="w-4 h-4" /> <span>Email Consultation</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl liquid-glass-accent p-8 sm:p-12 lg:p-16 text-center relative overflow-hidden shadow-liquid-glass-lg border border-cyan-500/40">
          <div className="max-w-2xl mx-auto space-y-6 relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium liquid-pill-emerald text-emerald-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> Available for Full-Time &amp; Contract Roles
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Ready to build high-performance AI systems and React applications?
            </h2>
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed font-sans">
              Let&apos;s discuss how I can bring autonomous agent workflows, sub-second React frontend architectures, and end-to-end type safety to your team.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Link href="/contact" className="px-6 py-3.5 rounded-2xl liquid-btn-primary text-white font-semibold text-sm">
                Get In Touch
              </Link>
              <a href={personalData.github} target="_blank" rel="noopener noreferrer" className="px-6 py-3.5 rounded-2xl liquid-btn-secondary text-slate-200 hover:text-white font-semibold text-sm">
                View GitHub Repositories
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
