import { useContext } from "react";
import "./About.css";
import ThemeContext from "../../context/ThemeContext";

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
  const { skills } = props;

  return (
    <section id="about-me">
      <div className="about-wrapper">
        <h4 className="title">About me </h4>
        <div className="about-grid">
          <img
            src="https://randomuser.me/api/portraits/men/43.jpg"
            alt="profile-pic"
            className="about-img"
          />

          <div className="about-text-container">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga
              exercitationem vitae quasi. Enim explicabo aspernatur maxime,
              maiores sint dolores aliquid repellat necessitatibus impedit
              ducimus quidem, perspiciatis beatae perferendis mollitia
              laboriosam!
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              perferendis ea voluptatem. Odio assumenda aliquam voluptas commodi
              eos nisi recusandae.
            </p>
            <div className="about-skills-container">
              {skills?.map((skill) => (
                <Skill key={skill.id} skill={skill} />
              ))}
            </div>
          </div>
        </div>

        <div className="achievements">
          <div className="achievement">
            <h1 className="gradient-text">8+</h1>
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
        </div>
      </div>
    </section>
  );
};

export default About;
