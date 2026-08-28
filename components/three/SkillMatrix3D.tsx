'use client';

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, RoundedBox } from '@react-three/drei';
import * as THREE from 'three';

interface SkillBarData {
  label: string;
  value: number; // 0-100
  color: string;
}

const skillData: SkillBarData[] = [
  { label: 'AI Agents', value: 95, color: '#22d3ee' },
  { label: 'React 18', value: 94, color: '#3b82f6' },
  { label: 'Redux', value: 90, color: '#6366f1' },
  { label: 'Next.js', value: 92, color: '#8b5cf6' },
  { label: 'TypeScript', value: 91, color: '#06b6d4' },
  { label: 'Node.js', value: 85, color: '#10b981' },
  { label: 'Supabase', value: 80, color: '#14b8a6' },
  { label: 'Gemini', value: 88, color: '#f59e0b' },
];

function SkillBar3D({
  label,
  value,
  color,
  index,
  total,
}: SkillBarData & { index: number; total: number }) {
  const mesh = useRef<THREE.Mesh>(null!);
  const targetHeight = (value / 100) * 4;
  const heightRef = useRef(0);

  useFrame((_, delta) => {
    if (!mesh.current) return;
    heightRef.current = THREE.MathUtils.lerp(heightRef.current, targetHeight, delta * 1.5);
    mesh.current.scale.y = heightRef.current / targetHeight;
  });

  const spacing = 1.4;
  const xOffset = (index - (total - 1) / 2) * spacing;

  return (
    <group position={[xOffset, 0, 0]}>
      {/* Bar */}
      <RoundedBox
        ref={mesh}
        args={[0.9, targetHeight, 0.9]}
        radius={0.12}
        smoothness={4}
        position={[0, targetHeight / 2, 0]}
      >
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.3}
          metalness={0.5}
          roughness={0.3}
          transparent
          opacity={0.88}
        />
      </RoundedBox>

      {/* Value label on top */}
      <Text
        position={[0, targetHeight + 0.35, 0]}
        fontSize={0.28}
        color={color}
        anchorX="center"
        anchorY="middle"
        font={undefined}
      >
        {value}%
      </Text>

      {/* Skill name below */}
      <Text
        position={[0, -0.35, 0]}
        fontSize={0.22}
        color="#94a3b8"
        anchorX="center"
        anchorY="top"
        maxWidth={1.1}
        textAlign="center"
        font={undefined}
      >
        {label}
      </Text>
    </group>
  );
}

function SceneGroup() {
  const group = useRef<THREE.Group>(null!);
  useFrame((state) => {
    if (!group.current) return;
    group.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.15) * 0.18;
  });

  return (
    <group ref={group}>
      {skillData.map((skill, i) => (
        <SkillBar3D key={skill.label} {...skill} index={i} total={skillData.length} />
      ))}
      {/* Floor grid */}
      <gridHelper args={[14, 14, '#1e293b', '#0f172a']} position={[0, -0.05, 0]} />
    </group>
  );
}

export default function SkillMatrix3D() {
  return (
    <div className="w-full h-72 sm:h-96 rounded-3xl overflow-hidden" aria-label="3D skill competency bar chart">
      <Canvas camera={{ position: [0, 3, 10], fov: 55 }} gl={{ antialias: true, alpha: true }} dpr={[1, 1.5]}>
        <ambientLight intensity={0.5} />
        <pointLight position={[0, 8, 4]} intensity={1.5} color="#22d3ee" />
        <pointLight position={[0, -4, -4]} intensity={0.4} color="#6366f1" />
        <SceneGroup />
      </Canvas>
    </div>
  );
}
