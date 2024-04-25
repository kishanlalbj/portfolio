import { createContext } from "react";

console.log("local", localStorage.getItem("isDark"));
console.log(
  "context",
  localStorage.getItem("isDark") === "true" ? true : false
);

const ThemeContext = createContext({
  isDark: localStorage.getItem("isDark") === "true" ? true : false
});

export default ThemeContext;
