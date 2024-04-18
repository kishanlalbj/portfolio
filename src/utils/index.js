export const colors = [
  "#F1E9DA",
  "#D90368",
  "#2E294E",
  "#541388",
  "#FFD400",
  "#9B287B"
];

// const sizes = ["fa-2xs", "fa-xs", "fa-sm", "fa-lg", "fa-xl"];
export const animations = ["fall-1", "fall-2", "fall-3"];

export const selectRandom = (arr) =>
  arr[Math.floor(Math.floor(Math.random() * arr.length))];

export const calcDistance = (a, b) => {
  const diffX = b.x - a.x,
    diffY = b.y - a.y;

  return Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2));
};

export const generateRandomPoint = () => {
  // Get the dimensions of the browser window.
  var width = window.innerWidth;
  var height = window.innerHeight;

  // Generate a random x and y coordinate.
  var x = Math.random() * width;
  var y = Math.random() * height;

  // Return the random point as an object.
  return {
    x: x,
    y: y
  };
};
