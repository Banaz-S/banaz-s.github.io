import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.7,
        delay: index * 0.15,
      }}
      whileHover={{
        y: -10,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-[32px]
        border
        border-black/10 dark:border-white/10
        bg-black/5 dark:bg-white/5
        backdrop-blur-xl
      "
    >
      {/* Glow */}
      <div
        className={`
          absolute
          inset-0
          opacity-0
          group-hover:opacity-20
          transition-all
          duration-500
          bg-gradient-to-br
          ${project.gradient}
        `}
      />

      {/* Top */}
      <div
        className={`
          h-60
          bg-gradient-to-br
          ${project.gradient}
          relative
          overflow-hidden
          flex
          items-center
          justify-center
        `}
      >
        <h2
          className="
            text-5xl
            font-black
            text-black/20 dark:text-white/20
          "
        >
          {project.title}
        </h2>
      </div>

      {/* Content */}
      <div className="relative z-10 p-8">
        <p className="text-cyan-400 mb-4">{project.subtitle}</p>

        <h3 className="text-3xl font-bold mb-6">{project.title}</h3>

        <p className="text-black/70 dark:text-white/70 leading-relaxed mb-8">
          {project.description}
        </p>

        {/* Tech */}
        <div className="flex flex-wrap gap-3 mb-8">
          {project.tech.map((item) => (
            <span
              key={item}
              className="
                px-4
                py-2
                rounded-full
                bg-black/10 dark:bg-white/10
                text-sm
              "
            >
              {item}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-5">
          <a
            href={project.github}
            target="_blank"
            className="
              flex
              items-center
              gap-3
              px-6
              py-3
              rounded-full
              bg-black/5 dark:bg-white/5
              hover:bg-black/20 hover:dark:bg-white/20
              transition-all
              duration-300
            "
          >
            <FaGithub />
            GitHub
          </a>

          <a
            href={project.live}
            target="_blank"
            className="
              flex
              items-center
              gap-3
              px-6
              py-3
              rounded-full
              border
              border-black/10 dark:border-white/10
              hover:bg-white/5 dark:bg-black/5
              transition-all
              duration-300
            "
          >
            <FaExternalLinkAlt />
            Live
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
