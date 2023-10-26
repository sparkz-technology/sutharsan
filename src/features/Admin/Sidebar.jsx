import { BiBook, BiFolderOpen, BiSolidUserCircle } from 'react-icons/bi';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const SideBarContainer = styled.div`
    height: 100vh;
    padding-top: 60px;
    display: flex;
    border: 1px solid var(--border-color);
    box-sizing: border-box;
    background-color: var(--container-background-color);

    @media (max-width: 768px) {
        width: 100%;
        height: fit-content;
        position: fixed;
        top: 0;
        left: 0;
        transform: ${({ openSidebar }) => openSidebar ? "translateY(0)" : "translateY(-100%)"};
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
        justify-content: start;
        width: 100%;
    }

`;

const Tab = styled(NavLink)` 
    width: 200px;
    padding: 10px 20px;
    cursor: pointer;
    font-weight: 600;
    color:var(--sidebar-link-color);
    display: flex;
    align-items: center;
    gap: 10px;
    transition: all 0.2s;
    text-decoration: none;
    border-radius: 5px;
    
    &:hover {
        color:var(--active-sidebar-link-color);
        background-color:var(--main-background-color);
        svg{
            color:var(--icon-hover-color);
        }


    }
    &:first-child{
        margin-top: 10px;
    }
    &.active {
        color:var(--active-sidebar-link-color);
        background-color:var(--main-background-color);
        border-left: 3px solid var(--active-sidebar-link-color);

        svg{
            color:var(--icon-hover-color);
        }

    }
    svg{
        font-size: 20px;
        color:#8a8a8a;
        transition: all 0.2s;
    }
    &:last-child{
        margin-bottom: 10px;
    }
    
    
    @media (max-width: 768px) {
        width: 100%;
        justify-content: start;
        align-items: flex-start;
        

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
