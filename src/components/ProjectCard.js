export default function ProjectCard({ project }) {
  return (
    <div className="card">
      {/* Project image */}
      <img src={project.image} alt={project.name} />

      {/* Project name */}
      <h3>{project.name}</h3>

      {/* Project description */}
      <p>{project.description}</p>

      {/* Show featured badge if project.featured is true */}
      {project.featured && <span className="featured">🌟 Featured</span>}

      {/* Technologies used */}
      <div className="tech">
        {project.techStack.map((t, i) => (
          <span key={i} className="badge">
            {t}
          </span>
        ))}
      </div>

      {/* Link to live demo */}
      <a 
        href={project.liveLink}  
        target="_blank" 
        rel="noreferrer"
      >
        Live Demo
      </a>
    </div>
  );
}