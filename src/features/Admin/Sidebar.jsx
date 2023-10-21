import { BiBook, BiFolderOpen, BiSolidUserCircle } from 'react-icons/bi';
import styled from 'styled-components';
import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';

const SideBarContainer = styled.div`

    width: fit-content;
    height: 100vh;
    background-color: #333; 
    position: fixed;
    top: 10; 
    left: 0;
    
    z-index: 100;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);


`;

const TabList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 10px;

`;

const Tab = styled(NavLink)` /* Change the tag name here */
    width: 200px;
    padding: 10px 20px;
    cursor: pointer;
    font-weight: 600;
    color: #fff; /* Change text color */
    display: flex;
    align-items: center;
    gap: 10px;
    transition: all 0.2s;
    &:hover {
        background-color: #444; /* Change background color on hover */
    }
    &:first-child{
        margin-top: 10px;
    }
`;

const Header = styled.div`
    /* width: 100%; */
    height: 60px;
    background-color: #fff;
    display: flex;
    align-items: center;
    padding: 0 20px;
    gap: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    justify-content: space-between;
`;

const Logo = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
    padding: 2px;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    @media (max-width: 768px) {
        width: 60px;
        height: 60px;
    }
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
    /* display: none; */
    cursor: pointer;
    /* @media (max-width: 768px) { */
        display: block;
    /* } */
`;


function Sidebar() {
    const [openSidebar, setOpenSidebar] = useState(false);
    // useEffect(() => {
    //     const handleResize = () => {
    //         const width = window.innerWidth;
    //         width > 768 && setOpenSidebar(true)
    //     };
    //     handleResize();
    //     window.addEventListener('resize', handleResize);
    //     return () => window.removeEventListener('resize', handleResize);
    // }, [openSidebar]);

    return (
        <>
            <Header>
                <SubHeader>
                    <Logo>
                        <img src="https://avatars.githubusercontent.com/u/76843202?v=4" alt="logo" />
                    </Logo>
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
            </Header>

            {
                openSidebar && (
                    <SideBarContainer>
                        <TabList>
                            <Tab to="/admin/profile">
                                <BiSolidUserCircle />
                                Profile
                            </Tab>
                            <Tab to="/admin/skills">
                                <BiBook />
                                Skills
                            </Tab>
                            <Tab to="/admin/projects">
                                <BiFolderOpen />
                                Projects
                            </Tab>
                        </TabList>
                    </SideBarContainer >
                )
            }
        </>
    );
}

export default Sidebar;
