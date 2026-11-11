import { ImageResponse } from 'next/og';
import { personalData } from '@/data/portfolioData';

export const runtime = 'edge';
export const alt = `${personalData.name} — AI & Full-Stack React Engineer`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#F5F5F5',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '80px',
          fontFamily: 'sans-serif',
          border: '12px solid #E5E5E5',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <div
            style={{
              width: '56px',
              height: '56px',
              borderRadius: '14px',
              background: '#FFFFFF',
              border: '2px solid #0F172A',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#0F172A',
              fontSize: '24px',
              fontWeight: 'bold',
            }}
          >
            MT
          </div>
          <span style={{ color: '#334155', fontSize: '24px', letterSpacing: '-0.5px', fontWeight: 600 }}>
            Muhammad Talal Portfolio
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ fontSize: '56px', fontWeight: 800, color: '#0F172A', lineHeight: 1.1, letterSpacing: '-1.5px' }}>
            AI &amp; Full-Stack React Engineer
          </div>
          <div style={{ fontSize: '28px', color: '#1E293B', fontWeight: 600 }}>
            Autonomous AI Agents &bull; SaaS Revenue Systems &bull; React &amp; Next.js
          </div>
          <div style={{ fontSize: '22px', color: '#475569', maxWidth: '900px', lineHeight: 1.4 }}>
            Most candidates build dashboards. I build autonomous LLM agents and production SaaS platforms.
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '2px solid #D4D4D4', paddingTop: '30px' }}>
          <span style={{ color: '#0F172A', fontSize: '20px', fontWeight: 600 }}>
            ● BS in Artificial Intelligence &bull; Global Remote
          </span>
          <span style={{ color: '#475569', fontSize: '20px' }}>talalilyas11@gmail.com</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
