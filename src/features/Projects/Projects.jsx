import styled from "styled-components";
import { motion } from "framer-motion"

import useGetUserDetails from "../Data/useGetUserDetails";
import ProjectCard from "./ProjectCard";
import { slideAnimation } from "../../styles/Motion";

const Title = styled(motion.h1)`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--title-color);
  font-family: "Roboto", sans-serif;
  letter-spacing: 0.01rem;
  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;
const Container = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  padding: 2rem 10rem;
  gap: 2rem;
  height: 100%;
  @media screen and (max-width: 768px) {
    padding: 2rem;
  }
`;

const CardContainer = styled(motion.div)`
  display: flex;  
  align-items: center;
  width: 100%;
  gap: 2rem;
  flex-wrap: wrap;
  @media screen and (max-width: 768px) {
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
  }
`;
function Projects() {
  const { userDetails } = useGetUserDetails()
  const { projects } = userDetails
  return (
    <Container id="projects">
      <Title{...slideAnimation("up")}>Projects</Title>
      <CardContainer>
        {projects.map((project, index) => {
          return <ProjectCard key={index} project={project} />;
        })}
      </CardContainer>
    </Container>
  );
}

export default Projects;
