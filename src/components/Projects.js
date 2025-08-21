import ProjectCard from "./ProjectCard";
export default function Projects() {
  const projects = [
    {
      name: "Freelance Invoices App",
      image: "/assets/project1.png", 
      description: "A web app to create, manage, and track freelance invoices efficiently.",
      liveLink: "https://muzhgan55.github.io/Freelance-invoices-app2/",
      techStack: ["HTML", "CSS", "JavaScript"],
      featured: true,
    },
    {
      name: "The Horizon School Website",
      image: "/assets/horizon-school.png",
      description: "A school portal website providing information and resources for students and parents.",
      liveLink: "https://muzhgan55.github.io/school-site/",
      techStack: ["HTML", "CSS", "JavaScript"],
      featured: true,
    },
    {
      name: "Skylight Cinema",
      image: "/assets/skylight-cinema.png",
      description: "A movie theater website displaying showtimes and movie details.",
      liveLink: "https://muzhgan55.github.io/Movies-theater/",
      techStack: ["HTML", "CSS"],
      featured: true,
    },
  ];

  return (
    <section className="projects">
      <h2>My Projects</h2>
      <p>Here are some of the projects I’ve worked on recently. I enjoy building clean, responsive web apps.</p>
      <div className="grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}