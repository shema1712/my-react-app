import { useState } from "react";

function TodoList() {
  const [task, setTask] = useState("");
  const [store, setStore] = useState([]);
  const [remove, setRemove] = useState();

  function handleChange(e) {
    setTask(e.target.value);
  }
  function handleAddTask() {
    if (task.trim() !== "") {
      setStore([...store, task]);
      setTask("");
    }
  }
  function handleRemoveTask(indexToRemove) {
    const newStore = store.filter((_, index) => index !== indexToRemove);
    setStore(newStore);
  }

  return (
    <>
      <h1>Todo List App</h1>
      <input type="text" value={task} onChange={handleChange} />
      <button onClick={handleAddTask}>Add Task</button>

      <ul>
        {store.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => handleRemoveTask(index)}>Remove Task</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default TodoList;
