import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "projects", "skills", "education", "certifications", "contact"];
      const scrollPosition = window.scrollY + 100;

      let currentId = "hero";
      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section && scrollPosition >= section.offsetTop) {
          currentId = sectionId;
        }
      }
      setActiveLink(currentId);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "hero", title: "About" },
    { id: "projects", title: "Projects" },
    { id: "skills", title: "Skills" },
    { id: "education", title: "Education" },
    { id: "certifications", title: "Certifications" },
    { id: "contact", title: "Contact" },
  ];

  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark shadow-sm">
      <div className="container">
        <a className="navbar-brand fw-bold" href="#hero">Madan</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navMenu">
          <ul className="navbar-nav">
            {navLinks.map((link) => (
              <li className="nav-item" key={link.id}>
                <a
                  className={`nav-link ${activeLink === link.id ? "active" : ""}`}
                  href={`#${link.id}`}
                >
                  {link.title}
                </a>
              </li>
            ))}
            <li className="nav-item">
              <a className="btn btn-outline-primary ms-lg-3" href="/Portfolio/New_Resume.pdf" download>
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
