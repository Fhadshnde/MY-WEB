import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const Glow = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 380px;
  height: 380px;
  border-radius: 50%;
  pointer-events: none;
  z-index: 9998;
  mix-blend-mode: ${({ theme }) => theme.glowBlend};
  transform: translate(-50%, -50%);
  background: radial-gradient(
    circle,
    ${({ theme }) => theme.glow1} 0%,
    ${({ theme }) => theme.glow2} 40%,
    transparent 70%
  );
  filter: blur(30px);
  transition: opacity 0.3s ease;
  will-change: left, top;

  @media (max-width: 768px) {
    display: none;
  }
`;

const CursorGlow = () => {
  const ref = useRef(null);

  useEffect(() => {
    let raf = null;
    const move = (e) => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        if (ref.current) {
          ref.current.style.left = `${e.clientX}px`;
          ref.current.style.top = `${e.clientY}px`;
        }
        raf = null;
      });
    };
    window.addEventListener("mousemove", move);
    return () => {
      window.removeEventListener("mousemove", move);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return <Glow ref={ref} />;
};

export default CursorGlow;
