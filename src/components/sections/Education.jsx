import React from "react";
import styled from "styled-components";
import { education } from "../../data/constants";
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
  max-width: 760px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const List = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Card = styled.div`
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
`;

const Head = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const LogoWrap = styled.div`
  width: 56px;
  height: 56px;
  flex-shrink: 0;
  border-radius: 14px;
  background: ${({ theme }) => theme.primaryLight};
  border: 1px solid ${({ theme }) => theme.border};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 11px;
`;

const Logo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const HeadText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

const School = styled.div`
  font-size: 19px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
`;

const Degree = styled.div`
  font-size: 15px;
  font-weight: 500;
  color: ${({ theme }) => theme.primary};
`;

const Date = styled.div`
  font-size: 13px;
  font-weight: 500;
  color: ${({ theme }) => theme.soft};
`;

const Grade = styled.div`
  margin-top: 16px;
  display: inline-block;
  font-size: 13px;
  font-weight: 600;
  color: ${({ theme }) => theme.primary};
  background: ${({ theme }) => theme.primaryLight};
  border: 1px solid ${({ theme }) => theme.border};
  padding: 5px 12px;
  border-radius: 20px;
`;

const Description = styled.div`
  margin-top: 14px;
  font-size: 14.5px;
  line-height: 1.65;
  color: ${({ theme }) => theme.text_secondary};
`;

const Education = () => {
  return (
    <Container id="Education">
      <Wrapper>
        <SectionHeader
          eyebrow="Education"
          title="My Learning"
          highlight="Path"
          desc="Self-taught and driven by curiosity — here's how I went from my first line of HTML to shipping full-stack apps."
        />

        <List>
          {education.map((edu, index) => (
            <Reveal key={`education-${edu.id}`} direction="up" delay={index * 0.1}>
              <Card>
                <Head>
                  <LogoWrap>
                    <Logo src={edu.img} alt={edu.school} />
                  </LogoWrap>
                  <HeadText>
                    <School>{edu.school}</School>
                    <Degree>{edu.degree}</Degree>
                    <Date>{edu.date}</Date>
                  </HeadText>
                </Head>
                {edu.grade && <Grade>{edu.grade}</Grade>}
                <Description>{edu.desc}</Description>
              </Card>
            </Reveal>
          ))}
        </List>
      </Wrapper>
    </Container>
  );
};

export default Education;
