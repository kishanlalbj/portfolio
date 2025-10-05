import Hero from "../components/Hero";
import { motion } from "motion/react";
import Skill from "../components/Skill";
import { useEffect, useState } from "react";
import WorkCard from "../components/WorkCard";
import { ArrowUp, MailIcon } from "lucide-react";
import ProjectCard from "../components/ProjectCard";
import Footer from "../components/Footer";
import Title from "../components/Title";
import useScrollToTop from "../hooks/useScrollToTop";

const Home = () => {
  const [data, setData] = useState({});

  const listVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } }
  };

  useScrollToTop();

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
    <div className="relative">
      <Hero />

      <section id="about-section">
        <motion.div
          variants={listVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          className="container mx-auto px-4 max-w-6xl"
          id="about"
        >
          <Title name={"About"} />

          <p className="text-lg leading-8">{data?.personalDetails?.aboutMe1}</p>

          <p className="text-lg leading-8 my-6">
            {data?.personalDetails?.aboutMe2}
          </p>
        </motion.div>
      </section>

      <section>
        <div className="container mx-auto px-4 max-w-6xl my-25">
          <motion.ul
            variants={listVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {data?.skills?.map((skill, index) => (
              <motion.li
                key={skill.id}
                variants={itemVariants}
                className="focus:outline-none w-full"
              >
                <Skill img={skill.logo} name={skill.name} index={index} />
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      <section>
        <motion.div
          variants={listVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          className="container mx-auto px-4 max-w-6xl my-25"
          id="work"
        >
          <Title name="Work" />
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data?.works?.map((work, index) => (
              <motion.li
                key={work.id}
                variants={itemVariants}
                className="focus:outline-none"
              >
                <WorkCard key={work.id} index={index} {...work}></WorkCard>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </section>

      <section>
        <motion.div
          variants={listVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          className="container mx-auto px-4 max-w-6xl my-25"
          id="projects"
        >
          <Title name="Projects" />
          <motion.ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {data?.projects?.map((project, index) => (
              <motion.li
                key={project.id}
                variants={itemVariants}
                className="focus:outline-none"
              >
                <ProjectCard key={project.id} index={index} {...project} />
              </motion.li>
            ))}
          </motion.ul>
          <div className="text-center mt-14">
            <a
              role="button"
              href="https://github.com/kishanlalbj?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm"
            >
              More On Github
            </a>
          </div>
        </motion.div>
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
              className="inline-flex gap-2 text-sm items-center mt-8"
            >
              <MailIcon size={16} />
              Contact Me
            </a>
          </div>
        </div>
      </section>

      <a
        href="#"
        id="scrollToTop"
        className="hidden fixed bottom-25 right-25 p-2 rounded-full bg-primary text-secondary"
      >
        <ArrowUp />
      </a>

      <Footer />
    </div>
  );
};

export default Home;
