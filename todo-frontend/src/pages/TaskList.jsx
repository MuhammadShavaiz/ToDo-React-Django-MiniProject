import React, { useEffect, useState } from 'react'
import TaskDisplay from '../components/TaskDisplay'

const TaskList = () => {
    const [tasks, setTasks] = useState([])
    useEffect (() =>{
        console.log('fetching')
        let getTask = async ()=> {
            const response = await fetch('http://127.0.0.1:8000/api/Tasks/')
            const data = await response.json()
            setTasks(data)
        }
        getTask()
    },[])
    const updateUI = (id) => {
      setTasks(tasks.filter(task => task.id !== id));
    };
  return (
    <>
            <div>
        {tasks.map((task, index) => (
          <TaskDisplay key={index} Task={task} removeTask={updateUI} />
        ))}
      </div>
</>    
  )
}

export default TaskList
