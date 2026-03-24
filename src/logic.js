

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



