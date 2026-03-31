import { saveEdit } from "./logic.jsx";

export default function Card({obj,onDelete,onEdit,tasks,setTasks}){

    return (
        <> 
            <div 
            className="card"
            onDoubleClick={onEdit}>
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