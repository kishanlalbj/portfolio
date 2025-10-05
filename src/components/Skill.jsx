import { motion } from "motion/react";

const Skill = ({ img, name }) => {
  return (
    <motion.li className="border border-gray-800 p-4 rounded-md inline-flex items-center justify-center gap-4 hover:shadow-sm shadow-primary w-full">
      <img src={img} alt={name} width={"36px"}></img>
      <p>{name}</p>
    </motion.li>
  );
};

export default Skill;
