import React from "react";
import styled, { keyframes } from "styled-components";

/**
 * Lightweight CSS-only hero visual. Shown on mobile / low-power devices and
 * whenever the 3D <Canvas> fails — no WebGL, no three.js, so it can never
 * crash or leave a black screen.
 */

const floatY = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-16px); }
`;

const spin = keyframes`
  to { transform: rotate(360deg); }
`;

const Wrap = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const Orb = styled.div`
  position: relative;
  width: 240px;
  height: 240px;
  border-radius: 50%;
  background: radial-gradient(
    circle at 34% 30%,
    #ffffff 0%,
    ${({ $color }) => $color} 34%,
    ${({ $accent }) => $accent} 78%
  );
  box-shadow:
    0 30px 80px ${({ $color }) => $color}55,
    inset -18px -18px 50px rgba(0, 0, 0, 0.25),
    inset 14px 14px 40px rgba(255, 255, 255, 0.35);
  animation: ${floatY} 6s ease-in-out infinite;

  @media (max-width: 960px) {
    width: 200px;
    height: 200px;
  }
`;

const Ring = styled.div`
  position: absolute;
  inset: -34px;
  border-radius: 50%;
  border: 1.5px solid ${({ $accent }) => $accent}66;
  border-top-color: transparent;
  border-bottom-color: transparent;
  animation: ${spin} 14s linear infinite;
`;

const Ring2 = styled(Ring)`
  inset: -58px;
  border: 1.5px solid ${({ $color }) => $color}55;
  border-left-color: transparent;
  border-right-color: transparent;
  animation-duration: 22s;
  animation-direction: reverse;
`;

const HeroVisualFallback = ({ color = "#7c3aed", accent = "#0891b2" }) => (
  <Wrap aria-hidden="true">
    <Orb $color={color} $accent={accent}>
      <Ring $color={color} $accent={accent} />
      <Ring2 $color={color} $accent={accent} />
    </Orb>
  </Wrap>
);

export default HeroVisualFallback;
