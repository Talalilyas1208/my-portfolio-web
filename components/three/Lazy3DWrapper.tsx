'use client';

/**
 * Lazy3DWrapper – dynamically imports a 3D component only when WebGL is
 * available. Falls back to the provided `fallback` element on low-end
 * devices or when WebGL is absent.
 */

import React, { useState, useEffect, type ComponentType } from 'react';
import { should3DRender } from '@/lib/webglDetect';

interface Lazy3DWrapperProps {
  /** Factory that returns a dynamic import promise for the 3D component */
  loader: () => Promise<{ default: ComponentType<Record<string, unknown>> }>;
  /** Props forwarded to the loaded 3D component */
  componentProps?: Record<string, unknown>;
  /** Fallback element shown while loading or when WebGL is unavailable */
  fallback: React.ReactNode;
  /** Optional CSS class applied to the wrapper div */
  className?: string;
}

export default function Lazy3DWrapper({
  loader,
  componentProps = {},
  fallback,
  className,
}: Lazy3DWrapperProps) {
  const [Component, setComponent] = useState<ComponentType<Record<string, unknown>> | null>(null);
  const [webglOk, setWebglOk] = useState<boolean | null>(null);

  useEffect(() => {
    const ok = should3DRender();
    setWebglOk(ok);
    if (ok) {
      loader().then((mod) => setComponent(() => mod.default));
    }
  }, [loader]);

  // Still detecting
  if (webglOk === null) return <>{fallback}</>;

  // No WebGL / low-end device
  if (!webglOk || !Component) return <>{fallback}</>;

  return (
    <div className={className}>
      <Component {...componentProps} />
    </div>
  );
}
