"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Skill as SkillType } from "@/types";

const Skill = ({ logo, name }: SkillType) => {
  return (
    <motion.div
      whileHover={{ y: -3, scale: 1.03 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="glass-card p-4 rounded-xl inline-flex items-center justify-center gap-3 w-full hover:border-white/20 hover:shadow-[0_0_20px_rgba(246,241,213,0.06)] transition-all duration-300 group cursor-default"
    >
      <Image
        src={logo}
        alt={name}
        width={28}
        height={28}
        className="transition-transform duration-200 group-hover:scale-110"
      />
      <span className="text-sm text-white/60 group-hover:text-white/90 transition-colors duration-200">
        {name}
      </span>
    </motion.div>
  );
};

export default Skill;
