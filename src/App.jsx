import { useState, useEffect } from 'react';
import AddTaskForm from './AddTaskForm.jsx';
import TaskList from './TaskList.jsx';
import FilterButtons from './FilterButtons.jsx';
import './App.css';

function App() {
  // Lógica para guardar y leer del localStorage
  const [tasks, setTasks] = useState(() => {
    try {
      const savedTasks = localStorage.getItem('tasks');
      return savedTasks ? JSON.parse(savedTasks) : [];
    } catch (error) {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);


  const [filter, setFilter] = useState('todos');

  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text: text,
      completed: false
    };
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const getFilteredTasks = () => {
    switch (filter) {
      case 'activos':
        return tasks.filter(task => !task.completed);
      case 'completados':
        return tasks.filter(task => task.completed);
      default:
        return tasks;
    }
  };

  const filteredTasks = getFilteredTasks();
  const activeTasksCount = tasks.filter(task => !task.completed).length;

  return (
    <div className="todo-app-container">
      <div className="todo-app">
        <header className="app-header">
          <h1>Mis Tareas</h1>
          <p>Tienes {activeTasksCount} tareas pendientes</p>
        </header>

        <AddTaskForm onAddTask={addTask} />
        <FilterButtons currentFilter={filter} onFilterChange={setFilter} />

        <TaskList
          tasks={filteredTasks}
          onToggleTask={toggleTask}
          onDeleteTask={deleteTask}
        />
      </div>
    </div>
  );
}

export default App;