import { config } from "../utils/config";
import styles from "./Social.module.css";
import Github from "./icons/Github";
import Instagram from "./icons/Instagram";
import LinkedIn from "./icons/Linkedin";
import Email from "./icons/Email";
function Social() {
  return (
    <div className={styles.social}>
      <ul>
        {config.socialMedia &&
          config.socialMedia.map(({ url, name }, i) => (
            <li key={i}>
              <a href={url} aria-label={name} target="_blank" rel="noreferrer">
                {name === "Github" ? <Github /> : ""}
                {name === "Instagram" ? <Instagram /> : ""}
                {name === "LinkedIn" ? <LinkedIn /> : ""}
                {name === "Email" ? <Email /> : ""}
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Social;
