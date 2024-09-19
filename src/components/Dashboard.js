import React from 'react';
import OverviewCard from './OverviewCard';
import './Dashboard.css'; // Create a Dashboard.css file for styles

const Dashboard = () => {
    const totalProjects = 5;
    const activeTasks = 12;
    const upcomingDeadlines = 3;

    return (
        <div className="dashboard">
            <div className="container">
                <div className="overview">
                    <OverviewCard title="Total Projects" value={totalProjects} />
                    <OverviewCard title="Active Tasks" value={activeTasks} />
                    <OverviewCard title="Upcoming Deadlines" value={upcomingDeadlines} />
                </div>

                <div className="projects">
                    <h2>Your Projects</h2>
                    <ul id="project-list">
                        <li>Project 1</li>
                        <li>Project 2</li>
                        <li>Project 3</li>
                    </ul>
                    <button id="add-project">Add New Project</button>
                </div>

                <div className="activities">
                    <h2>Recent Activities</h2>
                    <ul id="activity-list">
                        <li>Project 1 updated.</li>
                        <li>New task added to Project 2.</li>
                        <li>Project 3 deadline changed.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
