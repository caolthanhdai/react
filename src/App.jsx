import { useState, useRef } from "react";

function App() {
  const [todos, setTodos] = useState([]); // state lưu danh sách
  const inputRef = useRef(); // uncontrolled input

  // thêm todo
  function handleAdd(e) {
    e.preventDefault(); // chặn reload
    const value = inputRef.current.value.trim();
    if (value === "") return;
    setTodos([...todos, { id: Date.now(), text: value }]);
    inputRef.current.value = ""; // reset input
  }

  // xóa todo
  function handleDelete(id) {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  return (
    <div>
      <h1>Simple Todo</h1>
      <form onSubmit={handleAdd}>
        <input ref={inputRef} placeholder="Nhập việc cần làm..." />
        <button type="submit">Add</button>
      </form>

      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => handleDelete(todo.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
