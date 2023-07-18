import { Outlet } from "react-router-dom";
import styles from "./AppLayout.module.css";
import Email from "../Email";
import Social from "../Social";
import Nav from "../Nav";
function AppLayout() {
  return (
    <>
      <Nav />
      <div style={{ position: "relative" }}>
        <div className={styles.Email}>
          <Email />
        </div>
        <div className={styles.Social}>
          <Social />
        </div>
        <dir className={styles.Outlet}>
          <Outlet />
        </dir>
      </div>
    </>
  );
}

export default AppLayout;
