'use client';

import React, { useState } from 'react';
import { localFaqs, personalData } from '@/data/portfolioData';
import { ChevronDown, HelpCircle, Sparkles, MapPin } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import JsonLd from '@/components/JsonLd';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: localFaqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <section className="space-y-8" id="faq">
      <JsonLd data={faqSchema} />

      <SectionHeading
        eyebrow="Local & Global Search FAQ"
        title="Frequently Asked Questions & Hiring Guide"
        description="Key information for recruiters, engineering leaders, and local clients looking to hire Muhammad Talal in Sargodha, Pakistan, or globally."
      />

      <div className="space-y-3.5 max-w-4xl mx-auto">
        {localFaqs.map((faq, idx) => {
          const isOpen = openIndex === idx;

          return (
            <div
              key={idx}
              className={`rounded-3xl transition-all duration-300 overflow-hidden border ${
                isOpen
                  ? 'liquid-glass-accent border-cyan-400/40 shadow-liquid-glow'
                  : 'liquid-glass-subtle hover:border-white/20'
              }`}
            >
              <button
                type="button"
                onClick={() => toggle(idx)}
                className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                aria-expanded={isOpen}
              >
                <div className="flex items-center gap-3.5">
                  <div className={`p-2 rounded-2xl ${isOpen ? 'liquid-glass text-cyan-300' : 'liquid-glass-subtle text-slate-400'}`}>
                    <HelpCircle className="w-4 h-4 shrink-0" />
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-100">
                    {faq.question}
                  </h3>
                </div>

                <div
                  className={`p-1.5 rounded-full liquid-glass-subtle text-slate-400 transition-transform duration-300 shrink-0 ${
                    isOpen ? 'rotate-180 text-cyan-300 border-cyan-400/40' : ''
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              {isOpen && (
                <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-200 leading-relaxed border-t border-white/[0.08] font-sans">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
