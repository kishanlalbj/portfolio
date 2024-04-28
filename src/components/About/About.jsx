import { useContext } from "react";
import "./About.css";
import ThemeContext from "../../context/ThemeContext";
import Title from "../ui/Title";

const Skill = (props) => {
  const { isDark } = useContext(ThemeContext);
  const { skill } = props;

  return (
    <div className={`skill ${!isDark ? "skill-light" : ""}`}>
      <img src={skill.logo} alt={skill.name} width={"24px"}></img>
      <p className="gradient-text">{skill.name}</p>
    </div>
  );
};

const About = (props) => {
  const { skills, aboutText } = props;

  return (
    <section className="hidden" id="about-me">
      <div className="about-wrapper">
        <Title text={"About me"} className="hidden" />
        <div className="about-grid">
          <div className="profile-img"></div>

          <div className="about-text-container hidden">
            {aboutText.map((para) => (
              <p key={para}>{para}</p>
            ))}

            <div className="about-skills-container">
              {skills?.map((skill) => (
                <Skill key={skill.id} skill={skill} />
              ))}
            </div>
          </div>
        </div>

        {/* <div className="achievements">
          <div className="achievement">
            <h1 className="gradient-text">""</h1>
            <p>Years of experience</p>
          </div>
          <hr />

          <div className="achievement">
            <h1 className="gradient-text">10+</h1>
            <p>Projects completed</p>
          </div>
          <hr />

          <div className="achievement">
            <h1 className="gradient-text">15+</h1>
            <p>Projects completed</p>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default About;
