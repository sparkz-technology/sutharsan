import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const NavbarContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #333;
    color: #fff;
    padding: 1rem;
`;

const NavbarBrand = styled(NavLink)`
    font-size: 1.5rem;
    font-weight: bold;
    text-decoration: none;
    color: #fff;
`;

const NavbarLinks = styled.ul`
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
`;

const NavbarLink = styled.li`
    margin-left: 1rem;
`;

const Navbar = () => {
    return (
        <NavbarContainer>
            <NavbarBrand to="/">My Website</NavbarBrand>
            <NavbarLinks>
                <NavbarLink>
                    <NavLink to="/">Home</NavLink>
                </NavbarLink>
                <NavbarLink>
                    <NavLink to="/about">About</NavLink>
                </NavbarLink>
                <NavbarLink>
                    <NavLink to="/contact">Contact</NavLink>
                </NavbarLink>
            </NavbarLinks>
        </NavbarContainer>
    );
};

export default Navbar;
