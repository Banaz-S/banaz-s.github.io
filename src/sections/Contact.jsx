import { motion } from "framer-motion";

import SectionTitle from "../components/common/SectionTitle/SectionTitle";

const Contact = () => {
  return (
    <section
      id="contact"
      className="
        min-h-screen
        px-6
        py-32
        flex
        items-center
      "
    >
      <div className="max-w-4xl mx-auto w-full">
        <SectionTitle subtitle="Let's Connect" title="Contact Me" />

        <motion.div
          initial={{
            opacity: 0,
            y: 80,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
          }}
          className="
            p-10
            rounded-[40px]
            border
            border-black/10 dark:border-white/10
            bg-black/5 dark:bg-white/5
            backdrop-blur-xl
          "
        >
          <div className="space-y-8">
            <div>
              <p className="text-black/70 dark:text-white/70 mb-2">Email</p>

              <a
                href="mailto:banazsleman2004@gmail.com"
                className="
                  text-2xl
                  font-bold
                  hover:text-cyan-400
                  transition-all
                "
              >
                banazsleman2004@gmail.com
              </a>
            </div>

            <div>
              <p className="text-black/70 dark:text-white/70 mb-2">Location</p>

              <h3 className="text-2xl font-bold">Erbil, Kurdistan, Iraq</h3>
            </div>

            <div className="flex flex-wrap gap-5 pt-6">
              <a
                href="https://github.com/Banaz-S"
                target="_blank"
                className="
                  px-8
                  py-4
                  rounded-full
bg-black/5 dark:bg-white/5                 
 hover:bg-black/20 hover:dark:bg-white/20
                  transition-all
                "
              >
                GitHub
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                className="
                  px-8
                  py-4
                  rounded-full
                  border
border-black/10 dark:border-white/10                  hover:bg-black/5 hover:dark:bg-white/5
                  transition-all
                "
              >
                LinkedIn
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
