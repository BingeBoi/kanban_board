import { start_kanban,edit_event,delete_event } from "./event.js";
import { onStateChange } from "./render.js";
import {task,loadState} from "./state.js";


const inp = document.getElementById('taskInput')
const addBtn = document.getElementById('addTaskBtn')

 const column = {
    todo : document.getElementById('todo'),
    doing : document.getElementById('doing'),
    done : document.getElementById('done')
}


loadState()

start_kanban(addBtn,task,inp,column)

onStateChange(task, column, edit_event,delete_event)

