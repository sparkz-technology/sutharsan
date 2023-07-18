/* eslint-disable react/no-unescaped-entities */
import Button from "../components/Button";
import styles from "./Contact.module.css";
function Contact() {
  return (
    <div className={styles.Contact}>
      <h3>
        <span>0.3 </span>
        What's Next?
      </h3>
      <h1>Get In Touch</h1>
      <p>
        I'm a student actively seeking web development job opportunities. If you
        have any questions or want to say hello, feel free to reach out. Let's
        connect and explore the world of web development together!
      </p>
      <Button type="button">Say Hello</Button>
    </div>
  );
}

export default Contact;
