import React from 'react';
import ProjectCard from './ProjectCard';

const projectData = [
  { id: 1, title: 'Topographical Survey Under NHAI Authority', description: 'Main purpose of the project is to determine mainly volume of traffic moving on the roads at a particular section during a particular time, by using manual counting method. To find and locate boundaries of road and takes co-ordinates for it, find the Encroachments and plot them in Autocad Software.', link: '#1' },
  { id: 2, title: 'Paper and Food waste Management', description: 'In my college involves reducing, reusing, and recycling waste to create a sustainable environment. For paper waste, colleges can implement digital systems to minimize paper use, For food waste, strategies include reducing food waste at the source by offering Educational campaigns and involving students in waste management programs can enhance awareness and participation. Effective waste management not only reduces environmental impact but also encourages responsible behavior among students.', link: '#' },
 
];

const Projects = () => {
  return (
    <div>
      <h1>My Projects</h1>
      <div className="project-list">
        {projectData.map(project => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
