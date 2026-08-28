'use client';

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import * as THREE from 'three';

interface DialData {
  label: string;
  value: number; // 0-100
  color: string;
  position: [number, number, number];
}

const dials: DialData[] = [
  { label: 'Fix Rate', value: 85, color: '#22d3ee', position: [-4.5, 0, 0] },
  { label: 'TypeSafety', value: 100, color: '#10b981', position: [-1.5, 0, 0] },
  { label: 'Perf Score', value: 97, color: '#6366f1', position: [1.5, 0, 0] },
  { label: 'Uptime', value: 99, color: '#f59e0b', position: [4.5, 0, 0] },
];

const SEGMENTS = 64;
const RADIUS = 1.1;
const TUBE = 0.12;

function DialGauge({ label, value, color, position }: DialData) {
  const arcMesh = useRef<THREE.Mesh>(null!);
  const needle = useRef<THREE.Mesh>(null!);
  const scaleRef = useRef(0);

  useFrame((_, delta) => {
    scaleRef.current = THREE.MathUtils.lerp(scaleRef.current, value / 100, delta * 1.2);
    if (arcMesh.current) {
      const geo = arcMesh.current.geometry as THREE.TorusGeometry;
      const arc = scaleRef.current * Math.PI;
      // recreate arc geometry each frame (lightweight)
      const newGeo = new THREE.TorusGeometry(RADIUS, TUBE, 8, SEGMENTS, arc);
      geo.copy(newGeo);
      newGeo.dispose();
    }
    if (needle.current) {
      needle.current.rotation.z = -(scaleRef.current * Math.PI) + Math.PI / 2;
    }
  });

  return (
    <group position={position}>
      {/* Background track */}
      <mesh rotation={[0, 0, Math.PI / 2]}>
        <torusGeometry args={[RADIUS, TUBE * 0.5, 8, SEGMENTS, Math.PI]} />
        <meshStandardMaterial color="#1e293b" />
      </mesh>

      {/* Filled arc */}
      <mesh ref={arcMesh} rotation={[0, 0, Math.PI / 2]}>
        <torusGeometry args={[RADIUS, TUBE, 8, SEGMENTS, 0]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} />
      </mesh>

      {/* Needle */}
      <mesh ref={needle} position={[0, 0, 0.05]}>
        <boxGeometry args={[RADIUS * 0.85, 0.04, 0.04]} />
        <meshStandardMaterial color="#f8fafc" emissive="#f8fafc" emissiveIntensity={0.6} />
      </mesh>

      {/* Centre cap */}
      <mesh position={[0, 0, 0.08]}>
        <circleGeometry args={[0.14, 16]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.6} />
      </mesh>

      {/* Value */}
      <Text position={[0, -0.3, 0.1]} fontSize={0.32} color={color} anchorX="center" font={undefined}>
        {value}%
      </Text>
      <Text position={[0, -0.72, 0.1]} fontSize={0.18} color="#94a3b8" anchorX="center" font={undefined}>
        {label}
      </Text>
    </group>
  );
}

export default function MetricsDashboard3D() {
  return (
    <div className="w-full h-52 sm:h-64 rounded-3xl overflow-hidden" aria-label="3D metric dial gauges">
      <Canvas camera={{ position: [0, 0, 7], fov: 55 }} gl={{ antialias: true, alpha: true }} dpr={[1, 1.5]}>
        <ambientLight intensity={0.6} />
        <pointLight position={[0, 5, 4]} intensity={1.2} color="#ffffff" />
        {dials.map((d) => (
          <DialGauge key={d.label} {...d} />
        ))}
      </Canvas>
    </div>
  );
}
