import SectionTitle from "../components/common/SectionTitle/SectionTitle";
import ProjectCard from "../components/projects/ProjectCard";

import { projects } from "../data/projects";

const Projects = () => {
  return (
    <section
      id="projects"
      className="
        min-h-screen
        px-6
        py-32
      "
    >
      <div className="max-w-7xl mx-auto">
        <SectionTitle subtitle="My Work" title="Featured Projects" />

        <div className="grid lg:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
