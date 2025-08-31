import { useEffect, useState } from "react";

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
    <header className="header-hero">
      {/* Name */}
      <h1>Muzhgan Rahimi</h1>

      {/* Tagline / Message */}
      <p>
        Welcome to my portfolio! Explore my projects, skills, and journey as a developer.
      </p>

      {/* Random quote */}
      <blockquote className="hero-quote">
        “{quote}”
      </blockquote>
    </header>
  );
}
