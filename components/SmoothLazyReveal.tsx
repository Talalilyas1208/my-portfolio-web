'use client';

import React, { useEffect, useRef, useState } from 'react';

interface Props {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
}

export default function SmoothLazyReveal({ children, className = '' }: Props) {
  return (
    <div className={`transition-all duration-500 opacity-100 translate-y-0 ${className}`}>
      {children}
    </div>
  );
}
