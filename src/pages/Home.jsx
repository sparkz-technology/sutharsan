import Button from "../components/Button";
import styles from "./Home.module.css";
/* eslint-disable react/no-unescaped-entities */
function Home() {
  return (
    <div className={styles.home}>
      <h2>
        <h1>Hi, my name is</h1>
        Sutharsan. <br />I build things for the web.
      </h2>
      <p>
        I am an aspiring <strong>MERN developer</strong> with a strong passion
        for web development. Currently pursuing a Bachelor's degree in Computer
        Science, I am actively seeking exciting opportunities to contribute to
        the field and apply my knowledge and expertise.
      </p>
      <Button>Check out my project!</Button>
    </div>
  );
}

export default Home;
