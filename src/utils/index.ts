import { Point } from "../types";

export const animations = ["fall-1", "fall-2", "fall-3"];

export const selectRandom = <T>(arr: T[]): T =>
  arr[Math.floor(Math.floor(Math.random() * arr.length))];

export const calcDistance = (a: Point, b: Point) => {
  const diffX = b.x - a.x,
    diffY = b.y - a.y;

  return Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2));
};

export const generateRandomPoint = () => {
  var width = window.innerWidth - 170;
  var height = window.innerHeight;

  var x = Math.random() * width;
  var y = Math.random() * height;

  return {
    x: x,
    y: y
  };
};

export const ScrollToTopObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const el = document.getElementById("scrollToTop");

    if (entry.isIntersecting) {
      if (el) el.style.display = "block";
    } else {
      if (el) el.style.display = "none";
    }
  });
});
