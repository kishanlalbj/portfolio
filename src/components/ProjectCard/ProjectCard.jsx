import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";
import { track } from "@vercel/analytics/react";

const ProjectCard = ({
  id,
  title,
  description,
  image,
  sourceUrl,
  liveUrl,
  techStack
}) => {
  const { isDark } = useContext(ThemeContext);
  return (
    <>
      <div
        className={`project ${!isDark ? "project-light" : ""} hidden`}
        key={id}
      >
        <div className="project-container">
          <div className="project-details">
            <h2 className="project-title gradient-text">{title}</h2>
            <p className="project-desc">{description}</p>

            <div className="grradient-text">{techStack.join(" ")}</div>
          </div>

          <img
            src={image ? image : "https://picsum.photos/800/600"}
            alt="project-img"
            className="project-img"
          ></img>
        </div>

        <div className="project-actions-container">
          <a
            href={sourceUrl}
            target="_blank"
            className="icon"
            title={`${title}-gitlink`}
            onClick={() => track("View Project", { project: title })}
          >
            <i className="fa-brands fa-github fa-lg" color="#fff"></i>
          </a>

          <a
            href={liveUrl}
            title={`${liveUrl}-projectlink`}
            target="_blank"
            className="icon"
          >
            <i className="fa-solid fa-up-right-from-square" color="#fff"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
