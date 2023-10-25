import styled from "styled-components";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import PropTypes from 'prop-types';
import DarkModeToggle from "../../ui/DarkModeToggle";

function Header({ openSidebar, setOpenSidebar }) {
    Header.propTypes = {
        openSidebar: PropTypes.bool.isRequired,
        setOpenSidebar: PropTypes.func.isRequired,
    }
    return (
        <StyledHeader>
            <SubHeader>
                <Title>
                    <h1>Admin Dashboard</h1>
                </Title>
            </SubHeader>
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
        </StyledHeader>
    )
}

export default Header

const StyledHeader = styled.div`
    height: 60px;
    display: flex;
    align-items: center;
    padding: 0 20px;
    gap: 20px;
    background: rgba( 255, 255, 255, 0.15 );
    /* box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 ); */
    backdrop-filter: blur( 20px );
    -webkit-backdrop-filter: blur( 20px );
    border: 1px solid var(--border-color);
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
        color: var(--title-color);
        font-family: 'Poppins', sans-serif;
        font-weight: 600;
        font-size: 20px;
    }

    @media (max-width: 768px) {
        h1 {
            font-size: 24px;
        }
    }
`;

const SubHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    @media (max-width: 768px) {
        gap: 10px;
    }
`;

const MenuToggle = styled.div`
    cursor: pointer;
    display: flex;  
    align-items: center;
    gap: 20px;
    svg:nth-child(2) {
        display: none;
    }
    @media (max-width: 768px) {
        svg:nth-child(2) {
            display: block;
        }
        
    }

    
`;