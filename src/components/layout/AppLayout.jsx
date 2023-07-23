import { Outlet } from "react-router-dom";
import styles from "./AppLayout.module.css";
import Social from "../Social";
import Nav from "../Nav";
import Emailjs from "../Emailjs";
function AppLayout() {
  return (
    <div className={styles.AppLayout}>
      <Emailjs />
      <header className={styles.sticky}>
        <Nav className={styles.Nav} />
      </header>
      <div style={{ position: "relative" }}>
        <div className={styles.Social}>
          <Social />
        </div>
        <div className={styles.Outlet}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
