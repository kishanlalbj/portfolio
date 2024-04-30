import { useEffect, useState } from "react";
import About from "@components/About/About";
import Contact from "@components/Contact/Contact";
import Hero from "@components/Hero/Hero";
import Navbar from "@components/Navbar/Navbar";
import Projects from "@components/Projects/Projects";
import Work from "@components/Work/Work";
import Footer from "@components/Footer/Footer";
import ThemeContext from "@contexts/ThemeContext";
import useIntersectionObserver from "@hooks/useIntersectionObserver";
import data from "./assets/data.json";
import "./App.css";
import Achievements from "./components/Achievements/Achievements";

function App() {
  const localData = localStorage.getItem("isDark");

  const [isDark, setDark] = useState();

  const [githubUrl, setGithubUrl] = useState("");

  const handleSwitchTheme = () => {
    localStorage.setItem("isDark", !isDark);
    setDark((prev) => !prev);
  };

  const getGithubUrl = () => {
    const url = data.social.find((e) => e.name == "github")?.url;
    setGithubUrl(url);
  };

  useIntersectionObserver();

  useEffect(() => {
    getGithubUrl();
  }, []);

  useEffect(() => {
    if (!localData) setDark(true);
    else setDark(localData === "false" ? false : true);
  }, [localData]);

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

          <section id="work" className="work-and-achievements">
            <Work works={data.works} />

            <Achievements achievements={data.achievements} />
          </section>

          <Projects projects={data.projects} githubUrl={githubUrl} />

          <Contact />
        </div>

        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
