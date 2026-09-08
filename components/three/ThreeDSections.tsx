'use client';

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

const SkillMatrix3D = dynamic(() => import('@/components/three/SkillMatrix3D'), { ssr: false });
const ArchDiagram3D = dynamic(() => import('@/components/three/ArchDiagram3D'), { ssr: false });
const ProjectCards3D = dynamic(() => import('@/components/three/ProjectCards3D'), { ssr: false });
const Timeline3D = dynamic(() => import('@/components/three/Timeline3D'), { ssr: false });
const MetricsDashboard3D = dynamic(() => import('@/components/three/MetricsDashboard3D'), { ssr: false });

export function SkillMatrix3DSection() {
  const [show3D, setShow3D] = useState(false);
  useEffect(() => {
    import('@/lib/webglDetect').then(({ should3DRender }) => setShow3D(should3DRender()));
  }, []);
  if (!show3D) return null;
  return (
    <div className="mt-8">
      <SkillMatrix3D />
    </div>
  );
}

export function ArchDiagram3DSection() {
  const [show3D, setShow3D] = useState(false);
  useEffect(() => {
    import('@/lib/webglDetect').then(({ should3DRender }) => setShow3D(should3DRender()));
  }, []);
  if (!show3D) return null;
  return (
    <div className="mt-8">
      <ArchDiagram3D />
    </div>
  );
}

export function ProjectCards3DSection() {
  const [show3D, setShow3D] = useState(false);
  useEffect(() => {
    import('@/lib/webglDetect').then(({ should3DRender }) => setShow3D(should3DRender()));
  }, []);
  if (!show3D) return null;
  return (
    <div className="mt-8">
      <ProjectCards3D />
    </div>
  );
}

export function Timeline3DSection() {
  const [show3D, setShow3D] = useState(false);
  useEffect(() => {
    import('@/lib/webglDetect').then(({ should3DRender }) => setShow3D(should3DRender()));
  }, []);
  if (!show3D) return null;
  return (
    <div className="mt-8">
      <Timeline3D />
    </div>
  );
}

export function MetricsDashboard3DSection() {
  const [show3D, setShow3D] = useState(false);
  useEffect(() => {
    import('@/lib/webglDetect').then(({ should3DRender }) => setShow3D(should3DRender()));
  }, []);
  if (!show3D) return null;
  return (
    <div className="mt-4">
      <MetricsDashboard3D />
    </div>
  );
}
