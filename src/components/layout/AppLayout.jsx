import { Outlet } from "react-router-dom";
import styles from "./AppLayout.module.css";
import Social from "../Social";
import Nav from "../Nav";
import Emailjs from "../Emailjs";
function AppLayout() {
  return (
    <>
      <Emailjs />
      <Nav className={styles.Nav} />
      <div style={{ position: "relative" }}>
        <div className={styles.Social}>
          <Social />
        </div>
        <div className={styles.Outlet}>
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default AppLayout;
