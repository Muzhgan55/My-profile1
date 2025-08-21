import { useState } from "react";

export default function FunFacts() {
  const [showMore, setShowMore] = useState(false);

  const hobbies = [
    "📚 Reading books",
    "🎵 Listening to music",
    "✈️ Travelling",
    "👩‍💻 Coding for fun",
    "🍕 Eating pizza",
    "🎬 Watching movies",
    "🏞️ Sightseeing",
  ];

  return (
    <section id="fun-facts" className="fun-facts">
      <h2>🎉 Fun Facts</h2>
      <p>Here are some things I enjoy outside of coding:</p>

      <div className="badges">
        {hobbies.slice(0, showMore ? hobbies.length : 3).map((hobby, i) => (
          <span key={i} className="badge">{hobby}</span>
        ))}
      </div>

      <button onClick={() => setShowMore(!showMore)} className="btn">
        {showMore ? "Show Less" : "Show More"}
      </button>
    </section>
  );
}