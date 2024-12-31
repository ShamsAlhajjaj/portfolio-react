import React from "react";

const ProjectCard = ({ image, title, technologies, description, link }) => (
  <div className="card">
    <img src={image} alt={title} />
    <div className="card-content">
      <h4 className="bold">{title}</h4>
      <h5>Technologies: {technologies}</h5>
      <p>{description}</p>
    </div>
    <a href={link} className="button">Show review</a>
  </div>
);

export default ProjectCard;
