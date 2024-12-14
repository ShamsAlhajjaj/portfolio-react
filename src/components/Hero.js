import React from 'react';
import myPic from '../assets/myPic.png';
import downArrow from '../assets/down-arrow-white.png';

const Hero = () => (
  <div className="hero main-text-color" id="hero">
    <div className="img-cont">
      <img src={myPic} alt="Shams Aldeen Alhajjaj" />
    </div>
    <div className="intro">
      <div className="intro_center">
        <h3>I'm</h3>
        <h1>Shams Aldeen Alhajjaj</h1>
        <h2>Full-Stack Developer</h2>
        <a href="/assets/SHAMS AD-DIN AL-HAJJAJ - Resume.pdf" className="button" download>
          Download CV
        </a>
      </div>
    </div>
    <div className="arrow arrow-down arrow-down-1">
      <a href="#about">
        <img src={downArrow} alt="down arrow" />
      </a>
    </div>
  </div>
);

export default Hero;
