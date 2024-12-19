import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => (
  <footer id="footer" className="footer" style={{minHeight: "200px"}}>
    <a href="#" className="button back-to-top-btn">Back to Top</a>
    <div className="links-container">
      <ul className="links">
      <li>
        <a href="https://www.linkedin.com/in/shams-alhajjaj/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
      </li>
      <li>
        <a href="https://github.com/ShamsAlhajjaj" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </li>
      <li>
        <a href="mailto:alhajjaj0shams@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </li>
      </ul>
    </div>
    <ul className="last-ul">
      <li><i className="fa-solid fa-at"></i> Email: alhajjaj0shams@gmail.com</li>
      <li><i className="fa-solid fa-phone"></i> Phone: +962789619688</li>
    </ul>
  </footer>
);

export default Footer;
