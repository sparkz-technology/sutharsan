import profile from "../assets/profile.jpg";
import styles from "./Profile.module.css";
function Profile() {
  return (
    <div className={styles.Profile}>
      <figure>
        <img src={profile} alt="sutharsan" />
      </figure>
    </div>
  );
}

export default Profile;
