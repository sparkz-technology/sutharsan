import ProjectImg from "../components/ProjectImg";
import ProjectInfo from "../components/ProjectInfo";
import ProjectTitle from "../components/ProjectTitle";
import styles from "./Work.module.css";
import projectconfig from "../utils/projectconfig";
import ProjectSub from "../components/ProjectSub";

function Work() {
  return (
    <div className={styles.Work}>
      <h1>
        <span>02.</span> Some Things Ive Built
      </h1>
      {projectconfig.projectinfo.map(
        ({ name, subtitle, technology, host, url, img }) => (
          <div style={{ margin: 40 }} key={name} className={styles.class}>
            <ProjectImg img={img} />
            <div className={styles.ProjectDiv}>
              <div
                className={styles.position}
                style={{
                  backgroundImage:
                    window.innerWidth <= 768 ? `url(${img})` : "none",
                  backgroundSize: "cover",
                }}
              >
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
