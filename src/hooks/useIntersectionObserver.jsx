import observer from "@utils/observer.js";
import { useEffect } from "react";

const useIntersectionObserver = () => {
  useEffect(() => {
    const hiddenElements = document.querySelectorAll(".hidden");

    hiddenElements.forEach((e) => {
      observer.observe(e);
    });
  });
};

export default useIntersectionObserver;
