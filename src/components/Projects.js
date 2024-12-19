import React from 'react';
import upArrow from '../assets/up-arrow-white.png';
import downArrow from '../assets/down-arrow-white.png';
import feaneResturant from '../assets/Feane-resturant.png'

const Projects = () => (
  <div className="projects secondary-text-color" id="projects" style={{minHeight: "100vh"}}>
    <a href="#skills" className="arrow arrow-up3 arrow-up">
      <img src={upArrow} alt="up arrow" />
    </a>
    <div className="bg-container">
      <h1 className="section-header">Projects</h1>
      <div className="bg bg-projects">Projects</div>
    </div>
    <div className="projects-container">
      <div className="card card1">
        <img src={feaneResturant} alt="Restaurant Website Replica" />
        <div className="card-content">
          <h4 className="bold">Restaurant Website Replica</h4>
          <h5>Technologies: HTML, CSS</h5>
          <p>This project involved replicating a restaurant website design using only HTML and CSS...</p>
        </div>
        <a href="https://shamsalhajjaj.github.io/Restaurant/" className="button">Show review</a>
      </div>
      <div className="card card2">
        <img src={feaneResturant} alt="Restaurant Website Replica" />
        <div className="card-content">
          <h4 className="bold">Restaurant Website Replica</h4>
          <h5>Technologies: HTML, CSS</h5>
          <p>This project involved replicating a restaurant website design using only HTML and CSS...</p>
        </div>
        <a href="https://shamsalhajjaj.github.io/Restaurant/" className="button">Show review</a>
      </div>
      <div className="card card3">
        <img src={feaneResturant} alt="Restaurant Website Replica" />
        <div className="card-content">
          <h4 className="bold">Restaurant Website Replica</h4>
          <h5>Technologies: HTML, CSS</h5>
          <p>This project involved replicating a restaurant website design using only HTML and CSS...</p>
        </div>
        <a href="https://shamsalhajjaj.github.io/Restaurant/" className="button">Show review</a>
      </div>
    </div>
    <a href="#testimonials" className="arrow arrow-down arrow4">
      <img src={downArrow} alt="down arrow" />
    </a>
  </div>
);

export default Projects;