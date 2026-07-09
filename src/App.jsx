import { useState } from "react";

function App() {
  const [task, setTask] = useState("")
  const [todos, setTodos] = useState([]);

  // Step 02
  const handleAddTodo = () => {
    if (task.trim() === "") return;

    const newTodo = {
      id: Date.now(),
      text: task,
      completed: false
    }

    setTodos([...todos, newTodos]);
    setTask("");
  }

  const handleDelete = id => {
    const updatedTodos = todos.filter(
      todo => todo.id !== id
    );
    setTodos(updatedTodos);
  }

  const handleToggle = id => {
    const updatedTodos = todos.map((todo) => todo.id === id ? {
      ...todo,
      completed: !todo.completed,
    } : todo)
    setTodos(updatedTodos)
  }

  return <div>
    <ul>
      {
        todos ? todos.map((todo) => (
          <li className="" key={todo.id}>
            <span>{todo.text}</span>
            <button onClick={() => handleToggle(todo.id)}>{todo.completed ? "Undo" : "Completed"}</button>
            <button onClick={() => handleDelete(todo.id)}>Delete</button>

          </li>
        )) : <h2>Loading.....</h2>
      }
    </ul>
  </div>
}
export default App;