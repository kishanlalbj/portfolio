import { useContext } from "react";
import ThemeContext from "@contexts/ThemeContext";
import "./index.css";

const Loader = () => {
  const { isDark } = useContext(ThemeContext);

  return (
    <div className={`loader-wrapper ${!isDark && "light"}`}>
      <div className="loader-container">
        <div className="loading-boxes">
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
        </div>
        <p>Building..</p>
      </div>
    </div>
  );
};

export default Loader;
