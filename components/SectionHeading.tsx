import React from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
}: SectionHeadingProps) {
  const isCenter = align === 'center';

  return (
    <div className={`space-y-3 mb-10 md:mb-14 ${isCenter ? 'text-center max-w-3xl mx-auto' : 'max-w-3xl'}`}>
      {eyebrow && (
        <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold liquid-pill text-cyan-200 ${isCenter ? 'mx-auto' : ''}`}>
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#22d3ee]"></span>
          {eyebrow}
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
        {title}
      </h2>
      {description && (
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans">
          {description}
        </p>
      )}
    </div>
  );
}
