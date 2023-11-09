/* eslint-disable react/prop-types */
import styled from "styled-components";
import { AiFillGithub } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";
const Card = styled.div`
  display: flex;
  align-items: center;
  border-radius: 0.5rem;
  background: rgba( 255, 255, 255, 0.05 );
  padding: 1rem;
  backdrop-filter: blur( 20px );
  -webkit-backdrop-filter: blur( 20px );
  border-radius: 10px;
  width: 100%;
  height: 100%;
  border: 1px solid rgba( 255, 255, 255, 0.18 );
  color: #333;
  font-family: "Roboto", sans-serif;
  box-sizing: border-box;
  transition: all 0.2s ease-in-out;
  border: 1px solid var(--border-color);
  gap: 1rem;
  
@media  (max-width: 900px) {
    flex-direction: column;
    gap: 1rem;
    height: 100%;
    width: 100%;
}
`;

const Image = styled.img`
    height:50%;
    width: 50%;
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
  }
  h2{
  color:var(--sub-text-color);
  font-size: 1.5rem;
  
  }
  
  @media screen and (max-width: 768px) {
    p {
      font-size: 0.8rem;
    }
    h2{
      font-size: 1.2rem;
    }
  }
`;

const Tag = styled.span`
    background-color: var(--tag-color);
    color: var(--tag-text-color);
    padding: 0 0.5rem;
    border-radius: 0.5rem;
    font-size: 0.8rem;
    font-weight: bold;
    font-family: "Roboto Mono", monospace;
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
    display: inline-block;
    transition: all 0.2s ease-in-out;
    &:hover {
        background-color: var(--tag-hover-color);
        color: var(--tag-hover-text-color);
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

function ProjectCard({ project }) {
  const tech = project.technologies.split(",");
  return (
    <>
      <Card key={project.title}>

        <Image src={project.imageUrl} alt={project.title} security="true" loading="lazy" />
        <Info>
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <p style={{ margin: "0" }}>
            {tech.map((word, index) => (
              <Tag key={index}>{word}</Tag>
            ))}
          </p>

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
    </>
  )
}

export default ProjectCard
