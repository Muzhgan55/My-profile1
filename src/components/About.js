import { useState } from "react";

export default function About() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="about" className="about p-6 bg-gray-50 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">About Me</h2>
      <p className="mb-4 text-gray-700">
        I am currently learning coding and building projects to improve my skills. 
        My goal is to become a full-stack developer. I enjoy taking on new challenges, 
        exploring creative solutions, and continuously growing as a developer.
      </p>

      <p className="mb-4 text-gray-700">
        In my free time, I love immersing myself in books, enjoying music, and traveling 
        to discover new places and experiences.
      </p>

      {showMore && (
        <p className="mb-4 text-gray-700">
          I also enjoy experimenting with new frameworks and collaborating on
          open-source projects, which helps me learn and contribute to the tech community.
        </p>
      )}

      <button 
        onClick={() => setShowMore(!showMore)} 
        className="btn px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 transition"
      >
        {showMore ? "Show Less" : "Show More"}
      </button>
    </section>
  );
}