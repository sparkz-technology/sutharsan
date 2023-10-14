import styled from "styled-components";
import { AiFillGithub } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";
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
  justify-content: start;
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
  justify-content: space-between;
  align-items: center;
  border-radius: 0.5rem;
  /* background: rgba(255, 255, 255, 0.45);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.18); */
  /* background: #fff; */
  background: rgba( 255, 255, 255, 0.05 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 20px );
-webkit-backdrop-filter: blur( 20px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );
  color: #333;
  font-family: "Roboto", sans-serif;
  box-sizing: border-box;
  box-shadow: var(--box-shadow);
  transition: all 0.2s ease-in-out;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
  }
`;

const Image = styled.div`
  padding: 1rem;
  img {
    height: 300px;
    width: 500px;
  }
  @media screen and (max-width: 768px) {
    img {
      height: auto;
      width: 100%;
      box-sizing: border-box;
    }
  }
`;
const NullImage = styled.div`
    padding: 1rem;
    height: 300px;
    width: 500px;
  @media screen and (max-width: 768px) {
    height: auto;
    width: 100%;
    box-sizing: border-box;
  }
`;
const Info = styled.div`
  text-align: end;
  font-size: 1.2rem;
  line-height: 1.5;
  padding: 1rem;

  p {
    font-size: 1rem;
    font-weight: bold;
    font-family: "Roboto Mono", monospace;
    margin-bottom: 1rem;
    color: var(--card-des-color);
  }
  h2{
  color:var(--sub-text-color);
  
  }
  svg {
    color: var(--icon-color);
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &:hover {
      color: var(--icon-hover-color);
      transform: scale(1.1);
    }
  }
  @media screen and (max-width: 768px) {
    p {
      font-size: 0.8rem;
    }
  }
`;

const image = "https://www.liquidplanner.com/wp-content/uploads/2019/04/HiRes-17.jpg";
const ProjectsList = [
  {
    title: "Chat App",
    description:
      "Chat App with React, Socket.io, Express, MongoDB, Redux, TANStack, and Cloudinary",
    host: "https://chat-app-zeta-lyart.vercel.app",
    github: "https://github.com/sparkz-technology/chat_app",
    image,
  },
  {
    title: "Comic Subscription",
    description:
      "Comic Subscription with React, Redux, Express, MongoDB, TanStack, RabbitMQ, and Stripe",
    host: "https://comic-subscription.vercel.app",
    github: "https://github.com/sparkz-technology/comic_subscription.git",
    image,
  },
];

function Projects() {
  return (
    <Container id="projects">
      <Title>Projects</Title>
      {ProjectsList.map((project, index) => {
        return (
          <Card key={index}>
            <Image>
              {project.image ?
                <img src={project.image} alt={project.title} /> : <NullImage />}
            </Image>
            <Info>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <a href={project.github} target="_blank" rel="noreferrer">
                <AiFillGithub size={30} style={{ marginRight: "1rem" }} />
              </a>
              <a href={project.host} target="_blank" rel="noreferrer">
                <BiLinkExternal size={30} />
              </a>
            </Info>
          </Card>
        );
      })}
    </Container>
  );
}

export default Projects;
