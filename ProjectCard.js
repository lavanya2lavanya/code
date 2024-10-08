import React from 'react';

const ProjectCard = ({ title, description, link }) => {
  return (
    <div className="project-card">
      <h2>{title}</h2>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">View Project</a>
    </div>
  );
};

export default ProjectCard;
