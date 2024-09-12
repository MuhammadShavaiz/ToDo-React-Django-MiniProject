import React, { useState } from 'react';
import './TaskDisplay.css';

const TaskDisplay = ({ Task, removeTask }) => {
  const [status, setStatus] = useState(Task.completed);

  const taskStatus = async () => {
    const updatedStatus = !status;
    setStatus(updatedStatus);
  
    await fetch(`http://127.0.0.1:8000/api/Tasks/${Task.id}/update/`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        completed: updatedStatus,
      }),
    });
  };

  const deleteTask = async () => {
    await fetch(`http://127.0.0.1:8000/api/Tasks/${Task.id}/delete/`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    removeTask(Task.id);
  };

  return (
    <div className='task-tile'>
      <input
        type="checkbox"
        checked={status}
        onChange={taskStatus}
      />
      <p className={`task-text ${status ? 'completed' : ''}`}>{Task.title}</p>
      <button className='delete-button' onClick={deleteTask}>Delete</button>
    </div>
  );
};

export default TaskDisplay;
