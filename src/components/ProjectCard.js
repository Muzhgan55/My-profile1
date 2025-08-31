// src/components/ProjectCard.js
import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  return (
    <div className="card bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
      {/* Project image or fallback */}
      {project.image ? (
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-48 object-cover"
        />
      ) : (
        <div className="w-full h-48 flex items-center justify-center bg-gray-200 dark:bg-gray-700 text-3xl font-bold">
          {project.name[0]}
        </div>
      )}

      <div className="p-4">
        {/* Title */}
        <h3>{project.name}</h3>

        {/* Status Badge */}
        <span
          className={`status ${
            project.status === "Completed"
              ? "bg-green-100 text-green-700 dark:bg-green-800 dark:text-green-200"
              : project.status === "In Progress"
              ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-800 dark:text-yellow-200"
              : "bg-indigo-100 text-indigo-700 dark:bg-indigo-800 dark:text-indigo-200"
          }`}
        >
          {project.status}
        </span>

        {/* Action buttons */}
        <div className="buttons">
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noreferrer"
              className="demo-btn"
            >
              Live Demo
            </a>
          )}

          {project.codeLink && (
            <a
              href={project.codeLink}
              target="_blank"
              rel="noreferrer"
              className="code-btn"
            >
              Code
            </a>
          )}

          <Link to={`/projects/${project.id}`} className="detail-btn">
            Details →
          </Link>
        </div>
      </div>
    </div>
  );
}
