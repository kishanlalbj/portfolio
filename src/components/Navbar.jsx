import { motion } from "motion/react";

const Navbar = () => {
  return (
    <motion.div
      initial={{ y: "-100%", opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      animate={{ y: 0, opacity: 1 }}
      className="h-18 bg-secondary shadow-2xl container mx-auto px-4 max-w-6xl my-5 rounded-lg"
    >
      <div className="container mx-auto px-4 max-w-6xl flex items-center justify-between h-full">
        <a href="#" className="text-lg font-bold">
          <span className="text-primary">&lt;</span>kishanlalbj
          <span className="text-primary">.dev</span> /
          <span className="text-primary">&gt;</span>
        </a>

        <nav className="hidden md:block">
          <ul className="inline-flex items-center gap-6">
            <li>
              <a
                href="#"
                className="hover:underline hover:underline-offset-8 hover:text-primary"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#about"
                className="hover:underline hover:underline-offset-8 hover:text-primary"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#work"
                className="hover:underline hover:underline-offset-8 hover:text-primary"
              >
                Work
              </a>
            </li>

            <li>
              <a
                href="#projects"
                className="hover:underline hover:underline-offset-8 hover:text-primary"
              >
                Projects
              </a>
            </li>

            <li>
              <a
                href="#contact-me"
                className="hover:underline hover:underline-offset-8 hover:text-primary"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </motion.div>
  );
};

export default Navbar;
