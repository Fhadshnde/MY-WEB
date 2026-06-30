import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Head = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 56px;

  @media (max-width: 768px) {
    margin-bottom: 40px;
  }
`;

const Eyebrow = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 12.5px;
  font-weight: 600;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.primary};
  background: ${({ theme }) => theme.primaryLight};
  border: 1px solid ${({ theme }) => theme.border};
  padding: 7px 16px;
  border-radius: 30px;
  backdrop-filter: blur(8px);

  &::before {
    content: "";
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: ${({ theme }) => theme.primary};
    box-shadow: 0 0 12px ${({ theme }) => theme.primary};
  }
`;

const Title = styled(motion.h2)`
  font-size: clamp(30px, 5vw, 46px);
  font-weight: 700;
  letter-spacing: -0.6px;
  line-height: 1.12;
  margin: 20px 0 0;
  text-align: center;
  color: ${({ theme }) => theme.text_primary};

  span {
    background: ${({ theme }) => theme.gradientText};
    background-size: 200% auto;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const Desc = styled(motion.p)`
  font-size: 17px;
  line-height: 1.7;
  text-align: center;
  margin: 16px auto 0;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};

  @media (max-width: 768px) {
    font-size: 15.5px;
  }
`;

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.6 },
  transition: { duration: 0.6, delay, ease: [0.25, 0.4, 0.25, 1] },
});

const SectionHeader = ({ eyebrow, title, highlight, desc }) => (
  <Head>
    <Eyebrow {...reveal(0)}>{eyebrow}</Eyebrow>
    <Title {...reveal(0.08)}>
      {title} {highlight && <span>{highlight}</span>}
    </Title>
    {desc && <Desc {...reveal(0.16)}>{desc}</Desc>}
  </Head>
);

export default SectionHeader;
