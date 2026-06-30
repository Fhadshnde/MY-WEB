import React from "react";
import styled, { keyframes, css } from "styled-components";
import { experiences } from "../../data/constants";
import Reveal from "../../utils/Reveal";
import SectionHeader from "../common/SectionHeader";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 90px 16px;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Timeline = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 36px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    width: 2px;
    transform: translateX(-50%);
    background: linear-gradient(
      180deg,
      ${({ theme }) => theme.primary} 0%,
      ${({ theme }) => theme.accent} 50%,
      transparent 100%
    );
  }

  @media (max-width: 768px) {
    &::before {
      left: 20px;
    }
  }
`;

const Row = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: ${({ side }) => (side === "left" ? "flex-start" : "flex-end")};

  @media (max-width: 768px) {
    justify-content: flex-start;
    padding-left: 50px;
  }
`;

const pulse = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(139, 92, 246, 0.5); }
  70% { box-shadow: 0 0 0 12px rgba(139, 92, 246, 0); }
  100% { box-shadow: 0 0 0 0 rgba(139, 92, 246, 0); }
`;

const Dot = styled.div`
  position: absolute;
  top: 28px;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: ${({ theme }) => theme.gradient};
  border: 3px solid ${({ theme }) => theme.bg};
  box-shadow: 0 0 0 1px ${({ theme }) => theme.border};
  z-index: 2;
  ${({ current }) =>
    current &&
    css`
      animation: ${pulse} 2s infinite;
    `}

  @media (max-width: 768px) {
    left: 20px;
  }
`;

const Card = styled.div`
  width: 45%;
  background: ${({ theme }) => theme.card};
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 20px;
  padding: 26px;
  transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    border-color: ${({ theme }) => theme.primary};
    box-shadow: ${({ theme }) => theme.cardShadow};
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Head = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

const LogoWrap = styled.div`
  width: 52px;
  height: 52px;
  flex-shrink: 0;
  border-radius: 14px;
  background: ${({ theme }) => theme.primaryLight};
  border: 1px solid ${({ theme }) => theme.border};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

const Logo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const HeadText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const Role = styled.div`
  font-size: 19px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
`;

const Company = styled.div`
  font-size: 15px;
  font-weight: 500;
  color: ${({ theme }) => theme.primary};
`;

const MetaRow = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  margin: 14px 0;
`;

const DatePill = styled.span`
  font-size: 13px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary};
  background: ${({ theme }) => theme.primaryLight};
  border: 1px solid ${({ theme }) => theme.border};
  padding: 4px 12px;
  border-radius: 20px;
`;

const CurrentBadge = styled.span`
  font-size: 12px;
  font-weight: 600;
  color: #fff;
  background: ${({ theme }) => theme.gradient};
  padding: 4px 12px;
  border-radius: 20px;
  display: inline-flex;
  align-items: center;
  gap: 6px;

  &::before {
    content: "";
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #4ade80;
  }
`;

const Description = styled.div`
  font-size: 14.5px;
  font-weight: 400;
  line-height: 1.65;
  color: ${({ theme }) => theme.text_secondary};
`;

const Skills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 16px;
`;

const Skill = styled.span`
  font-size: 12.5px;
  font-weight: 500;
  color: ${({ theme }) => theme.primary};
  background: ${({ theme }) => theme.primaryLight};
  border: 1px solid ${({ theme }) => theme.border};
  padding: 5px 12px;
  border-radius: 8px;
`;

const Experience = () => {
  return (
    <Container id="Experience">
      <Wrapper>
        <SectionHeader
          eyebrow="Experience"
          title="Where I've"
          highlight="Worked"
          desc="My professional journey as a developer."
        />

        <Timeline>
          {experiences.map((exp, index) => {
            const isCurrent = exp.date.includes("Present");
            const side = index % 2 === 0 ? "left" : "right";
            return (
              <Reveal
                key={`exp-${exp.id}`}
                direction={side === "left" ? "right" : "left"}
              >
                <Row side={side}>
                  <Dot current={isCurrent} />
                  <Card>
                    <Head>
                      <LogoWrap>
                        <Logo src={exp.img} alt={exp.company} />
                      </LogoWrap>
                      <HeadText>
                        <Role>{exp.role}</Role>
                        <Company>{exp.company}</Company>
                      </HeadText>
                    </Head>

                    <MetaRow>
                      <DatePill>{exp.date}</DatePill>
                      {isCurrent && <CurrentBadge>Currently Working</CurrentBadge>}
                    </MetaRow>

                    <Description>{exp.desc}</Description>

                    {exp?.skills && (
                      <Skills>
                        {exp.skills.map((skill, i) => (
                          <Skill key={`exp-${exp.id}-skill-${i}`}>{skill}</Skill>
                        ))}
                      </Skills>
                    )}
                  </Card>
                </Row>
              </Reveal>
            );
          })}
        </Timeline>
      </Wrapper>
    </Container>
  );
};

export default Experience;
