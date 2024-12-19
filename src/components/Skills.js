import React from 'react';
import upArrow from '../assets/up-arrow-white.png';
import downArrow from '../assets/down-arrow-white.png';

const Skills = () => (
  <div className="skills main-text-color" id="skills" style={{minHeight: "100vh"}}>
    <a href="#about" className="arrow arrow-up2 arrow-up">
      <img src={upArrow} alt="up arrow" />
    </a>
    <div className="bg-container">
      <h1 className="section-header">Skills</h1>
      <div className="bg bg-skills">Skills</div>
    </div>
    <ul className="skills-list langs">
      <li>
        <i className="fa-solid fa-language"></i>
        <span className="bold">Arabic</span>
        <div className="progress-bar">
          <div className="parent">
            <div className="child" style={{ width: '100%' }}></div>
          </div>
          <div className="percent">100%</div>
        </div>
      </li>
      <li>
        <i className="fa-solid fa-language"></i>
        <span className="bold">English</span>
        <div className="progress-bar">
          <div className="parent">
            <div className="child" style={{ width: '75%' }}></div>
          </div>
          <div className="percent">75%</div>
        </div>
      </li>
      <li>
        <i className="fa-solid fa-language"></i>
        <span className="bold">HTML</span>
        <div className="progress-bar">
          <div className="parent">
            <div className="child" style={{ width: '75%' }}></div>
          </div>
          <div className="percent">75%</div>
        </div>
      </li>
      <li>
        <i className="fa-solid fa-language"></i>
        <span className="bold">CSS</span>
        <div className="progress-bar">
          <div className="parent">
            <div className="child" style={{ width: '75%' }}></div>
          </div>
          <div className="percent">75%</div>
        </div>
      </li>
      <li>
        <i className="fa-solid fa-language"></i>
        <span className="bold">JS</span>
        <div className="progress-bar">
          <div className="parent">
            <div className="child" style={{ width: '75%' }}></div>
          </div>
          <div className="percent">75%</div>
        </div>
      </li>
      <li>
        <i className="fa-solid fa-language"></i>
        <span className="bold">React</span>
        <div className="progress-bar">
          <div className="parent">
            <div className="child" style={{ width: '75%' }}></div>
          </div>
          <div className="percent">75%</div>
        </div>
      </li>
      <li>
        <i className="fa-solid fa-language"></i>
        <span className="bold">PHP</span>
        <div className="progress-bar">
          <div className="parent">
            <div className="child" style={{ width: '75%' }}></div>
          </div>
          <div className="percent">75%</div>
        </div>
      </li>
      <li>
        <i className="fa-solid fa-language"></i>
        <span className="bold">Laravel</span>
        <div className="progress-bar">
          <div className="parent">
            <div className="child" style={{ width: '75%' }}></div>
          </div>
          <div className="percent">75%</div>
        </div>
      </li>
      <li>
        <i className="fa-solid fa-language"></i>
        <span className="bold">MySQL</span>
        <div className="progress-bar">
          <div className="parent">
            <div className="child" style={{ width: '75%' }}></div>
          </div>
          <div className="percent">75%</div>
        </div>
      </li>
      <li>
        <i className="fa-solid fa-language"></i>
        <span className="bold">Git | Github</span>
        <div className="progress-bar">
          <div className="parent">
            <div className="child" style={{ width: '75%' }}></div>
          </div>
          <div className="percent">75%</div>
        </div>
      </li>
    </ul>
    <a href="#projects" className="arrow arrow-down arrow3">
      <img src={downArrow} alt="down arrow" />
    </a>
  </div>
);

export default Skills;
