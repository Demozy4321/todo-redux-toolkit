import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, removeTask } from "../redux/reducers/todoSlice";

function ToDoList() {
  const tasks = useSelector((state) => state.todo.tasks);
  const dispatch = useDispatch();
  const [taskText, setTaskText] = useState("");

  const handleAddTask = () => {
    if (taskText.trim() !== "") {
      dispatch(addTask({ text: taskText }));
      setTaskText("");
    }

    // console.log(taskText);
  };

  const handleRemoveTask = (taskText) => {
    dispatch(removeTask(taskText));
  };

  return (
    <div>
      <h2>TODO LIST</h2>

      <ul>
        {tasks.map((task) => {
          <li>
            {task.text}
            <button onClick={dispatch(handleRemoveTask(task.text))}>
              Remove
            </button>
          </li>;
        })}
      </ul>

      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Enter Task"
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
}

export default ToDoList;
