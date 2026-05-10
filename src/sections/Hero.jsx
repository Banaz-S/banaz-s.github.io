import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiArrowDown } from "react-icons/hi";
import profileImage from "../assets/images/profile.JPG";

const Hero = () => {
  const scrollToProjects = () => {
    const section = document.getElementById("projects");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      className="
        relative
        min-h-screen
        overflow-hidden
        flex
        items-center
        justify-center
        px-6
      "
    >
      {/* Background Glow */}
      <div
        className="
          absolute
          top-[-200px]
          left-[-100px]
          w-[500px]
          h-[500px]
          bg-purple-500/20
          blur-[120px]
          rounded-full
        "
      />

      <div
        className="
          absolute
          bottom-[-200px]
          right-[-100px]
          w-[500px]
          h-[500px]
          bg-cyan-500/20
          blur-[120px]
          rounded-full
        "
      />

      {/* Content */}
      <div
        className="
          relative
          z-10
          max-w-7xl
          mx-auto
          w-full
          grid
          lg:grid-cols-2
          gap-20
          items-center
        "
      >
        {/* Left */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="
              uppercase
              tracking-[0.4em]
              text-sm
              text-cyan-400
              mb-6
            "
          >
            Frontend Developer
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="
              text-5xl
              md:text-7xl
              font-black
              leading-tight
              mb-8
            "
          >
            Hi, I'm{" "}
            <span
              className="
                bg-gradient-to-r
                from-cyan-400
                to-purple-500
                text-transparent
                bg-clip-text
              "
            >
              Banaz
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="
              text-black/70 dark:text-white/70
              text-lg
              leading-relaxed
              max-w-2xl
              mb-10
            "
          >
            Software Engineering and frontend developer passionate about
            building modern, responsive, and user-friendly web applications
            using React, Tailwind CSS, and modern web technologies.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="flex flex-wrap gap-5"
          >
            <button
              onClick={scrollToProjects}
              className="
                px-8
                py-4
                rounded-full
                bg-gradient-to-r
                from-cyan-500
                to-purple-500
                font-semibold
                hover:scale-105
                transition-all
                duration-300
              "
            >
              View Projects
            </button>

            <a
              href="/Banaz-CV.pdf"
              download
              className="
                px-8
                py-4
                rounded-full
                border
                border-black/20 dark:border-white/20
                bg-black/5 dark:bg-white/5
                backdrop-blur-md
                hover:bg-black/10 hover:dark:bg-white/10
                transition-all
                duration-300
              "
            >
              Download CV
            </a>
          </motion.div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex items-center gap-6 mt-12"
          >
            <a
              href="https://github.com/Banaz-S"
              target="_blank"
              className="
                text-3xl
                text-black/70 dark:text-white/70
                hover:text-black hover:dark:text-white 
                hover:scale-110
                transition-all
                duration-300
              "
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              className="
                text-3xl
                text-black/70 dark:text-white/70
                hover:text-black hover:dark:text-white 
                hover:scale-110
                transition-all
                duration-300
              "
            >
              <FaLinkedin />
            </a>
          </motion.div>
        </div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="
            relative
            hidden
            lg:flex
            items-center
            justify-center
          "
        >
          <div
            className="
              w-[400px]
              h-[400px]
              rounded-full
              bg-gradient-to-r
              from-cyan-500
              to-purple-500
              p-[2px]
            "
          >
            <div
              className="
    w-full
    h-full
    rounded-full
    overflow-hidden
    bg-[#050816]
  "
            >
              <img
                src={profileImage}
                alt="Banaz"
                className="
      w-full
      h-full
      object-cover
    "
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
        }}
        className="
          absolute
          bottom-10
          left-1/2
          -translate-x-1/2
          text-black/50 dark:text-white/50
          text-3xl
        "
      >
        <HiArrowDown />
      </motion.div>
    </section>
  );
};

export default Hero;
