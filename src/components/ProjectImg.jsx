/* eslint-disable react/prop-types */
import styles from "./ProjectImg.module.css";
function ProjectImg({ img }) {
  return (
    <div className={styles.ProjectImg}>
      <img src={img} alt="imageNotFound" />
    </div>
  );
}

export default ProjectImg;
