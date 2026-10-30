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
        <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold liquid-pill-violet text-violet-900 ${isCenter ? 'mx-auto' : ''}`}>
          <span className="w-2 h-2 rounded-full bg-violet-600 animate-pulse" />
          {eyebrow}
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-950 leading-tight">
        {title}
      </h2>
      {description && (
        <p className="text-slate-800 text-sm sm:text-base leading-relaxed font-sans">
          {description}
        </p>
      )}
    </div>
  );
}
