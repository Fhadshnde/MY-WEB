import React from "react";
import styled from "styled-components";
import { services } from "../../data/constants";
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
  max-width: 1100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;

  @media (max-width: 980px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  position: relative;
  background: ${({ theme }) => theme.card};
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 22px;
  padding: 32px 28px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: 100%;
  box-sizing: border-box;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;

  &::before {
    content: "";
    position: absolute;
    top: -40%;
    right: -30%;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: ${({ theme }) => theme.glow1};
    filter: blur(60px);
    opacity: 0;
    transition: opacity 0.35s ease;
  }

  &:hover {
    transform: translateY(-8px);
    border-color: ${({ theme }) => theme.primary};
    box-shadow: ${({ theme }) => theme.cardShadow};
  }
  &:hover::before {
    opacity: 1;
  }
`;

const IconTile = styled.div`
  position: relative;
  width: 56px;
  height: 56px;
  border-radius: 16px;
  background: ${({ theme }) => theme.primaryLight};
  border: 1px solid ${({ theme }) => theme.border};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Icon = styled.img`
  width: 30px;
  height: 30px;
  object-fit: contain;
`;

const CardTitle = styled.h3`
  position: relative;
  font-size: 19px;
  font-weight: 700;
  margin: 0;
  color: ${({ theme }) => theme.text_primary};
`;

const CardDesc = styled.p`
  position: relative;
  font-size: 14.5px;
  line-height: 1.65;
  margin: 0;
  color: ${({ theme }) => theme.text_secondary};
`;

const Services = () => {
  return (
    <Container id="Services">
      <Wrapper>
        <SectionHeader
          eyebrow="What I Do"
          title="Services I"
          highlight="Offer"
          desc="I turn ideas into polished, production-ready products — combining clean design, smooth interactions and reliable engineering."
        />
        <Grid>
          {services.map((item, index) => (
            <Reveal
              key={`service-${index}`}
              direction="up"
              delay={index * 0.08}
              style={{ height: "100%" }}
            >
              <Card>
                <IconTile>
                  <Icon src={item.icon} alt={item.title} />
                </IconTile>
                <CardTitle>{item.title}</CardTitle>
                <CardDesc>{item.description}</CardDesc>
              </Card>
            </Reveal>
          ))}
        </Grid>
      </Wrapper>
    </Container>
  );
};

export default Services;
