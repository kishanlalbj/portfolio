import "./Navbar.css";
import { useContext, useRef } from "react";
import ThemeContext from "@contexts/ThemeContext";

const Navbar = (props) => {
  const { onSwitchTheme } = props;
  const { isDark } = useContext(ThemeContext);

  const menuRef = useRef();

  const handleOpen = () => (menuRef.current.style.right = "0");

  const handleClose = () => (menuRef.current.style.right = "-100%");

  return (
    <div className={`navbar ${!isDark ? "navbar-light" : ""}`}>
      <div className="container">
        <a href="#" className="logo">
          <h4 className="logo-text">
            kishanlalbj.<span className="gradient-text">dev</span>
          </h4>
        </a>

        <span className="nav-mob-open" onClick={handleOpen}>
          <i className="fa-solid fa-bars"></i>
        </span>
        <ul
          ref={menuRef}
          className={`nav-menu ${!isDark ? "nav-menu-light" : ""}`}
        >
          <span className="nav-mob-close" onClick={handleClose}>
            <i className="fa-solid fa-xmark nav-mob-close"></i>
          </span>
          <li onClick={handleClose}>
            <a href="#home" className="nav-item">
              Home
            </a>
          </li>
          <li onClick={handleClose}>
            <a href="#about-me" className="nav-item">
              About Me
            </a>
          </li>
          <li onClick={handleClose}>
            <a href="#work" className="nav-item">
              Work
            </a>
          </li>
          <li onClick={handleClose}>
            <a href="#projects" className="nav-item">
              Projects
            </a>
          </li>

          <li onClick={handleClose}>
            <a href="#contact-me" className="nav-item">
              Contact
            </a>
          </li>

          <li onClick={handleClose} className="nav-theme-item">
            <i
              className="fa-solid fa-moon nav-item animated-icon"
              onClick={onSwitchTheme}
              style={{
                display: isDark ? "block" : "none",
                animation: isDark
                  ? "animated-in .2s forwards"
                  : "animated-out 5s forwards"
              }}
            ></i>

            <i
              className="fa-solid fa-sun nav-item"
              style={{
                color: "#FDB813",
                display: !isDark ? "block" : "none",
                animation: !isDark
                  ? "animated-in .2s forwards"
                  : "animated-out 5s forwards"
              }}
              onClick={onSwitchTheme}
            ></i>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
