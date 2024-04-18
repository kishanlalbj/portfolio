import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import data from "./assets/data.json";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import { useState } from "react";
import ThemeContext from "./context/ThemeContext";

function App() {
  const [isDark, setDark] = useState(true);

  const handleSwitchTheme = () => {
    setDark((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isDark }}>
      {console.log(isDark)}
      <div className={!isDark ? "light" : "dark"}>
        <Navbar onSwitchTheme={handleSwitchTheme}></Navbar>

        <Hero social={data.social} />

        <div className="container">
          <About skills={data.skills} />

          <Projects projects={data.projects} />

          <Contact />
        </div>

        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
