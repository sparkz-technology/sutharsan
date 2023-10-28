import { AiFillGithub as GitHub } from "react-icons/ai";
import styled from "styled-components";
import BackButton from "../../ui/BackButton";


const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    height: 100vh;
    width: 100%;
`;

const LoginButton = styled.button`
    display: flex;
    align-items: center;    
    justify-content:center;
    background:var(--github-button-color);
    border: none;
    cursor: pointer;
    outline: none;
    color: var(--github-text-color);
    padding: 0.5rem;
    width: 100%;
    border-radius: 5rem;
    font-size: 0.8rem;
    font-weight: 700;
    transition: color 0.3s ease-in-out;
    gap: 1rem;
`;

const Title = styled.h1`
    font-size: 1.5rem;
    font-weight: 600;
    font-family: 'Poppins', sans-serif;
    color: var(--sub-text-color);
`;

const Header = styled.div`
    display: flex;  
    align-items: center;
    justify-content: center;
    gap: 1rem;
`;

const Body = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    padding: 2rem;
    box-sizing: border-box;
    position: relative;
`;



function Login() {

    function handleLogin() {
        window.location.href = 'https://github.com/login/oauth/authorize?client_id=be5a9847d65b1697867d&scope=user';
    };

    return (
        <Container>
            <BackButton />
            <Body style={{ width: "400px" }}>
                <Header>
                    <Title>Login for Admin</Title>
                </Header>
                <p style={{ color: "var(--sub-text-color)", fontSize: "0.8rem", fontWeight: "500" }}>
                    Login with Github to access the admin dashboard.
                </p>
                <LoginButton onClick={handleLogin}>
                    <GitHub size={30} /> Login with Github
                </LoginButton>
            </Body>
        </Container >
    )
}

export default Login
