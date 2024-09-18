import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <p>Tasks: {project.tasks.length}</p>
    </div>
  );
};

export default ProjectCard;
