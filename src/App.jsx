import "./App.css";
import { useState } from "react";
import Card from "./component/card.jsx";
import { edit_card, onDelete,addTask } from "./component/logic.jsx";
import { useEffect } from "react";
function App() {

  const [tasks,setTasks] = useState([]);
  const [input,setInputs] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  const [draggingId, setDraggingId] = useState(null);
  const [hoveredColumn, setHoveredColumn] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  useEffect(() => {
  let frame;

  const move = (e) => {
    if (frame) return;

    frame = requestAnimationFrame(() => {
      setMousePos({
        x: e.clientX,
        y: e.clientY
      });
      frame = null;
    });
  };

  window.addEventListener("mousemove", move);
  return () => window.removeEventListener("mousemove", move);
}, []);

  const moveCard = (cardId, newColumn) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === cardId
          ? { ...task, status: newColumn }
          : task
      )
    );
  };
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
        <button id="addTaskBtn" 
        onClick={() => addTask(tasks, setTasks, input, setInputs)} >Add Task</button>
      </div>

      <div className="board">

        <div className={`column ${draggingId && hoveredColumn === "todo" ? "highlight" : ""}`}
          onMouseEnter={() => setHoveredColumn("todo")}
          onMouseLeave={() => setHoveredColumn(null)}
          onMouseUp={() => {
            if (draggingId) {
              moveCard(draggingId, "todo");
            }
            setDraggingId(null);
          }}>
          <h2>Todo</h2>
          <div className="task-list">
            {tasks.filter(task => task.status === "todo")
                  .map(task => {
                    return <Card 
                                  key = {task.id}
                                  obj = {task}
                                  onDelete = {()=>onDelete(setTasks,tasks,task)}
                                  onEdit = {()=>edit_card(setTasks,tasks,task)}
                                  tasks = {tasks}
                                  setTasks = {setTasks}
                                  selectedId={selectedId}
                                  setSelectedId={setSelectedId}
                                  draggingId={draggingId}
                                  setDraggingId={setDraggingId}
                                  mousePos={mousePos}
                                 />
                                 
                    
                  })}
          </div>
        </div>

        <div className={`column ${draggingId && hoveredColumn === "doing" ? "highlight" : ""}`}
          onMouseEnter={() => setHoveredColumn("doing")}
          onMouseLeave={() => setHoveredColumn(null)}
          onMouseUp={() => {
            if (draggingId) {
              moveCard(draggingId, "doing");
            }
            setDraggingId(null);
          }}>
          <h2>Doing</h2>
          <div className="task-list">
            {tasks.filter(task => task.status === "doing")
                  .map(task => {
                    return <Card 
                                  key = {task.id}
                                  obj = {task}
                                  onDelete = {()=>onDelete(setTasks,tasks,task)}
                                  onEdit = {()=>edit_card(setTasks,tasks,task)}
                                  tasks = {tasks}
                                  setTasks = {setTasks}
                                  selectedId={selectedId}
                                  setSelectedId={setSelectedId}
                                  draggingId={draggingId}
                                  setDraggingId={setDraggingId}
                                  mousePos={mousePos}
                                  />
                  })}
          </div>
        </div>

        <div className={`column ${draggingId && hoveredColumn === "done" ? "highlight" : ""}`}
          onMouseEnter={() => setHoveredColumn("done")}
          onMouseLeave={() => setHoveredColumn(null)}
          onMouseUp={() => {
            if (draggingId) {
              moveCard(draggingId, "done");
            }
            setDraggingId(null);
          }}>
          <h2>Done</h2>
          <div className="task-list">
            {tasks.filter(task => task.status === "done")
                  .map(task => {
                    return <Card 
                                  key = {task.id}
                                  obj = {task}
                                  onDelete = {()=>onDelete(setTasks,tasks,task)}
                                  onEdit = {()=>edit_card(setTasks,tasks,task)}
                                  tasks = {tasks}
                                  setTasks = {setTasks}
                                  selectedId={selectedId}
                                  setSelectedId={setSelectedId}
                                  draggingId={draggingId}
                                  setDraggingId={setDraggingId}
                                  mousePos={mousePos}
                                 />
                  })}
          </div>
        </div>

      </div>
    </>
  );
}

export default App;
