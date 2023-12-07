import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import styled from "@emotion/styled";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { useOutSideClick } from "../../hook/useOutSideClick";
import isPropValid from "@emotion/is-prop-valid";
import DarkModeToggle from "../../ui/DarkModeToggle";
import LoginToggle from "../Login/LoginToggle";
import { fadeAnimationVariants } from "../../styles/Motion";
import { motion } from "framer-motion";

const NavbarContainer = styled(motion.nav, {
  shouldForwardProp: (prop) => isPropValid(prop) && prop !== "show",
})`
  position: fixed;
  top: 20px;
  left: 100px;
  right: 100px;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 50px;
  // color: #0d0c22;
  color: var(--nav-link-color);
  padding: 1.5rem;
  background: rgba( 255, 255, 255, 0.15 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 20px );
  -webkit-backdrop-filter: blur( 20px );
  border: 1px solid var(--border-color);
  transition:
    background-color 0.3s ease-in-out,
    box-shadow 0.3s ease-in-out;

  @media screen and (max-width: 768px) {
    display: block;
    left: 10px;
    right: 10px;
  }
`;

const NavbarBrand = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  font-family: "Allison", cursive;
  cursor: pointer;
  &.active-link {
    color: var(--nav-active-color);
  }
  &:hover {
      color: var(--nav-active-color);
    }
`;

const NavbarLinks = styled(motion.ul, {
  shouldForwardProp: isPropValid,
})`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  align-items: center;
  gap: 1rem;
`;

const NavbarLink = styled(motion.li, {
  shouldForwardProp: isPropValid,
})`
  margin-left: 1rem;
`;

const StyledNavLink = styled(Link)`
  text-decoration: none;
  font-size: 1rem;
  font-weight: bold;
  transition: color 0.3s ease-in-out;
  cursor: pointer;
  &.active-link {
    color: var(--nav-active-color);
  }
  &:hover {
      color: var(--nav-active-color);
    }
`;

const MobileMenu = styled(motion.div, {
  shouldForwardProp: (prop) => isPropValid(prop) && prop !== "show",
})`
  position: fixed;
  top: 20px;
  right: 10px;
  left: 10px;
  border-radius: 50px;
  padding: 1.5rem;
  display: ${(props) => (props.show ? "block" : "none")};
  z-index: 1;
  color: var(--nav-link-color);
  background: rgba( 255, 255, 255, 0.15 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 20px );
  -webkit-backdrop-filter: blur( 20px );
  border: 1px solid var(--border-color);
  transition:
    background-color 0.3s ease-in-out,
    transform 0.3s ease-in-out;
  transform: ${(props) => (props.show ? "translateY(0)" : "translateY(-100%)")};
`;

const MobileMenuItem = styled(Link)`
  display: block;
  text-decoration: none;
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  cursor: pointer;
  &.active-link {
    color: var(--nav-active-color);
  }
  &:hover {
      color: var(--nav-active-color);
    }
  
`;

const MobileCloseMenu = styled(motion.div, {
  shouldForwardProp: isPropValid,
})`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  cursor: pointer;
  color: var(--nav-link-color);

 
`;

const MobileOpenMenu = styled(motion.div, {
  shouldForwardProp: (prop) => isPropValid(prop) && prop !== "show",
})`
  position: fixed;
  top: 20px;
  left: 10px;
  right: 10px;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 50px;
  backdrop-filter: blur(10px);
  padding: 1.5rem;
  color: var(--nav-link-color);
  background: rgba( 255, 255, 255, 0.15 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 20px );
  -webkit-backdrop-filter: blur( 20px );
  border: 1px solid var(--border-color);
  transition:
    background-color 0.3s ease-in-out,
    transform 0.3s ease-in-out;
  display: ${(props) => (props.show ? "none" : "flex")};
`;
const ToggleContainer = styled(motion.div)`
display: flex;
gap: 1rem;
`;



const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [mobileView, setMobileView] = useState(false);
  const ref = useOutSideClick(() => {
    setShowMenu(false);
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setMobileView(true);
      } else {
        setMobileView(false);
      }
    };

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolling(currentScrollY > 0);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setMobileView, setScrolling]);

  const NavLinks = [
    { name: "About", target: "about" },
    { name: "Skills", target: "skills" },
    { name: "Projects", target: "projects" },
  ];

  return (
    <>
      {mobileView ? (
        showMenu ? (
          <>
            <MobileMenu
              show={showMenu}
              ref={ref}
              style={{
                boxShadow: scrolling ? "0 0 10px rgba(0, 0, 0, 0.5)" : "none",

              }}
            >
              <MobileCloseMenu>
                <NavbarBrand
                  to="home"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                  activeClass="active-link"
                  onClick={() => setShowMenu(!showMenu)}
                >
                  {"< Sutharsan />"}
                </NavbarBrand>
                <ToggleContainer >
                  <DarkModeToggle />
                  <AiOutlineClose
                    onClick={() => setShowMenu(!showMenu)}
                    size={30}
                  />
                </ToggleContainer>

              </MobileCloseMenu>
              <LoginToggle />
              {NavLinks.map((link, index) => (
                <motion.div key={index} variants={fadeAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  custom={index}>

                  <MobileMenuItem
                    key={index}
                    to={link.target}
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    activeClass="active-link"
                    onClick={() => setShowMenu(false)}

                  >
                    {link.name}
                  </MobileMenuItem>
                </motion.div>
              ))}
            </MobileMenu>
          </>
        ) : (
          <MobileOpenMenu
            show={showMenu}
            style={{
              boxShadow: scrolling ? "0 0 10px rgba(0, 0, 0, 0.5)" : "none",

            }}
          >
            <NavbarBrand
              to="home"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
              activeClass="active-link"
              onClick={() => { showMenu ? setShowMenu(!showMenu) : null }}>
              {"< Sutharsan />"}
            </NavbarBrand>
            <ToggleContainer>
              <DarkModeToggle />
              <GiHamburgerMenu onClick={() => setShowMenu(!showMenu)} size={30} />
            </ToggleContainer>
          </MobileOpenMenu >
        )
      ) : (
        <>
          <NavbarContainer
            show={showMenu}
            style={{
              boxShadow: scrolling ? "0 0 10px rgba(0, 0, 0, 0.5)" : "none",

            }}
          >
            <NavbarBrand
              to="home"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
              activeClass="active-link"
            >
              {"< Sutharsan />"}
            </NavbarBrand>
            <NavbarLinks>
              <LoginToggle />
              {NavLinks.map((link, index) => {
                return (
                  <NavbarLink key={index}>
                    <StyledNavLink
                      to={link.target}
                      smooth={true}
                      duration={500}
                      spy={true}
                      exact="true"
                      offset={-80}
                      activeClass="active-link"
                    >
                      {link.name}
                    </StyledNavLink>
                  </NavbarLink>
                );
              })}
              <DarkModeToggle />
            </NavbarLinks>
          </NavbarContainer>
        </>
      )}
    </>
  );
};

export default Navbar;
