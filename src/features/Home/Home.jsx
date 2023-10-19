import styled from "styled-components";
import ContactIcon from "./ContactIcon";
import useGetUserDetails from "../Data/useGetUserDetails";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  height: 100vh;
  /* background-color: #f5f5f5; */
  padding: 0 10rem;
  @media screen and (max-width: 768px) {
    padding: 0 2rem;
  }
`;

const Title = styled.strong`
  font-weight: bold;
  margin-bottom: 1rem;
  text-align: start;
  font-size: 1rem;
  font-family:Space Mono,monospace;
  color:var(--sub-text-color);
`;

const Subtitle = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 2rem;
  text-align: start;
  color: var(--title-color);
  font-family:
    Roboto Mono,
    monospace;
  font-weight: 700;
  @media screen and (max-width: 768px) {
    font-size: 1.7rem;
  }
`;

const Description = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  text-align: start;
  color: var(--text-color);

  font-family:
    Roboto Mono,
    monospace;

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Home = () => {
  const { userDetails } = useGetUserDetails()
  const home = userDetails?.homeInfo

  return (
    <HomeContainer id="home">
      <Title>Hi, my name is</Title>
      <Subtitle>
        Sutharsan.
        <br />I am a web craftsman.
      </Subtitle>
      <Description>
        <p dangerouslySetInnerHTML={{ __html: home }} />

      </Description>
      <ContactIcon />
    </HomeContainer>
  );
};

export default Home;
