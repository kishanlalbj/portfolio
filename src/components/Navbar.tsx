import { motion } from "motion/react";

const links = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact-me" }
];

const Navbar = () => {
  return (
    <motion.div
      initial={{ y: "-100%", opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      animate={{ y: 0, opacity: 1 }}
      className="h-14 glass-card container mx-auto px-4 max-w-6xl my-5 rounded-xl"
    >
      <div className="flex items-center justify-between h-full">
        <a href="#" className="text-base font-bold tracking-tight">
          <span className="text-primary">&lt;</span>kishanlalbj
          <span className="text-primary">.dev</span>
          <span className="text-white/40"> /</span>
          <span className="text-primary">&gt;</span>
        </a>

        <nav className="hidden md:block">
          <ul className="inline-flex items-center gap-8">
            {links.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="text-sm text-white/50 hover:text-primary transition-colors duration-200 relative group"
                >
                  {label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </motion.div>
  );
};

export default Navbar;
