import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css"; // Optional CSS for blur effect during loading
import profile from "../assets/profile.jpg";
import styles from "./Profile.module.css";

function Profile() {
  return (
    <div className={styles.Profile}>
      <LazyLoadImage
        src={profile}
        alt="sutharsan"
        effect="blur" // Optional blur effect during loading
        threshold={100} // Optional, default is 100. Controls how early the image starts to load before it's visible.
      />
    </div>
  );
}

export default Profile;
