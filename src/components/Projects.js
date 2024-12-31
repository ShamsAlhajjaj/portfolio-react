import React from "react";
import ProjectCard from "./ProjectCard"; // Import the new component
import upArrow from "../assets/up-arrow-white.png";
import downArrow from "../assets/down-arrow-white.png";
import feaneResturant from "../assets/Feane-resturant.png";
import airbnb from "../assets/airbnb-statistics.jpg"
import portfolio from "../assets/portfolio.png"

const Projects = () => {
  const projectData = [
    {
      image: airbnb,
      title: "Airbnb Replica",
      technologies: "HTML, CSS",
      description: "This project involved replicating a Airbnb website design using only HTML and CSS...",
      link: "https://shamsalhajjaj.github.io/Restaurant/",
    },
    {
      image: feaneResturant,
      title: "Restaurant Website Replica",
      technologies: "HTML, CSS",
      description: "This project involved replicating a restaurant website design using only HTML and CSS...",
      link: "https://shamsalhajjaj.github.io/Restaurant/",
    },
    {
      image: portfolio,
      title: "Portfolio",
      technologies: "HTML, CSS, js, React",
      description: "Portfolio to show my skills and projects and some of my info.",
      link: "#",
    },
  ];

  return (
    <div className="projects secondary-text-color" id="projects" style={{ minHeight: "100vh" }}>
      <a href="#skills" className="arrow arrow-up3 arrow-up">
        <img src={upArrow} alt="up arrow" />
      </a>
      <div className="bg-container">
        <h1 className="section-header">Projects</h1>
        <div className="bg bg-projects">Projects</div>
      </div>
      <div className="projects-container">
        {projectData.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.image}
            title={project.title}
            technologies={project.technologies}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
      <a href="#testimonials" className="arrow arrow-down arrow4">
        <img src={downArrow} alt="down arrow" />
      </a>
    </div>
  );
};

export default Projects;
