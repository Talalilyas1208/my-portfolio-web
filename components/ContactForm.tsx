'use client';

import React, { useState } from 'react';
import { personalData } from '@/data/portfolioData';
import { submitContactInquiry } from '@/lib/supabase';
import { Mail, Copy, Check, Send, Sparkles, Github, Linkedin, MessageSquare, Clock, MapPin, Phone, CheckCircle2 } from 'lucide-react';

export default function ContactForm() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [feedbackMessage, setFeedbackMessage] = useState('');

  const copyEmail = () => {
    navigator.clipboard.writeText(personalData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    const result = await submitContactInquiry(formState);
    setStatus(result.success ? 'success' : 'error');
    setFeedbackMessage(result.message);

    if (result.success) {
      setFormState({ name: '', email: '', subject: '', message: '' });
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
      {/* Left Column: Direct Info & Quick Copy */}
      <div className="lg:col-span-5 space-y-6">
        <div className="p-6 sm:p-8 rounded-2xl bg-surface-200/90 border border-white/[0.06] space-y-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              Available for Full-Time & Contract Roles
            </div>
            <h3 className="text-xl font-bold text-slate-100">
              Let&apos;s build something intelligent.
            </h3>
            <p className="text-sm text-slate-400 mt-2 leading-relaxed">
              Based in <strong>Sargodha &amp; Lahore, Pakistan</strong> and serving engineering teams worldwide. Available for autonomous AI agent pipelines, React/Next.js architectures, and full-stack development.
            </p>
          </div>

          {/* Location Callout */}
          <div className="p-3.5 rounded-xl bg-surface-300/80 border border-white/[0.05] flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary-600/10 text-primary-400">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-mono font-semibold text-slate-200">
                Sargodha, Punjab, Pakistan
              </div>
              <div className="text-[11px] text-slate-400">
                Primary Base &bull; Remote Worldwide
              </div>
            </div>
          </div>

          {/* Direct WhatsApp Quick Connect */}
          <div className="space-y-2">
            <span className="text-xs font-mono text-slate-400">Instant Chat</span>
            <a
              href={personalData.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-500/30 hover:border-emerald-400 text-emerald-300 transition-all group"
            >
              <div className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-semibold">Chat directly on WhatsApp</span>
              </div>
              <span className="text-[10px] font-mono bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded">
                Quick Response
              </span>
            </a>
          </div>

          {/* Email Copy Card */}
          <div className="p-4 rounded-xl bg-surface-300 border border-white/[0.05] space-y-2">
            <span className="text-xs font-mono text-slate-400">Direct Email</span>
            <div className="flex items-center justify-between gap-2">
              <span className="text-sm sm:text-base font-mono font-medium text-slate-200 truncate">
                {personalData.email}
              </span>
              <button
                type="button"
                onClick={copyEmail}
                className="p-2 rounded-lg bg-surface-100 hover:bg-primary-600/20 text-slate-300 hover:text-primary-400 border border-white/[0.06] transition-all shrink-0"
                title="Copy email to clipboard"
                aria-label="Copy email"
              >
                {copied ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>
            {copied && (
              <p className="text-xs font-mono text-emerald-400 animate-fade-in">
                ✓ Copied to clipboard!
              </p>
            )}
          </div>

          {/* Social Links */}
          <div className="space-y-3 pt-2">
            <span className="text-xs font-mono text-slate-400 block">Profiles & Code</span>
            <div className="grid grid-cols-2 gap-2.5">
              <a
                href={personalData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 p-3 rounded-xl bg-surface-300 hover:bg-surface-100 text-slate-200 border border-white/[0.05] transition-all group"
              >
                <Github className="w-4 h-4 text-primary-400 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-medium">GitHub</span>
              </a>
              <a
                href={personalData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 p-3 rounded-xl bg-surface-300 hover:bg-surface-100 text-slate-200 border border-white/[0.05] transition-all group"
              >
                <Linkedin className="w-4 h-4 text-primary-400 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-medium">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column: Contact Message Form */}
      <div className="lg:col-span-7">
        <form
          onSubmit={handleSubmit}
          className="p-6 sm:p-8 rounded-2xl bg-surface-200/90 border border-white/[0.06] space-y-5"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-xs font-mono text-slate-300">
                Your Name <span className="text-primary-400">*</span>
              </label>
              <input
                id="name"
                type="text"
                required
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                placeholder="e.g. Alex Henderson"
                className="w-full px-4 py-2.5 rounded-xl bg-surface-300 border border-white/[0.06] text-slate-200 placeholder-slate-500 text-sm focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="block text-xs font-mono text-slate-300">
                Your Email <span className="text-primary-400">*</span>
              </label>
              <input
                id="email"
                type="email"
                required
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                placeholder="alex@company.com"
                className="w-full px-4 py-2.5 rounded-xl bg-surface-300 border border-white/[0.06] text-slate-200 placeholder-slate-500 text-sm focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="subject" className="block text-xs font-mono text-slate-300">
              Subject <span className="text-primary-400">*</span>
            </label>
            <input
              id="subject"
              type="text"
              required
              value={formState.subject}
              onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
              placeholder="e.g. AI Agent Project / React Developer Opportunity"
              className="w-full px-4 py-2.5 rounded-xl bg-surface-300 border border-white/[0.06] text-slate-200 placeholder-slate-500 text-sm focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="block text-xs font-mono text-slate-300">
              Message <span className="text-primary-400">*</span>
            </label>
            <textarea
              id="message"
              required
              rows={5}
              value={formState.message}
              onChange={(e) => setFormState({ ...formState, message: e.target.value })}
              placeholder="Describe your project, engineering requirements, or open role..."
              className="w-full px-4 py-2.5 rounded-xl bg-surface-300 border border-white/[0.06] text-slate-200 placeholder-slate-500 text-sm focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all resize-y"
            />
          </div>

          {status === 'success' && (
            <div className="p-4 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs sm:text-sm flex items-start gap-2.5 animate-fade-in">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <strong className="font-semibold block text-emerald-200">Message Sent Successfully!</strong>
                <span>{feedbackMessage || 'Thank you for reaching out. Muhammad Talal will review your message shortly.'}</span>
              </div>
            </div>
          )}

          {status === 'error' && (
            <div className="p-4 rounded-xl bg-rose-950/60 border border-rose-500/40 text-rose-300 text-xs sm:text-sm animate-fade-in">
              {feedbackMessage || 'Unable to submit right now. Please email directly at talalilyas11@gmail.com.'}
            </div>
          )}

          <button
            type="submit"
            disabled={status === 'submitting'}
            className="w-full py-3.5 px-6 rounded-xl bg-primary-600 hover:bg-primary-500 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-primary-600/30 transition-all disabled:opacity-50 hover:scale-[1.01] active:scale-95"
          >
            {status === 'submitting' ? (
              <span>Sending Inquiry...</span>
            ) : (
              <span className="flex items-center gap-2">
                <Send className="w-4 h-4" /> Send Direct Inquiry
              </span>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
