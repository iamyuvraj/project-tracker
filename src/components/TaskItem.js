import React from 'react';
import './TaskItem.css';

const TaskItem = ({ task }) => {
  return (
    <li className={`task-item ${task.completed ? 'completed' : ''}`}>
      <input type="checkbox" checked={task.completed} readOnly />
      <span>{task.title}</span>
    </li>
  );
};

export default TaskItem;
