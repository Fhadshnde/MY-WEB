import React from "react";
import styled from "styled-components";
import { Bio } from "../../data/constants";
import {
  FacebookRounded,
  Instagram,
  LinkedIn,
  GitHub,
} from "@mui/icons-material";

const FooterContainer = styled.div`
  width: 100%;
  padding: 3rem 1rem 2.5rem;
  display: flex;
  justify-content: center;
  border-top: 1px solid ${({ theme }) => theme.border};
  background: ${({ theme }) => theme.panel};
`;

const FooterWrapper = styled.div`
  width: 100%;
  max-width: 1100px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  align-items: center;
`;

const Logo = styled.div`
  font-family: "Space Grotesk", sans-serif;
  font-weight: 700;
  font-size: 22px;
  color: ${({ theme }) => theme.text_primary};
  span {
    background: ${({ theme }) => theme.gradient};
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const Nav = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 1.6rem;
  justify-content: center;
  list-style: none;
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text_secondary};
  text-decoration: none;
  font-size: 15px;
  font-weight: 500;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const SocialMediaIcons = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const SocialMediaIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border-radius: 14px;
  background: ${({ theme }) => theme.card};
  backdrop-filter: blur(8px);
  border: 1px solid ${({ theme }) => theme.border};
  color: ${({ theme }) => theme.text_secondary};
  transition: all 0.25s ease-in-out;
  &:hover {
    color: #fff;
    background: ${({ theme }) => theme.gradient};
    border-color: transparent;
    transform: translateY(-3px);
  }
`;

const Copyright = styled.p`
  margin: 6px 0 0;
  font-size: 14px;
  color: ${({ theme }) => theme.soft};
  text-align: center;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <Logo>
          Fahad Wisam<span>.</span>
        </Logo>
        <Nav>
          <NavLink href="#About">About</NavLink>
          <NavLink href="#Services">Services</NavLink>
          <NavLink href="#Skills">Skills</NavLink>
          <NavLink href="#Experience">Experience</NavLink>
          <NavLink href="#Projects">Projects</NavLink>
          <NavLink href="#Contact">Contact</NavLink>
        </Nav>
        <SocialMediaIcons>
          <SocialMediaIcon href={Bio.github} target="_blank">
            <GitHub />
          </SocialMediaIcon>
          <SocialMediaIcon href={Bio.linkedin} target="_blank">
            <LinkedIn />
          </SocialMediaIcon>
          <SocialMediaIcon href={Bio.facebook} target="_blank">
            <FacebookRounded />
          </SocialMediaIcon>
          <SocialMediaIcon href={Bio.insta} target="_blank">
            <Instagram />
          </SocialMediaIcon>
        </SocialMediaIcons>
        <Copyright>© 2026 Fahad Wisam. All rights reserved.</Copyright>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
