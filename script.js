const form = document.getElementById("registrationForm");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordError = document.getElementById("passwordError");
const confirmPassword = document.getElementById("confirmPassword");
const confirmError = document.getElementById("confirmPasswordError");





function addUsername(){
    if (inputField.value === ''){
        alert("Must enter a valid username, Homie");
    }
    else {
        let 
    }

}



function addTask(){
    if (inputField.value === '') {
      alert("Don't forget to add a task.");
    }
    else{
      let li = document.createElement("li");
      li.innerHTML = inputField.value;
      listContainer.appendChild(li);
      let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    
    inputField.value = "";
    saveInfo();
  }