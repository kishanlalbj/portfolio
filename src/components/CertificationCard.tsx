import { motion } from "motion/react";
import { AwardIcon } from "lucide-react";
import { Achievement } from "../types";

const CertificationCard = ({ title, issuer, date, badge }: Achievement) => {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="glass-card p-5 rounded-xl hover:border-white/20 hover:shadow-[0_8px_30px_rgba(246,241,213,0.05)] transition-all duration-300"
    >
      <div className="flex items-start gap-4">
        <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">
          <AwardIcon size={16} />
        </div>
        <div className="flex-1">
          <h4 className="text-base font-semibold text-white/90">{title}</h4>
          <p className="text-sm text-primary/70 mt-0.5">{issuer}</p>
          <p className="text-xs text-white/30 mt-2">{date}</p>
          {badge && (
            <a
              href={badge}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-xs text-primary/60 hover:text-primary mt-3 transition-colors duration-200"
            >
              View Badge →
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default CertificationCard;
