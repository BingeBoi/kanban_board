import { saveEdit } from "./logic.jsx";

export default function Card({obj,onDelete,onEdit,tasks,
    setTasks,selectedId,setSelectedId,draggingId,setDraggingId,mousePos}){

    return (
        <> 
            <div 
            onDoubleClick={onEdit}
            onMouseDown={() => setDraggingId(obj.id)}
            

           style={{
                position: draggingId === obj.id ? "fixed" : "static",
                top: draggingId === obj.id ? mousePos.y - 20 : "auto",
                left: draggingId === obj.id ? mousePos.x - 100 : "auto",
                width: draggingId === obj.id ? "200px" : "100%",
                opacity: draggingId === obj.id ? 0.6 : 1,
                zIndex: draggingId === obj.id ? 1000 : "auto",
                pointerEvents: draggingId === obj.id ? "none" : "auto"
            }}
            className={`card ${selectedId === obj.id ? "selected" : ""}`}
            onClick={()=> setSelectedId(obj.id)}
            >
            
            <div>
                <h5>Card Name</h5>
                {obj.isEditing ? (
                    <>
                            <input 
                                onBlur={(e) => {
                                    const newName = e.target.value
                                    saveEdit(obj.id, newName, obj.status,tasks,setTasks);
                            }}/>
                                   
                    </>)
                :
                    <span>{obj.name}</span>
                }
                
            </div>

            <div>
                <h5>Status</h5>
                          
                {obj.isEditing ? (
                    <> 
                        <select onChange={(e) => {
                                const status = e.target.value
                                saveEdit(obj.id, obj.name, status,tasks,setTasks)
                        }}>
                            <option>todo</option>
                            <option>doing</option>
                            <option>done</option>
                        </select>              
                    </>)
                :
                    <span>{obj.status}</span>
                }
            </div>

            <div>
                <h5>id</h5>
                <span>{obj.id}</span>
            </div>
            
            

            <button onClick={onDelete}>Delete</button>
            </div>
        </>
    )
}