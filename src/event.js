import { inp_ele,outp_ele } from "./logic.js";
import { onStateChange } from "./render.js";
import { getId,saveState } from "./state.js";

export function add (addBtn,task,inp,column){
    
    addBtn.addEventListener('click',()=>{
        if(inp.value === ""){
        return;
        }
        const new_task = {
            "name":inp.value,
            "status": "todo",
            "id":getId()
        }
        task.push(new_task)
        onStateChange(task,column,edit_event)
        
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
            saveState()
            onStateChange(task,column,edit_event,delete_event)
        }
            
        })
        select.addEventListener("change", () => {
            outp_ele(inp_element,obj)             
            saveState()
            onStateChange(task,column,edit_event,delete_event)
        })
       
      
    })
}

export function delete_event(btn,task,obj,column){
    btn.addEventListener('click',()=>{
        const index = task.indexOf(obj)
        if (index !== -1) {
            task.splice(index, 1)
            saveState()
            onStateChange(task,column,edit_event,delete_event)
        }
    })
}

export function start_kanban(addBtn,task,inp,column){
    add(addBtn,task,inp,column)
    
}

