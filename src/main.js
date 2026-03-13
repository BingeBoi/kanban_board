import { add } from "./event.js";
import {task} from "./state.js";
const inp = document.getElementById('taskInput')
const addBtn = document.getElementById('addTaskBtn')

const todo = document.getElementById('todo')
const doing = document.getElementById('doing')
const done = document.getElementById('done')

add(addBtn,task,inp,todo)

