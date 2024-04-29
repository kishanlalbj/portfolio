import { createContext } from "react";

const ThemeContext = createContext({
  isDark: localStorage.getItem("isDark") === "false" ? false : true
});

export default ThemeContext;
