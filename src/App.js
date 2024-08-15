import React, { useState } from 'react';
import './App.css';

function App() {
  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (todoInput.trim()) {
      setTodos([...todos, todoInput]);
      setTodoInput("");
    }
  };

  const removeTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="container">
      <div className="form-group">
        <label>Hedef</label>
        <input
          type="text"
          value={todoInput}
          onChange={(e) => setTodoInput(e.target.value)}
          className="form-control"
        />
        <button onClick={addTodo} className="btn btn-primary mt-3">Ekle</button>
      </div>
      <ul className="mt-4">
        {todos.map((todo, index) => (
          <li
            key={index}
            onClick={() => removeTodo(index)}
            className="todo-item"
          >
            {todo}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
