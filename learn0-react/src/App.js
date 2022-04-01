import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

//components
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import About from "./components/About";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);

  const [tasks, setTasks] = useState([]); //[value, modify fn] //"App-level component")

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      console.log(tasksFromServer);
      setTasks(tasksFromServer);
    };
    getTasks();
  }, []);

  //fetch tasks fn
  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json();
    return data;
  };

  //add task
  const addTask = async (task) => {
    const res = await fetch(`http://localhost:5000/tasks/`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    });

    const data = await res.json();

    setTasks([...tasks, data]);

    //   const randomId = Math.floor(Math.random() * 10000) + 1; //no backend, randomly create an id
    //   const newTask = { randomId, ...task };
    //   setTasks([...tasks, newTask]);
  };

  //delete task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
    });
    const newTasks = [...tasks].filter((task) => task.id !== id); //state is immutable
    setTasks(newTasks);
  };

  //Toggle Reminder
  const toggleReminder = async (id) => {
    const updTasks = tasks.map((task) =>
      task.id === id
        ? {
            ...task,
            reminder: !task.reminder,
          }
        : task
    );
    setTasks(updTasks);

    const updTask = updTasks.find((task) => task.id === id);
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updTask),
    });
    // console.log(updTask);
  };

  return (
    <Router>
      <div className="App">
        <Header
          title="Task Tracker"
          onAdd={() => setShowAddTask(!showAddTask)}
          isFormOpen={showAddTask}
        />
        <Routes>
          <Route
            path="/"
            exact
            element={
              <>
                {showAddTask && <AddTask onAdd={addTask} />}
                {tasks.length ? (
                  <Tasks
                    tasks={tasks}
                    onDelete={deleteTask}
                    onToggle={toggleReminder}
                  />
                ) : (
                  "All done! No more tasks to do!"
                )}
                <Footer />
              </>
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
