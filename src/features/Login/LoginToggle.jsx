import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Cookies from 'js-cookie';
import styled from "styled-components";

const StyledLink = styled(NavLink)`
    width: 100%;
    text-decoration: none;
    font-size: 1rem;
    font-weight: bold;
    transition: color 0.3s ease-in-out;
    cursor: pointer;
    color: var(--nav-link-color);
    &:hover {
      color: var(--nav-active-color);
    }
`;

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    @media (max-width: 768px) {
    margin-bottom:0.5rem;
    }
`;
function LoginToggle() {
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        const token = Cookies.get('token');
        setLoggedIn(!!token);
    }, []);

    return (
        <Container >
            {loggedIn ? (
                <StyledLink to="/admin/profile">Dashboard</StyledLink>
            ) : (
                <StyledLink to="/login">Login</StyledLink>
            )}
        </Container>
    );
}

export default LoginToggle;
