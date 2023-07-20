/* eslint-disable react/prop-types */
import styles from "./ProjectImg.module.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css"; //
function ProjectImg({ img }) {
  return (
    <div className={styles.ProjectImg}>
      <LazyLoadImage
        src={img}
        alt="projectimg"
        effect="blur" // Optional blur effect during loading
        threshold={100} // Optional, default is 100. Controls how early the image starts to load before it's visible.
      />
    </div>
  );
}

export default ProjectImg;
