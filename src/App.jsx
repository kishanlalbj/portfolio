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
import Achievements from "./components/Achievements/Achievements";
import ScrollToTop from "./components/ui/ScrollToTop";
import { ScrollToTopObserver } from "./utils";
import "./App.css";
import Loader from "./components/ui/Loader";

function App() {
  const localData = localStorage.getItem("isDark");
  const [loading, setLoading] = useState(true);

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
    if (!localData) setDark(true);
    else setDark(localData === "false" ? false : true);
  }, [localData]);

  useEffect(() => {
    getGithubUrl();

    const container = document.querySelectorAll("#container");

    container?.forEach((e) => {
      ScrollToTopObserver.observe(e);
    });

    // Not actually loading anything, just for decorative purpose only
    let timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <ThemeContext.Provider value={{ isDark }}>
      {loading ? (
        <Loader />
      ) : (
        <div
          id="app"
          style={{ position: "absolute" }}
          className={!isDark ? "light" : "dark"}
        >
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

          <div id="container" className="container">
            <About
              aboutText={[
                data.personalDetails.aboutMe1,
                data.personalDetails.aboutMe2,
              ]}
              skills={data.skills}
            />

            <section id="work" className="work-and-achievements">
              <Work works={data.works} />

              <Achievements achievements={data.achievements} />
            </section>

            <Projects projects={data.projects} githubUrl={githubUrl} />

            <Contact />

            <ScrollToTop />
          </div>

          <Footer />
        </div>
      )}
    </ThemeContext.Provider>
  );
}

export default App;
