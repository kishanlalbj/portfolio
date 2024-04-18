import { useContext } from "react";
import "./Hero.css";
import ThemeContext from "../../context/ThemeContext";
import useConfetti from "../../hooks/useConfetti";

const Hero = (props) => {
  const { isDark } = useContext(ThemeContext);
  const { social, firstName, workTitle, heroText, image, resume } = props;
  const { dots, onMouseMove } = useConfetti();

  return (
    <div id="home" onMouseMove={onMouseMove}>
      <div className="hero-wrapper">
        {dots.map((e) => e)}

        <div className="hero">
          <div
            className="profile-img"
            style={{
              backgroundImage: `url(${image})`,
              width: "200px",
              height: "200px",
              textAlign: "center",
              borderRadius: "100%",
              marginTop: "100px"
            }}
          ></div>

          <div className="profile-img"></div>

          <h1>
            <span className="gradient-text">I am {firstName}</span>, {workTitle}
          </h1>

          <p>{heroText}</p>

          <div className="social-container">
            {social?.map((e) => (
              <a
                key={e.id}
                href={e.url}
                target="_blank"
                className="icon gradient-text"
                rel="noopener noreferrer"
              >
                <i className={`fa-brands fa-${e.name} fa-xl`} />
              </a>
            ))}
          </div>

          <div className="hero-action">
            <a
              href={`${resume}`}
              target="_blank"
              className={`hero-cta ${!isDark ? "hero-cta-light" : ""}`}
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
