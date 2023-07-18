import profile from "../assets/profile.jpg";
import styles from "./ProjectImg.module.css";
function ProjectImg() {
  return (
    <div className={styles.ProjectImg}>
      <img src={profile} alt="no" />
    </div>
  );
}

export default ProjectImg;
