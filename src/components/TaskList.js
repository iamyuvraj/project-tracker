import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ projects }) => {
  const tasks = projects.flatMap((project) => project.tasks);

  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
};

export default TaskList;
