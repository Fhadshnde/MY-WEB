import React, { useEffect, useMemo, useState } from "react";
import styled, { ThemeProvider, createGlobalStyle, keyframes } from "styled-components";
import { lightTheme, darkTheme } from "./utils/Themes";
import Navbar from "./components/Navbar";
import CursorGlow from "./components/CursorGlow";
import { BrowserRouter } from "react-router-dom";
import Hero from "./components/sections/Hero";
import Stats from "./components/sections/Stats";
import Services from "./components/sections/Services";
import Skills from "./components/sections/Skills";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";
import Education from "./components/sections/Education";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";

const GlobalStyle = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.text_primary};
    transition: background 0.4s ease, color 0.4s ease;
  }
  ::selection {
    background: ${({ theme }) => theme.primary};
    color: #fff;
  }
  ::-webkit-scrollbar-track { background: transparent; }
`;

const drift = keyframes`
  0%   { transform: translate(0, 0) scale(1); }
  33%  { transform: translate(6vw, -4vh) scale(1.15); }
  66%  { transform: translate(-5vw, 5vh) scale(0.92); }
  100% { transform: translate(0, 0) scale(1); }
`;

const AuroraBg = styled.div`
  position: fixed;
  inset: 0;
  z-index: 0;
  overflow: hidden;
  pointer-events: none;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background-image: radial-gradient(
      ${({ theme }) => theme.gridDot} 1px,
      transparent 1px
    );
    background-size: 30px 30px;
    mask-image: radial-gradient(ellipse 80% 80% at 50% 30%, #000 20%, transparent 70%);
    -webkit-mask-image: radial-gradient(ellipse 80% 80% at 50% 30%, #000 20%, transparent 70%);
    opacity: 0.7;
  }
`;

const Blob = styled.div`
  position: absolute;
  border-radius: 50%;
  filter: blur(110px);
  mix-blend-mode: ${({ theme }) => theme.glowBlend};
  animation: ${drift} ${({ dur }) => dur || "22s"} ease-in-out infinite;

  /* Animated 110px blur over huge elements crashes mobile GPUs — make it
     cheap and static on phones. */
  @media (max-width: 960px) {
    filter: blur(60px);
    animation: none;
    opacity: 0.7;
  }
`;

const Body = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  overflow-x: hidden;
  color: ${({ theme }) => theme.text_primary};
  transition: color 0.4s ease;
`;

function App() {
  const [mode, setMode] = useState("light");

  useEffect(() => {
    // Light is the default; only an explicit saved choice can switch to dark.
    const saved = localStorage.getItem("theme-mode");
    if (saved === "light" || saved === "dark") {
      setMode(saved);
    }
  }, []);

  const toggleMode = () => {
    setMode((prev) => {
      const next = prev === "light" ? "dark" : "light";
      localStorage.setItem("theme-mode", next);
      return next;
    });
  };

  const theme = useMemo(() => (mode === "dark" ? darkTheme : lightTheme), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <AuroraBg>
          <Blob
            dur="24s"
            style={{
              width: "46vw",
              height: "46vw",
              background: theme.glow1,
              top: "-10vh",
              left: "-8vw",
            }}
          />
          <Blob
            dur="30s"
            style={{
              width: "40vw",
              height: "40vw",
              background: theme.glow2,
              top: "30vh",
              right: "-10vw",
            }}
          />
          <Blob
            dur="26s"
            style={{
              width: "38vw",
              height: "38vw",
              background: theme.glow3,
              bottom: "-12vh",
              left: "20vw",
            }}
          />
        </AuroraBg>
        <CursorGlow />
        <Navbar mode={mode} toggleMode={toggleMode} />
        <Body>
          <Hero />
          <Stats />
          <Services />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Contact />
          <Footer />
        </Body>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
