function TaskItem({ task, onToggleTask, onDeleteTask }) {
  return (
    <li className={`task-item ${task.completed ? 'completed' : ''}`}>
      <div className="task-content" onClick={() => onToggleTask(task.id)}>
        <span className="checkbox"></span>
        <span className="task-text">{task.text}</span>
      </div>
      <button onClick={() => onDeleteTask(task.id)} className="delete-button">×</button>
    </li>
  );
}

export default TaskItem;