import { task } from "./state.js";
export function card_maker(new_task){
    const card =  document.createElement('div')
    card.className = "card"
    const input_container = document.createElement("div")
    const name = new_task.name
    const status = new_task.status
    const id = new_task.id
    const title1 = document.createElement('h5')
    const title2 = document.createElement('h5')
    const title3 = document.createElement('h5')
    const outp1 = document.createElement('span')
    const outp2 = document.createElement('span')
    const outp3 = document.createElement('span')
    title1.textContent = "Card Name"
    title2.textContent = "Status"
    title3.textContent = "id"
    outp1.textContent = name
    outp2.textContent = status
    outp3.textContent = id
    input_container.append(title1,outp1,title2,outp2,title3,outp3)
    card.appendChild(input_container)

    return card;
}

export function inp_ele(){
    const inp1 = document.createElement('input')
    const select = document.createElement('select')

    const options = ["todo","doing","done"]

    options.forEach(status => {
        const opt = document.createElement('option')
        opt.value = status
        opt.textContent = status
        select.appendChild(opt)
    })
    
    const inp_container = document.createElement('div')
    inp_container.className = "inp_container"

    inp_container.appendChild(inp1)
    inp_container.appendChild(select)
    
    return inp_container;
}

export function outp_ele(inp_container,id){ 
    const inputs = inp_container.querySelector('input')
    const select = inp_container.querySelector('select')
    const title1 = document.createElement('h5')
    const title2 = document.createElement('h5')
    const title3 = document.createElement('h5')
    const outp1 = document.createElement('span')
    const outp2 = document.createElement('span')
    const outp3 = document.createElement('span')
    outp1.textContent = inputs.value
    outp2.textContent = select.value
    outp3.textContent = id
    title1.textContent = "Card Name"
    title2.textContent = "Status"
    title3.textContent = "id"

    const outp_container = document.createElement('div')

    outp_container.append(title1,outp1,title2,outp2,title3,outp3)
    

    return outp_container;

}



