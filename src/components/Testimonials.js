import React from 'react';
import upArrow from '../assets/up-arrow-white.png';

const Testimonials = () => (
  <div className="feedbacks main-text-color" id="testimonials">
    <a href="#projects" className="arrow arrow-up4 arrow-up">
      <img src={upArrow} alt="up arrow" />
    </a>
    <div className="bg-container">
      <h1 className="section-header">Testimonials</h1>
      <div className="bg bg-feedbacks">Testimonials</div>
    </div>
    <div className="parent1">
      <div id="element1">
        <div className="feed-container feed1" id="feed1">
          <i className="fa-solid fa-quote-left"></i>
          <div className="feedback">
            Shams is a highly dedicated individual with excellent attention to detail...
          </div>
          <div className="person">
            <img src="/assets/alaa.jfif" alt="Ala' Mohammad" />
            <div className="name">Ala' Mohammad</div>
            <div className="major">Full Stack Web Developer | Trainer</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Testimonials;
