// src/components/Navbar.js
import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const navItems = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/projects", label: "Projects" },
    { to: "/contact", label: "Contact" },
    { to: "/feedback", label: "Feedback" },
    { to: "/updates", label: "Updates" },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        {/* Left: Logo or Title */}
        <NavLink to="/" className="navbar-logo">
          My Portfolio
        </NavLink>

        {/* Right: Nav Links */}
        <div className="navbar-links">
          {navItems.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}