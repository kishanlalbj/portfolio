import { motion } from "motion/react";

const Skill = ({ img, name, index }) => {
  return (
    <motion.li
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.2 }}
      className="border border-gray-800 p-4 rounded-md inline-flex items-center justify-center gap-4 hover:shadow-sm shadow-primary"
    >
      <img src={img} alt={name} width={"36px"}></img>
      <p>{name}</p>
    </motion.li>
  );
};

export default Skill;
