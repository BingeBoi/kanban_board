import { task } from "./state.js";
export function card_maker(){
    const card =  document.createElement('div')
    card.className = "card"
    
    return card;
}

export function inp_ele(){
    const inp1 = document.createElement('input')
    const inp2 = document.createElement('input')
    
    inp1.type = "string"
    inp2.type = "string"
    
    const inp_container = document.createElement('div')
    inp_container.className = "inp_container"
    inp_container.appendChild(inp1)
    inp_container.appendChild(inp2)
    
    return inp_container;
}

export function outp_ele(inp_container){ 
    const title1 = document.createElement('h1')
    const title2 = document.createElement('h1')
    const title3 = document.createElement('h1')
    const outp1 = document.createElement('span')
    const outp2 = document.createElement('span')
    const outp3 = document.createElement('span')
    outp1.textContent = inp_container[0].value
    outp2.textContent = inp_container[1].value
    outp3.textContent = task.id
    title1.textContent = "Card Name"
    title2.textContent = "Status"
    title3.textContent = "id"

    const outp_container = document.createElement('div')

    outp_container.appendChild(title1)
    outp_container.appendChild(outp1)
    outp_container.appendChild(title2)
    outp_container.appendChild(outp2)
    outp_container.appendChild(title3)
    outp_container.appendChild(outp3)

    return outp_container;

}

export function status_checker (task){

}

