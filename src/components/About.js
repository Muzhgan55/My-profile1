import { useState } from "react";

export default function About() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="about" className="about p-6 bg-gray-50 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">About Me</h2>
      <p className="mb-4 text-gray-700">
       I Muzhgan Rahimi is a determined and ambitious young learner who has shown remarkable resilience in the face of adversity.  Despite facing significant challenges in continuing formal education, I have actively pursued personal growth and skill development, particularly in skills improvements and leadership.
       I began my education with great enthusiasm, but in 9th grade, I faced an unexpected disruption when the government collapsed, making it impossible to continue formal schooling. Despite this setback, I remained committed to learning and personal development.
      </p>

      <p className="mb-4 text-gray-700">
        Outside academics, I have a passion for exploring new skills and engaging in programs that foster growth. I have developed confidence, leadership, and problem-solving abilities through participation in numerous life-changing programs, reflecting my perseverance and determination.
        </p>

      {showMore && (
        <p className="mb-4 text-gray-700">
          Though still a student, I have begun learning coding and is actively building technical skills that will pave the way for future opportunities. Participation in leadership and skill-building programs has allowed me to make meaningful contributions, collaborate with peers, and strengthen my capabilities despite challenging circumstances.
        My journey illustrates resilience, adaptability, and the power of self-motivation. By pursuing learning independently and engaging in transformational programs. I serves as an inspiring example for others facing adversity. My story highlights that challenges need not define one’s future, and growth is always possible through persistence and courage.
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