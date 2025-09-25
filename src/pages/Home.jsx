import Hero from "../components/Hero";
import { motion } from "motion/react";
import Skill from "../components/Skill";
import { useEffect, useState } from "react";
import WorkCard from "../components/WorkCard";
import { MailIcon } from "lucide-react";
import ProjectCard from "../components/ProjectCard";
import Footer from "../components/Footer";
import Title from "../components/Title";

const Home = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/data.json");
      const data = await res.json();
      console.log({ data });
      setData(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <Hero />

      <section>
        <motion.div className="container mx-auto px-4 max-w-6xl" id="about">
          <Title name={"About"} />

          <p className="text-lg leading-8">{data?.personalDetails?.aboutMe1}</p>

          <p className="text-lg leading-8 my-6">
            {data?.personalDetails?.aboutMe2}
          </p>
        </motion.div>
      </section>

      <section>
        <div className="container mx-auto px-4 max-w-6xl my-25">
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {data?.skills?.map((skill, index) => (
              <Skill
                key={skill.id}
                img={skill.logo}
                name={skill.name}
                index={index}
              ></Skill>
            ))}
          </ul>
        </div>
      </section>

      <section>
        <div className="container mx-auto px-4 max-w-6xl my-25" id="work">
          <Title name="Work" />
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data?.works?.map((work, index) => (
              <WorkCard key={work.id} index={index} {...work}></WorkCard>
            ))}
          </ul>
        </div>
      </section>

      <section>
        <div className="container mx-auto px-4 max-w-6xl my-25" id="projects">
          <Title name="Project" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {data?.projects?.map((project, index) => (
              <ProjectCard key={project.id} index={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto px-4 max-w-6xl my-25" id="contact-me">
          <div className="flex flex-col items-center justify-center">
            <Title name="Contact Me"></Title>
            <p className="text-center">
              I&apos;m always open to new opportunities, collaborations, or just
              a good tech chat. Drop me a message and I&apos;ll get back soon.
            </p>

            <a
              role="button"
              href="mailto:kishanlalbj@gmail.com"
              className="inline-flex gap-2 py-2 my-4 text-sm items-center mt-8"
            >
              <MailIcon />
              Contact Me
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
