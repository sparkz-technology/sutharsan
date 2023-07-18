import AboutMe from "../components/AboutMe";
import Profile from "../components/Profile";
import styles from "./About.module.css";

function About() {
  return (
    <div className={styles.About}>
      <h1>
        <span>01.</span> About Me
      </h1>
      <div style={{ margin: 0 }}>
        <AboutMe />
        <Profile />
      </div>
    </div>
  );
}

export default About;
