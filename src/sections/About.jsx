import { motion } from "framer-motion";
import SectionTitle from "../components/common/SectionTitle/SectionTitle";

const About = () => {
  return (
    <section
      id="about"
      className="
        min-h-screen
        px-6
        py-32
        flex
        items-center
      "
    >
      <div className="max-w-7xl mx-auto w-full">
        <SectionTitle subtitle="Who I Am" title="About Me" />

        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-black/70 dark:text-white/70 leading-relaxed text-lg mb-8">
              I'm a Software Engineering and frontend developer passionate about
              building modern, responsive, and user-friendly applications.
            </p>

            <p className="text-black/70 dark:text-white/70 leading-relaxed text-lg mb-8">
              I have experience working with React, Tailwind CSS, REST APIs,
              PostgreSQL, and responsive web design through real-world projects
              and internship experience.
            </p>

            <p className="text-black/70 dark:text-white/70 leading-relaxed text-lg">
              My goal is to create high-quality digital experiences that are
              both visually appealing and technically strong.
            </p>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="
              grid
              grid-cols-2
              gap-6
            "
          >
            {[
              {
                number: "2+",
                text: "Years Learning Frontend",
              },
              {
                number: "3+",
                text: "Major Projects",
              },
              {
                number: "1",
                text: "Internship Experience",
              },
              {
                number: "100%",
                text: "Passion For Development",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="
                  p-8
                  rounded-3xl
                  border
border-black/10 dark:border-white/10                  bg-black/5 dark:bg-white/5
                  backdrop-blur-xl
                "
              >
                <h3 className="text-4xl font-black mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
                  {item.number}
                </h3>

                <p className="text-black/70 dark:text-white/70">{item.text}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
