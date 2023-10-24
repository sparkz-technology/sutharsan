import styled from "styled-components";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import PropTypes from 'prop-types';

function Header({ openSidebar, setOpenSidebar }) {
    Header.propTypes = {
        openSidebar: PropTypes.bool.isRequired,
        setOpenSidebar: PropTypes.func.isRequired,
    }
    return (
        <StyledHeader>
            <SubHeader>
                <Title>
                    <h1> Dashboard </h1>
                </Title>
            </SubHeader>
            <MenuToggle>
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
    background-color: #fff;
    display: flex;
    align-items: center;
    padding: 0 20px;
    gap: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
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
        color: #333; /* Change text color */
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
    display: block;
`;