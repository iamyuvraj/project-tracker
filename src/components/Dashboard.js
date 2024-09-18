import React, { useState } from 'react';
import './Dashboard.css';
import ProjectCard from './ProjectCard';
import TaskList from './TaskList';

const Dashboard = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: 'Project Alpha',
      description: 'Description of Project Alpha',
      tasks: [
        { id: 1, title: 'Task 1', completed: false },
        { id: 2, title: 'Task 2', completed: true },
      ],
    },
    {
      id: 2,
      name: 'Project Beta',
      description: 'Description of Project Beta',
      tasks: [
        { id: 1, title: 'Task 1', completed: false },
        { id: 2, title: 'Task 2', completed: false },
      ],
    },
  ]);

  return (
    <div className="dashboard">
      <h1>Project Tracker Dashboard</h1>
      <div className="project-list">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <h2>Your Tasks</h2>
      <TaskList projects={projects} />
    </div>
  );
};

export default Dashboard;
