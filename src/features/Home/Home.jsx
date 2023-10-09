import styled from 'styled-components';

import Button from '../../ui/Button';
import Navbar from '../Navbar/Navbar';

const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    height: 100vh;
    background-color: #f5f5f5;
    padding: 0 10rem;
    @media screen and (max-width: 768px) {
        padding: 0 2rem;
    }
`;

const Title = styled.strong`
    font-weight: bold;
    margin-bottom: 2rem;
    text-align: start;
    font-size: 1rem;
`;

const Subtitle = styled.h2`
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 2rem;
    text-align: start;

    @media screen and (max-width: 768px) {
        font-size: 1.5rem;
    }
`;

const Description = styled.p`
    font-size: 1.5rem;
    margin-bottom: 2rem;
    text-align: start;

    @media screen and (max-width: 768px) {
        font-size: 1rem;
    }
`;



const Home = () => {
    return (
        <HomeContainer>
            <Navbar />
            <Title>Hi, my name is</Title>
            <Subtitle>Sutharsan.
                I am a web craftsman.</Subtitle>
            <Description>
                I am an aspiring MERN developer with a strong passion for web development. Currently pursuing a Bachelor&rsquo;s degree in Computer Science, I am actively seeking exciting opportunities to contribute to the field and apply my knowledge and expertise.
            </Description>
            <Button href="#">View Portfolio</Button>
        </HomeContainer>
    );
};

export default Home;
