import arrowUp from "../../../assets/arrow-up.svg";
import "./index.css";

const ScrollToTop = () => {
  return (
    <div id="scrollToTop" className="scroll-to-top">
      <a href="#" className="scroll-button">
        <img src={arrowUp} alt="arrow-up"></img>
      </a>
    </div>
  );
};

export default ScrollToTop;
