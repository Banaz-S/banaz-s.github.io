import { motion } from "framer-motion";

const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="mb-20 text-center">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="
          uppercase
          tracking-[0.4em]
          text-cyan-400
          text-sm
          mb-4
        "
      >
        {subtitle}
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="
          text-4xl
          md:text-6xl
          font-black
        "
      >
        {title}
      </motion.h2>
    </div>
  );
};

export default SectionTitle;
