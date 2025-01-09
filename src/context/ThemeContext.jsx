import { createContext, useState } from "react";

const ThemeContext = createContext({
  isDark: true,
  setIsDark: () => {}
});

export const ThemeContextProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
