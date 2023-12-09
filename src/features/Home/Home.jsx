import styled from "styled-components";
import ContactIcon from "./ContactIcon";
import useGetUserDetails from "../Data/useGetUserDetails";
import { headContentAnimation, headTextAnimation, slideAnimation } from "../../styles/Motion";
import { motion } from "framer-motion";

const HomeContainer = styled(motion.div)` 
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  height: 100vh;
  padding: 0 10rem;
  @media screen and (max-width: 768px) {
    padding: 0rem 2rem;
    margin-top: 7rem;
    height: fit-content;
  }
`;

const Title = styled(motion.h1)`
  font-weight: bold;
  margin-bottom: 1rem;
  text-align: start;
  font-size: 1rem;
  font-family:Space Mono,monospace;
  color:var(--sub-text-color);
`;

const Subtitle = styled(motion.h1)`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 2rem;
  text-align: start;
  color: var(--title-color);
  position: relative;
  font-family:
    Roboto Mono,
    monospace;
  font-weight: 700;
  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 1rem;
    font-weight: 500;
  }
`;

const Description = styled(motion.div)`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  text-align: start;
  color: var(--text-color);
  font-family:
    Roboto Mono,
    monospace;

  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
  }
`;


const Home = () => {
  const { userDetails } = useGetUserDetails()
  const home = userDetails?.homeInfo

  return (
    <HomeContainer id="home" >

      <Title {...slideAnimation("up")}>Hi, my name is
      </Title>
      <Subtitle {...headTextAnimation}>
        Sutharsan.
        <br />I am a web craftsman.
      </Subtitle>
      <Description {...headContentAnimation}>
        <p dangerouslySetInnerHTML={{ __html: home }} />

      </Description>
      <ContactIcon />
    </HomeContainer >
  );
};

export default Home;
