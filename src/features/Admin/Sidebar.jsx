import { BiBook, BiFolderOpen, BiSolidUserCircle } from 'react-icons/bi';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const SideBarContainer = styled.div`
    background-color: #333; 
    height: 100vh;
    padding-top: 60px;
    display: flex;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
    @media (max-width: 768px) {
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        transform: ${({ openSidebar }) => openSidebar ? "translateX(0)" : "translateX(-100%)"};
        transition: all 0.2s;
        z-index: 1;

    }
`;

const TabList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
    @media (max-width: 768px) {
        justify-content: center;
        align-items: center;
        width: 100%;
    }

`;

const Tab = styled(NavLink)` 
    width: 200px;
    padding: 10px 20px;
    cursor: pointer;
    font-weight: 600;
    color: #fff; 
    display: flex;
    align-items: center;
    gap: 10px;
    transition: all 0.2s;
    text-decoration: none;
    &:hover {
        background-color: #444; 
    }
    &:first-child{
        margin-top: 10px;
    }
    &.active {
        background-color: #444;
    }
    @media (max-width: 768px) {
        width: 100%;
        justify-content: center;
        padding: 10px 0;

    }
`;




function Sidebar({ openSidebar, setOpenSidebar }) {
    Sidebar.propTypes = {
        openSidebar: PropTypes.bool.isRequired,
        setOpenSidebar: PropTypes.func.isRequired,
    };
    return (

        <SideBarContainer openSidebar={openSidebar} >
            <TabList>
                <Tab to="/admin/profile" onClick={() => setOpenSidebar(!openSidebar)}>
                    <BiSolidUserCircle />
                    Profile
                </Tab>
                <Tab to="/admin/skills" onClick={() => setOpenSidebar(!openSidebar)}>
                    <BiBook />
                    Skills
                </Tab>
                <Tab to="/admin/projects" onClick={() => setOpenSidebar(!openSidebar)}>
                    <BiFolderOpen />
                    Projects
                </Tab>
            </TabList>
        </SideBarContainer >
    );
}

export default Sidebar;
