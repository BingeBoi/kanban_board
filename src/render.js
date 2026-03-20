import { card_maker } from "./logic.js"

export function display (task,column){

        column.todo.innerHTML = ""
        column.doing.innerHTML = ""
        column.done.innerHTML = ""

        task.forEach(obj=>{
            const card = card_maker(obj)
            const status = obj.status
            column[status].appendChild(card)
            edit_event(obj,column)
        });
}