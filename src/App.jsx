import React from "react";

const ToDoApp = () => {
  const [no, setNo] = React.useState(0);
  const [task, setTask] = React.useState("");
  const [taskList, setTaskList] = React.useState([]);

  const handleAddTask = () => {
    const clean = task.trim();
    if (!clean) return;
    setTaskList(prev => [
      ...prev,
      { id: Date.now(), no: Number(no), task: clean, done: false }
    ]);
    setNo(0);
    setTask("");
  };

  const handleToggleDone = (id) => {
    setTaskList(prev =>
      prev.map(item => item.id === id ? { ...item, done: !item.done } : item)
    );
  };

  return (
    <div>
      <h1>To-Do List</h1>

      <div>
        <input
          type="number"
          placeholder="Task Number"
          value={no}
          onChange={e => setNo(e.target.value)}
        />
        <input
          type="text"
          placeholder="Task Description"
          value={task}
          onChange={e => setTask(e.target.value)}
        />
        <button onClick={handleAddTask} disabled={!task.trim()}>
          Add Task
        </button>
      </div>

      <ul>
        {taskList.map(item => (
          <li key={item.id}>
            <input
              type="checkbox"
              checked={item.done}
              onChange={() => handleToggleDone(item.id)}
            />
            <span style={{ textDecoration: item.done ? "line-through" : "none" }}>
              {item.no}: {item.task}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoApp;
