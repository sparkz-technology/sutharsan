import styled from "styled-components";
import { AiFillGithub } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";
import useGetUserDetails from "../Data/useGetUserDetails";
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

const Card = styled.div`
  display: flex;
  align-items: center;
  border-radius: 0.5rem;
  background: rgba( 255, 255, 255, 0.05 );
  padding: 1rem;
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 20px );
  -webkit-backdrop-filter: blur( 20px );
  border-radius: 10px;
  width: 100%;
  height: 100%;
  border: 1px solid rgba( 255, 255, 255, 0.18 );
  color: #333;
  font-family: "Roboto", sans-serif;
  box-sizing: border-box;
  box-shadow: var(--box-shadow);
  transition: all 0.2s ease-in-out;
  gap: 1rem;
  
@media  (max-width: 900px) {
    flex-direction: column;
    gap: 1rem;
    height: 100%;
    width: 100%;
}
`;

const Image = styled.img`
    height:40%;
    width: 40%;
    object-fit: cover;
    border-radius: 0.5rem;
    box-sizing: border-box;
    transition: all 0.2s ease-in-out;
    @media (max-width: 900px) {
    height: 30%;
    width: 100%;
    }

`;
const Info = styled.div`
  font-size: 1.2rem;
  line-height: 1.5;
  display: flex;
  flex-direction: column;
  width: 100%;

  p {
    font-size: 1rem;
    font-weight: bold;
    font-family: "Roboto Mono", monospace;
    margin-bottom: 1rem;
    inline-size: 100%;
    color: var(--card-des-color);
    // add more styles here
    text-align: justify;
  }
  h2{
  color:var(--sub-text-color);
  
  }
  
  @media screen and (max-width: 768px) {
    p {
      font-size: 0.8rem;
    }
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

const Links = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;  
  gap: 1rem;
  svg {
    text-align: end;
    color: var(--icon-color);
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &:hover {
      color: var(--icon-hover-color);
      transform: scale(1.1);
    }
  }
`;


function Projects() {
  const { userDetails } = useGetUserDetails()
  const { projects } = userDetails
  return (
    <Container id="projects">
      <Title>Projects</Title>
      <CardContainer>
        {projects.map((project, index) => {
          return (
            <Card key={index}>

              <Image src={project.imageUrl} alt={project.title} security="true" loading="lazy" />
              <Info>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <Links>
                  <a href={project.github} target="_blank" rel="noreferrer">
                    <AiFillGithub size={30} />
                  </a>
                  <a href={project.website} target="_blank" rel="noreferrer">
                    <BiLinkExternal size={30} />
                  </a>
                </Links>
              </Info>
            </Card>
          );
        })}
      </CardContainer>
    </Container>
  );
}

export default Projects;
