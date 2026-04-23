import "./App.css";
import { useState } from "react";
import Card from "./component/card.jsx";
import { edit_card, onDelete,addTask } from "./component/taskActions.js";
import { useEffect } from "react";
import { useRef } from "react";
function App() {
  const todoRef = useRef(null);
  const doingRef = useRef(null);
  const doneRef = useRef(null);
  const [tasks,setTasks] = useState([]);
  const [input,setInputs] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  const [draggingId, setDraggingId] = useState(null);
  const [pendingDrag, setPendingDrag] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  


  useEffect(() => {
  const move = (e) => {
    const x = e.clientX;
    const y = e.clientY;

    setMousePos({ x, y });

    if (pendingDrag && !draggingId) {
      const dx = x - pendingDrag.startX;
      const dy = y - pendingDrag.startY;
      
      if (Math.abs(dx) > 5 || Math.abs(dy) > 5) {
        setDraggingId(pendingDrag.id);
      }
    }
  };

  window.addEventListener("mousemove", move);
  return () => window.removeEventListener("mousemove", move);
}, [pendingDrag, draggingId]);

  useEffect(() => {
  const handleMouseUp = (e) => {
    if (!draggingId && !pendingDrag) return;

    const { clientX, clientY } = e;

    const isInside = (ref) => {
      if (!ref.current) return false;

      const rect = ref.current.getBoundingClientRect();
      const padding = 50;
      return (
        clientX >= rect.left - padding &&
        clientX <= rect.right + padding &&
        clientY >= rect.top - padding &&
        clientY <= rect.bottom + padding
      );
    };

    if (draggingId) {
      if (isInside(todoRef)) {
        moveCard(draggingId, "todo");
      } else if (isInside(doingRef)) {
        moveCard(draggingId, "doing");
      } else if (isInside(doneRef)) {
        moveCard(draggingId, "done");
      }
    }

    setDraggingId(null);
    setPendingDrag(null); // 🔥 important
  };

  window.addEventListener("mouseup", handleMouseUp);
  return () => window.removeEventListener("mouseup", handleMouseUp);
}, [draggingId, pendingDrag]);

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

        <div className="column" ref={todoRef}>
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
                                  pendingDrag={pendingDrag}
                                  setPendingDrag={setPendingDrag}
                                 />
                                 
                    
                  })}
          </div>
        </div>

        <div className="column" ref={doingRef}>
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
                                  pendingDrag={pendingDrag}
                                  setPendingDrag={setPendingDrag}
                                  />
                  })}
          </div>
        </div>

        <div className="column" ref={doneRef}>
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
                                  pendingDrag={pendingDrag}
                                  setPendingDrag={setPendingDrag}
                                 />
                  })}
          </div>
        </div>

      </div>
    </>
  );
}

export default App;
