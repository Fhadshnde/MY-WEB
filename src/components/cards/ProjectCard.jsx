import React from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 330px;
  background: ${({ theme }) => theme.card};
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border: 1px solid ${({ theme }) => theme.border};
  cursor: pointer;
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
  &:hover {
    transform: translateY(-8px);
    box-shadow: ${({ theme }) => theme.cardShadow};
    border-color: ${({ theme }) => theme.primary};
  }
`;

const ImageWrap = styled.div`
  position: relative;
  width: 100%;
  height: 180px;
  overflow: hidden;
  border-bottom: 1px solid ${({ theme }) => theme.border};

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      180deg,
      transparent 55%,
      ${({ theme }) => theme.card} 100%
    );
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-color: ${({ theme }) => theme.bgLight};
  transition: transform 0.5s ease;
  ${Card}:hover & {
    transform: scale(1.06);
  }
`;

const Body = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Tags = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
`;

const Tag = styled.span`
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.primary};
  background: ${({ theme }) => theme.primaryLight};
  border: 1px solid ${({ theme }) => theme.border};
  padding: 4px 10px;
  border-radius: 8px;
`;

const Date = styled.div`
  font-size: 13px;
  font-weight: 500;
  color: ${({ theme }) => theme.soft};
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const Description = styled.div`
  font-size: 14px;
  line-height: 1.6;
  color: ${({ theme }) => theme.text_secondary};
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const Footer = styled.div`
  margin-top: 6px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;

const Button = styled.a`
  flex: 1;
  text-align: center;
  text-decoration: none;
  font-weight: 600;
  font-size: 14px;
  color: #fff;
  background: ${({ theme }) => theme.gradient};
  padding: 11px 12px;
  border-radius: 12px;
  transition: filter 0.2s ease, transform 0.2s ease;
  &:hover {
    filter: brightness(1.08);
    transform: translateY(-1px);
  }
`;

const GithubLink = styled.a`
  text-align: center;
  text-decoration: none;
  font-weight: 600;
  font-size: 14px;
  color: ${({ theme }) => theme.text_primary};
  background: ${({ theme }) => theme.primaryLight};
  border: 1px solid ${({ theme }) => theme.border};
  padding: 11px 14px;
  border-radius: 12px;
  &:hover {
    border-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.primary};
  }
`;

const PrivateBadge = styled.div`
  flex: 1;
  text-align: center;
  font-weight: 600;
  font-size: 14px;
  color: ${({ theme }) => theme.text_secondary};
  background: ${({ theme }) => theme.primaryLight};
  border: 1px solid ${({ theme }) => theme.border};
  padding: 11px 12px;
  border-radius: 12px;
`;

const ProjectCard = ({ project }) => {
  return (
    <Card>
      <ImageWrap>
        <Image src={project.image} alt={project.title} />
      </ImageWrap>
      <Body>
        {project?.tags && (
          <Tags>
            {project.tags.slice(0, 3).map((tag, i) => (
              <Tag key={`tag-${i}`}>{tag}</Tag>
            ))}
          </Tags>
        )}
        <Date>{project.date}</Date>
        <Title>{project.title}</Title>
        <Description>{project.description}</Description>
        <Footer>
          {project.webapp ? (
            <Button href={project.webapp} target="_blank">
              Live Demo
            </Button>
          ) : (
            <PrivateBadge>Private Project</PrivateBadge>
          )}
          {project.github && (
            <GithubLink href={project.github} target="_blank">
              Code
            </GithubLink>
          )}
        </Footer>
      </Body>
    </Card>
  );
};

export default ProjectCard;
