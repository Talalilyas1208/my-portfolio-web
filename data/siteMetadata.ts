import type { Metadata } from 'next';
import { personalData, projectsData } from '@/data/portfolioData';

export const siteUrl = 'https://talal-ai-portfolio.web.app';

export const siteMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${personalData.name} | AI & Full-Stack React Engineer | SaaS & Autonomous Agent Systems`,
    template: `%s | ${personalData.name} — AI & Full-Stack Engineer`,
  },
  description: `${personalData.shortBio} Leading AI & Full-Stack React Engineer specializing in SaaS Revenue Intelligence, Autonomous LLM Agents (Gemini & OpenAI), Self-Healing Code Loops, and sub-second React & Next.js web applications. Available worldwide for full-time engineering roles, contracting & consulting.`,
  alternates: {
    canonical: siteUrl,
  },
  keywords: [
    'Muhammad Talal Ilyas',
    'Muhammad Talal',
    'Talal Ilyas',
    'Talal AI Portfolio',
    'Muhammad Talal AI Engineer',
    'Muhammad Talal Full Stack Engineer',
    'Muhammad Talal Software Engineer',
    'Muhammad Talal React Developer',
    'RevTerm SaaS Revenue Intelligence',
    'FigureMint Fee Calculator',
    'HiveShield B2B OEM Platform',
    'AI Engineer',
    'Autonomous AI Agents Developer',
    'Agentic Systems Engineer',
    'Google Gemini API Developer',
    'OpenAI LLM Integration Specialist',
    'Self-Healing Code Agent',
    'RAG Architectures Engineer',
    'Multi-Step Agentic Planning',
    'Prompt Engineering Specialist',
    'Full Stack React Engineer',
    'Senior React Developer',
    'Next.js 15 Developer',
    'TypeScript Engineer',
    'Redux Toolkit Specialist',
    'Tailwind CSS UI Architect',
    'Remote Software Engineer Worldwide',
    'Global AI Consultant',
  ],
  authors: [{ name: personalData.name, url: personalData.github }],
  creator: personalData.name,
  publisher: personalData.name,
  other: {
    target: 'all',
    rating: 'general',
    coverage: 'Worldwide',
    distribution: 'Global',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    title: `${personalData.name} — AI & Full-Stack React Engineer | Talal AI Portfolio`,
    description:
      'Official Talal AI Portfolio: SaaS Revenue Intelligence, Autonomous LLM agents, self-healing code pipelines, and high-performance React & Next.js web applications.',
    siteName: `Talal AI Portfolio — ${personalData.name}`,
    images: [
      {
        url: `${siteUrl}/profile.jpg`,
        width: 800,
        height: 800,
        alt: `Talal AI Portfolio — Muhammad Talal Ilyas`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${personalData.name} — AI & Full-Stack React Engineer`,
    description:
      'SaaS Revenue Intelligence, Autonomous LLM agents, self-healing code pipelines, and high-performance React frontends worldwide.',
    images: [`${siteUrl}/profile.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: [
      'hOemf1EHtxp2E-9BMfcLvlUiuMInv1sB3CX-Ms24RiE',
      'i0ICyyGSnIlk8hz_i9TDhxW8VOlQGvpLhtijsPfdbtY',
      '46d288d7e8f0014d',
    ],
  },
};

export const personJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: `Talal AI Portfolio — ${personalData.name}`,
      description: personalData.shortBio,
      publisher: { '@id': `${siteUrl}/#person` },
      inLanguage: 'en-US',
    },
    {
      '@type': 'ProfilePage',
      '@id': `${siteUrl}/#profilepage`,
      url: siteUrl,
      name: `${personalData.name} — AI & Full-Stack React Engineer Portfolio`,
      isPartOf: { '@id': `${siteUrl}/#website` },
      mainEntity: { '@id': `${siteUrl}/#person` },
    },
    {
      '@type': 'Person',
      '@id': `${siteUrl}/#person`,
      name: personalData.name,
      jobTitle: personalData.title,
      url: siteUrl,
      image: `${siteUrl}/profile.jpg`,
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
        'SaaS Revenue Intelligence',
        'React.js',
        'Next.js',
        'TypeScript',
        'Tailwind CSS',
        'Redux Toolkit',
        'Express.js',
        'PostgreSQL & Supabase',
        'Self-Healing Code Pipelines',
      ],
    },
    {
      '@type': 'ItemList',
      '@id': `${siteUrl}/#projects-list`,
      name: 'Featured Software & AI Engineering Case Studies',
      itemListElement: projectsData.map((project, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: project.title,
        description: project.summary,
        url: `${siteUrl}/projects/${project.slug}`,
      })),
    },
  ],
};
