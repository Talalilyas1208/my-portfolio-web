'use client';

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { RoundedBox, Text, Line } from '@react-three/drei';
import * as THREE from 'three';

interface ArchNode {
  id: string;
  label: string;
  color: string;
  pos: [number, number, number];
}

const nodes: ArchNode[] = [
  { id: 'source', label: 'Source Code', color: '#22d3ee', pos: [-4, 2, 0] },
  { id: 'monitor', label: 'Monitor', color: '#6366f1', pos: [-1.5, 2, 0] },
  { id: 'gemini', label: 'Gemini LLM', color: '#f59e0b', pos: [0, 0, 0] },
  { id: 'ast', label: 'AST Parser', color: '#10b981', pos: [-1.5, -2, 0] },
  { id: 'sandbox', label: 'Sandbox', color: '#ef4444', pos: [1.5, -2, 0] },
  { id: 'validator', label: 'Validator', color: '#8b5cf6', pos: [1.5, 2, 0] },
  { id: 'commit', label: 'Git Commit', color: '#06b6d4', pos: [4, 0, 0] },
];

const edges: [string, string][] = [
  ['source', 'monitor'],
  ['monitor', 'gemini'],
  ['gemini', 'ast'],
  ['ast', 'sandbox'],
  ['sandbox', 'validator'],
  ['validator', 'gemini'],
  ['validator', 'commit'],
];

function ArchNodeBox({ label, color, pos }: ArchNode) {
  const mesh = useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    if (!mesh.current) return;
    mesh.current.position.y = pos[1] + Math.sin(state.clock.elapsedTime * 0.8 + pos[0]) * 0.08;
  });
  return (
    <group position={pos}>
      <RoundedBox ref={mesh} args={[1.6, 0.55, 0.2]} radius={0.1} smoothness={4}>
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.25} metalness={0.5} roughness={0.3} transparent opacity={0.9} />
      </RoundedBox>
      <Text position={[0, 0, 0.12]} fontSize={0.17} color="#fff" anchorX="center" anchorY="middle" font={undefined}>
        {label}
      </Text>
    </group>
  );
}

function DataEdges() {
  const nodeMap = Object.fromEntries(nodes.map((n) => [n.id, n.pos]));
  return (
    <>
      {edges.map(([a, b], i) => {
        const from = nodeMap[a];
        const to = nodeMap[b];
        return (
          <Line
            key={i}
            points={[from, to]}
            color="#334155"
            lineWidth={1.5}
            transparent
            opacity={0.7}
          />
        );
      })}
    </>
  );
}

function SceneGroup() {
  const group = useRef<THREE.Group>(null!);
  useFrame((state) => {
    if (!group.current) return;
    group.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.2;
    group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.07) * 0.06;
  });
  return (
    <group ref={group}>
      <DataEdges />
      {nodes.map((n) => <ArchNodeBox key={n.id} {...n} />)}
    </group>
  );
}

export default function ArchDiagram3D() {
  return (
    <div className="w-full h-72 sm:h-80 rounded-3xl overflow-hidden" aria-label="Interactive 3D architecture diagram">
      <Canvas camera={{ position: [0, 0, 9], fov: 55 }} gl={{ antialias: true, alpha: true }} dpr={[1, 1.5]}>
        <ambientLight intensity={0.5} />
        <pointLight position={[0, 5, 5]} intensity={1.2} color="#22d3ee" />
        <pointLight position={[0, -5, -5]} intensity={0.4} color="#6366f1" />
        <SceneGroup />
      </Canvas>
    </div>
  );
}
