import { useState } from "react";
import styled from "styled-components";
import CircularProgressBar from "../../ui/CircularProgressBar";
import useGetUserDetails from "../Data/useGetUserDetails";


const SkillsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  align-items: center;
  @media screen and (max-width: 768px) {
    align-items: center;
    justify-content: space-around;
  }
`;

const Tabs = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  border-radius: 8px;
  background: rgba( 255, 255, 255, 0.15 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 20px );
  -webkit-backdrop-filter: blur( 20px );
  border: 1px solid var(--border-color);
  gap: 1rem;
  @media screen and (max-width: 768px) {
    padding: 0.5rem;
    border-radius: 8px;
    gap: 0.5rem;
  }
`;

const Tab = styled.div`
  cursor: pointer;
  padding: 10px 20px;
  background-color: ${(props) =>
    props.active ? " var(--button-background-color)" : "transparent"};
  /* color: ${(props) => (props.active ? "white" : "var(--button-background-color)")}; */
  color: ${(props) => (props.active ? "white" : "var(--button-text-active-color)")};
  border: 3px solid var(--button-background-color);
  border-radius: 8px;
  &:hover {
    background-color: var(--button-background-hover-color);
    color: white;
  }
  @media screen and (max-width: 768px) {
    padding: 5px 10px;
    font-size: 0.8rem;
  }
`;

const SkillCard = styled.div`
  position: relative;
  perspective: 1000px;
  /* background-color: #fff; */
  border-radius: 0.5rem;
  background: rgba(255, 255, 255, 0.45);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  height: 150px;
  width: 150px;
  border-radius: 50px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;

  img {
    height: 80px;
    width: 80px;
  }

  p {
    font-size: 1rem;
    font-weight: bold;
    font-family: "Roboto Mono", monospace;
  }

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  }

  .card-inner {
    width: 100%;
    height: 100%;
    position: absolute;
    transform-style: preserve-3d;
    transition: transform 0.5s;
  }

  .front,
  .back {
    width: 100%;
    height: 100%;
    border-radius: 50px;
    backface-visibility: hidden;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 768px) {
      border-radius: 30px;
    }
  }

  .back {
    transform: rotateY(180deg);
  }

  &:hover .card-inner {
    transform: rotateY(180deg);
  }

  @media screen and (max-width: 768px) {
    height: 100px;
    width: 100px;
    border-radius: 30px;
    margin: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

    img {
      height: 50px;
      width: 50px;
    }

    p {
      font-size: 0.8rem;
      font-weight: bold;
      font-family: "Roboto Mono", monospace;
    }

    &:hover {
      transform: scale(1.1);
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    }
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--title-color);
  font-family: "Roboto", sans-serif;
  margin: auto 0;
  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Container = styled.div`
  /* height: 500px; */
  padding: 2rem 10rem;

  @media screen and (max-width: 768px) {
    padding: 2rem;
    height: auto;
  }
`;

const SkillCardFront = styled.div`
  background-color: #fff;
  height: 150px;
  width: 150px;
  border-radius: 50px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;
`;

const SkillCardBack = styled.div`
  background-color: #fff;
  height: 150px;
  width: 150px;
`;


const TabTitle = [
  { name: "Frontend" },
  { name: "Backend" },
  { name: "Others" },
];

const Skills = () => {
  const [activeTab, setActiveTab] = useState("Frontend");
  const { userDetails } = useGetUserDetails()
  const { skills } = userDetails
  const filteredSkills = skills?.filter(
    (skill) => skill.category === activeTab,
  );


  return (
    <Container id="skills">
      <Header>
        <Title>Skills</Title>
        <Tabs>
          {TabTitle.map((tab) => (
            <Tab
              key={tab.name}
              active={activeTab === tab.name}
              onClick={() => setActiveTab(tab.name)}
            >
              {tab.name}
            </Tab>
          ))}
        </Tabs>
      </Header>
      <SkillsWrapper>
        {filteredSkills?.map((skill) => (
          <SkillCard key={skill.skill}>
            <div className="card-inner">
              <SkillCardFront className="front">
                <img src={skill.imageUrl} alt={skill.skill} />
                <p>{skill.skill}</p>
              </SkillCardFront>
              <SkillCardBack className="back">
                <CircularProgressBar
                  percentage={skill.percentage}
                  color="var(--button-background-color)"
                />
              </SkillCardBack>
            </div>
          </SkillCard>
        ))}
      </SkillsWrapper>
    </Container>
  );
};

export default Skills;
