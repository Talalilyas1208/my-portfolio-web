import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import { ReduxProvider } from '@/store/provider';
import ProjectQuickPreviewModal from '@/components/ProjectQuickPreviewModal';
import SmoothMouseGlow from '@/components/SmoothMouseGlow';
import ReduxTelemetryDock from '@/components/ReduxTelemetryDock';
import { personalData } from '@/data/portfolioData';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

const siteUrl = 'https://talal-ai-portfolio.web.app';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${personalData.name} | AI & Full-Stack React Engineer | Autonomous Agentic Systems`,
    template: `%s | ${personalData.name} — AI & Full-Stack Engineer`,
  },
  description: `${personalData.shortBio} Leading AI & Full-Stack React Engineer specializing in Autonomous LLM Agents (Gemini & OpenAI), Self-Healing Code Loops, and sub-second React & Next.js web applications. Available worldwide for full-time engineering roles, contracting & consulting.`,
  keywords: [
    // Global Personal & Brand Keywords
    'Muhammad Talal Ilyas',
    'Muhammad Talal',
    'Talal Ilyas',
    'Talal AI Portfolio',
    'Muhammad Talal AI Engineer',
    'Muhammad Talal Full Stack Engineer',
    'Muhammad Talal Software Engineer',
    'Muhammad Talal React Developer',
    // International AI & Agentic Systems Keywords
    'AI Engineer',
    'Autonomous AI Agents Developer',
    'Agentic Systems Engineer',
    'Google Gemini API Developer',
    'OpenAI LLM Integration Specialist',
    'Self-Healing Code Agent',
    'RAG Architectures Engineer',
    'Multi-Step Agentic Planning',
    'Prompt Engineering Specialist',
    // Global Frontend & Full-Stack Keywords
    'Full Stack React Engineer',
    'Senior React Developer',
    'Next.js 14 Developer',
    'TypeScript Engineer',
    'Redux Toolkit Specialist',
    'Tailwind CSS UI Architect',
    'Remote Software Engineer Worldwide',
    'Global AI Consultant',
  ],
  authors: [{ name: personalData.name, url: personalData.github }],
  creator: personalData.name,
  other: {
    'target': 'all',
    'rating': 'general',
    'coverage': 'Worldwide',
    'distribution': 'Global',
  },
  openGraph: {
    type: 'profile',
    locale: 'en_US',
    url: siteUrl,
    title: `${personalData.name} — AI & Full-Stack React Engineer | Talal AI Portfolio`,
    description:
      'Official Talal AI Portfolio: Autonomous LLM agents, self-healing code pipelines, and high-performance React & Next.js web applications for engineering teams worldwide.',
    siteName: `Talal AI Portfolio — ${personalData.name}`,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: `Talal AI Portfolio — Muhammad Talal Ilyas`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${personalData.name} — AI & Full-Stack React Engineer`,
    description:
      'Autonomous LLM agents, self-healing code pipelines, and high-performance React frontends worldwide.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'i0ICyyGSnIlk8hz_i9TDhxW8VOlQGvpLhtijsPfdbtY',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const personJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': `${siteUrl}/#person`,
        name: personalData.name,
        jobTitle: personalData.title,
        url: siteUrl,
        email: personalData.email,
        telephone: personalData.phone,
        sameAs: [personalData.github, personalData.linkedin],
        homeLocation: {
          '@type': 'Place',
          name: 'Sargodha, Punjab, Pakistan',
          geo: {
            '@type': 'GeoCoordinates',
            latitude: 32.0836,
            longitude: 72.6711,
          },
        },
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Sargodha',
          addressRegion: 'Punjab',
          addressCountry: 'PK',
        },
        alumniOf: {
          '@type': 'EducationalOrganization',
          name: 'Superior University',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Lahore',
            addressCountry: 'PK',
          },
        },
        knowsAbout: [
          'Artificial Intelligence',
          'Autonomous AI Agents',
          'Large Language Models (LLMs)',
          'Google Gemini API',
          'React.js',
          'Next.js',
          'TypeScript',
          'Tailwind CSS',
          'Redux Toolkit',
          'Self-Healing Code Pipelines',
          'Software Engineering in Sargodha',
        ],
      },
      {
        '@type': 'ProfessionalService',
        '@id': `${siteUrl}/#service`,
        name: `Muhammad Talal — AI & Full-Stack Software Engineering Services`,
        url: siteUrl,
        telephone: personalData.phone,
        priceRange: '$$',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Sargodha',
          addressRegion: 'Punjab',
          addressCountry: 'PK',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 32.0836,
          longitude: 72.6711,
        },
        areaServed: [
          {
            '@type': 'City',
            name: 'Sargodha',
          },
          {
            '@type': 'City',
            name: 'Lahore',
          },
          {
            '@type': 'Country',
            name: 'Pakistan',
          },
          {
            '@type': 'AdministrativeArea',
            name: 'Worldwide (Remote)',
          },
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Software & AI Engineering Services',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Autonomous AI Agent & LLM Development',
                description: 'Custom AI agent pipelines, Google Gemini and OpenAI integrations, and self-healing test systems.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'High-Performance React & Next.js Development',
                description: 'Scalable web applications with sub-second rendering, complex Redux state machines, and 100% Core Web Vitals.',
              },
            },
          ],
        },
      },
    ],
  };

  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} dark`}>
      <head>
        <meta name="google-site-verification" content="i0ICyyGSnIlk8hz_i9TDhxW8VOlQGvpLhtijsPfdbtY" />
        <JsonLd data={personJsonLd} />
      </head>
      <body className="min-h-screen bg-[#0f172a] text-slate-100 font-sans flex flex-col antialiased relative overflow-x-hidden selection:bg-blue-600 selection:text-white">
        {/* Ambient Precision Radial Glows & Blueprint CAD Grid Backdrop (Dayan Ibrar Ref) */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
          <div className="liquid-orb liquid-orb-1" />
          <div className="liquid-orb liquid-orb-2" />
          <div className="liquid-orb liquid-orb-3" />
          <div className="liquid-orb liquid-orb-4" />
          <div className="absolute inset-0 bg-blueprint-grid opacity-35" />
        </div>

        <ReduxProvider>
          <SmoothMouseGlow />
          <div className="relative z-10 flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
            <ProjectQuickPreviewModal />
            <ReduxTelemetryDock />
          </div>
        </ReduxProvider>
      </body>
    </html>
  );
}
