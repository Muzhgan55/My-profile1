// src/components/Projects.js
import ProjectCard from "./ProjectCard";

export default function Projects({ projects }) {
  return (
    <section className="projects">
      <h2 className="text-2xl font-bold mb-4">My Projects</h2>
      <p className="mb-6">
        Here are some of the projects I’ve worked on recently.  
        I enjoy building clean, responsive web apps.
      </p>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
