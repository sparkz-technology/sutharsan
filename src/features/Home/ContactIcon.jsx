import styled from "styled-components";
import {
  AiFillLinkedin as Linkedin,
  AiFillGithub as GitHub,
  AiFillInstagram as Instagram,
} from "react-icons/ai";
import { IoLogoWhatsapp as WhatsApp } from "react-icons/io";
import { BiLogoGmail as Gmail } from "react-icons/bi";

import Button from "../../ui/Button";
import useGetUserDetails from "../Data/useGetUserDetails";

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: start;
  }
`;
const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  svg {
    cursor: pointer;
    color: var(--icon-color);
  }
  & svg:hover {
    transform: scale(1.2);
    transition: all 0.2s ease-in-out;
  }
  @media screen and (max-width: 768px) {
    gap: 0.5rem;
  }
`;

function ContactIcon() {
  const { userDetails } = useGetUserDetails()
  const { mail, githubLink, linkedinLink, instagramLink, WhatsAppNumber, resumeLink } = userDetails
  return (
    <Container>
      <div>
        <Button onClick={() => window.open(resumeLink, "_blank")}>Resume &#8594;</Button>
      </div>
      <Icons>
        <a href={linkedinLink} target="_blank" rel="noreferrer">
          <Linkedin size={30} />
        </a>
        <a href={githubLink} target="_blank" rel="noreferrer">
          <GitHub size={30} />
        </a>
        <a href={instagramLink} target="_blank" rel="noreferrer">
          <Instagram size={30} />
        </a>
        <a href={`https://wa.me/${WhatsAppNumber}`} target="_blank" rel="noreferrer">
          <WhatsApp size={30} />
        </a>
        <a href={`mailto:${mail}`} target="_blank" rel="noreferrer">
          <Gmail size={30} />
        </a>
      </Icons>
    </Container>
  );
}

export default ContactIcon;
