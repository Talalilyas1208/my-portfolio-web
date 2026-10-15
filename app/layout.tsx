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
import AmbientBackdrop from '@/components/AmbientBackdrop';
import { siteMetadata, personJsonLd } from '@/data/siteMetadata';

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

export const metadata: Metadata = siteMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <meta name="google-site-verification" content="i0ICyyGSnIlk8hz_i9TDhxW8VOlQGvpLhtijsPfdbtY" />
        <JsonLd data={personJsonLd} />
      </head>
      <body className="min-h-screen bg-white text-slate-900 font-sans flex flex-col antialiased relative overflow-x-hidden selection:bg-blue-600 selection:text-white">
        <AmbientBackdrop />
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
