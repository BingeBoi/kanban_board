
export let task = []
let id = 0

export function getId(){
    id++
    return id;
}

export function saveState (){
     localStorage.setItem("kanban_card",JSON.stringify(task))
}

export function loadState (){
    const save = localStorage.getItem("kanban_card")

    if(save){
        task = JSON.parse(save)
    }
}