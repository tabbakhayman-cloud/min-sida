import { useState } from "react";
import TodoItem from "./TodoItem";
import "./Todo.css";

function Todo() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  function addTodo(e) {
    e.preventDefault();
    if (text.trim() === "") return;
    setTodos((prev) => [
      ...prev,
      { id: Date.now(), text: text.trim(), completed: false },
    ]);
    setText("");
  }

  function toggleTodo(id) {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  }

  function removeTodo(id) {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  }

  return (
    <section className="todo">
      <h2>Att göra</h2>

      <form className="todo-form" onSubmit={addTodo}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Lägg till en uppgift"
          aria-label="Ny uppgift"
        />
        <button type="submit">Lägg till</button>
      </form>

      {todos.length === 0 ? (
        <p className="todo-tom">Inga uppgifter än.</p>
      ) : (
        <ul className="todo-lista">
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={toggleTodo}
              onRemove={removeTodo}
            />
          ))}
        </ul>
      )}
    </section>
  );
}

export default Todo;