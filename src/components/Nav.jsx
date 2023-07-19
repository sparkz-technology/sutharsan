import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css";
import Button from "./Button";
import image from "../assets/outer-space-alien.png";
import { config } from "../utils/config";
function Nav() {
  return (
    <nav className={styles.nav}>
      <NavLink to="/">
        <img src={image} alt="key" />
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
        <li>
          <a href={config.resume}>
            <Button>Resume</Button>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
