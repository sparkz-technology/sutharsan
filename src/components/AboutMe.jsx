/* eslint-disable react/no-unescaped-entities */
import { config } from "../utils/config";
import styled from "styled-components";
const StyledAboutMe = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const StyledP = styled.p`
  font-size: 16px;
  line-height: 26px;
  font-weight: 400;
  vertical-align: baseline;
  text-align: start;
  font-family: "Roboto Mono", monospace;
  color: var(--Light-Slate);
`;
const StyledStrong = styled.strong`
  font-family: "Roboto Mono", monospace;
  color: var(--color-Green);
`;
const StyledA = styled.a`
  text-decoration: none;
  color: var(--color-Green);
`;
function AboutMe() {
  const getSocialMediaUrl = (name) => {
    const socialMedia = config.socialMedia.find((item) => item.name === name);
    return socialMedia ? socialMedia.url : "";
  };
  return (
    <StyledAboutMe>
      <StyledP>
        I'm Sutharsan, a passionate MERN developer from Chennai currently
        pursuing my Bachelor's degree in Computer Science. Proficient in HTML,
        CSS, and JavaScript, I have hands-on experience in creating dynamic web
        applications using React and Node.js.
      </StyledP>
      <StyledP>
        I'm skilled in both front-end and back-end development, utilizing
        technologies like Express.js and MongoDB.
      </StyledP>
      <StyledP>
        Committed to delivering high-quality code, I enjoy taking on new
        challenges and collaborating effectively with cross-functional teams.
        Let's connect and collaborate on exciting web development opportunities!
        Email me at <StyledStrong>{config.email}</StyledStrong> or find me on{" "}
        <StyledA
          href={getSocialMediaUrl("LinkedIn")}
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </StyledA>{" "}
        Check out my projects on{" "}
        <StyledA
          href={getSocialMediaUrl("GitHub")}
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </StyledA>
        .
      </StyledP>
    </StyledAboutMe>
  );
}

export default AboutMe;
