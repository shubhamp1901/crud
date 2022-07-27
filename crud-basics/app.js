let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById('msg')

const formValidation = (e) => {
    e.preventDefault()
  if (input.value !== "") {
    console.log("success");
    msg.innerHTML = ""
  } else {
    msg.innerHTML = "Post Cannot be blank"
    console.log("failure");
    
  }
};

form.addEventListener("submit", formValidation);
