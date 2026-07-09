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

  return <div></div>
}
export default App;