import React from "react";
import styled from "styled-components";
import { stats } from "../../data/constants";
import CountUp from "../../utils/CountUp";
import Reveal from "../../utils/Reveal";

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 16px 40px;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1000px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  background: ${({ theme }) => theme.glass};
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 26px;
  padding: 40px 26px;
  box-shadow: ${({ theme }) => theme.cardShadow};

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 28px;
  }
`;

const StatCard = styled.div`
  text-align: center;
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-6px);
  }
`;

const Number = styled.div`
  font-family: "Space Grotesk", sans-serif;
  font-size: 44px;
  font-weight: 700;
  background: ${({ theme }) => theme.gradientText};
  background-size: 200% auto;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const Label = styled.div`
  margin-top: 6px;
  font-size: 14.5px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary};
`;

const Stats = () => {
  return (
    <Container>
      <Wrapper>
        {stats.map((item, index) => (
          <Reveal key={`stat-${index}`} direction="up" delay={index * 0.1}>
            <StatCard>
              <Number>
                <CountUp value={item.number} />
              </Number>
              <Label>{item.label}</Label>
            </StatCard>
          </Reveal>
        ))}
      </Wrapper>
    </Container>
  );
};

export default Stats;
