import { Outlet } from "react-router-dom";
import styles from "./AppLayout.module.css";
import Social from "../Social";
import Nav from "../Nav";
function AppLayout() {
  return (
    <>
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
