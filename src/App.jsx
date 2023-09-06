import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementCounter,
  incrementCounter,
} from "./redux/reducers/counterSlice";
import ToDoList from "./componenets/todolist";

function App() {
  // const count = useSelector((state) => state.counter.value);
  // const dispatch = useDispatch();

  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => dispatch(incrementCounter())}>
          count is {count}
        </button>
        <button onClick={() => dispatch(decrementCounter())}>Decrement</button>
        <p>{count}</p>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}

      <ToDoList />
    </>
  );
}

export default App;
