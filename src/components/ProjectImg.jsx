/* eslint-disable react/prop-types */
import styles from "./ProjectImg.module.css";
function ProjectImg({ img }) {
  return (
    <div className={styles.ProjectImg}>
      <figure>
        <img src={img} alt="no" />
      </figure>
    </div>
  );
}

export default ProjectImg;
