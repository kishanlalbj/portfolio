import { motion } from "motion/react";
import { BriefcaseBusinessIcon } from "lucide-react";
import { Work } from "../types";

const WorkCard = ({ company, from, to, isPresent, designation }: Work) => {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="glass-card p-5 rounded-xl hover:border-white/20 hover:shadow-[0_8px_30px_rgba(246,241,213,0.05)] transition-all duration-300"
    >
      <div className="flex items-start gap-4">
        <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">
          <BriefcaseBusinessIcon size={16} />
        </div>
        <div>
          <h4 className="text-base font-semibold text-white/90">{company}</h4>
          <p className="text-sm text-primary/70 mt-0.5">{designation}</p>
          <p className="text-xs text-white/30 mt-2">
            {from} — {isPresent ? "Present" : to}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default WorkCard;
