import React, { Suspense, lazy } from "react";
import styled, { keyframes, useTheme } from "styled-components";
import { Bio } from "../../data/constants";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";
import {
  SiReact,
  SiNodedotjs,
  SiTypescript,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiRedux,
  SiTailwindcss,
  SiGit,
  SiJavascript,
} from "react-icons/si";

const Hero3D = lazy(() => import("../Hero3D"));

const TECH = [
  { name: "React", Icon: SiReact },
  { name: "Node.js", Icon: SiNodedotjs },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "JavaScript", Icon: SiJavascript },
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "Express", Icon: SiExpress },
  { name: "MongoDB", Icon: SiMongodb },
  { name: "Redux", Icon: SiRedux },
  { name: "Tailwind", Icon: SiTailwindcss },
  { name: "Git", Icon: SiGit },
];

const HeroContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  overflow: hidden;
  padding: 70px 30px 90px;
  min-height: 92vh;
  box-sizing: border-box;

  @media (max-width: 960px) {
    padding: 40px 16px 70px;
    min-height: auto;
  }
`;

const Inner = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 1150px;
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  align-items: center;
  gap: 20px;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 960px) {
    align-items: center;
    order: 2;
  }
`;

const Right = styled.div`
  position: relative;
  width: 100%;
  height: 480px;

  @media (max-width: 960px) {
    order: 1;
    height: 320px;
    margin-bottom: 6px;
  }
`;

const Eyebrow = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  gap: 9px;
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  background: ${({ theme }) => theme.glass};
  backdrop-filter: blur(10px);
  padding: 9px 18px;
  border-radius: 30px;
  margin-bottom: 28px;
  border: 1px solid ${({ theme }) => theme.border};
  &::before {
    content: "";
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #22c55e;
    box-shadow: 0 0 10px #22c55e;
    animation: ${keyframes`
      0% { box-shadow: 0 0 0 0 rgba(34,197,94,0.6); }
      70% { box-shadow: 0 0 0 9px rgba(34,197,94,0); }
      100% { box-shadow: 0 0 0 0 rgba(34,197,94,0); }
    `} 2s infinite;
  }
`;

const shimmer = keyframes`
  to { background-position: 200% center; }
`;

const Title = styled(motion.h1)`
  font-family: "Space Grotesk", sans-serif;
  font-weight: 700;
  font-size: clamp(40px, 6.4vw, 66px);
  line-height: 1.05;
  letter-spacing: -1.5px;
  margin: 0;
  color: ${({ theme }) => theme.text_primary};

  .grad {
    background: ${({ theme }) => theme.gradientText};
    background-size: 200% auto;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: ${shimmer} 5s linear infinite;
  }
`;

const TextLoop = styled.div`
  font-family: "Space Grotesk", sans-serif;
  font-weight: 600;
  font-size: clamp(19px, 3vw, 27px);
  display: flex;
  gap: 10px;
  margin-top: 18px;
  color: ${({ theme }) => theme.text_secondary};

  @media (max-width: 960px) {
    justify-content: center;
  }
`;

const Span = styled.div`
  color: ${({ theme }) => theme.primary};
`;

const SubTitle = styled(motion.p)`
  font-size: 18px;
  line-height: 1.75;
  margin: 28px 0 0;
  max-width: 560px;
  color: ${({ theme }) => theme.text_secondary};

  @media (max-width: 960px) {
    font-size: 16px;
  }
`;

const Actions = styled(motion.div)`
  display: flex;
  gap: 16px;
  margin-top: 38px;
  flex-wrap: wrap;

  @media (max-width: 960px) {
    justify-content: center;
  }
`;

const PrimaryButton = styled(motion.a)`
  text-decoration: none;
  padding: 15px 32px;
  border-radius: 16px;
  font-weight: 600;
  font-size: 16px;
  color: #fff;
  background: ${({ theme }) => theme.gradient};
  box-shadow: ${({ theme }) => theme.shadowGlow};
`;

const GhostButton = styled(motion.a)`
  text-decoration: none;
  padding: 15px 32px;
  border-radius: 16px;
  font-weight: 600;
  font-size: 16px;
  color: ${({ theme }) => theme.text_primary};
  background: ${({ theme }) => theme.glass};
  backdrop-filter: blur(10px);
  border: 1px solid ${({ theme }) => theme.border};
