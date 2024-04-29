import { memo, useContext } from "react";
import "./Projects.css";
import ThemeContext from "@contexts/ThemeContext";
import Title from "../ui/Title";

let Projects = (props) => {
  const { isDark } = useContext(ThemeContext);
  const { projects, githubUrl } = props;

  return (
    <section id="projects" className="hidden">
      <div className="projects-wrapper">
        <div>
          <Title text="Projects"></Title>

          <div className="projects-container">
            {projects.map((project) => (
              <div
                className={`project ${!isDark ? "project-light" : ""} hidden`}
                key={project.id}
              >
                <div className="project-container">
                  <div className="project-details">
                    <h2 className="project-title gradient-text">
                      {project.title}
                    </h2>
                    <p className="project-desc">{project.description}</p>

                    <div className="grradient-text">
                      {project?.techStack.join(" ")}
                    </div>
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
      <br />
      <br />
      <center>
        <a
          href={githubUrl}
          target="_blank"
          className={`hidden hero-cta ${!isDark ? "hero-cta-light" : ""}`}
        >
          More Projects
        </a>
      </center>
    </section>
  );
};

Projects = memo(Projects);

export default Projects;
