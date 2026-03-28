import { useState } from "react";
import { display } from "./component/logic.jsx";

function App() {

  const [tasks,setTasks] = useState([]);
  const [input,setInputs] = useState("");
  addTask(tasks, setTasks, input, setInputs)


  return (
    <>
      <h1>Kanban Board</h1>

      <div className="controls">
        <input 
          id="taskInput" 
          type="text" 
          placeholder="New task"
          value = {input}
          onChange={(e)=>{setInputs(e.target.value)}}
          />
        <button id="addTaskBtn" onclick={addTask} >Add Task</button>
      </div>

      <div className="board">

        <div className="column" id="todo">
          <h2>Todo</h2>
          <div classname="task-list"></div>
        </div>

        <div className="column" id="doing">
          <h2>Doing</h2>
          <div className="task-list"></div>
        </div>

        <div className="column" id="done">
          <h2>Done</h2>
          <div className="task-list"></div>
        </div>

      </div>
    </>
  );
}

export default App;
