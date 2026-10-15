'use client';

import React, { useEffect, useRef, useState } from 'react';

interface Props {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
}

export default function SmoothLazyReveal({ children, className = '', delayMs = 0 }: Props) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delayMs > 0) {
            const timer = setTimeout(() => setIsVisible(true), delayMs);
            return () => clearTimeout(timer);
          }
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '120px 0px', threshold: 0.05 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [delayMs]);

  return (
    <div
      ref={elementRef}
      className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6 pointer-events-none'
      } ${className}`}
    >
      {children}
    </div>
  );
}
