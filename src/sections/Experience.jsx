import { motion } from "framer-motion";
import SectionTitle from "../components/common/SectionTitle/SectionTitle";

const Experience = () => {
  return (
    <section
      id="experience"
      className="
        min-h-screen
        px-6
        py-32
      "
    >
      <div className="max-w-5xl mx-auto">
        <SectionTitle subtitle="Career" title="Experience" />

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="
            relative
            border-l
            border-black/10 dark:border-white/10
            pl-10
          "
        >
          <div
            className="
              absolute
              left-[-8px]
              top-3
              w-4
              h-4
              rounded-full
              bg-cyan-400
            "
          />

          <div
            className="
              p-10
              rounded-3xl
              border
              border-black/10 dark:border-white/10
              bg-black/5 dark:bg-white/5
              backdrop-blur-xl
            "
          >
            <p className="text-cyan-400 mb-4">2026</p>

            <h3 className="text-3xl font-bold mb-4">
              Frontend Developer Intern
            </h3>

            <p className="text-black/60 dark:text-white/60 mb-6">
              Fastlink Telecom
            </p>

            <p className="text-black/70 dark:text-white/70 leading-relaxed">
              Worked on frontend development tasks, responsive interfaces, API
              integration, and modern web application workflows using React and
              modern frontend tools.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
