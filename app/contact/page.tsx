import React from 'react';
import type { Metadata } from 'next';
import SectionHeading from '@/components/SectionHeading';
import ContactForm from '@/components/ContactForm';
import { personalData } from '@/data/portfolioData';

export const metadata: Metadata = {
  title: 'Contact Muhammad Talal — Sargodha & Global Remote',
  description:
    'Get in touch with Muhammad Talal in Sargodha, Pakistan or for global remote roles in AI engineering, autonomous agent pipelines, React development, or technical consulting.',
};

export default function ContactPage() {
  return (
    <div className="pt-28 sm:pt-36 pb-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      <SectionHeading
        eyebrow="Get In Touch &bull; Sargodha & Remote"
        title="Start a Conversation"
        description="I am actively exploring AI engineering and full-stack React opportunities (in Sargodha, Pakistan, and worldwide remote). Reach out directly via WhatsApp, email, or message form."
      />

      <ContactForm />
    </div>
  );
}
