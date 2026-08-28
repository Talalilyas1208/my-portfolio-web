'use client';

import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { setFps } from '@/store/slices/interactiveSlice';

export default function SmoothMouseGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let currentX = mouseX;
    let currentY = mouseY;
    let rafId: number;

    // FPS calculation
    let lastTime = performance.now();
    let frames = 0;
    let fpsTimer = performance.now();

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    const animate = (time: number) => {
      // Smooth linear interpolation (lerp factor 0.08)
      currentX += (mouseX - currentX) * 0.08;
      currentY += (mouseY - currentY) * 0.08;

      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${currentX - 250}px, ${currentY - 250}px, 0)`;
      }

      // FPS tracking
      frames++;
      if (time > fpsTimer + 1000) {
        const calculatedFps = Math.round((frames * 1000) / (time - fpsTimer));
        dispatch(setFps(Math.min(calculatedFps, 60)));
        frames = 0;
        fpsTimer = time;
      }

      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, [dispatch]);

  return (
    <div
      ref={glowRef}
      className="fixed top-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none z-0 opacity-40 blur-3xl will-change-transform"
      style={{
        background:
          'radial-gradient(circle, rgba(34, 211, 238, 0.15) 0%, rgba(59, 130, 246, 0.08) 40%, transparent 70%)',
        transform: 'translate3d(-500px, -500px, 0)',
      }}
    />
  );
}
