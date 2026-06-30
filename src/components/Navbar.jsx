import React, { useState } from "react";
import { Link as LinkR } from "react-router-dom";
import styled from "styled-components";
import { Bio } from "../data/constants";
import {
  MenuRounded,
  CloseRounded,
  LightModeRounded,
  DarkModeRounded,
} from "@mui/icons-material";

const Nav = styled.div`
  position: sticky;
  top: 0;
  z-index: 50;
  display: flex;
  justify-content: center;
  padding: 18px 16px 0;
  pointer-events: none;
`;

const Bar = styled.div`
  pointer-events: auto;
  width: 100%;
  max-width: 1080px;
  height: 64px;
  padding: 0 14px 0 22px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.navBg};
  backdrop-filter: saturate(180%) blur(18px);
  -webkit-backdrop-filter: saturate(180%) blur(18px);
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 22px;
  box-shadow: ${({ theme }) => theme.cardShadow};
`;

const NavLogo = styled(LinkR)`
  font-family: "Space Grotesk", sans-serif;
  font-weight: 700;
  font-size: 19px;
  text-decoration: none;
  letter-spacing: 0.3px;
  color: ${({ theme }) => theme.text_primary};
  white-space: nowrap;
  span {
    background: ${({ theme }) => theme.gradient};
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const NavItems = styled.ul`
  display: flex;
  align-items: center;
  gap: 4px;
  list-style: none;
  margin: 0;
  padding: 0;

  @media screen and (max-width: 900px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text_secondary};
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
  padding: 8px 13px;
  border-radius: 12px;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.text_primary};
    background: ${({ theme }) => theme.primaryLight};
  }
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const ModeToggle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border-radius: 14px;
  cursor: pointer;
  background: ${({ theme }) => theme.card};
  border: 1px solid ${({ theme }) => theme.border};
  color: ${({ theme }) => theme.text_primary};
  transition: all 0.3s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
    border-color: ${({ theme }) => theme.primary};
    transform: rotate(20deg);
  }
`;

const GithubButton = styled.a`
  background: ${({ theme }) => theme.gradient};
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 14px;
  cursor: pointer;
  padding: 11px 20px;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  white-space: nowrap;
  transition: all 0.3s ease-in-out;
  box-shadow: ${({ theme }) => theme.shadowGlow};
  &:hover {
    transform: translateY(-2px);
    filter: brightness(1.08);
  }

  @media screen and (max-width: 900px) {
    display: none;
  }
`;

const MobileIcon = styled.button`
  display: none;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border-radius: 14px;
  background: ${({ theme }) => theme.card};
  border: 1px solid ${({ theme }) => theme.border};
  color: ${({ theme }) => theme.text_primary};
  cursor: pointer;
  @media screen and (max-width: 900px) {
    display: flex;
  }
`;

const MobileMenu = styled.ul`
  pointer-events: auto;
  position: absolute;
  top: 92px;
  left: 16px;
  right: 16px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 6px;
  list-style: none;
  padding: 16px;
  background: ${({ theme }) => theme.glass};
  backdrop-filter: saturate(180%) blur(18px);
  -webkit-backdrop-filter: saturate(180%) blur(18px);
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 20px;
  box-shadow: ${({ theme }) => theme.cardShadow};
  transition: all 0.35s cubic-bezier(0.25, 0.4, 0.25, 1);
  transform: ${({ isOpen }) => (isOpen ? "translateY(0)" : "translateY(-14px)")};
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};

  @media screen and (min-width: 901px) {
    display: none;
  }
`;

const MobileGithub = styled(GithubButton)`
  display: flex;
  margin-top: 6px;
`;

const links = [
  { label: "About", href: "#About" },
  { label: "Services", href: "#Services" },
  { label: "Skills", href: "#Skills" },
  { label: "Experience", href: "#Experience" },
  { label: "Projects", href: "#Projects" },
  { label: "Education", href: "#Education" },
  { label: "Contact", href: "#Contact" },
];

const Navbar = ({ mode, toggleMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const ModeIcon = mode === "dark" ? LightModeRounded : DarkModeRounded;
  return (
    <Nav>
      <Bar>
        <NavLogo to="/">
          Fahad<span>.</span>
        </NavLogo>

        <NavItems>
          {links.map((l) => (
            <NavLink key={l.href} href={l.href}>
              {l.label}
            </NavLink>
          ))}
        </NavItems>

        <Right>
          <ModeToggle onClick={toggleMode} aria-label="Toggle theme">
            <ModeIcon fontSize="small" />
          </ModeToggle>
          <GithubButton href={Bio.github} target="_blank">
            Github
          </GithubButton>
          <MobileIcon
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <CloseRounded /> : <MenuRounded />}
          </MobileIcon>
        </Right>
      </Bar>

      <MobileMenu isOpen={isOpen}>
        {links.map((l) => (
          <NavLink key={l.href} onClick={() => setIsOpen(false)} href={l.href}>
            {l.label}
          </NavLink>
        ))}
        <MobileGithub href={Bio.github} target="_blank">
          Github Profile
        </MobileGithub>
      </MobileMenu>
    </Nav>
  );
};

export default Navbar;
