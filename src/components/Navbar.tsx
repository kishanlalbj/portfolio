"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { MenuIcon, XIcon } from "lucide-react";

const links = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact-me" }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative container mx-auto px-4 max-w-6xl my-5">
      <motion.div
        initial={{ y: "-100%", opacity: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        animate={{ y: 0, opacity: 1 }}
        className="h-14 glass-card rounded-xl px-4"
      >
        <div className="flex items-center justify-between h-full">
          <a href="#" className="text-base font-bold tracking-tight">
            <span className="text-primary">&lt;</span>kishanlalbj
            <span className="text-primary">.dev</span>
            <span className="text-white/40"> /</span>
            <span className="text-primary">&gt;</span>
          </a>

          {/* Desktop nav */}
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

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white/60 hover:text-primary duration-200 bg-transparent"
            onClick={() => setIsOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {isOpen ? <XIcon size={18} /> : <MenuIcon size={18} />}
          </button>
        </div>
      </motion.div>

      {/* Mobile dropdown */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="md:hidden glass-card mt-2 rounded-xl px-4 py-4"
        >
          <ul className="flex flex-col gap-4">
            {links.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm text-white/50 hover:text-primary transition-colors duration-200"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
