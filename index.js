let form = document.forms.signup
let inputs = form.querySelectorAll('input')

let pattern = {
    name: /^[a-z ,.'-]+$/i,
    email: /^([A-Za-z]|[0-9])+$/
}




inputs.forEach(inp => {
    let parent = inp.parentElement
    inp.onkeyup = () => {
        if(pattern[inp.name].test(inp.value)) {
            parent.classList.add('error')
        } else {
            parent.classList.remove('error')
        }
    }
})

form.onsubmit = (event) => {
    event.preventDefault();

    let error = false

    inputs.forEach(inp => {
        if(inp.parentElement.classList.contains('required') && inp.value.length === 0) {
            inp.parentElement.classList.add('error')
            error = true
        } else {
            inp.parentElement.classList.remove('error')
        }
    })

    if(error === false) {
        submit(form)
    } else {
        alert('error')
    }
}

function submit(form) {
    let user = {}

    let fm = new FormData(form)

    fm.forEach((value, key) => {
        user[key] = value
    })

    console.log(user);
    form.reset()
}