// src/components/ProjectDetail.js
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom"; 

export default function ProjectDetail({ projects }) {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id)); 

  const [expanded, setExpanded] = useState(false); 

  if (!project) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
          Project not found
        </h2>
        <Link
          to="/projects"
          className="mt-6 inline-block px-6 py-3 bg-indigo-600 text-white rounded-xl shadow hover:bg-indigo-700 transition"
        >
          Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <section className="project-detail-section">
      <div className="project-detail-grid">
        {/* Project Image */}
        <div className="project-detail-image">
          <img src={project.image} alt={project.name} />
        </div>

        {/* Project Details */}
        <div>
          <h1 className="project-detail-title">{project.name}</h1>

          {project.featured && (
            <span className="project-detail-badge">🌟 Featured</span>
          )}

          <p className="project-detail-description">{project.description}</p>

          <div className="project-detail-tech">
            {project.techStack.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>

          <button
            onClick={() => setExpanded(!expanded)}
            aria-expanded={expanded}
            className="project-detail-moreinfo-btn"
          >
            {expanded ? "Hide Details" : "More Info"}
          </button>

          {expanded && (
            <div className="project-detail-moreinfo">
              <p>{project.moreInfo}</p>
            </div>
          )}

          <div className="project-detail-progress-wrapper">
            <label className="project-detail-progress-label">
              Project Progress ({project.status})
            </label>
            <div
              role="progressbar"
              aria-valuenow={project.progress}
              aria-valuemin={0}
              aria-valuemax={100}
              className="project-detail-progress-bar"
            >
              <div
                className="project-detail-progress-bar-inner"
                style={{ width: `${project.progress}%` }}
              ></div>
            </div>
          </div>

          <div className="project-detail-buttons">
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="live-demo"
              >
                Live Demo
              </a>
            )}
            {project.codeLink && (
              <a
                href={project.codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="view-code"
              >
                View Code
              </a>
            )}
          </div>

          <Link to="/projects" className="project-detail-back">
            ← Back to Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
