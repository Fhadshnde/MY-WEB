import React from "react";
import styled, { keyframes } from "styled-components";
import { skills } from "../../data/constants";
import Reveal from "../../utils/Reveal";
import SectionHeader from "../common/SectionHeader";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 90px 16px;
  background: ${({ theme }) => theme.panel};
  border-top: 1px solid ${({ theme }) => theme.border};
  border-bottom: 1px solid ${({ theme }) => theme.border};
  overflow: hidden;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

/* marquee */
const scroll = keyframes`
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
`;

const MarqueeMask = styled.div`
  width: 100%;
  max-width: 1100px;
  overflow: hidden;
  margin-bottom: 56px;
  mask-image: linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent);
  -webkit-mask-image: linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent);
`;

const MarqueeTrack = styled.div`
  display: flex;
  width: max-content;
  gap: 48px;
  animation: ${scroll} 28s linear infinite;
  &:hover {
    animation-play-state: paused;
  }
`;

const MarqueeItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  white-space: nowrap;
  img {
    width: 30px;
    height: 30px;
    object-fit: contain;
  }
`;

const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: center;
`;

const Skill = styled.div`
  width: 100%;
  max-width: 340px;
  background: ${({ theme }) => theme.card};
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 22px;
  padding: 30px 26px;
  transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
  &:hover {
    transform: translateY(-6px);
    border-color: ${({ theme }) => theme.primary};
    box-shadow: ${({ theme }) => theme.cardShadow};
  }
`;

const SkillTitle = styled.h3`
  font-size: 21px;
  font-weight: 700;
  margin: 0 0 20px;
  text-align: center;
  color: ${({ theme }) => theme.text_primary};
`;

const SkillList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
`;

const SkillItem = styled.div`
  font-size: 14.5px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary};
  border: 1px solid ${({ theme }) => theme.border};
  background: ${({ theme }) => theme.primaryLight};
  border-radius: 12px;
  padding: 9px 13px;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.2s ease-in-out;
  cursor: default;
  &:hover {
    border-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.text_primary};
    transform: translateY(-3px);
  }
`;

const SkillImage = styled.img`
  width: 22px;
  height: 22px;
  object-fit: contain;
`;

const Skills = () => {
  const allSkills = skills.flatMap((g) => g.skills);
  const marquee = [...allSkills, ...allSkills];

  return (
    <Container id="Skills">
      <Wrapper>
        <SectionHeader
          eyebrow="Skills"
          title="Technologies I"
          highlight="Use"
          desc="Tools and technologies I have been working with."
        />
      </Wrapper>

      <MarqueeMask>
        <MarqueeTrack>
          {marquee.map((item, i) => (
            <MarqueeItem key={`m-${i}`}>
              <img src={item.image} alt={item.name} />
              {item.name}
            </MarqueeItem>
          ))}
        </MarqueeTrack>
      </MarqueeMask>

      <Wrapper>
        <SkillsContainer>
          {skills.map((skill, index) => (
            <Reveal
              key={`skill-${index}`}
              direction="up"
              delay={index * 0.1}
              width="auto"
            >
              <Skill>
                <SkillTitle>{skill.title}</SkillTitle>
                <SkillList>
                  {skill.skills.map((item, index_x) => (
                    <SkillItem key={`skill-x-${index_x}`}>
                      <SkillImage src={item.image} alt={item.name} />
                      {item.name}
                    </SkillItem>
                  ))}
                </SkillList>
              </Skill>
            </Reveal>
          ))}
        </SkillsContainer>
      </Wrapper>
    </Container>
  );
};

export default Skills;
