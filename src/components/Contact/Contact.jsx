import { useContext } from "react";
import "./Contact.css";
import ThemeContext from "@contexts/ThemeContext";
import Title from "../ui/Title";

const Contact = (props) => {
  const { isDark } = useContext(ThemeContext);

  const { email } = props;

  return (
    <section id="contact-me">
      <div className="hidden">
        <Title text="Contact Me"></Title>
      </div>

      <div className="contacts-container hidden">
        <p>
          I&apos;m currently available for full time work, Please feel free to
          get in touch with me
        </p>

        <div>
          <a
            href={`mailto:${email}`}
            className={`hero-cta ${!isDark ? "hero-cta-light" : ""}`}
          >
            Reach out
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
