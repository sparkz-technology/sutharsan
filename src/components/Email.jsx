import { config } from "../utils/config";
import styles from "./Email.module.css";
function Email() {
  return (
    <div className={styles.Email}>
      <a href={`mailto:${config.email}`} target="_blank" rel="noreferrer">
        {config.email}
      </a>
      <hr />
    </div>
  );
}

export default Email;
