import { useState } from 'react';

function AddTaskForm({ onAddTask }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onAddTask(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-task-form">
      <input
        type="text"
        className="add-task-input"
        placeholder="¿Qué necesitas hacer?"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit" className="add-task-button">Agregar</button>
    </form>
  );
}

export default AddTaskForm;