/* eslint-disable react/prop-types */
import styles from "./Button.module.css";
function Button({ children }) {
  return <button className={styles.btn}>{children}</button>;
}

export default Button;
