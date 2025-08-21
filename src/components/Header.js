import { useEffect, useState } from "react";

export default function Header({ message }) {
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
    <header>
      <h1>Muzhgan Rahimi</h1>

      {/* Custom message */}
      <p>{message || "Welcome to my portfolio! Here you can see my projects, skills, and journey as a developer."}</p>

      {/* Random quote */}
      <p className="quote">“{quote}”</p>
    </header>
  );
}