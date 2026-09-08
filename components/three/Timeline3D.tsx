'use client';

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, RoundedBox } from '@react-three/drei';
import * as THREE from 'three';

interface TimelineEntry {
  role: string;
  company: string;
  period: string;
  color: string;
}

const entries: TimelineEntry[] = [
  { role: 'AI & React Engineer', company: 'Freelance / Upwork', period: '2022–Present', color: '#22d3ee' },
  { role: 'Frontend Developer', company: 'Digital Agency', period: '2021–2022', color: '#6366f1' },
  { role: 'React Intern', company: 'Tech Startup', period: '2020–2021', color: '#10b981' },
  { role: 'BS Artificial Intelligence', company: 'University', period: '2019–2023', color: '#f59e0b' },
];

const HELIX_RADIUS = 2.5;
const HELIX_VERTICAL = 2.2;

function HelixCard({ entry, index }: { entry: TimelineEntry; index: number }) {
  const group = useRef<THREE.Group>(null!);
  const angle = (index / entries.length) * Math.PI * 2;
  const x = Math.cos(angle) * HELIX_RADIUS;
  const z = Math.sin(angle) * HELIX_RADIUS;
  const y = -index * HELIX_VERTICAL + (entries.length - 1) * (HELIX_VERTICAL / 2);

  useFrame((state) => {
    if (!group.current) return;
    group.current.position.y = y + Math.sin(state.clock.elapsedTime * 0.5 + index * 0.8) * 0.08;
  });

  return (
    <group ref={group} position={[x, y, z]} rotation={[0, -angle + Math.PI / 2, 0]}>
      <RoundedBox args={[2.8, 0.9, 0.14]} radius={0.1} smoothness={4}>
        <meshStandardMaterial color="#0f172a" metalness={0.4} roughness={0.4} transparent opacity={0.92} />
      </RoundedBox>
      {/* Left colour accent */}
      <mesh position={[-1.3, 0, 0.08]}>
        <boxGeometry args={[0.08, 0.7, 0.04]} />
        <meshStandardMaterial color={entry.color} emissive={entry.color} emissiveIntensity={0.6} />
      </mesh>
      <Text position={[-0.2, 0.2, 0.1]} fontSize={0.18} color="#f1f5f9" anchorX="center" maxWidth={2.2} font={undefined}>
        {entry.role}
      </Text>
      <Text position={[-0.2, -0.07, 0.1]} fontSize={0.15} color={entry.color} anchorX="center" maxWidth={2.2} font={undefined}>
        {entry.company}
      </Text>
      <Text position={[-0.2, -0.3, 0.1]} fontSize={0.13} color="#64748b" anchorX="center" font={undefined}>
        {entry.period}
      </Text>
    </group>
  );
}

function HelixSpine() {
  const spine = useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    if (!spine.current) return;
    spine.current.rotation.y = state.clock.elapsedTime * 0.15;
  });
  return (
    <mesh ref={spine} position={[0, 0, 0]}>
      <cylinderGeometry args={[0.03, 0.03, entries.length * HELIX_VERTICAL + 1, 8]} />
      <meshStandardMaterial color="#1e293b" metalness={0.7} roughness={0.2} />
    </mesh>
  );
}

function SceneGroup() {
  const group = useRef<THREE.Group>(null!);
  useFrame((state) => {
    if (!group.current) return;
    group.current.rotation.y = state.clock.elapsedTime * 0.12;
  });
  return (
    <group ref={group}>
      <HelixSpine />
      {entries.map((e, i) => <HelixCard key={i} entry={e} index={i} />)}
    </group>
  );
}

export default function Timeline3D() {
  return (
    <div className="w-full h-96 sm:h-[480px] rounded-3xl overflow-hidden" aria-label="3D helix experience timeline">
      <Canvas camera={{ position: [0, 0, 11], fov: 55 }} gl={{ antialias: true, alpha: true }} dpr={[1, 1.5]}>
        <ambientLight intensity={0.5} />
        <pointLight position={[0, 8, 4]} intensity={1.2} color="#22d3ee" />
        <pointLight position={[0, -8, -4]} intensity={0.4} color="#6366f1" />
        <SceneGroup />
      </Canvas>
    </div>
  );
}
