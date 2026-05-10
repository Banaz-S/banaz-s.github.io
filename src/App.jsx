import Navbar from "./components/common/Navbar/Navbar";
import Footer from "./components/common/Footer/Footer";
import CursorGlow from "./components/common/CursorGlow/CursorGlow";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import TechStack from "./sections/TechStack";
import Contact from "./sections/Contact";

function App() {
  return (
    <div
      className="
    bg-white
    text-black
    dark:bg-[#050816]
    dark:text-white
    overflow-hidden
    transition-colors
    duration-500
  "
    >
      <CursorGlow />

      <Navbar />

      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <TechStack />
      <Contact />

      <Footer />
    </div>
  );
}

export default App;
