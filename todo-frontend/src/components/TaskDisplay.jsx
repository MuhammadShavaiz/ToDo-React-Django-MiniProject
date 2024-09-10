import React, { useState } from 'react';

const TaskDisplay = ({ Task }) => {
  const [status, setStatus] = useState(Task.completed);

  const taskStatus = async () => {
    const updatedStatus = !status;
    setStatus(updatedStatus);
  
    await fetch(`http://127.0.0.1:8000/api/Tasks/${Task.id}/`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        completed: updatedStatus,
      }),
    });
  };  
  return (
    <div>
      {Task.title}
      <input
        type="checkbox"
        checked={status}
        onChange={taskStatus} // Toggle on change
      />
      {status ? ' - Completed' : ' - Incomplete'}
    </div>
  );
};

export default TaskDisplay;
