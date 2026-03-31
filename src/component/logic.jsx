import { getId } from "./state.jsx";

export function addTask (tasks, setTasks, input, setInputs){        

        if(input.trim() === "")return;
        
        const new_task = {
            "name":input,
            "status": "todo",
            "id":getId(),
            "isEditing":false
        }
        setTasks([...tasks,new_task])
        setInputs("")
    }

export function onDelete (setTasks,tasks,task) {
    const filteredTask = tasks.filter(t => t.id !== task.id)
    setTasks(filteredTask)
}
export function edit_card(setTasks,tasks,task){
    const edited = tasks.map(t => t.id === task.id ? {...t , isEditing : true} : t)
    setTasks(edited)
}

export const saveEdit = (id,newName,status,tasks,setTasks) => {
    setTasks(
        tasks.map(task => 
            task.id === id 
            ? {...task,name : newName,status : status,isEditing : false} : task))
}


