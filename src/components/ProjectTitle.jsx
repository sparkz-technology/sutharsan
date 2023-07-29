/* eslint-disable react/prop-types */
import styles from "./ProjectTitle.module.css";
function ProjectTitle({ name }) {
  return (
    <div className={styles.ProjectTitle}>
      <p>
        Mini Project
        <br />
        <span>{name}</span>
      </p>
    </div>
  );
}

export default ProjectTitle;
