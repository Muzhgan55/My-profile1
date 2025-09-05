import { useState } from "react";

export default function About() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="about" className="about p-6 bg-gray-50 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">About Me</h2>
      
      <p className="mb-4 text-gray-700">
        I’m <span className="font-semibold">Muzhgan Rahimi</span>, a determined and ambitious learner who has shown
        resilience in the face of challenges. Despite disruptions in my formal education,
        I’ve pursued personal growth and skill development independently,
        particularly in <span className="font-medium">frontend development</span>, leadership, and problem-solving.
      </p>

      <p className="mb-4 text-gray-700">
        Outside academics, I’m passionate about exploring new skills, joining
        growth-focused programs, and building confidence through real-world experiences.
        These opportunities have strengthened my adaptability, collaboration, and critical
        thinking abilities.
      </p>

      {showMore && (
        <>
          <p className="mb-4 text-gray-700">
            Though still a student, I am actively learning coding and building technical
            projects that reflect my dedication to continuous improvement. My journey
            demonstrates that challenges do not define the future. persistence, courage,
            and adaptability do.
          </p>

          {/* Career Goals */}
          <p className="mb-4 text-gray-700">
            <strong>Career Goal:</strong> I’m seeking an <span className="font-medium">internship in frontend development </span> 
            where I can apply my technical skills, contribute to meaningful projects, and
            continue learning from industry professionals.
          </p>

          {/* Work Philosophy */}
          <p className="mb-4 text-gray-700">
            <strong>Work Philosophy:</strong> I believe in teamwork, creative problem-solving, 
            and continuous learning. Collaboration and knowledge-sharing inspire me to grow 
            while contributing value to every project I join.
          </p>
        </>
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
