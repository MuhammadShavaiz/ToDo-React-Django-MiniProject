import React, { useEffect, useState } from 'react'
import TaskDisplay from '../components/TaskDisplay'
import './TaskList.css' 

const TaskList = () => {
    const [tasks, getTasks] = useState([])
    const [newTask, setNewTask] = useState('')
    useEffect (() =>{
        console.log('fetching')
        let getTask = async ()=> {
            const response = await fetch('http://127.0.0.1:8000/api/Tasks/')
            const data = await response.json()
            getTasks(data)
        }
        getTask()
    },[])
    const addTask = async () => {
      if (newTask.trim() === '') {
        return; 
      }
      const response = await fetch(`http://127.0.0.1:8000/api/Tasks/create/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({title:newTask}),
    });
    const data = await response.json();
    getTasks((prevTasks) => [...prevTasks, data]);
    setNewTask('')
    }
    const updateUI = (id) => {
      getTasks(tasks.filter(task => task.id !== id));
    };
  return (
    <>
      <div className='task-page'>
      <h1 className='title'>To-Do App</h1>
        <div className='task-display'>
       <div className='task-List'>
        {tasks.map((task, index) => (
          <TaskDisplay key={index} Task={task} removeTask={updateUI} />
        ))}
      </div>
      <div className='task-form'>
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Enter new task"
          />
          <button onClick={addTask}>Add Task</button>
        </div>
        </div>
        </div>
</>    
  )
}

export default TaskList
