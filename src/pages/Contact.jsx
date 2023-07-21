/* eslint-disable react/no-unescaped-entities */
import Button from "../components/Button";
import styles from "./Contact.module.css";
import { config } from "../utils/config";
function Contact() {
  const { email } = config;
  return (
    <>
      <div className={styles.Contact}>
        <h3>
          <span>0.3 </span>
          What's Next?
        </h3>
        <h1>Let's Connect </h1>
        <p>
          I'm a student actively seeking web development job opportunities. If
          you have any questions or want to say hello, feel free to reach out.
          Let's connect and explore the world of web development together!
        </p>
        <a href={`mailto:${email}`} target="_blank" rel="noreferrer">
          <Button type="button">Say Hello</Button>
        </a>
      </div>
    </>
  );
}

export default Contact;
