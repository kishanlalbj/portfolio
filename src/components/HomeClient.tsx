"use client";

import Hero from "@/components/Hero";
import { motion, AnimatePresence } from "motion/react";
import Skill from "@/components/Skill";
import WorkCard from "@/components/WorkCard";
import { ArrowUp, MailIcon } from "lucide-react";
import ProjectCard from "@/components/ProjectCard";
import CertificationCard from "@/components/CertificationCard";
import Footer from "@/components/Footer";
import Title from "@/components/Title/Title";
import useScrollToTop from "@/hooks/useScrollToTop";
import { Source } from "@/types";

const listVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      when: "beforeChildren"
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const }
  }
};

const Home = ({ data }: { data: Source }) => {
  const showScrollTop = useScrollToTop();

  return (
    <div className="relative">
      <Hero />

      {/* About */}
      <section id="about-section">
        <motion.div
          variants={listVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="container mx-auto px-4 max-w-6xl w-full"
          id="about"
        >
          <Title name="About" />
          <motion.p
            variants={itemVariants}
            className="text-base leading-8 text-white/60 max-w-2xl mx-auto text-center"
          >
            {data?.personalDetails?.aboutMe1}
          </motion.p>
        </motion.div>
      </section>

      {/* Skills */}
      <section>
        <div className="container mx-auto px-4 max-w-6xl w-full">
          <motion.div
            variants={listVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            <Title name="Skills" />
            <ul className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {data?.skills?.map((skill) => (
                <motion.li
                  key={skill.id}
                  variants={itemVariants}
                  className="w-full"
                >
                  <Skill logo={skill.logo} id={skill.id} name={skill.name} />
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Work */}
      <section>
        <motion.div
          variants={listVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="container mx-auto px-4 max-w-6xl w-full"
          id="work"
        >
          <Title name="Work" />
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data?.works?.map((work) => (
              <motion.li key={work.id} variants={itemVariants}>
                <WorkCard key={work.id} {...work} />
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </section>

      {/* Projects */}
      <section>
        <motion.div
          variants={listVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.05 }}
          className="container mx-auto px-4 max-w-6xl w-full"
          id="projects"
        >
          <Title name="Projects" />
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {data?.projects?.map((project) => (
              <motion.li key={project.id} variants={itemVariants}>
                <ProjectCard key={project.id} {...project} />
              </motion.li>
            ))}
          </ul>
          <motion.div variants={itemVariants} className="text-center mt-12">
            <a
              role="button"
              href="https://github.com/kishanlalbj?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm"
            >
              More On Github
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Certifications */}
      <section>
        <motion.div
          variants={listVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="container mx-auto px-4 max-w-6xl w-full"
          id="certifications"
        >
          <Title name="Certifications" />
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data?.achievements?.map((cert) => (
              <motion.li key={cert.id} variants={itemVariants}>
                <CertificationCard {...cert} />
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </section>

      {/* Contact */}
      <section>
        <motion.div
          variants={listVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="container mx-auto px-4 max-w-6xl w-full"
          id="contact-me"
        >
          <div className="flex flex-col items-center justify-center text-center">
            <Title name="Contact Me" />
            <motion.p
              variants={itemVariants}
              className="text-sm text-white/50 max-w-md leading-7"
            >
              I&apos;m always open to new opportunities, collaborations, or just
              a good tech chat. Drop me a message and I&apos;ll get back soon.
            </motion.p>
            <motion.a
              variants={itemVariants}
              role="button"
              href="mailto:kishanlalbj@gmail.com"
              className="inline-flex gap-2 text-sm items-center mt-8"
            >
              <MailIcon size={14} />
              Contact Me
            </motion.a>
          </div>
        </motion.div>
      </section>

      <AnimatePresence>
        {showScrollTop && (
          <motion.a
            href="#"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-10 right-10 p-2 rounded-full bg-primary text-secondary z-50"
          >
            <ArrowUp />
          </motion.a>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default Home;
