import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
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

const siteUrl = 'https://muhammadtalal.dev';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${personalData.name} | AI & Full-Stack React Engineer in Sargodha, Pakistan`,
    template: `%s | ${personalData.name} — Sargodha, Pakistan`,
  },
  description: `${personalData.shortBio} Leading AI & Full-Stack React Engineer in Sargodha and Lahore, Pakistan. Builder of autonomous LLM agents, self-healing code loops, and high-performance React/Next.js web applications.`,
  keywords: [
    // Brand & Personal Keywords
    'Muhammad Talal',
    'Muhammad Talal Software Engineer',
    'Muhammad Talal AI Engineer',
    'Muhammad Talal Portfolio',
    'Talal Ilyas',
    'Talal Ilyas Developer',
    // Sargodha & Punjab Local SEO Keywords
    'Muhammad Talal Sargodha',
    'Software Engineer in Sargodha',
    'AI Engineer in Sargodha',
    'React Developer in Sargodha',
    'Top Software Engineer in Sargodha',
    'Full Stack Developer Sargodha Punjab',
    'Best AI Developer in Sargodha',
    'Web Developer Sargodha Pakistan',
    'Frontend Engineer Sargodha',
    'Software House Sargodha Engineer',
    // Pakistan & Global AI/React Keywords
    'AI & React Engineer Pakistan',
    'Autonomous AI Agents Pakistan',
    'Google Gemini Developer Pakistan',
    'Self-Healing Code Agent',
    'Next.js 14 Developer Pakistan',
    'React.js Specialist Pakistan',
    'Agentic Systems Developer',
    'Redux Toolkit Specialist',
  ],
  authors: [{ name: personalData.name, url: personalData.github }],
  creator: personalData.name,
  other: {
    'geo.region': 'PK-PB',
    'geo.placename': 'Sargodha, Punjab, Pakistan',
    'geo.position': '32.0836;72.6711',
    'ICBM': '32.0836, 72.6711',
    'city': 'Sargodha',
    'country': 'Pakistan',
    'target': 'all',
    'rating': 'general',
  },
  openGraph: {
    type: 'profile',
    locale: 'en_US',
    url: siteUrl,
    title: `${personalData.name} — AI & Full-Stack React Engineer in Sargodha, Pakistan`,
    description:
      'Leading AI & Full-Stack React Engineer in Sargodha, Pakistan. Autonomous LLM agents, self-healing code pipelines, and high-performance React & Next.js web apps.',
    siteName: `${personalData.name} Portfolio`,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: `${personalData.name} Portfolio — Sargodha, Pakistan`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${personalData.name} — AI & Full-Stack React Engineer in Sargodha`,
    description:
      'Autonomous LLM agents, self-healing code pipelines, and high-performance React frontends in Sargodha & globally.',
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
        <JsonLd data={personJsonLd} />
      </head>
      <body className="min-h-screen bg-[#0B0F17] text-slate-100 font-sans flex flex-col antialiased">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
