/* eslint-disable react/no-unescaped-entities */
import ProjectImg from "../components/ProjectImg";
import ProjectInfo from "../components/ProjectInfo";
import ProjectTitle from "../components/ProjectTitle";
import styles from "./Work.module.css";
import { projectconfig } from "../utils/projectconfig";
import ProjectSub from "../components/ProjectSub";
function Work() {
  return (
    <div className={styles.Work}>
      <h1>
        <span>02.</span> Some Things I've Built
      </h1>
      {projectconfig.projectinfo.map(
        ({ name, subtitle, technology, host, url, img }) => (
          <div style={{ margin: 20 }} key={name} className={styles.class}>
            <ProjectImg img={img} />
            <div className={styles.ProjectDiv}>
              <div className={styles.position}>
                <ProjectTitle name={name} />
                <ProjectSub subtitle={subtitle} />
                <ProjectInfo technology={technology} host={host} url={url} />
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
}

export default Work;
