import './App.css'
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import TaskList from './pages/TaskList';

function App() {
  

  return (
    <Router>
      <Routes>
        <Route path = '/' element ={<TaskList/>}/>
        <Route path = '/' element = {<TaskDisplay/>}/>
      </Routes>
    </Router>
  )
}

export default App
