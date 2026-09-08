'use client';

import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { RoundedBox, Text } from '@react-three/drei';
import * as THREE from 'three';

interface ProjectCard3DProps {
  title: string;
  category: string;
  techStack: string[];
  color: string;
}

function FlipCard({ title, category, techStack, color, position }: ProjectCard3DProps & { position: [number, number, number] }) {
  const group = useRef<THREE.Group>(null!);
  const [hovered, setHovered] = useState(false);
  const targetRot = useRef(0);

  useFrame((_, delta) => {
    if (!group.current) return;
    targetRot.current = THREE.MathUtils.lerp(
      targetRot.current,
      hovered ? Math.PI : 0,
      delta * 3,
    );
    group.current.rotation.y = targetRot.current;
  });

  return (
    <group
      ref={group}
      position={position}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
    >
      {/* Front face */}
      <group>
        <RoundedBox args={[3, 2, 0.08]} radius={0.12} smoothness={4}>
          <meshStandardMaterial color="#0f172a" metalness={0.5} roughness={0.3} transparent opacity={0.92} />
        </RoundedBox>
        {/* Coloured top bar */}
        <mesh position={[0, 0.82, 0.05]}>
          <boxGeometry args={[2.6, 0.12, 0.02]} />
          <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} />
        </mesh>
        <Text position={[0, 0.45, 0.07]} fontSize={0.22} color="#f1f5f9" anchorX="center" maxWidth={2.6} font={undefined}>
          {title}
        </Text>
        <Text position={[0, 0.1, 0.07]} fontSize={0.16} color={color} anchorX="center" font={undefined}>
          {category}
        </Text>
        <Text
          position={[0, -0.28, 0.07]}
          fontSize={0.14}
          color="#94a3b8"
          anchorX="center"
          maxWidth={2.6}
          textAlign="center"
          font={undefined}
        >
          {techStack.slice(0, 4).join(' · ')}
        </Text>
      </group>

      {/* Back face */}
      <group rotation={[0, Math.PI, 0]}>
        <RoundedBox args={[3, 2, 0.08]} radius={0.12} smoothness={4}>
          <meshStandardMaterial color={color} metalness={0.6} roughness={0.2} transparent opacity={0.85} />
        </RoundedBox>
        <Text position={[0, 0.3, 0.07]} fontSize={0.2} color="#fff" anchorX="center" maxWidth={2.6} font={undefined}>
          View Details
        </Text>
        <Text position={[0, -0.05, 0.07]} fontSize={0.15} color="rgba(255,255,255,0.75)" anchorX="center" maxWidth={2.6} textAlign="center" font={undefined}>
          {techStack.join(' · ')}
        </Text>
      </group>
    </group>
  );
}

const projectCards: (ProjectCard3DProps & { position: [number, number, number] })[] = [
  { title: 'Autonomous Gemini Code-Fixer', category: 'AI & Agentic Systems', techStack: ['Gemini', 'AST', 'Node.js', 'TypeScript'], color: '#22d3ee', position: [-3.5, 0, 0] },
  { title: 'React 18 E-Commerce Platform', category: 'Frontend Engineering', techStack: ['React 18', 'Redux', 'Next.js', 'Tailwind'], color: '#6366f1', position: [0, 0, 0] },
  { title: 'Full-Stack SaaS Dashboard', category: 'Full-Stack', techStack: ['Next.js', 'Supabase', 'TypeScript', 'Tailwind'], color: '#10b981', position: [3.5, 0, 0] },
];

export default function ProjectCards3D() {
  return (
    <div className="w-full h-64 sm:h-80 rounded-3xl overflow-hidden" aria-label="Interactive 3D project cards">
      <Canvas camera={{ position: [0, 0, 7], fov: 55 }} gl={{ antialias: true, alpha: true }} dpr={[1, 1.5]}>
        <ambientLight intensity={0.6} />
        <pointLight position={[0, 5, 5]} intensity={1.5} color="#ffffff" />
        <pointLight position={[0, -3, -3]} intensity={0.5} color="#6366f1" />
        {projectCards.map((card) => (
          <FlipCard key={card.title} {...card} />
        ))}
      </Canvas>
    </div>
  );
}
