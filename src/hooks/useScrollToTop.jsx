import { useEffect } from "react";
import { ScrollToTopObserver } from "../utils";

const useScrollToTop = () => {
  useEffect(() => {
    const container = document.querySelectorAll("#container");

    container?.forEach((e) => {
      ScrollToTopObserver.observe(e);
    });
  });
};

export default useScrollToTop;