`;

const Stage = styled.div`
  position: absolute;
  inset: -8% -6%;
  background: transparent;
  overflow: visible;

  /* soft radial glow behind the 3D so it blends with the page */
  &::before {
    content: "";
    position: absolute;
    inset: 12%;
    border-radius: 50%;
    background: radial-gradient(
      circle at 50% 45%,
      ${({ theme }) => theme.glow1} 0%,
      ${({ theme }) => theme.glow2} 38%,
      transparent 70%
    );
    filter: blur(36px);
    mix-blend-mode: ${({ theme }) => theme.glowBlend};
    z-index: -1;
    pointer-events: none;
  }
`;

const floatY = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-12px); }
`;

const Badge = styled(motion.div)`
  position: absolute;
  z-index: 3;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 11px 16px;
  border-radius: 14px;
  font-size: 14px;
  font-weight: 600;
  white-space: nowrap;
  color: ${({ theme }) => theme.text_primary};
  background: ${({ theme }) => theme.glass};
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border: 1px solid ${({ theme }) => theme.border};
  box-shadow: ${({ theme }) => theme.cardShadow};
  animation: ${floatY} ${({ dur }) => dur || "5s"} ease-in-out infinite;

  .dot {
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: ${({ theme }) => theme.primary};
    box-shadow: 0 0 10px ${({ theme }) => theme.primary};
  }
  .accent {
    background: ${({ theme }) => theme.gradientText};
    background-size: 200% auto;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: "Space Grotesk", sans-serif;
    font-size: 17px;
  }

  @media (max-width: 960px) {
    font-size: 12.5px;
    padding: 9px 13px;
  }
`;

const marquee = keyframes`
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
`;

const MarqueeWrap = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 1;
  overflow: hidden;
  padding: 16px 0;
  border-top: 1px solid ${({ theme }) => theme.border};
  -webkit-mask-image: linear-gradient(
    90deg,
    transparent,
    #000 12%,
    #000 88%,
    transparent
  );
  mask-image: linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent);

  @media (max-width: 960px) {
    display: none;
  }
`;

const MarqueeTrack = styled.div`
  display: flex;
  width: max-content;
  gap: 44px;
  animation: ${marquee} 26s linear infinite;
`;

const Tech = styled.span`
  font-family: "Space Grotesk", sans-serif;
  font-size: 17px;
  font-weight: 600;
  letter-spacing: 0.2px;
  color: ${({ theme }) => theme.text_secondary};
  opacity: 0.9;
  display: inline-flex;
  align-items: center;
  gap: 10px;

  svg {
    font-size: 22px;
    color: ${({ theme }) => theme.primary};
  }
`;

const Hero = () => {
  const theme = useTheme();
  return (
    <HeroContainer id="About">
      <Inner>
        <Left>
          <Eyebrow
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Available for work
          </Eyebrow>

          <Title
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
          >
            Hi, I'm <span className="grad">{Bio.name}</span>
          </Title>

          <TextLoop>
            I am a
            <Span>
              <Typewriter
                options={{ strings: Bio.roles, autoStart: true, loop: true }}
              />
            </Span>
          </TextLoop>

          <SubTitle
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {Bio.description}
          </SubTitle>

          <Actions
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            <PrimaryButton
              href={Bio.resume}
              download="Fahad-Wisam-CV.pdf"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.97 }}
            >
              <FiDownload style={{ marginRight: 8, verticalAlign: "-2px" }} />
              Download CV
            </PrimaryButton>
            <GhostButton
              href="#Contact"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.97 }}
            >
              Get in touch
            </GhostButton>
          </Actions>
        </Left>

        <Right>
          <Stage>
            <Suspense fallback={null}>
              <Hero3D color={theme.primary} accent={theme.accent} />
            </Suspense>
          </Stage>

          <Badge
            dur="5.5s"
            style={{ top: "8%", left: "-4%" }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <span className="dot" /> Full Stack Developer
          </Badge>

          <Badge
            dur="6.5s"
            style={{ top: "42%", right: "-6%" }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.75 }}
          >
            ⚛️ React • Node
          </Badge>

          <Badge
            dur="5s"
            style={{ bottom: "10%", left: "2%" }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <span className="accent">{"</>"}</span> Clean Code
          </Badge>
        </Right>
      </Inner>

      <MarqueeWrap>
        <MarqueeTrack>
          {[...TECH, ...TECH].map(({ name, Icon }, i) => (
            <Tech key={`tech-${i}`}>
              <Icon />
              {name}
            </Tech>
          ))}
        </MarqueeTrack>
      </MarqueeWrap>
    </HeroContainer>
  );
};

export default Hero;
