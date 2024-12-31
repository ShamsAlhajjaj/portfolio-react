import React from "react";
import useActiveSection from "../hooks/useActiveSection";

const Navbar = () => {
  const sectionIds = ["hero", "about", "skills", "projects", "testimonials"];
  const activeSection = useActiveSection(sectionIds);

  return (
    <nav className="nav">
      <div className="button">
        <a href="assets/SHAMS AD-DIN AL-HAJJAJ - Resume.pdf" download>
          Download CV
        </a>
      </div>
      <ul>
        {sectionIds.map((id) => (
          <li key={id} className={activeSection === id ? "active" : ""}>
            <a href={`#${id}`}>{id.charAt(0).toUpperCase() + id.slice(1)}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
