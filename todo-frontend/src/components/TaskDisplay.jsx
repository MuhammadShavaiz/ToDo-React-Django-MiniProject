import React from 'react'

const TaskDisplay = (Task,index) => {
  return (
    <ul key={index}>
      <li>{Task.id}</li>
      <li>{Task.title}</li>
      <li>{Task.completed}</li>
      <li>{Task.created}</li>
    </ul>
  )
}

export default TaskDisplay
