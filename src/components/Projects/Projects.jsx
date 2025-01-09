import { memo, useContext } from "react";
import "./Projects.css";
import ThemeContext from "@contexts/ThemeContext";
import Title from "../ui/Title";
import ProjectCard from "../ProjectCard/ProjectCard";

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
              <ProjectCard key={project.id} {...project} />
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
