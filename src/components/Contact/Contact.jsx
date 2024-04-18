import { useContext } from "react";
import "./Contact.css";
import ThemeContext from "../../context/ThemeContext";

const Contact = () => {
  const { isDark } = useContext(ThemeContext);

  return (
    <section id="contact-me">
      <div>
        <h1 className="title">Contact me</h1>
      </div>

      <div className="contacts-container">
        <p>
          I&apos;m currently available for full time work, Please feel free to
          get in touch with me
        </p>

        <div>
          <a
            href="mailto:kishanlalbj@gmail.com"
            className={`hero-cta ${!isDark ? "hero-cta-light" : ""}`}
          >
            Let&apos;s Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
