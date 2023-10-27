import styled from "styled-components";

import useGetUserDetails from "../Data/useGetUserDetails";
import ProjectCard from "./ProjectCard";
const Title = styled.h1`
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
const Container = styled.div`
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

const CardContainer = styled.div`
  display: flex;  
  /* justify-content: center; */
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
      <Title>Projects</Title>
      <CardContainer>
        {projects.map((project) => {
          return <ProjectCard key={project.id} project={project} />;
        })}
      </CardContainer>
    </Container>
  );
}

export default Projects;
