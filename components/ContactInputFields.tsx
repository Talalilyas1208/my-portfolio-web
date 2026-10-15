import React from 'react';

interface ContactInputFieldsProps {
  formState: { name: string; email: string; subject: string; message: string };
  onChange: (field: string, value: string) => void;
}

export default function ContactInputFields({ formState, onChange }: ContactInputFieldsProps) {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="name" className="block text-xs font-mono text-slate-300">
            Your Name <span className="text-cyan-400">*</span>
          </label>
          <input
            id="name"
            type="text"
            required
            maxLength={80}
            value={formState.name}
            onChange={(e) => onChange('name', e.target.value)}
            placeholder="e.g. Alex Henderson"
            className="w-full px-4 py-3 rounded-2xl liquid-glass-subtle border border-white/[0.1] text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 transition-all"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="block text-xs font-mono text-slate-300">
            Your Email <span className="text-cyan-400">*</span>
          </label>
          <input
            id="email"
            type="email"
            required
            maxLength={254}
            value={formState.email}
            onChange={(e) => onChange('email', e.target.value)}
            placeholder="alex@company.com"
            className="w-full px-4 py-3 rounded-2xl liquid-glass-subtle border border-white/[0.1] text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 transition-all"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="subject" className="block text-xs font-mono text-slate-300">
          Subject <span className="text-cyan-400">*</span>
        </label>
        <input
          id="subject"
          type="text"
          required
          maxLength={120}
          value={formState.subject}
          onChange={(e) => onChange('subject', e.target.value)}
          placeholder="e.g. AI Agent Project / React Opportunity"
          className="w-full px-4 py-3 rounded-2xl liquid-glass-subtle border border-white/[0.1] text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 transition-all"
        />
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label htmlFor="message" className="block text-xs font-mono text-slate-300">
            Message <span className="text-cyan-400">*</span>
          </label>
          <span className="text-[10px] font-mono text-slate-400">
            {formState.message.length} / 3000
          </span>
        </div>
        <textarea
          id="message"
          required
          rows={5}
          maxLength={3000}
          value={formState.message}
          onChange={(e) => onChange('message', e.target.value)}
          placeholder="Describe your project, engineering requirements, or open role..."
          className="w-full px-4 py-3 rounded-2xl liquid-glass-subtle border border-white/[0.1] text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 transition-all resize-y"
        />
      </div>
    </>
  );
}
