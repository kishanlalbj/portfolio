import { useContext } from "react";
import "./Contact.css";
import ThemeContext from "../../context/ThemeContext";

const Contact = (props) => {
  const { isDark } = useContext(ThemeContext);

  const { email } = props;

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
            href={`mailto:${email}`}
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
