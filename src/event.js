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
            "id":getId(),
            "isEditing":false
        }
        task.push(new_task)
        saveState()
        onStateChange(task,column,edit_event,delete_event)
        
        inp.value = ""
        console.log(inp.value)
    })
   
}

export function edit_event (task,card,obj,column){
    
    
        card.addEventListener("dblclick",()=>{
            if(obj.isEditing){
                onStateChange(task,column,edit_event,delete_event)
                obj.isEditing = false;
                return;
            }
            obj.isEditing = true;
            const  inp_element = inp_ele()
            const input = inp_element.querySelector('input')
            const select = inp_element.querySelector('select')
            
            if(card.querySelector('input') || card.querySelector('select')){
                        return;
                    }
        
       
        card.appendChild(inp_element)
            
            input.addEventListener("keydown",(e)=>{
            if(e.key === "Enter"){
                if(input.value.trim() === ""){
                    console.log("put the mf input first stupid");
                return;
                } 
                outp_ele(inp_element,obj)             
                saveState()
                onStateChange(task,column,edit_event,delete_event)
            }
                
            })
            select.addEventListener("change", () => {
                if(input.value.trim() === ""){
                    console.log("put the mf input first stupid");
                return 
                }
                
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

