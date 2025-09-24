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
              <a href="https://linkedin.com/in/kishanlalbj" target="_blank">
                <i className="fa-brands fa-linkedin text-3xl"></i>
              </a>
            </li>

            <li>
              <a href="https://github.com/kishanlalbj" target="_blank">
                <i className="fa-brands fa-github text-3xl"></i>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </motion.div>
  );
};

export default Navbar;
