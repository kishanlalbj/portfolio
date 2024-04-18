import { useContext } from "react";
import "./Hero.css";
import ThemeContext from "../../context/ThemeContext";

const Hero = (props) => {
  const { isDark } = useContext(ThemeContext);
  const { social } = props;

  return (
    <div id="home">
      <div className="hero-wrapper">
        <div className="hero">
          <img
            src="https://randomuser.me/api/portraits/men/43.jpg"
            alt="profile-img"
          />

          <h1>
            <span className="gradient-text">I am Kishan</span>, Full Stack Web
            Developer
          </h1>

          <p>
            A seasoned full stack developer with over 8 years of experience in
            creating web applications for the world
          </p>

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
              href="/resume.pdf"
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
