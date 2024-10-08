import React from 'react';
import './Footer.css'; // Import the CSS file for footer styles

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Sandeep Jakkampudi. All Rights Reserved.</p>
        <div className="social-links">
          <a href="https://github.com/sandeepjsv" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/sandeep jakkampudi" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://twitter.com/Sandeep_Naidu29" target="_blank" rel="noopener noreferrer">Twitter</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
