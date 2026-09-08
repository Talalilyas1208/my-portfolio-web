'use client';

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, Stars } from '@react-three/drei';
import * as THREE from 'three';

function FloatingOrb({ position, color, size }: { position: [number, number, number]; color: string; size: number }) {
  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={1.2}>
      <Sphere args={[size, 32, 32]} position={position}>
        <MeshDistortMaterial
          color={color}
          distort={0.35}
          speed={1.5}
          roughness={0.1}
          metalness={0.7}
          transparent
          opacity={0.5}
        />
      </Sphere>
    </Float>
  );
}

function ParticleRing() {
  const mesh = useRef<THREE.Points>(null!);
  const count = 300;
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const angle = (i / count) * Math.PI * 2;
    const r = 3.5 + (Math.random() - 0.5) * 1.2;
    positions[i * 3] = Math.cos(angle) * r;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 3;
    positions[i * 3 + 2] = Math.sin(angle) * r;
  }
  useFrame((state) => {
    if (!mesh.current) return;
    mesh.current.rotation.y = state.clock.elapsedTime * 0.12;
  });
  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#22d3ee" transparent opacity={0.6} sizeAttenuation />
    </points>
  );
}

export default function ContactPortal3D() {
  return (
    <div className="absolute inset-0 -z-10" aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }} gl={{ antialias: true, alpha: true }} dpr={[1, 1.5]}>
        <ambientLight intensity={0.3} />
        <pointLight position={[3, 3, 3]} intensity={1} color="#22d3ee" />
        <pointLight position={[-3, -3, -3]} intensity={0.5} color="#6366f1" />
        <Stars radius={30} depth={20} count={500} factor={2} fade speed={0.4} />
        <ParticleRing />
        <FloatingOrb position={[-3, 1, -2]} color="#22d3ee" size={0.8} />
        <FloatingOrb position={[3, -1, -2]} color="#6366f1" size={0.6} />
        <FloatingOrb position={[0, 2.5, -3]} color="#10b981" size={0.5} />
      </Canvas>
    </div>
  );
}
