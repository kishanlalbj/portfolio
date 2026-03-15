"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ExternalLinkIcon, Code2Icon } from "lucide-react";
import { Project } from "@/types";

const ProjectCard = ({
  title,
  image,
  techStack,
  description,
  liveUrl,
  sourceUrl
}: Project) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="glass-card rounded-xl overflow-hidden group hover:border-white/20 hover:shadow-[0_12px_40px_rgba(246,241,213,0.07)] transition-all duration-300 flex flex-col"
    >
      {/* Image */}
      <div className="h-44 overflow-hidden bg-black/30 relative">
        <Image
          src={`/${image}`}
          alt={title}
          fill
          className="object-contain transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-semibold text-sm text-white/90 mb-2">{title}</h3>
        <p className="text-xs text-white/45 leading-relaxed flex-1">
          {description}
        </p>

        {/* Tech tags */}
        <div className="flex items-center gap-2 flex-wrap my-4">
          {Array.isArray(techStack) &&
            techStack.map((s) => (
              <span
                key={s}
                className="px-2 py-0.5 text-xs rounded-md bg-white/5 border border-white/10 text-white/50"
              >
                {s}
              </span>
            ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-4 pt-3 border-t border-white/5">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/35 hover:text-primary transition-colors duration-200 inline-flex items-center gap-1.5 text-xs"
            >
              <ExternalLinkIcon size={13} />
              Live
            </a>
          )}
          <a
            href={sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/35 hover:text-primary transition-colors duration-200 inline-flex items-center gap-1.5 text-xs"
          >
            <Code2Icon size={13} />
            Source
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
