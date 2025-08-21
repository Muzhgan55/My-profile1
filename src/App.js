// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Profile from './components/Profile';
import About from './components/About';
import FunFacts from './components/FunFacts';
import Projects from './components/Projects';
import Footer from './components/Footer';

// ✅ Newly added imports
import ContactForm from './components/ContactForm';
import FeedbackWall from './components/FeedbackWall';
import ProjectUpdates from './components/ProjectUpdates';
import ThemeToggle from './components/ThemeToggle';

function App() {
  const projectsData = [
    {
      id: 1,
      name: 'Freelance Invoices App',
      image: '/assets/project1.png',
      description: 'A web app to create, manage, and track freelance invoices efficiently.',
      liveLink: 'https://muzhgan55.github.io/Freelance-invoices-app2/',
      techStack: ['HTML', 'CSS', 'JavaScript'],
      featured: true,
    },
    {
      id: 2,
      name: "The Horizon School Website",
      image: "/assets/horizon-school.png",
      description: "A school portal website providing information and resources for students and parents.",
      liveLink: "https://muzhgan55.github.io/school-site/",
      techStack: ["HTML", "CSS", "JavaScript"],
      featured: true,
    },
    {
      id: 3,
      name: "Skylight Cinema",
      image: "/assets/skylight-cinema.png",
      description: "A movie theater website displaying showtimes and movie details.",
      liveLink: "https://muzhgan55.github.io/Movies-theater/",
      techStack: ["HTML", "CSS"],
      featured: false,
    },
  ];

  return (
    <div>
      {/* Navigation */}
      <Navbar />

      {/* Theme Switcher */}
      <ThemeToggle />

      {/* Home Section */}
      <section id="home">
        <Header message="Welcome to my portfolio!" />
        <Profile 
          name="Muzhgan Rahimi" 
          title="Junior Developer" 
          bio="I am passionate about building responsive and interactive web apps. I enjoy learning new technologies and improving my skills every day." 
          image="/assets/myprofile.png"
        />
      </section>

      {/* About Section */}
      <section id="about">
        <About />
      </section>

      {/* Fun Facts Section */}
      <section id="fun-facts">
        <FunFacts />
      </section>

      {/* Projects Section */}
      <section id="projects">
        <Projects projects={projectsData} />
      </section>

      {/* Contact Section (Interactive Form) */}
      <section id="contact">
        <ContactForm />
      </section>

      {/* Feedback Section */}
      <section id="feedback">
        <FeedbackWall />
      </section>

      {/* Project Updates Section */}
      <section id="updates">
        <ProjectUpdates />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;