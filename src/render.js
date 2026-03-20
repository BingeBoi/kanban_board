
import {edit_event} from "./event.js";


export function card_maker(obj){
    const card =  document.createElement('div')
    card.className = "card"
    const input_container = document.createElement("div")
    
    const title1 = document.createElement('h5')
    const title2 = document.createElement('h5')
    const title3 = document.createElement('h5')
    const outp1 = document.createElement('span')
    const outp2 = document.createElement('span')
    const outp3 = document.createElement('span')
    title1.textContent = "Card Name"
    title2.textContent = "Status"
    title3.textContent = "id"
    outp1.textContent = obj.name
    outp2.textContent = obj.status
    outp3.textContent = obj.id
    input_container.append(title1,outp1,title2,outp2,title3,outp3)
    card.appendChild(input_container)
    card.dataset.id = obj.id
    return card;
}

export function display (task,column){

        column.todo.innerHTML = ""
        column.doing.innerHTML = ""
        column.done.innerHTML = ""

        task.forEach(obj=>{
            const card = card_maker(obj)
            const status = obj.status
            column[status].appendChild(card)
            edit_event(task,card,obj,column)
        });
}