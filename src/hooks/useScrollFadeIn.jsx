import { useInView } from "motion/react";
import { useRef } from "react";

const useScrollFadeIn = () => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const motionProps = {
    initial: { opacity: 0, y: 100 },
    animate: isInView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.6, ease: "easeOut" }
  };

  return {
    ref,
    motionProps
  };
};

export default useScrollFadeIn;
