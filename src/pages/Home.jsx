import styles from "./Home.module.css";
/* eslint-disable react/no-unescaped-entities */
function Home() {
  return (
    <div className={styles.home}>
      <h1>Hi, my name is</h1> <br />
      <h2>
        Sutharsan. <br />I am a web craftsman.
      </h2>
      <p>
        I am an aspiring <strong>MERN developer</strong> with a strong passion
        for web development. Currently pursuing a Bachelor's degree in Computer
        Science, I am actively seeking exciting opportunities to contribute to
        the field and apply my knowledge and expertise.
      </p>
    </div>
  );
}

export default Home;
