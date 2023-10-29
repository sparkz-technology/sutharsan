import styled from "styled-components";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import PropTypes from 'prop-types';
import { IoChevronBackCircleOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { BiLogOut } from "react-icons/bi";
import Cookies from 'js-cookie';

import DarkModeToggle from "../../ui/DarkModeToggle";

function Header({ openSidebar, setOpenSidebar }) {
    Header.propTypes = {
        openSidebar: PropTypes.bool.isRequired,
        setOpenSidebar: PropTypes.func.isRequired,
    }
    const navigate = useNavigate();

    return (
        <>
            <StyledHeader>
                <SubHeader>
                    <button onClick={() => navigate("/")}>
                        <IoChevronBackCircleOutline size={40} />
                    </button>
                    <Title>
                        <h1>Admin Dashboard</h1>
                    </Title>
                </SubHeader>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <MenuToggle>
                        <DarkModeToggle />
                        {
                            openSidebar ? (
                                <AiOutlineClose
                                    size={24}
                                    onClick={() => setOpenSidebar(!openSidebar)}
                                />
                            ) : (
                                <AiOutlineMenu
                                    size={24}
                                    onClick={() => setOpenSidebar(!openSidebar)}
                                />
                            )
                        }
                    </MenuToggle>
                    <Logout onClick={() => {
                        Cookies.remove('token');
                        navigate('/');
                    }}
                    ><BiLogOut size={24} /></Logout>
                </div>


            </StyledHeader>
        </>
    )
}

export default Header

const StyledHeader = styled.div`
    height: 60px;
    display: flex;
    align-items: center;
    padding: 0 20px;
    gap: 20px;
    border: 1px solid var(--border-color);
    background-color: var(--container-background-color);
    color: var(--sub-text-color);
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    overflow: hidden;
`;


const Title = styled.div`
    h1 {
        font-size: 20px;
        font-weight: 500;
        font-family: 'Poppins', sans-serif;
        font-weight: 600;
        font-size: 20px;
    }

    @media (max-width: 768px) {
        h1 {
            font-size: 16px;
        }
    }
`;

const SubHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    button{
        background:transparent;
        border: none; 
        cursor: pointer;
        outline: none;
        color:var(--github-button-color);
        font-weight: 700;
        font-size: 0.8rem;
        transition: color 0.3s ease-in-out;
        gap: 1rem;
         :hover{
            transform: scale(1.1);
         }
    }

    @media (max-width: 768px) {
        gap: 10px;
    }
`;

const MenuToggle = styled.div`
    cursor: pointer;
    display: flex;  
    align-items: center;
    gap: 10px;
    svg:nth-child(2) {
        display: none;
    }
    @media (max-width: 768px) {
        svg:nth-child(2) {
            display: block;
        }
        
    }

    
`;

const Logout = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background:transparent;
    border: none;
    cursor: pointer;
    outline: none;
    color: var(--github-button-color);
    transition: color 0.3s ease-in-out;
`;