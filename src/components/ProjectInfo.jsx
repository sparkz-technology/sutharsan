/* eslint-disable react/prop-types */
import styles from "./ProjectInfo.module.css";
import External from "./icons/External";
import Github from "./icons/Github";
function ProjectInfo({ technology, host, url }) {
  return (
    <div className={styles.ProjectInfo}>
      <p>{technology}</p>
      <p>
        {url ? (
          <a href={url} target="_blank" rel="noreferrer">
            {url ? <Github /> : ""}
          </a>
        ) : (
          ""
        )}
        {host ? (
          <a href={host} target="_blank" rel="noreferrer">
            {host ? <External /> : ""}
          </a>
        ) : (
          ""
        )}
      </p>
    </div>
  );
}

export default ProjectInfo;
