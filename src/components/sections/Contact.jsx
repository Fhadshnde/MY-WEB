import React, { useRef } from "react";
import styled from "styled-components";
import Reveal from "../../utils/Reveal";
import SectionHeader from "../common/SectionHeader";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 90px 16px;
  background: ${({ theme }) => theme.panel};
  border-top: 1px solid ${({ theme }) => theme.border};
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContactForm = styled.form`
  width: 100%;
  max-width: 560px;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.card};
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid ${({ theme }) => theme.border};
  padding: 34px;
  border-radius: 24px;
  box-shadow: ${({ theme }) => theme.cardShadow};
  gap: 14px;
`;

const ContactTitle = styled.div`
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 4px;
  color: ${({ theme }) => theme.text_primary};
`;

const ContactInput = styled.input`
  background: ${({ theme }) => theme.primaryLight};
  border: 1px solid ${({ theme }) => theme.border};
  outline: none;
  font-size: 16px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 14px;
  padding: 14px 16px;
  transition: border-color 0.2s ease;
  &::placeholder {
    color: ${({ theme }) => theme.soft};
  }
  &:focus {
    border-color: ${({ theme }) => theme.primary};
  }
`;

const ContactInputMessage = styled.textarea`
  background: ${({ theme }) => theme.primaryLight};
  border: 1px solid ${({ theme }) => theme.border};
  outline: none;
  font-size: 16px;
  font-family: inherit;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 14px;
  padding: 14px 16px;
  resize: vertical;
  transition: border-color 0.2s ease;
  &::placeholder {
    color: ${({ theme }) => theme.soft};
  }
  &:focus {
    border-color: ${({ theme }) => theme.primary};
  }
`;

const ContactButton = styled.input`
  width: 100%;
  text-align: center;
  background: ${({ theme }) => theme.gradient};
  padding: 15px 16px;
  margin-top: 4px;
  border-radius: 14px;
  border: none;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  box-shadow: ${({ theme }) => theme.shadowGlow};
  transition: transform 0.3s ease, filter 0.3s ease;
  &:hover {
    transform: translateY(-2px);
    filter: brightness(1.08);
  }
  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
    transform: none;
  }
`;

const PhoneLine = styled.a`
  margin-top: 22px;
  font-size: 15px;
  font-weight: 500;
  text-align: center;
  text-decoration: none;
  color: ${({ theme }) => theme.text_secondary};
  transition: color 0.2s ease;
  strong {
    color: ${({ theme }) => theme.primary};
    font-weight: 700;
  }
  &:hover {
    color: ${({ theme }) => theme.text_primary};
  }
`;

// Contact phone in WhatsApp international format (Iraq +964, drop leading 0).
const WHATSAPP_NUMBER = "9647721603705";
const DISPLAY_NUMBER = "0772 160 3705";

const Contact = () => {
  const form = useRef();

  // Compose the message and open WhatsApp chat with the owner.
  const handelSubmit = (e) => {
    e.preventDefault();
    const el = form.current?.elements;
    const text = encodeURIComponent(
      `New message from your portfolio 👋\n\n` +
        `Name: ${el?.from_name?.value || ""}\n` +
        `Subject: ${el?.subject?.value || ""}\n\n` +
        `${el?.message?.value || ""}`
    );
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <Container id="Contact">
      <Wrapper>
        <SectionHeader
          eyebrow="Contact"
          title="Let's Work"
          highlight="Together"
          desc="Feel free to reach out for any questions or opportunities!"
        />
        <Reveal direction="up" width="auto">
          <ContactForm ref={form} onSubmit={handelSubmit}>
            <ContactTitle>Send me a message 🚀</ContactTitle>
            <ContactInput placeholder="Your Name" name="from_name" required />
            <ContactInput placeholder="Subject" name="subject" required />
            <ContactInputMessage
              placeholder="Message"
              name="message"
              rows={4}
              required
            />
            <ContactButton type="submit" value="Send via WhatsApp" />
          </ContactForm>
        </Reveal>
        <PhoneLine
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Or message me directly on WhatsApp: <strong>{DISPLAY_NUMBER}</strong>
        </PhoneLine>
      </Wrapper>
    </Container>
  );
};

export default Contact;
