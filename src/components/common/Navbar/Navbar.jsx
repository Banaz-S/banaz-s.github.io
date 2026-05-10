import { useState } from "react";
import { motion } from "framer-motion";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

const navItems = [
  {
    title: "About",
    id: "about",
  },
  {
    title: "Skills",
    id: "skills",
  },
  {
    title: "Experience",
    id: "experience",
  },
  {
    title: "Projects",
    id: "projects",
  },
  {
    title: "Contact",
    id: "contact",
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }

    setOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="
      fixed
      top-0
      left-0
      w-full
      z-50
      border-b
      border-white/10
      bg-black/20
      backdrop-blur-xl
    "
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-wider text-white">
          Banaz
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="
                relative
                text-sm
                uppercase
                tracking-[0.2em]
                text-white/70
                hover:text-white
                transition-all
                duration-300
                after:absolute
                after:left-0
                after:-bottom-2
                after:h-[1px]
                after:w-0
                after:bg-white
                after:transition-all
                after:duration-300
                hover:after:w-full
              "
            >
              {item.title}
            </button>
          ))}
        </div>

        <div className="hidden md:flex">
          <ThemeToggle />
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <HiX /> : <HiOutlineMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`
          md:hidden
          overflow-hidden
          transition-all
          duration-500
          bg-black/90
          backdrop-blur-xl
          ${open ? "max-h-[500px] py-8 border-t border-white/10" : "max-h-0"}
        `}
      >
        <div className="flex flex-col items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="
                text-white/70
                hover:text-white
                uppercase
                tracking-[0.2em]
                transition-all
                duration-300
              "
            >
              {item.title}
            </button>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
