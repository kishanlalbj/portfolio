import { useEffect } from "react";

const useScrollToTop = () => {
  useEffect(() => {
    const container = document.querySelectorAll("#about-section");
    console.log({ container });
    container?.forEach((entries) => {
      console.log({ entries });
    });
  });
};

export default useScrollToTop;
