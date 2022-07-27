let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById('msg')
let posts = document.getElementById('posts')

let data = {}

const formValidation = (e) => {
    e.preventDefault()
  if (input.value !== "") {
    acceptData()
    console.log("success");
    msg.innerHTML = ""
  } else {
    msg.innerHTML = "Post Cannot be blank"
    console.log("failure");
  }
};

form.addEventListener("submit", formValidation);

const acceptData = () => {
    data["text"] = input.value
    createPost()
    // console.log(data)
}

const createPost = () => {
    posts.innerHTML += data.text
    input.value = ""
}

