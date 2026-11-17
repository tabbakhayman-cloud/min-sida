function TodoItem({ todo, onToggle, onRemove }) {
  return (
    <li className="todo-item">
      <label className="todo-label">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />
        <span className={todo.completed ? "klar" : ""}>{todo.text}</span>
      </label>

      <button className="todo-ta-bort" onClick={() => onRemove(todo.id)}>
        Ta bort
      </button>
    </li>
  );
}

export default TodoItem;