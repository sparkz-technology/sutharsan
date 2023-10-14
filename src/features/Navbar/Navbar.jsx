import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import styled from "@emotion/styled";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { useOutSideClick } from "../../hook/useOutSideClick";
import isPropValid from "@emotion/is-prop-valid";
import DarkModeToggle from "../../ui/DarkModeToggle";

const NavbarContainer = styled("nav", {
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
  backdrop-filter: blur(10px);
  color: #0d0c22;
  padding: 1.5rem;
  background-color: rgba(255, 255, 255, 0.452);
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
  color: #0d0c22;
  font-family: "Allison", cursive;
  cursor: pointer;
`;

const NavbarLinks = styled("ul", {
  shouldForwardProp: isPropValid,
})`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  align-items: center;
  gap: 1rem;
`;

const NavbarLink = styled("li", {
  shouldForwardProp: isPropValid,
})`
  margin-left: 1rem;
`;

const StyledNavLink = styled(Link)`
  color: var(--nav-color);
  text-decoration: none;
  font-size: 1rem;
  font-weight: bold;
  transition: color 0.3s ease-in-out;
  cursor: pointer;
  &.active-link {
    color: var(--nav-active-color);
  }
`;

const MobileMenu = styled("div", {
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
  background-color: rgba(255, 255, 255, 0.452);
  backdrop-filter: blur(30px);
  transition:
    background-color 0.3s ease-in-out,
    transform 0.3s ease-in-out;
  transform: ${(props) => (props.show ? "translateY(0)" : "translateY(-100%)")};
`;

const MobileMenuItem = styled(Link)`
  display: block;
  text-decoration: none;
  color: #0d0c22;
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  cursor: pointer;
  &.active-link {
    color: var(--nav-active-color);
  }
`;

const MobileCloseMenu = styled("div", {
  shouldForwardProp: isPropValid,
})`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  cursor: pointer;
`;

const MobileOpenMenu = styled("div", {
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
  color: #0d0c22;
  padding: 1.5rem;
  background-color: rgba(255, 255, 255, 0.452);
  transition:
    background-color 0.3s ease-in-out,
    transform 0.3s ease-in-out;
  display: ${(props) => (props.show ? "none" : "flex")};
`;
const ToggleContainer = styled.div`
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
              {NavLinks.map((link, index) => (
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
            >
              {"< Sutharsan />"}
            </NavbarBrand>
            <NavbarLinks>
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
