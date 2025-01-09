import { useContext, useEffect, useState } from "react";
import About from "@components/About/About";
import Contact from "@components/Contact/Contact";
import Hero from "@components/Hero/Hero";
import Navbar from "@components/Navbar/Navbar";
import Projects from "@components/Projects/Projects";
import Work from "@components/Work/Work";
import Footer from "@components/Footer/Footer";
import ThemeContext from "@contexts/ThemeContext";
import useAnimateOnScroll from "@hooks/useAnimateOnScroll";
import data from "./assets/data.json";
import Achievements from "./components/Achievements/Achievements";
import ScrollToTop from "./components/ui/ScrollToTop";
import "./App.css";
import useScrollToTop from "./hooks/useScrollToTop";

function App() {
  const { isDark, setIsDark } = useContext(ThemeContext);

  const localData = localStorage.getItem("isDark");
  const [githubUrl, setGithubUrl] = useState("");

  const getGithubUrl = () => {
    const url = data.social.find((e) => e.name == "github")?.url;
    setGithubUrl(url);
  };

  useAnimateOnScroll();

  useEffect(() => {
    if (!localData) setIsDark(true);
    else setIsDark(localData === "false" ? false : true);
  }, [localData, setIsDark]);

  useEffect(() => {
    getGithubUrl();
  }, []);

  useScrollToTop();

  return (
    <>
      <div
        id="app"
        style={{ position: "absolute" }}
        className={!isDark ? "light" : "dark"}
      >
        <Navbar />

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
              data.personalDetails.aboutMe2
            ]}
            skills={data.skills}
          />

          <section id="work" className="work-and-achievements">
            <Work works={data.works} />

            <Achievements achievements={data.achievements} />
          </section>

          <Projects projects={data.projects} githubUrl={githubUrl} />

          <Contact email={data?.personalDetails?.email} />

          <ScrollToTop />
        </div>

        <Footer />
      </div>
    </>
  );
}

export default App;
