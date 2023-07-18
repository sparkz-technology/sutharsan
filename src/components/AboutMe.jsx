/* eslint-disable react/no-unescaped-entities */
import { config } from "../utils/config";
import styles from "./AboutMe.module.css";
function AboutMe() {
  const getSocialMediaUrl = (name) => {
    const socialMedia = config.socialMedia.find((item) => item.name === name);
    return socialMedia ? socialMedia.url : "";
  };
  return (
    <div className={styles.AboutMe}>
      <p>
        I'm Sutharsan, a passionate MERN developer from Chennai currently
        pursuing my Bachelor's degree in Computer Science. Proficient in HTML,
        CSS, and JavaScript, I have hands-on experience in creating dynamic web
        applications using React and Node.js.
        <p>
          I'm skilled in both front-end and back-end development, utilizing
          technologies like Express.js and MongoDB.
        </p>
        Committed to delivering high-quality code, I enjoy taking on new
        challenges and collaborating effectively with cross-functional teams.
        Let's connect and collaborate on exciting web development opportunities!
        Email me at <strong>{config.email}</strong> or find me on{" "}
        <a
          href={getSocialMediaUrl("LinkedIn")}
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>{" "}
        Check out my projects on{" "}
        <a href={getSocialMediaUrl("GitHub")} target="_blank" rel="noreferrer">
          GitHub
        </a>
        .
      </p>
    </div>
  );
}

export default AboutMe;
