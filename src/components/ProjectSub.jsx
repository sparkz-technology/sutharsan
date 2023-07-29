/* eslint-disable react/prop-types */
import styles from "./ProjectSub.module.css";
function ProjectSub({ subtitle }) {
  return (
    <div className={styles.ProjectSub}>
      <p>{subtitle}</p>
    </div>
  );
}

export default ProjectSub;
