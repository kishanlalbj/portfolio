import { useCallback, useEffect, useState } from "react";
import { animations, calcDistance, colors, selectRandom } from "../utils";

const useConfetti = () => {
  const [dots, setDots] = useState([]);

  const [currentPoint, setCurrentPoint] = useState({ x: 0, y: 0 });

  const renderDot = useCallback(
    (position) => {
      if (calcDistance(currentPoint, position) >= 50) {
        const Dot = (
          <div
            key={crypto.randomUUID()}
            style={{
              position: "absolute",
              left: position.x,
              top: position.y,
              fontSize: `${Math.floor(Math.random() * 2) + 1}em`,
              color: `${selectRandom(colors)}`,
              animation: `${selectRandom(animations)} 1s forwards`
            }}
          >
            <i className="fa-solid fa-star" />
          </div>
        );

        setCurrentPoint(position);
        setDots([...dots, Dot]);
      }
    },
    [currentPoint, dots]
  );

  const handleMouseMove = (e) => {
    renderDot({ x: e.clientX, y: e.clientY });
  };

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     const randomPoint = generateRandomPoint();
  //     renderDot(randomPoint);
  //   }, 500);

  //   return () => clearInterval(timer);
  // }, [renderDot]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (dots.length > 0) {
        const copyDots = [...dots];
        copyDots.splice(0, 150);
        setDots([...copyDots]);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [dots]);

  return {
    dots,
    onMouseMove: handleMouseMove
  };
};

export default useConfetti;
