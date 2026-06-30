import React from "react";
import styled from "styled-components";
import { Tilt } from "react-tilt";
import { projects } from "../../data/constants";
import ProjectCard from "../cards/ProjectCard";
import Reveal from "../../utils/Reveal";
import SectionHeader from "../common/SectionHeader";

const tiltOptions = {
  max: 10,
  scale: 1.02,
  speed: 450,
  glare: true,
  "max-glare": 0.18,
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 90px 16px;
  background: ${({ theme }) => theme.panel};
  border-top: 1px solid ${({ theme }) => theme.border};
  border-bottom: 1px solid ${({ theme }) => theme.border};
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 26px;
  flex-wrap: wrap;
`;

const Projects = () => {
  return (
    <Container id="Projects">
      <Wrapper>
        <SectionHeader
          eyebrow="Portfolio"
          title="Featured"
          highlight="Projects"
          desc="A selection of projects I've built, from e-commerce platforms to full SaaS systems."
        />

        <CardContainer>
          {projects.map((project, index) => (
            <Reveal
              key={`project-${index}`}
              direction="up"
              delay={(index % 3) * 0.1}
              width="auto"
            >
              <Tilt options={tiltOptions}>
                <ProjectCard project={project} />
              </Tilt>
            </Reveal>
          ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
