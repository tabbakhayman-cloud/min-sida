import { useState } from "react";
import TodoItem from "./TodoItem";

function loadTodos() {
  const saved = localStorage.getItem("todos");
  return saved ? JSON.parse(saved) : [];
}

function TodoList() {
  const [todos, setTodos] = useState(loadTodos());
  const [nyText, setNyText] = useState("");

  function saveAndSetTodos(newTodos) {
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  }

  function addTodo(e) {
    e.preventDefault();
    if (!nyText.trim()) return;

    const nyTodo = {
      id: Date.now(),
      text: nyText,
      completed: false,
    };

    const updatedTodos = [...todos, nyTodo];
    saveAndSetTodos(updatedTodos);
    setNyText("");
  }

  function toggleTodo(id) {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    saveAndSetTodos(updatedTodos);
  }

  function removeTodo(id) {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    saveAndSetTodos(updatedTodos);
  }

  // --- دالة مسح كل المهام نهائياً ---
  function rensaAlla() {
    setTodos([]); // تفريغ الـ State
    localStorage.removeItem("todos"); // حذف المفتاح بالكامل من localStorage
  }

  return (
    <section style={{ padding: "20px", background: "#f9fafb", borderRadius: "8px", margin: "20px 0" }}>
      <h2>Min Att-göra-lista (Todo)</h2>

      <form onSubmit={addTodo} style={{ display: "flex", gap: "10px", marginBottom: "15px" }}>
        <input
          type="text"
          value={nyText}
          onChange={(e) => setNyText(e.target.value)}
          placeholder="Skriv en ny uppgift..."
          style={{ flex: 1, padding: "8px", borderRadius: "4px", border: "1px solid #d1d5db" }}
        />
        <button type="submit" style={{ background: "#3b82f6", color: "white", border: "none", padding: "8px 16px", borderRadius: "4px", cursor: "pointer" }}>
          Lägg till
        </button>
      </form>

      {todos.length === 0 ? (
        <p style={{ color: "#6b7280" }}>Inga uppgifter än. Lägg till en ovanför!</p>
      ) : (
        <>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {todos.map((todo) => (
              <TodoItem 
                key={todo.id} 
                todo={todo}
                onToggle={toggleTodo} 
                onRemove={removeTodo} 
              />
            ))}
          </ul>

          {/* زر مسح الكل يظهر فقط إذا كانت القائمة تحتوي على مهام */}
          <div style={{ marginTop: "15px", textAlign: "right" }}>
            <button 
              onClick={rensaAlla}
              style={{ background: "#6b7280", color: "white", border: "none", padding: "6px 12px", borderRadius: "4px", cursor: "pointer", fontSize: "14px" }}
            >
              Rensa alla uppgifter
            </button>
          </div>
        </>
      )}
    </section>
  );
}

export default TodoList;