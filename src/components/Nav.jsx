import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css";

// import Alien from "./icons/Alien";// This is the old code
function Nav() {
  return (
    <>
      <nav className={styles.nav}>
        <NavLink to="/">
          {/* <Alien /> */}
          Sutharsan
        </NavLink>
        <ul>
          <li>
            <NavLink to="/about">
              <span>01.</span>About
            </NavLink>
          </li>
          <li>
            <NavLink to="work">
              <span>02.</span>Work
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">
              <span>03.</span>Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
