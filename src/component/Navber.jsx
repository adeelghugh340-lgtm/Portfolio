import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navber = () => {
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("[id]");

      sections.forEach((section) => {
        const top = section.offsetTop - 100;
        const height = section.offsetHeight;

        if (
          window.scrollY >= top &&
          window.scrollY < top + height
        ) {
          setActive(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="nav_bar">

      <div className="lef">
        Portfolio
      </div>

      {/* Mobile Menu Icon */}
      <div
        className="menu_icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="overlay"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      {/* Navigation */}
      <div className={`right ${menuOpen ? "active" : ""}`}>

        <a
          href="#Home"
          className={`nav_item ${active === "Home" ? "active" : ""}`}
          onClick={() => setMenuOpen(false)}
        >
          Home
        </a>

        <a
          href="#Experince"
          className={`nav_item ${active === "Experince" ? "active" : ""}`}
          onClick={() => setMenuOpen(false)}
        >
          Experience
        </a>

        <a
          href="#Skills"
          className={`nav_item ${active === "Skills" ? "active" : ""}`}
          onClick={() => setMenuOpen(false)}
        >
          Skills
        </a>

        <a
          href="#Project"
          className={`nav_item ${active === "Project" ? "active" : ""}`}
          onClick={() => setMenuOpen(false)}
        >
          Project
        </a>

        <a
          href="#Responsive"
          className={`nav_item ${active === "Responsive" ? "active" : ""}`}
          onClick={() => setMenuOpen(false)}
        >
          Responsive Design
        </a>

        <a
          href="#About"
          className={`nav_item ${active === "About" ? "active" : ""}`}
          onClick={() => setMenuOpen(false)}
        >
          About Me
        </a>

        <a
          href="#Contact"
          className={`nav_item ${active === "Contact" ? "active" : ""}`}
          onClick={() => setMenuOpen(false)}
        >
          Contact
        </a>

      </div>

    </nav>
  );
};

export default Navber;