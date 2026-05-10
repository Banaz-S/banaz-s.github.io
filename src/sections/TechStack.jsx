import { motion } from "framer-motion";

import SectionTitle from "../components/common/SectionTitle/SectionTitle";

import { techStack } from "../data/techstack";

const TechStack = () => {
  return (
    <section
      id="techstack"
      className="
        min-h-screen
        px-6
        py-32
      "
    >
      <div className="max-w-7xl mx-auto">
        <SectionTitle subtitle="Tools & Technologies" title="Tech Stack" />

        <div
          className="
            grid
            grid-cols-2
            md:grid-cols-3
            lg:grid-cols-4
            gap-8
          "
        >
          {techStack.map((item, index) => (
            <motion.div
              key={item}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
              }}
              whileHover={{
                scale: 1.05,
              }}
              className="
                h-40
                rounded-3xl
                border
                border-black/10 dark:border-white/10
                bg-black/5 dark:bg-white/5
                backdrop-blur-xl
                flex
                items-center
                justify-center
                text-center
                text-2xl
                font-bold
                hover:border-cyan-400/40
                transition-all
                duration-300
              "
            >
              {item}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
