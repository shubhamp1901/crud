const form = document.getElementById("form");
const textInput = document.getElementById("textInput");
const dateInput = document.getElementById("dateInput");
const textarea = document.getElementById("textarea");
const msg = document.getElementById("msg");
const tasks = document.getElementById("tasks");
const add = document.getElementById('add')

let data = {};

let formValidation = (e) => {
  e.preventDefault();
  if (textInput.value === "") {
    // console.log('failure')
    msg.innerHTML = "Task Input cannot be blank";
  } else {
    // console.log('success')
    msg.innerHTML = "";
    acceptData();
    add.setAttribute("data-bs-dismiss","modal")
    add.click()

    (() => {
        add.setAttribute("data-bs-dismiss","")
    })()
  }
};

const acceptData = () => {
  data["text"] = textInput.value;
  data["date"] = dateInput.value;
  data["description"] = textarea.value;

  createTasks()
};

const createTasks = () => {
  tasks.innerHTML += `<div>
    <span class="fw-bold">${data.text}</span>
    <span class="small text-secondary">${data.date}</span>
    <p>${data.description}</p>

    <span class="options">
      <i class="fas fa-edit"></i>
      <i onClick="deleteTask(this)" class="fas fa-trash"></i>
    </span>
  </div>`;

  resetForm()
};
// this means only gonna target edit or delete not entire div

const resetForm  = () => {
    textInput.value = ""
    dateInput.value = ""
    textarea.value = ""
}

const deleteTask = (e) => {
    e.parentElement.parentElement.remove()
}

form.addEventListener("submit", formValidation);
