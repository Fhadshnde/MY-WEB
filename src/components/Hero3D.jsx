import React, { Suspense, useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  Sparkles,
  Environment,
  Lightformer,
  MeshDistortMaterial,
  Icosahedron,
  Torus,
} from "@react-three/drei";
import * as THREE from "three";

/* Central iridescent crystal — glassy/metallic with subtle distortion */
const Crystal = ({ color, accent }) => {
  const inner = useRef();
  const shell = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (inner.current) {
      inner.current.rotation.y = t * 0.18;
      inner.current.rotation.z = Math.sin(t * 0.3) * 0.12;
    }
    if (shell.current) {
      shell.current.rotation.y = -t * 0.12;
      shell.current.rotation.x = t * 0.08;
    }
  });

  return (
    <group>
      {/* inner solid crystal */}
      <Float speed={1.6} rotationIntensity={0.6} floatIntensity={1.1}>
        <Icosahedron ref={inner} args={[1, 4]} scale={1.35}>
          <MeshDistortMaterial
            color={color}
            distort={0.28}
            speed={1.6}
            roughness={0.05}
            metalness={0.95}
            envMapIntensity={1.4}
          />
        </Icosahedron>

        {/* faceted wireframe shell */}
        <Icosahedron ref={shell} args={[1, 1]} scale={1.95}>
          <meshBasicMaterial
            color={accent}
            wireframe
            transparent
            opacity={0.18}
          />
        </Icosahedron>
      </Float>
    </group>
  );
};

/* Thin orbiting ring */
const OrbitRing = ({ color, radius = 2.5, speed = 0.25, tilt = 1.1 }) => {
  const ref = useRef();
  useFrame((state) => {
    if (ref.current) ref.current.rotation.z = state.clock.getElapsedTime() * speed;
  });
  return (
    <group rotation={[tilt, 0.4, 0]}>
      <Torus ref={ref} args={[radius, 0.012, 16, 120]}>
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.9}
          metalness={0.4}
          roughness={0.3}
          transparent
          opacity={0.55}
        />
      </Torus>
    </group>
  );
};

/* Pointer-driven parallax for the whole scene */
const Rig = ({ children }) => {
  const group = useRef();
  useFrame((state) => {
    if (!group.current) return;
    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      state.pointer.x * 0.35,
      0.05
    );
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      -state.pointer.y * 0.25,
      0.05
    );
  });
  return <group ref={group}>{children}</group>;
};

const Scene = ({ color, accent }) => {
  const sparkleColors = useMemo(() => [color, accent], [color, accent]);
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[4, 6, 5]} intensity={1.1} />
      <pointLight position={[-5, -2, 3]} intensity={6} color={accent} distance={12} />
      <pointLight position={[5, 3, -3]} intensity={5} color={color} distance={12} />

      <Rig>
        <Crystal color={color} accent={accent} />
        <OrbitRing color={accent} radius={2.6} speed={0.22} tilt={1.2} />
        <OrbitRing color={color} radius={2.95} speed={-0.16} tilt={0.5} />
        <Sparkles
          count={60}
          scale={[7, 5, 5]}
          size={2.4}
          speed={0.4}
          opacity={0.7}
          color={sparkleColors[0]}
        />
        <Sparkles
          count={40}
          scale={[8, 6, 4]}
          size={1.6}
          speed={0.25}
          opacity={0.5}
          color={sparkleColors[1]}
        />
      </Rig>

      {/* In-scene reflections (no network fetch) for the metallic crystal */}
      <Environment resolution={256}>
        <Lightformer
          intensity={2}
          position={[0, 4, -6]}
          scale={[10, 6, 1]}
          color={accent}
        />
        <Lightformer
          intensity={1.4}
          position={[-5, -2, 4]}
          scale={[8, 8, 1]}
          color={color}
        />
        <Lightformer
          intensity={1}
          position={[6, 2, 2]}
          scale={[6, 6, 1]}
          color="#ffffff"
        />
      </Environment>
    </>
  );
};

const Hero3D = ({ color = "#7c3aed", accent = "#38bdf8" }) => {
  return (
    <Canvas
      camera={{ position: [0, 0, 8.5], fov: 42 }}
      dpr={[1, 2]}
      gl={{ alpha: true, antialias: true }}
      style={{ background: "transparent" }}
    >
      <Suspense fallback={null}>
        <Scene color={color} accent={accent} />
      </Suspense>
    </Canvas>
  );
};

export default Hero3D;
