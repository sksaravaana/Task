import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([]); // State for tasks
  const [inputValue, setInputValue] = useState(""); // State for the input field

  // Add a new task
  const addTask = () => {
    if (inputValue.trim() === "") return; // Prevent empty tasks
    setTasks([...tasks, { id: Date.now(), text: inputValue, completed: false }]);
    setInputValue(""); // Clear input field
  };

  // Toggle task completion
  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="app">
      <h1>React To-Do List</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Add a new task"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>
      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id} className={task.completed ? "completed" : ""}>
            <span onClick={() => toggleTask(task.id)}>{task.text}</span>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
