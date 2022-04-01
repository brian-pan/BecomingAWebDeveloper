import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

//components
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

function App() {
  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState( //[value, modify fn] //"App-level component"
        [
            {
                id: 1,
                text: 'Learn React',
                date: '2022.3.31',
                time: '5:10pm',
                reminder: true
            },
            {
                id: 2,
                text: 'Learn React',
                date: '2022.3.31',
                time: '5:20pm',
                reminder: true
            },
            {
                id: 3,
                text: 'Learn wtf',
                date: '2022.3.32',
                time: '5:70pm',
                reminder: true
            },
        ]
    ) 
    
    //add task
    const addTask = (task) => {
      const randomId = Math.floor(Math.random() * 10000) + 1; //no backend, randomly create an id
      const newTask = { randomId, ...task }
      setTasks([...tasks, newTask]) //不是只有obj可以这么写
    }

    //delete task
    const deleteTask = (id) => {
      const newTasks = [...tasks].filter(task => task.id !== id); //state is immutable
        setTasks(newTasks);
    }

    //Toggle Reminder
    const toggleReminder = (id) => {
      setTasks(tasks.map(task => (
        task.id === id ? 
        {
          ...task, 
          reminder: !task.reminder
        } : task
      )))
    }

  return (
    <div className="App">
      <Header title="Task Tracker" onAdd={() => setShowAddTask(!showAddTask)} isFormOpen={showAddTask}/>
      { showAddTask && <AddTask onAdd={addTask}/> } 
      {tasks.length ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>) : ('All done! No more tasks to do!')}
    </div>
  );
}

export default App;
