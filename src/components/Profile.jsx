import profile from "../assets/profile.jpg";
import styles from "./Profile.module.css";
function Profile() {
  return (
    <div className={styles.Profile}>
      <img src={profile} alt="sutharsan" />
    </div>
  );
}

export default Profile;
