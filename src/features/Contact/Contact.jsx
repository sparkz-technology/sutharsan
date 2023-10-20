import styled from "styled-components";
import ContactForm from "./ContactForm";
// AiOutlineMessage
import { AiOutlineMessage } from "react-icons/ai";
import { useState } from "react";
const Container = styled.div`
  display: flex;
  justify-content: start;
  align-items: start;
  flex-direction: column;
  padding: 2rem 10rem;
  gap: 2rem;
  @media screen and (max-width: 768px) {
    padding: 2rem;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #333;
  font-family: "Roboto", sans-serif;
  letter-spacing: 0.01rem;
  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

const Text = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  text-align: start;
  font-family:
    Roboto Mono,
    monospace;
  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
  }
`;
const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: none;
  background-color:var(--button-background-color);
  color:var(--button-text-color);
  padding: 6px 5px;
  border: none;
  border-radius: 25px;
  font-size: 10px;
  cursor: pointer;
  transition: background-color 0.3s;
  position: fixed;
  bottom: 5%;
  right: 5%;
  &:hover {
    background-color: var(--button-background-hover-color);
  }
  @media screen and (max-width: 768px) {
    bottom: 7%;
    right: 10%;
  }
`;
const TextButton = styled.strong`
  position: relative;
  display: inline-block;
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: #0d0c22;
    transition: width 0.3s ease-in-out;
  }
  &:hover::before {
    width: 100%;
  }

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

function Contact() {
  const [show, setShow] = useState(false);

  return (
    <Container id="contact">
      {/* <Title>Contact</Title>
      <Info>
        <Text>
          I&apos;m a student actively seeking web development job opportunities. If you have any questions or want to say hello, feel free to reach out. Let&apos;s connect and explore the world of web development together!{" "}
          <TextButton onClick={() => setShow(!show)}>let&apos;s connect.</TextButton>
        </Text>
      </Info> */}
      <Button onClick={() => setShow(!show)}>
        <AiOutlineMessage size={30} />
      </Button>
      {show && <ContactForm handleShow={setShow} />}
    </Container>
  );
}

export default Contact;
