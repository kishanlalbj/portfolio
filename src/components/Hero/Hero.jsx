import { useContext, useEffect, useState } from "react";
import "./Hero.css";
import ThemeContext from "@contexts/ThemeContext";
import useConfetti from "@hooks/useConfetti";
import { track } from "@vercel/analytics/react";

const Hero = (props) => {
  const { isDark } = useContext(ThemeContext);
  const { social, firstName, workTitle, heroText, image, resume } = props;
  const { dots, onMouseMove } = useConfetti();

  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [index, setIndex] = useState(0);
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    let text = `I'm ${firstName}, `;

    let timer = setTimeout(() => {
      setName((prev) => prev.concat(text[index]));
      setIndex((prev) => prev + 1);
    }, 200);

    let timer2;
    if (text.length === index) {
      clearTimeout(timer);

      timer2 = setTimeout(() => {
        setTitle((prev) => prev.concat(workTitle[idx]));
        setIdx((prev) => prev + 1);
      }, 200);
    }

    if (workTitle.length === idx) clearTimeout(timer2);

    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
    };
  }, [index, firstName, workTitle, idx, title]);

  return (
    <div id="home" className="hidden" onMouseMove={onMouseMove}>
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

          <h1 className="hero-title">
            <span className="gradient-text">{name}</span>
            {title}
          </h1>

          <p>{heroText}</p>

          <div className="social-container">
            {social?.map((e) => (
              <a
                key={e.id}
                href={e.url}
                target="_blank"
                onClick={() =>
                  track("Social", { location: "hero", name: e.name })
                }
                className="icon gradient-text"
                title={e.name}
                rel="noopener noreferrer"
              >
                <i className={`fa-brands fa-${e.name} fa-xl`} />
              </a>
            ))}
          </div>

          <div className="hero-action">
            <a
              href={`${resume}`}
              onClick={() => track("View Resume")}
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
