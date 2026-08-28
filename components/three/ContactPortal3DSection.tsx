'use client';

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

const ContactPortal3D = dynamic(() => import('@/components/three/ContactPortal3D'), { ssr: false });

export default function ContactPortal3DSection() {
  const [show3D, setShow3D] = useState(false);
  useEffect(() => {
    import('@/lib/webglDetect').then(({ should3DRender }) => setShow3D(should3DRender()));
  }, []);
  if (!show3D) return null;
  return <ContactPortal3D />;
}
