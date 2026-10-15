import React from 'react';
import dynamic from 'next/dynamic';
import Hero from '@/components/Hero';
import DialMetricGauges from '@/components/DialMetricGauges';
import TechnicalRulerDivider from '@/components/TechnicalRulerDivider';
import HomeFlagshipSection from '@/components/HomeFlagshipSection';
import HomeProjectsSection from '@/components/HomeProjectsSection';
import HomeExperienceSnapshot from '@/components/HomeExperienceSnapshot';
import HomeGlobalCta from '@/components/HomeGlobalCta';
import SectionHeading from '@/components/SectionHeading';
import SmoothLazyReveal from '@/components/SmoothLazyReveal';
import LazyLoadingPlaceholder from '@/components/LazyLoadingPlaceholder';

const ArchitectureDiagram = dynamic(() => import('@/components/ArchitectureDiagram'), {
  loading: () => <LazyLoadingPlaceholder height="h-[460px]" label="Loading Architecture Topology..." />,
});

const TechOrbitSystem = dynamic(() => import('@/components/TechOrbitSystem'), {
  loading: () => <LazyLoadingPlaceholder height="h-[520px]" label="Loading Planetary Tech Orbit..." />,
});

const CompetencyRadarChart = dynamic(() => import('@/components/CompetencyRadarChart'), {
  loading: () => <LazyLoadingPlaceholder height="h-[440px]" label="Loading Competency Radar..." />,
});

const SkillMatrixExplorer = dynamic(() => import('@/components/SkillMatrixExplorer'), {
  loading: () => <LazyLoadingPlaceholder height="h-[380px]" label="Loading Deep Skill Matrix..." />,
});

const FaqSection = dynamic(() => import('@/components/FaqSection'), {
  loading: () => <LazyLoadingPlaceholder height="h-[320px]" label="Loading Architecture FAQ..." />,
});

export default function HomePage() {
  return (
    <div className="space-y-16 sm:space-y-24 pb-20">
      <Hero />

      <SmoothLazyReveal>
        <TechnicalRulerDivider station="STA 100" label="ENGINEERING CALIBRATION" />
        <DialMetricGauges />
      </SmoothLazyReveal>

      <SmoothLazyReveal>
        <HomeFlagshipSection />
      </SmoothLazyReveal>

      <SmoothLazyReveal>
        <TechnicalRulerDivider station="STA 300" label="SYSTEMS TOPOLOGY" />
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ArchitectureDiagram />
        </section>
      </SmoothLazyReveal>

      <SmoothLazyReveal>
        <TechnicalRulerDivider station="STA 400" label="PLANETARY TECH ORBIT" />
        <TechOrbitSystem />
      </SmoothLazyReveal>

      <SmoothLazyReveal>
        <TechnicalRulerDivider station="STA 500" label="COMPETENCY RADAR" />
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeading
            eyebrow="Interactive Competency Matrix"
            title="Multiaxial Competency Radar & Deep Skill Matrix"
            description="Evaluate technical capabilities across autonomous AI workflows, React frontend engineering, Redux state normalization, and distributed cloud microservices."
            align="center"
          />
          <CompetencyRadarChart />
          <SkillMatrixExplorer />
        </section>
      </SmoothLazyReveal>

      <SmoothLazyReveal>
        <HomeProjectsSection />
      </SmoothLazyReveal>

      <SmoothLazyReveal>
        <HomeExperienceSnapshot />
      </SmoothLazyReveal>

      <SmoothLazyReveal>
        <HomeGlobalCta />
      </SmoothLazyReveal>

      <SmoothLazyReveal>
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FaqSection />
        </section>
      </SmoothLazyReveal>
    </div>
  );
}
