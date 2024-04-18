import { useContext } from "react";
import "./Projects.css";
import ThemeContext from "../../context/ThemeContext";

const Projects = (props) => {
  const { isDark } = useContext(ThemeContext);
  const { projects } = props;

  return (
    <section id="projects">
      <div className="projects-wrapper">
        <div>
          <h2 className="title">My Projects </h2>

          <div className="projects-container">
            {projects.map((project) => (
              <div
                className={`project ${!isDark ? "project-light" : ""}`}
                key={project.id}
              >
                <div className="project-container">
                  <div className="project-details">
                    <h2 className="project-title gradient-text">
                      {project.title}
                    </h2>
                    <p className="project-desc">{project.description}</p>

                    <div className="grradient-text">React, Mongo, Node</div>
                  </div>

                  <img
                    src={
                      project.image
                        ? project.image
                        : "https://picsum.photos/800/600"
                    }
                    alt="project-img"
                    className="project-img"
                  ></img>
                </div>

                <div className="project-actions-container">
                  <a href={project?.sourceUrl} target="_blank" className="icon">
                    <i className="fa-brands fa-github fa-lg" color="#fff"></i>
                  </a>

                  <a href={project?.liveUrl} target="_blank" className="icon">
                    <i
                      className="fa-solid fa-up-right-from-square"
                      color="#fff"
                    ></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
