import { motion } from "framer-motion";
import SectionTitle from "../components/common/SectionTitle/SectionTitle";
import { skills } from "../data/skills";

const Skills = () => {
  return (
    <section
      id="skills"
      className="
        min-h-screen
        px-6
        py-32
      "
    >
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          subtitle="Professional Strengths"
          title="Skills & Expertise"
        />

        <div className="flex flex-wrap gap-6 justify-center">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.05,
              }}
              whileHover={{
                scale: 1.08,
              }}
              className="
                px-8
                py-5
                rounded-2xl
                border
                border-black/10 dark:border-white/10
                bg-black/5 dark:bg-white/5
                backdrop-blur-xl
                text-lg
                font-medium
                cursor-default
              "
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
