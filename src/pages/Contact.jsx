/* eslint-disable react/no-unescaped-entities */
import Button from "../components/Button";
import styles from "./Contact.module.css";
import Nodemailer from "../components/Nodemailer";
import { useState } from "react";
function Contact() {
  const [isShown, setIsShown] = useState(true);
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
        {isShown ? (
          <Button type="button" onClick={() => setIsShown(false)}>
            Say Hello
          </Button>
        ) : (
          <Nodemailer />
        )}
      </div>
    </>
  );
}

export default Contact;
