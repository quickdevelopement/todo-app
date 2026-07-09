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

  return <div>
    <ul>
      {
        todos ? todos.map((todo) => (
          <li className="" key={todo.id}>{todo.text}</li>
        )) : <h2>Loading.....</h2>
      }
    </ul>
  </div>
}
export default App;