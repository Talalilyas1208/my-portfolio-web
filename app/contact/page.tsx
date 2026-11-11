import React from 'react';
import type { Metadata } from 'next';
import SectionHeading from '@/components/SectionHeading';
import ContactForm from '@/components/ContactForm';
import SmoothLazyReveal from '@/components/SmoothLazyReveal';
import { siteUrl } from '@/data/siteMetadata';

export const metadata: Metadata = {
  title: 'Contact Muhammad Talal — Sargodha & Global Remote',
  description:
    'Get in touch with Muhammad Talal in Sargodha, Pakistan or for global remote roles in AI engineering, autonomous agent pipelines, React development, or technical consulting.',
  alternates: {
    canonical: `${siteUrl}/contact`,
  },
  openGraph: {
    title: 'Contact Muhammad Talal — Sargodha & Global Remote',
    description:
      'Get in touch with Muhammad Talal in Sargodha, Pakistan or for global remote roles in AI engineering, autonomous agent pipelines, React development, or technical consulting.',
    url: `${siteUrl}/contact`,
    type: 'website',
  },
};

export default function ContactPage() {
  const contactJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Muhammad Talal',
    url: `${siteUrl}/contact`,
    description:
      'Get in touch with Muhammad Talal for AI Engineering, Autonomous Agent Systems, and Full-Stack React & Next.js roles.',
  };

  return (
    <div className="pt-28 sm:pt-36 pb-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
      <SectionHeading
        eyebrow="Get In Touch &bull; Sargodha & Remote"
        title="Start a Conversation"
        description="I am actively exploring AI engineering and full-stack React opportunities (in Sargodha, Pakistan, and worldwide remote). Reach out directly via WhatsApp, email, or message form."
      />

      <SmoothLazyReveal>
        <ContactForm />
      </SmoothLazyReveal>
    </div>
  );
}
