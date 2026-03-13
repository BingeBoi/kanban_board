import { card_maker } from "./logic.js";

export function add (addBtn,task,inp,todo){
    
    
    addBtn.addEventListener('click',()=>{
        const card_name = inp.value
        task.push({
            "card_name":card_name,
            "status": "",
            id:0
        })
        const card = card_maker()
        todo.appendChild(card)
    })
}

