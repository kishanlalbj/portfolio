import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import data from "./assets/data.json";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import { useEffect, useState } from "react";
import ThemeContext from "./context/ThemeContext";
import observer from "./utils/observer.js";

function App() {
  const [isDark, setDark] = useState(
    localStorage.getItem("isDark") === "true" ? true : false
  );

  const handleSwitchTheme = () => {
    localStorage.setItem("isDark", !isDark);
    setDark((prev) => !prev);
  };

  useEffect(() => {
    const hiddenElements = document.querySelectorAll(".hidden");

    hiddenElements.forEach((e) => {
      observer.observe(e);
    });
  }, []);

  return (
    <ThemeContext.Provider value={{ isDark }}>
      <div className={!isDark ? "light" : "dark"}>
        <Navbar onSwitchTheme={handleSwitchTheme}></Navbar>

        <Hero
          firstName={data.personalDetails.firstName}
          lastName={data.personalDetails.lastName}
          workTitle={data.personalDetails.workTitle}
          image={data.personalDetails.profileImg}
          heroText={data.personalDetails.shortIntro}
          resume={data.personalDetails.resume}
          social={data.social}
        />

        <div className="container">
          <About
            aboutText={[
              data.personalDetails.aboutMe1,
              data.personalDetails.aboutMe2
            ]}
            skills={data.skills}
          />

          <Projects projects={data.projects} />

          <Contact />
        </div>

        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
