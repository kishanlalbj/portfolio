import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";
import "./Footer.css";

const Footer = () => {
  const { isDark } = useContext(ThemeContext);

  return (
    <footer className={`${!isDark ? "project-light" : ""}`}>
      <div className={`container footer-container  `}>
        <p> &copy; {new Date().getFullYear()}</p>
        <p>
          developed by{" "}
          <a className="author-link" href="https://github.com/kishanlalbj">
            @kishanlalbj
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
