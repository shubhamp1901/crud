const form = document.getElementById('form')
const textInput = document.getElementById('textInput')
const msg = document.getElementById('msg')



let formValidation = (e) => {
    e.preventDefault()
    if(textInput.value === "") {
        // console.log('failure')
        msg.innerHTML = "Task Input cannot be blank"
    }else {
        // console.log('success')
        msg.innerHTML = ""
    }
}

form.addEventListener('submit', formValidation)