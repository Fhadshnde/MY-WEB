import React, { useRef, useState, useEffect, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import styled from "styled-components";

const StyledCanvasWrapper = styled.div`
  width: 100%;
  height: auto;
  position: absolute;
  inset: 0;
`;

const Stars = (props) => {
  const ref = useRef();
  // عدد أقل من النقاط = أداء أفضل مع نفس المظهر تقريباً
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(2500), { radius: 1.2 })
  );

  // تقييد التدوير إلى ~30 إطار/ثانية بدل 60 لتخفيف الحِمل
  const accumulated = useRef(0);
  useFrame((state, delta) => {
    accumulated.current += delta;
    if (accumulated.current < 1 / 30) return;
    const step = accumulated.current;
    accumulated.current = 0;
    if (!ref.current) return;
    ref.current.rotation.x -= step / 10;
    ref.current.rotation.y -= step / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StyledStarsCanvas = () => {
  // أوقف الرسم تماماً عندما تكون النافذة غير نشطة (توفير بطارية/معالج)
  const [isActive, setIsActive] = useState(
    typeof document === "undefined" || !document.hidden
  );

  useEffect(() => {
    const onVisibility = () => setIsActive(!document.hidden);
    document.addEventListener("visibilitychange", onVisibility);
    return () =>
      document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  return (
    <StyledCanvasWrapper>
      <Canvas
        camera={{ position: [0, 0, 1] }}
        dpr={[1, 1.5]}
        frameloop={isActive ? "always" : "never"}
        gl={{ antialias: false, powerPreference: "high-performance" }}
      >
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </StyledCanvasWrapper>
  );
};

export default StyledStarsCanvas;
