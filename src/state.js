
export const task = []
export let id = 0
export function saveState (){
     localStorage.setItem("kanban_card",JSON.stringify(task))
}

export function loadState (){
    const save = localStorage.getItem("kanban_board")

    if(save){
        task = JSON.parse("kanban_board")
    }
}