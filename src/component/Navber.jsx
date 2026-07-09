import React, { useState, useEffect } from "react";

const Navber = () => {
  const [active, setActive] = useState("Home");

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
    <div className="nav_bar">
      <div className="left">Portfolio</div>

      <div className="right">

        <a
          href="#Home"
          className={`nav_item ${active === "Home" ? "active" : ""}`}
        >
          Home
        </a>

        <a
          href="#Experince"
          className={`nav_item ${active === "Experince" ? "active" : ""}`}
        >
          Experience
        </a>

        <a
          href="#Skills"
          className={`nav_item ${active === "Skills" ? "active" : ""}`}
        >
          Skills
        </a>

        <a
          href="#Project"
          className={`nav_item ${active === "Project" ? "active" : ""}`}
        >
          Project
        </a>

        <a
          href="#Responsive"
          className={`nav_item ${active === "Responsive" ? "active" : ""}`}
        >
          Responsive Design
        </a>

        <a
          href="#About"
          className={`nav_item ${active === "About" ? "active" : ""}`}
        >
          About Me
        </a>

        <a
          href="#Contact"
          className={`nav_item ${active === "Contact" ? "active" : ""}`}
        >
          Contact
        </a>

      </div>
    </div>
  );
};

export default Navber;