// src/components/ProjectUpdates.js
import React, { useState, useEffect } from "react";

const ProjectUpdates = () => {
  const [updates, setUpdates] = useState([
    "🚀 Portfolio redesign launched!",
    "🌟 Added dark mode support",
    "📂 Uploaded new project: Freelance-invoices App",
    "Working on a new project",
    "The School Portal site is in Progress.",
    "The Skylight Cinema is almost done",
  ]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % updates.length);
    }, 5000); // rotate every 5s
    return () => clearInterval(interval);
  }, [updates.length]);

  return (
    <div className="updates">
      <h2>📢 Project Updates</h2>
      <p className="ticker">{updates[index]}</p>
    </div>
  );
};

export default ProjectUpdates;