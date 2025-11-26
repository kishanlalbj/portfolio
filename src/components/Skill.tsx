import { motion } from "motion/react";
import { Skill as SkillType } from "../types";

const Skill = ({ logo, name }: SkillType) => {
  return (
    <motion.li className="border border-gray-800 p-4 rounded-md inline-flex items-center justify-center gap-4 hover:shadow-sm shadow-primary w-full">
      <img src={logo} alt={name} width={"36px"}></img>
      <span className="inline-block">{name}</span>
    </motion.li>
  );
};

export default Skill;
