import { useState } from "react";




   

export function edit_card (isEditing){

    const [input,setInput] = useState([])
            
    if(isEditing){
        isEditing = false;
        return;
    }
    isEditing = true;
        
    keydown_func(card,input)
    select_func()
        
    
    return (
        <>
            <div>
                <input 
                keydown={"enter"} 
                onKeyDown={keydown_func(e.keydown)}/>
                <select onChange={select_func(e.keydown)}>
                    <option>todo</option>
                    <option>doing</option>
                    <option>done</option>
                </select>
            </div>
            
        </>
    )
    }



    function keydown_func(e){
    if(e.keydown === "enter"){
    if(e.key === "Enter"){
            if(e.value.trim() === ""){
                console.log("put the mf input first stupid");
            return;
            } 
            return card_maker(obj,onDelete,edit_card);  
        }
    }
}

function select_func(e){
    if(e.value.trim() === ""){
                    console.log("put the mf input first stupid");
                return 
                }
                return card_maker(obj,onDelete,edit_card);              
                
}

export function onDelete(task,obj){
    
        const index = task.indexOf(obj)
        if (index !== -1) {
            task.splice(index, 1)
            
        }
    }



