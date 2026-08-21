import { ImageResponse } from 'next/og';
import { personalData } from '@/data/portfolioData';

export const runtime = 'edge';
export const alt = `${personalData.name} — AI & Full-Stack React Engineer`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0B0F17',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '80px',
          fontFamily: 'sans-serif',
          border: '12px solid #1E293B',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <div
            style={{
              width: '56px',
              height: '56px',
              borderRadius: '14px',
              background: '#2563EB',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '24px',
              fontWeight: 'bold',
            }}
          >
            MT
          </div>
          <span style={{ color: '#94A3B8', fontSize: '24px', letterSpacing: '-0.5px' }}>
            Muhammad Talal Portfolio
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div
            style={{
              fontSize: '56px',
              fontWeight: 800,
              color: '#FFFFFF',
              lineHeight: 1.1,
              letterSpacing: '-1.5px',
            }}
          >
            AI & Full-Stack React Engineer
          </div>
          <div
            style={{
              fontSize: '28px',
              color: '#60A5FA',
              fontWeight: 600,
            }}
          >
            Autonomous AI Agents • Google Gemini • React & Next.js
          </div>
          <div
            style={{
              fontSize: '22px',
              color: '#94A3B8',
              maxWidth: '900px',
              lineHeight: 1.4,
            }}
          >
            Most candidates build dashboards. I built an autonomous LLM agent that self-heals code in real-time.
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderTop: '2px solid #1E293B',
            paddingTop: '30px',
          }}
        >
          <span style={{ color: '#10B981', fontSize: '20px', fontWeight: 600 }}>
            ● BS in Artificial Intelligence • Lahore, PK
          </span>
          <span style={{ color: '#64748B', fontSize: '20px' }}>
            talalilyas11@gmail.com
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
