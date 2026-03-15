import { card_maker,inp_ele,outp_ele } from "./logic.js";
import { display } from "./render.js";
import { id } from "./state.js";

export function add (addBtn,task,inp,todo){
    if(inp.value === ""){
        return;
    }
    
    addBtn.addEventListener('click',()=>{
        const card_name = inp.value
        task.push({
            "card_name":card_name,
            "status": "todo",
            "id":id++
        })
        
        const card = card_maker()
        edit_event(card,todo)
        display(card,todo)
    })
}

export function edit_event (card,todo){

    card.addEventListener("dblclick",()=>{
       const  inp_element = inp_ele()
       const inputs = inp_element.querySelectorAll('input')
       
       card.appendChild(inp_element)
        inputs.forEach(inp => {
            inp.addEventListener("keydown",(e)=>{
            if(e.key === "Enter"){
                const outp = outp_ele(inp_element)             
                card.replaceChildren(outp)
                display(todo,card)
            }
            
       })
       });
      
    })
}

export function start_kanban(addBtn,task,inp,todo){
    add(addBtn,task,inp,todo)
    
}

