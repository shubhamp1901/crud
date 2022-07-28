let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById('msg')
let posts = document.getElementById('posts')

let data = {}

const formValidation = (e) => {
    e.preventDefault()
  if (input.value !== "") {
    acceptData()
    // console.log("success");
    msg.innerHTML = ""
  } else {
    msg.innerHTML = "Post Cannot be blank"
    // console.log("failure");
  }
};

form.addEventListener("submit", formValidation);

const acceptData = () => {
    data["text"] = input.value
    createPost()
    // console.log(data)
}

const createPost = () => {
    posts.innerHTML += `<div>
    <p>${data.text}</p>
    <span class="options">
      <i onClick="updatePost(this)" class="fas fa-edit"></i>
      <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
    </span>
  </div>`
    input.value = ""
}

const deletePost = (e) => {
  e.parentElement.parentElement.remove()
}

const updatePost = (e) => {
  input.value = e.parentElement.previousElementSibling.innerHTML;
  e.parentElement.parentElement.remove()
}

