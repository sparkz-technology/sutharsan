import styled from "styled-components";

const StyledAbout = styled.section`
  display: flex;
  flex-direction: column;
  /* background-color: #f5f5f5; */
  border-radius: 0.5rem;
  /* background: rgba( 255, 255, 255, 0.45 ); */
  /* box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 ); */
  /* backdrop-filter: blur( 20px ); */
  /* -webkit-backdrop-filter: blur( 20px ); */
  /* border: 1px solid rgba( 255, 255, 255, 0.18 ); */
  padding: 2rem 10rem;

  @media screen and (max-width: 768px) {
    padding: 2rem;
  }
`;
const Container = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: start;
  border-radius: 0.5rem;
  text-align: start;
  font-size: 1.2rem;
  line-height: 1.5;
  color: var(--text-color);
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  letter-spacing: 0.01rem;
  gap: 2rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    font-size: 1.5rem;
  }
`;

const Info = styled.section`
  flex: 1;
`;

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

const Text = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  text-align: start;
  font-family:
    Roboto Mono,
    monospace;

  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Profile = styled.aside`
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;

  img {
    width: 300px;
    border-radius: 50%;
    object-fit: cover;
    box-shadow: 0 0 0 8px #f5f5f5;
    &:hover {
      transform: scale(1.1);
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    }
  }
`;

function About() {
  return (
    <StyledAbout id="about">
      <Title>About Me</Title>
      <Container>
        <Info>
          <Text>
            I&apos;m Sutharsan, a passionate MERN developer from Chennai
            currently pursuing my Bachelor&apos;s degree in Computer Science.
            Proficient in HTML, CSS, and JavaScript, I have hands-on experience
            in creating dynamic web applications using React and Node.js.
          </Text>
        </Info>
        <Profile>
          <img
            src="https://raw.githubusercontent.com/sparkz-technology/sutharsan/version3/src/assets/profile.jpg"
            alt="Sutharsan"
          />
        </Profile>
      </Container>
    </StyledAbout>
  );
}

export default About;