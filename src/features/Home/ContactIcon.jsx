import styled from "styled-components";
import {
  AiFillLinkedin as Instagram,
  AiFillGithub as WhatsApp,
  AiFillInstagram as Gmail,
} from "react-icons/ai";
import { IoLogoWhatsapp as WhatsappIcon } from "react-icons/io";
import { BiLogoGmail as GmailIcon } from "react-icons/bi";

import Button from "../../ui/Button";

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
const ContactLink = [
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/sutharsang",
  },
  {
    name: "Github",
    link: "https://github.com/Sparkz-technology",
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/sutharsan_sparkz/",
  },
  {
    name: "Whatsapp",
    link: "https://wa.me/919894994994",
  },
  {
    name: "Gmail",
    link: "mailto:sutharsansparkz@gmail.com",
  },
];
const ContactName = [
  {
    name: "Linkedin",
    icon: <Instagram size={30} />,
  },
  {
    name: "Github",
    icon: <WhatsApp size={30} />,
  },
  {
    name: "Instagram",
    icon: <Gmail size={30} />,
  },
  {
    name: "Whatsapp",
    icon: <WhatsappIcon size={30} />,
  },
  {
    name: "Gmail",
    icon: <GmailIcon size={30} />,
  },
];

function ContactIcon() {
  return (
    <Container>
      <div>
        <Button>Resume &#8594;</Button>
      </div>
      <Icons>
        {ContactName.map((item, index) => (
          <a
            href={ContactLink[index].link}
            target="_blank"
            rel="noreferrer"
            key={index}
          >
            {item.icon}
          </a>
        ))}
      </Icons>
    </Container>
  );
}

export default ContactIcon;
