import React from 'react';
import upArrow from '../assets/up-arrow-white.png';
import downArrow from '../assets/down-arrow-white.png';

const About = () => (
  <div className="about secondary-text-color" id="about" style={{minHeight: "100vh"}}>
    <a href="#hero" className="arrow arrow-up1 arrow-up">
      <img src={upArrow} alt="up arrow" />
    </a>
    <div className="bg-container">
      <h1 className="section-header">About</h1>
      <div className="bg bg-about">About</div>
    </div>
    <div className="content">
      <p className="about-p">
        I am a passionate Computer Engineering graduate with a focus on web development and a commitment to continuous growth...
      </p>
      <ul className="about-list">
        <li><span className="bold">Name:</span> Shams Aldeen Alhajjaj</li>
        <li><span className="bold">Birthday:</span> 20 June 2000</li>
        <li><span className="bold">Degree:</span> Bachelors</li>
        <li><span className="bold">Phone:</span> +962789619688</li>
        <li><span className="bold">Email:</span> alhajjaj0shams@gmail.com</li>
        <li><span className="bold">Address:</span> Amman, Jordan</li>
      </ul>
    </div>
    <a href="#skills" className="arrow arrow-down">
      <img src={downArrow} alt="down arrow" />
    </a>
  </div>
);

export default About;
