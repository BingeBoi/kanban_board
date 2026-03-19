import { start_kanban } from "./event.js";
import {task} from "./state.js";
const inp = document.getElementById('taskInput')
const addBtn = document.getElementById('addTaskBtn')

 const column = {
    todo : document.getElementById('todo'),
    doing : document.getElementById('doing'),
    done : document.getElementById('done')
}

start_kanban(addBtn,task,inp,column)

