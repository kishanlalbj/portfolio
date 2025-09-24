import { motion } from "motion/react";

const WorkCard = ({ company, from, to, isPresent, designation, index }) => {
  return (
    <motion.li
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.2 }}
      className="p-4 border border-secondary hover:shadow-sm shadow-primary rounded-md"
    >
      <div>
        <h4 className="text-lg font-bold">{company}</h4>
        <p>{designation} </p>
        <p>
          {from} - {isPresent ? "now" : to}
        </p>
      </div>
    </motion.li>
  );
};

export default WorkCard;
