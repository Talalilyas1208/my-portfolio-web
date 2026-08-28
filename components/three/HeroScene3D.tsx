'use client';

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, Stars } from '@react-three/drei';
import * as THREE from 'three';

/* ─── Floating Particle Field ─────────────────────────────────────── */
function ParticleField({ count = 600 }: { count?: number }) {
  const mesh = useRef<THREE.Points>(null!);

  const { positions, colors } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
      const t = Math.random();
      colors[i * 3] = 0.05 + t * 0.1;
      colors[i * 3 + 1] = 0.6 + t * 0.4;
      colors[i * 3 + 2] = 0.8 + t * 0.2;
    }
    return { positions, colors };
  }, [count]);

  useFrame((state) => {
    if (!mesh.current) return;
    mesh.current.rotation.y = state.clock.elapsedTime * 0.04;
    mesh.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.02) * 0.1;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.04} vertexColors transparent opacity={0.75} sizeAttenuation />
    </points>
  );
}

/* ─── Morphing Sphere ──────────────────────────────────────────────── */
function MorphingSphere() {
  const mesh = useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    if (!mesh.current) return;
    mesh.current.rotation.x = state.clock.elapsedTime * 0.2;
    mesh.current.rotation.y = state.clock.elapsedTime * 0.3;
  });
  return (
    <Float speed={2} rotationIntensity={0.4} floatIntensity={0.8}>
      <Sphere ref={mesh} args={[1.4, 64, 64]} position={[2.5, 0, 0]}>
        <MeshDistortMaterial
          color="#22d3ee"
          distort={0.45}
          speed={2}
          roughness={0.1}
          metalness={0.8}
          transparent
          opacity={0.75}
        />
      </Sphere>
    </Float>
  );
}

/* ─── Orbit Rings ──────────────────────────────────────────────────── */
function OrbitRing({ radius, color, speed }: { radius: number; color: string; speed: number }) {
  const ring = useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    if (!ring.current) return;
    ring.current.rotation.z = state.clock.elapsedTime * speed;
    ring.current.rotation.x = state.clock.elapsedTime * speed * 0.3;
  });
  return (
    <mesh ref={ring} position={[2.5, 0, 0]}>
      <torusGeometry args={[radius, 0.015, 8, 100]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.6} transparent opacity={0.55} />
    </mesh>
  );
}

/* ─── Mouse-Reactive Camera ────────────────────────────────────────── */
function CameraRig() {
  const { camera, gl } = useThree();
  const mouse = useRef({ x: 0, y: 0 });
  React.useEffect(() => {
    const el = gl.domElement;
    const onMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.current.y = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    el.addEventListener('mousemove', onMove);
    return () => el.removeEventListener('mousemove', onMove);
  }, [gl]);
  useFrame(() => {
    camera.position.x += (mouse.current.x * 1.2 - camera.position.x) * 0.04;
    camera.position.y += (mouse.current.y * 0.6 - camera.position.y) * 0.04;
    camera.lookAt(0, 0, 0);
  });
  return null;
}

/* ─── Public Export ────────────────────────────────────────────────── */
export default function HeroScene3D() {
  return (
    <div className="absolute inset-0 -z-10" aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 7], fov: 60 }} gl={{ antialias: true, alpha: true }} dpr={[1, 1.5]}>
        <ambientLight intensity={0.3} />
        <pointLight position={[5, 5, 5]} intensity={1.2} color="#22d3ee" />
        <pointLight position={[-5, -3, -5]} intensity={0.6} color="#6366f1" />
        <Stars radius={40} depth={30} count={800} factor={2} fade speed={0.5} />
        <ParticleField />
        <MorphingSphere />
        <OrbitRing radius={2.1} color="#22d3ee" speed={0.4} />
        <OrbitRing radius={2.6} color="#6366f1" speed={-0.25} />
        <OrbitRing radius={3.1} color="#10b981" speed={0.15} />
        <CameraRig />
      </Canvas>
    </div>
  );
}
