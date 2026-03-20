import { card_maker,inp_ele,outp_ele } from "./logic.js";
import { display } from "./render.js";
import { getId } from "./state.js";

export function add (addBtn,task,inp,column){
    
    addBtn.addEventListener('click',()=>{
        if(inp.value === ""){
        return;
        }
        const new_task = {
            "card_name":inp.value,
            "status": "todo",
            "id":getId()
        }
        task.push(new_task)
        display(task,column)
        
        inp.value = ""
        console.log(inp.value)
    })
   
}

export function edit_event (task,card,obj,column){

    card.addEventListener("dblclick",()=>{
        if(card.querySelector('input') || card.querySelector('select')){
                    return;
                }
       const  inp_element = inp_ele()
       const input = inp_element.querySelector('input')
       const select = inp_element.querySelector('select')
       
       card.appendChild(inp_element)
        
        input.addEventListener("keydown",(e)=>{
        if(e.key === "Enter"){
            
            outp_ele(inp_element,obj)             
            
            display(task,column)
        }
            
        })
        select.addEventListener("change", () => {
            outp_ele(inp_element,obj)             
            
            display(task,column)
        })
       
      
    })
}

export function start_kanban(addBtn,task,inp,column){
    add(addBtn,task,inp,column)
    
}

