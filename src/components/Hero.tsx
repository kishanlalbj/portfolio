import { BriefcaseBusinessIcon, MapPinIcon } from "lucide-react";
import { motion, stagger } from "motion/react";
import StarFieldPulse from "./Star";
import Navbar from "./Navbar";

const container = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: stagger(0.16),
      when: "beforeChildren"
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } }
};

const Hero = () => {
  return (
    <>
      <div className="relative h-screen">
        <div className="absolute inset-0 -z-10">
          <StarFieldPulse count={80} width="100%" height="100%" />
        </div>

        <Navbar />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
          <div className="flex flex-col flex-col-[1fr_250px] text-[#00000] md:flex-row items-center justify-evenly gap-8">
            <motion.div
              initial={{ y: 16, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              animate={{ y: 0, opacity: 1 }}
              className="w-48 aspect-square rounded-full overflow-hidden grayscale-80 "
            >
              <img
                src="/me.jpeg"
                alt="avatar"
                className="w-full h-full object-cover object-top "
                draggable={false}
              />
            </motion.div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <motion.h1
                variants={item}
                className="text-lg md:text-4xl font-bold my-4 tracking-tight"
              >
                Hey, I am{" "}
                <span className="text-primary underline underline-offset-8">
                  Kishan
                </span>
              </motion.h1>

              <motion.div variants={container} className="flex flex-col gap-3">
                <motion.p
                  variants={item}
                  className="text-sm md:text-lg inline-flex gap-2"
                >
                  <BriefcaseBusinessIcon />
                  Full Stack Developer
                </motion.p>
                <motion.p
                  variants={item}
                  className="text-sm md:text-lg inline-flex gap-2"
                >
                  <MapPinIcon />
                  Banglore, India
                </motion.p>
              </motion.div>

              <motion.div variants={item} className="mt-4">
                <ul className="inline-flex items-center gap-6">
                  <li>
                    <a
                      href="https://linkedin.com/in/kishanlalbj"
                      target="_blank"
                    >
                      <i className="fa-brands fa-linkedin text-3xl"></i>
                    </a>
                  </li>

                  <li>
                    <a href="https://github.com/kishanlalbj" target="_blank">
                      <i className="fa-brands fa-github text-3xl"></i>
                    </a>
                  </li>

                  <li>
                    <a href="mailto:kishanlalbj@gmail.com" target="_blank">
                      <i className="fa fa-envelope text-3xl"></i>
                    </a>
                  </li>
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
