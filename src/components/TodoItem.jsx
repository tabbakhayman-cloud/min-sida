function TodoItem({ todo, onToggle, onRemove }) {
  return (
    <li style={{ 
      display: "flex", 
      justifyContent: "space-between", 
      alignItems: "center", 
      padding: "8px 0", 
      borderBottom: "1px solid #e5e7eb" 
    }}>
      <label style={{ display: "flex", alignItems: "center", gap: "10px", cursor: "pointer", flex: 1 }}>
        {/* صندوق الاختيار */}
        <input 
          type="checkbox" 
          checked={todo.completed} 
          onChange={() => onToggle(todo.id)}
          style={{ width: "18px", height: "18px", cursor: "pointer" }}
        />
        {/* إذا كانت مكتملة يصبح النص مشطوباً ورمادياً، وإلا يبقى طبيعياً */}
        <span style={{ 
          textDecoration: todo.completed ? "line-through" : "none",
          color: todo.completed ? "#9ca3af" : "#1f2937"
        }}>
          {todo.text}
        </span>
      </label>

      {/* زر الحذف */}
      <button 
        onClick={() => onRemove(todo.id)}
        style={{ background: "#ef4444", color: "white", border: "none", padding: "4px 8px", borderRadius: "4px", cursor: "pointer" }}
      >
        ✕ Ta bort
      </button>
    </li>
  );
}

export default TodoItem;