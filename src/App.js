import { useState } from 'react';
import './App.css';
import TasksForm from './components/TasksForm';
import TasksList from './components/TasksList';

function App() {

  const [tasks, setTaskc] = useState([])
  const [newTasks, setNewTaskc] = useState('')

  const addTask = () =>{
    if (newTasks.trim() !== '') {
      setTaskc([...tasks, newTasks])
      setNewTaskc('')
    }
  }

  const deleteTask = (index) => {
    const updateTasks = [...tasks]
    updateTasks.splice (index, 1)
    setTaskc(updateTasks)
  }


  return (
    <div className="App">
      <h1>Todo List</h1>
    <TasksForm newTasks={newTasks} onInputChange={(e) => setNewTaskc (e.target.value)} />

    <TasksList tasks={tasks} onDeleteTasks={deleteTask} />

    </div>
  );
}

export default App;
