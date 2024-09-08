import React, { useEffect, useState } from 'react'
import TaskDisplay from '../components/TaskDisplay'

const TaskList = () => {
    const [tasks, setTasks] = useState([])
    useEffect (() =>{
        let getTask = async ()=> {
            const response = await fetch('http://127.0.0.1:8000/api/Tasks/')
            const data = await response.json()
            setTasks(data)
        }
        getTask()
    },[])
  return (
    <>
      <div>
        {tasks.map((task,index) => (
          TaskDisplay(task, index)
        ))}
      </div> 
</>    
  )
}

export default TaskList
