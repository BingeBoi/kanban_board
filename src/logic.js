

export function card_maker(task){
    const card =  document.createElement('div')
    card.className = "card"
    const input_container = document.createElement("div")
    
    const title1 = document.createElement('h5')
    const title2 = document.createElement('h5')
    const title3 = document.createElement('h5')
    const outp1 = document.createElement('span')
    const outp2 = document.createElement('span')
    const outp3 = document.createElement('span')
    title1.textContent = "Card Name"
    title2.textContent = "Status"
    title3.textContent = "id"
    outp1.textContent = new_task.name
    outp2.textContent = new_task.status
    outp3.textContent = new_task.id
    input_container.append(title1,outp1,title2,outp2,title3,outp3)
    card.appendChild(input_container)
    card.dataset.id = new_task.id
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

export function outp_ele(inp_container,obj){ 
    const input = inp_container.querySelector('input')
    const select = inp_container.querySelector('select')
    
    obj.name = input.value
    obj.status = select.value

}



