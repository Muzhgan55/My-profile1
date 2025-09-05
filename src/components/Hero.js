import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  const quotes = [
    "The most essential things cannot be seen by our eyes, they can be felt by our hearts. — The Little Prince",
    "Code is like humor. When you have to explain it, it’s bad.",
    "First, solve the problem. Then, write the code.",
    "Talk is cheap. Show me the code.",
  ];

  const [quote, setQuote] = useState("");

  useEffect(() => {
    const random = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[random]);
  }, []);

  return (
    <header
      className="header-hero relative text-center py-24 px-4 md:px-8"
      style={{
        background: `linear-gradient(
          rgba(0,0,0,0.4), 
          rgba(0,0,0,0.2)
        ), url('/assets/hero-bg.jpg') center/cover no-repeat`,
      }}
    >
      {/* Overlay for darkening the image */}
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="relative z-10 max-w-3xl mx-auto text-white">
        {/* Name */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Muzhgan Rahimi
        </h1>

        {/* Tagline / Subheadline */}
        <p className="text-lg md:text-xl mb-6">
          Frontend Developer passionate about creating responsive, user-friendly, and creative web applications.
        </p>

        {/* Random Quote */}
        <blockquote className="italic mb-8 text-gray-200">
          “{quote}”
        </blockquote>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 flex-wrap">
          <Link
            to="/projects"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition w-full sm:w-auto text-center"
          >
            See My Projects
          </Link>

          <Link
            to="/contact"
            className="px-6 py-3 border border-white text-white rounded-lg hover:bg-white hover:text-black transition w-full sm:w-auto text-center"
          >
            Contact Me
          </Link>

          <a
            href="/assets/Muzhgan_Rahimi_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition w-full sm:w-auto text-center"
          >
            My Resume
          </a>
        </div>
      </div>
    </header>
  );
}
