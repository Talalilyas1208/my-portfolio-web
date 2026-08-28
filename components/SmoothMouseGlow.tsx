'use client';

import React, { useEffect, useRef } from 'react';

export default function SmoothMouseGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only run on desktop devices with hover capability
    if (typeof window === 'undefined' || !window.matchMedia('(hover: hover)').matches) {
      return;
    }

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let currentX = mouseX;
    let currentY = mouseY;
    let rafId: number;
    let isMoving = false;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isMoving) {
        isMoving = true;
        rafId = requestAnimationFrame(animate);
      }
    };

    const animate = () => {
      // Smooth linear interpolation (lerp factor 0.1)
      const dx = mouseX - currentX;
      const dy = mouseY - currentY;

      currentX += dx * 0.1;
      currentY += dy * 0.1;

      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${currentX - 250}px, ${currentY - 250}px, 0)`;
      }

      // If reached target, stop animating to save CPU/GPU cycles
      if (Math.abs(dx) > 0.5 || Math.abs(dy) > 0.5) {
        rafId = requestAnimationFrame(animate);
      } else {
        isMoving = false;
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="fixed top-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none z-0 opacity-40 will-change-transform contain-strict"
      style={{
        background:
          'radial-gradient(circle, rgba(34, 211, 238, 0.12) 0%, rgba(59, 130, 246, 0.05) 45%, transparent 70%)',
        transform: 'translate3d(-500px, -500px, 0)',
      }}
    />
  );
}
