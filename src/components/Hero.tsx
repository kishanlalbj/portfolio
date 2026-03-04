import { BriefcaseBusinessIcon, MapPinIcon } from "lucide-react";
import { motion, stagger } from "motion/react";
import StarBackground from "./Star";
import Navbar from "./Navbar";

const container = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: stagger(0.18),
      when: "beforeChildren"
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }
  }
};

const Hero = () => {
  return (
    <>
      <div className="relative h-screen overflow-hidden">
        {/* Galaxy background */}
        <StarBackground count={220} width="100%" height="100%" />

        <Navbar />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-14 max-w-4xl mx-auto">
            {/* ── Avatar with orbital system ────────────────── */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative shrink-0"
            >
              {/* Everything inside floats together */}
              <div className="relative animate-float">
                {/* Deep nebula glow behind avatar */}
                <div
                  className="absolute rounded-full animate-glow-pulse pointer-events-none"
                  style={{
                    inset: "-40px",
                    background:
                      "radial-gradient(circle, rgba(130,80,255,0.18) 0%, rgba(246,200,120,0.10) 40%, transparent 70%)",
                    filter: "blur(24px)"
                  }}
                />

                {/* Outer dashed orbit track */}
                <div
                  className="absolute rounded-full border border-dashed border-white/11"
                  style={{ inset: "-22px" }}
                />

                {/* Inner faint solid orbit track */}
                <div
                  className="absolute rounded-full border border-white/5"
                  style={{ inset: "-12px" }}
                />

                {/* Orbiting dot — clockwise */}
                <div
                  className="absolute"
                  style={{
                    top: "50%",
                    left: "50%",
                    width: 0,
                    height: 0,
                    animation: "orbit-cw 9s linear infinite"
                  }}
                >
                  <div
                    className="absolute rounded-full bg-primary/80"
                    style={{
                      width: "7px",
                      height: "7px",
                      top: "-3.5px",
                      left: "-3.5px",
                      boxShadow:
                        "0 0 10px 3px rgba(246,241,213,0.35), 0 0 4px rgba(246,241,213,0.6)"
                    }}
                  />
                </div>

                {/* Orbiting dot — counter-clockwise, smaller */}
                <div
                  className="absolute"
                  style={{
                    top: "50%",
                    left: "50%",
                    width: 0,
                    height: 0,
                    animation: "orbit-ccw 14s linear infinite"
                  }}
                >
                  <div
                    className="absolute rounded-full bg-white/50"
                    style={{
                      width: "4px",
                      height: "4px",
                      top: "-2px",
                      left: "-2px",
                      boxShadow: "0 0 4px 1px rgba(255,255,255,0.3)"
                    }}
                  />
                </div>

                {/* Avatar image */}
                <div className="w-44 aspect-square rounded-full overflow-hidden border border-white/12 relative">
                  <img
                    src="/me.jpeg"
                    alt="avatar"
                    className="w-full h-full object-cover object-top grayscale-80"
                    draggable={false}
                  />
                  {/* Inner glow overlay */}
                  <div
                    className="absolute inset-0 rounded-full"
                    style={{
                      background:
                        "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.06) 0%, transparent 60%)"
                    }}
                  />
                </div>
              </div>
            </motion.div>

            {/* ── Text content ─────────────────────────────── */}
            <motion.div
              variants={container}
              initial="hidden"
              animate="visible"
              className="text-center md:text-left"
            >
              <motion.p
                variants={item}
                className="text-[11px] uppercase tracking-[0.25em] text-white/35 mb-3"
              >
                Portfolio · 2026
              </motion.p>

              <motion.h1
                variants={item}
                className="text-4xl md:text-6xl font-bold mb-5 leading-tight"
              >
                Hey, I&apos;m <span className="hero-name">Kishan</span>
              </motion.h1>

              <motion.div
                variants={container}
                className="flex flex-col gap-2.5 mb-7"
              >
                <motion.p
                  variants={item}
                  className="text-sm text-white/45 inline-flex items-center gap-2 justify-center md:justify-start"
                >
                  <BriefcaseBusinessIcon
                    size={13}
                    className="text-primary/60"
                  />
                  Full Stack Developer
                </motion.p>
                <motion.p
                  variants={item}
                  className="text-sm text-white/45 inline-flex items-center gap-2 justify-center md:justify-start"
                >
                  <MapPinIcon size={13} className="text-primary/60" />
                  Bangalore, India
                </motion.p>
              </motion.div>

              {/* Social links */}
              <motion.div
                variants={item}
                className="flex items-center gap-5 justify-center md:justify-start"
              >
                <ul className="inline-flex items-center gap-5">
                  <li>
                    <a
                      href="https://linkedin.com/in/kishanlalbj"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/35 hover:text-primary transition-colors duration-200"
                    >
                      <i className="fa-brands fa-linkedin text-xl" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/kishanlalbj"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/35 hover:text-primary transition-colors duration-200"
                    >
                      <i className="fa-brands fa-github text-xl" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:kishanlalbj@gmail.com"
                      className="text-white/35 hover:text-primary transition-colors duration-200"
                    >
                      <i className="fa fa-envelope text-xl" />
                    </a>
                  </li>
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.7 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[9px] uppercase tracking-[0.3em] text-white/20">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 7, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-8 bg-linear-to-b from-white/20 to-transparent"
          />
        </motion.div>
      </div>
    </>
  );
};

export default Hero;
