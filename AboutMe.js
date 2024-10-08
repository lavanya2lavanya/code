import React from 'react';
import './AboutMe.css'; 
import profileImage from '../components/assets/profile.jpg'; 

const AboutMe = () => {
  return (
    <div className="about-me">
      <h1>About Me</h1>
      <div className="profile-image-container">
        <img src={profileImage} alt="Profile" className="profile-image" />
      </div>
      <p>
      Welcome to my portfolio! I’m Sandeep jakkampudi. I did my graduation B-Tech in swarnandhra college joined recently as Associate Full Stack Developer in busitron company.I specialized web applications and have a passion for learning new technologies.
      </p>
     
    </div>
  );
};

export default AboutMe;
