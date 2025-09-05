// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Profile from "./components/Profile";
import About from "./components/About";
import FunFacts from "./components/FunFacts";
import Projects from "./components/Projects";
import ProjectDetail from "./components/ProjectDetail";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";
import FeedbackWall from "./components/FeedbackWall";
import ProjectUpdates from "./components/ProjectUpdates";
import ThemeToggle from "./components/ThemeToggle";
import NotFound from "./components/NotFound";

// ===== Projects Data =====
const projectsData = [
  {
    id: 1,
    name: "Freelance Invoices App",
    image: "/assets/project1.png",
    description:
      "A web app to create, manage, and track freelance invoices efficiently.",
    moreInfo:
      "A lightweight web app for freelancers to manage clients and invoices. Easily add clients, create invoices, track total revenue, and monitor paid vs unpaid invoices.",
    liveLink: "https://muzhgan55.github.io/Freelance-invoices-app2/",
    codeLink: "https://github.com/muzhgan55/Freelance-invoices-app2",
    techStack: ["HTML", "CSS", "JavaScript"],
    status: "Completed",
    progress: 100,
    featured: true,
  },
  {
    id: 2,
    name: "The Horizon School Website",
    image: "/assets/horizon-school.png",
    description:
      "A school portal website providing information and resources for students and parents.",
    moreInfo:
      "The Horizon High School Site is where you can find information about students, available courses, and contact information for registration.",
    liveLink: "https://muzhgan55.github.io/school-site/",
    codeLink: "https://github.com/muzhgan55/school-site",
    techStack: ["HTML", "CSS", "JavaScript"],
    status: "In Progress",
    progress: 70,
    featured: true,
  },
  {
    id: 3,
    name: "Skylight Cinema",
    image: "/assets/skylight-cinema.png",
    description:
      "A movie theater website displaying showtimes and movie details.",
    moreInfo:
      "A stylish website for a fictional cinema that displays movies, show times, and more. Perfect for practicing web design basics.",
    liveLink: "https://muzhgan55.github.io/Movies-theater/",
    codeLink: "https://github.com/muzhgan55/Movies-theater",
    techStack: ["HTML", "CSS"],
    status: "Completed",
    progress: 100,
    featured: true,
  },
];

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        {/* Navigation + Theme Toggle */}
        <Navbar />
        <ThemeToggle />

        {/* Main Content */}
        <main className="flex-1 p-4 md:p-8">
          <Routes>
            {/* Home */}
            <Route
              path="/"
              element={
                <>
                  <Hero message="Welcome to my portfolio!" />
                  <Profile
                    name="Muzhgan Rahimi"
                    title="Frontend Developer"
                    bio="I specialize in building responsive and interactive web pages 
                         using modern technologies like React, HTML, CSS, and JavaScript. 
                         Passionate about creating clean and user-friendly interfaces, I aim 
                         to deliver a seamless experience for every user."
                    image="/assets/myprofile.png"
                  />
                </>
              }
            />

            {/* About */}
            <Route
              path="/about"
              element={
                <>
                  <About />
                  <FunFacts />
                </>
              }
            />

            {/* Projects */}
            <Route
              path="/projects"
              element={<Projects projects={projectsData} />}
            />
            <Route
              path="/projects/:id"
              element={<ProjectDetail projects={projectsData} />}
            />

            {/* Contact */}
            <Route path="/contact" element={<ContactForm />} />

            {/* Feedback */}
            <Route path="/feedback" element={<FeedbackWall />} />

            {/* Updates */}
            <Route path="/updates" element={<ProjectUpdates />} />

            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
