import React from 'react';

const Footer = () => (
  <footer id="footer" className="footer">
    <a href="#" className="button back-to-top-btn">Back to Top</a>
    <div className="links-container">
      <ul className="links">
        <a href="https://www.linkedin.com/in/shams-alhajjaj/"><li><i className="fa-brands fa-linkedin-in"></i></li></a>
        <a href="https://github.com/ShamsAlhajjaj"><li><i className="fa-brands fa-github"></i></li></a>
        <a href="mailto:alhajjaj0shams@gmail.com"><li><i className="fa-solid fa-envelope"></i></li></a>
      </ul>
    </div>
    <ul className="last-ul">
      <li><i className="fa-solid fa-at"></i> Email: alhajjaj0shams@gmail.com</li>
      <li><i className="fa-solid fa-phone"></i> Phone: +962789619688</li>
    </ul>
  </footer>
);

export default Footer;
