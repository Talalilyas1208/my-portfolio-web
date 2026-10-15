import React from 'react';
import Hero from '@/components/Hero';
import DialMetricGauges from '@/components/DialMetricGauges';
import TechnicalRulerDivider from '@/components/TechnicalRulerDivider';
import HomeFlagshipSection from '@/components/HomeFlagshipSection';
import ArchitectureDiagram from '@/components/ArchitectureDiagram';
import TechOrbitSystem from '@/components/TechOrbitSystem';
import CompetencyRadarChart from '@/components/CompetencyRadarChart';
import SkillMatrixExplorer from '@/components/SkillMatrixExplorer';
import HomeProjectsSection from '@/components/HomeProjectsSection';
import HomeExperienceSnapshot from '@/components/HomeExperienceSnapshot';
import HomeGlobalCta from '@/components/HomeGlobalCta';
import FaqSection from '@/components/FaqSection';
import SectionHeading from '@/components/SectionHeading';

export default function HomePage() {
  return (
    <div className="space-y-16 sm:space-y-24 pb-20">
      <Hero />

      <TechnicalRulerDivider station="STA 100" label="ENGINEERING CALIBRATION" />
      <DialMetricGauges />

      <HomeFlagshipSection />

      <TechnicalRulerDivider station="STA 300" label="SYSTEMS TOPOLOGY" />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ArchitectureDiagram />
      </section>

      <TechnicalRulerDivider station="STA 400" label="PLANETARY TECH ORBIT" />
      <TechOrbitSystem />

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

      <HomeProjectsSection />
      <HomeExperienceSnapshot />

      <HomeGlobalCta />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FaqSection />
      </section>
    </div>
  );
}
