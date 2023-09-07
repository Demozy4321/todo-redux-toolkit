import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, removeTask } from "../redux/slices/todoSlice";

function ToDoList() {
  const tasks = useSelector((state) => state.todo.tasks);
  const dispatch = useDispatch();
  const [taskText, setTaskText] = useState("");

  const handleAddTask = () => {
    if (taskText.trim() !== "") {
      dispatch(addTask({ text: taskText }));
      setTaskText("");
    }
  };

  const handleRemoveTask = (taskText) => {
    dispatch(removeTask(taskText));
  };

  return (
    <div>
      <h2>TODO LIST</h2>

      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Enter Task"
      />
      <button onClick={handleAddTask}>Add Task</button>

      <ol>
        {tasks.map((task, index) => {
          return (
            <li key={index}>
              {task.text}
              <button onClick={() => handleRemoveTask(task.text)}>
                Remove
              </button>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default ToDoList;
