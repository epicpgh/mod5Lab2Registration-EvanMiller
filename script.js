const form = document.getElementById("registrationForm");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordError = document.getElementById("passwordError");
const confirmPassword = document.getElementById("confirmPassword");
const confirmError = document.getElementById("confirmPasswordError");
const usernameError =document.getElementById("usernameError");
const emailError = document.getElementById("emailError");



function validateUsername() {
    if (username.validity.valueMissing) {
      usernameError.textContent = "Username is required.";
    } else if (username.validity.tooShort) {
      usernameError.textContent = "Username must be at least 3 characters.";
    } else {
      usernameError.textContent = "";
    }
  }

  function validateEmail(){
    if (email.validity.valueMissing){
        emailError.textContent = "email address is required.";
     }else if (email.validity.typeMismatch){
        emailError.textContent = "Please enter a valid email address. ex: j123@mail.com "

     } else{
        emailError.textContent ="";
     }
     }

     function validatePassword() {
        if (password.validity.valueMissing){
            passwordError.textContent = "Password is required to proceed.";
        }
        else if (password.validity.tooShort) {
          passwordError.textContent = "Password must be a minimum of 8 characters.";
        } else if (password.validity.patternMismatch) {
          passwordError.textContent = "Password must include an uppercase letter, a lowercase letter, and a number.";
        } else {
          passwordError.textContent = "";
        }

      }
      function validateConfirmPassword() {
        if (confirmPassword.validity.valueMissing) {
          confirmError.textContent = "Please confirm your password.";
        } else if (confirmPassword.value !== password.value) {
          confirmError.textContent = "Passwords do not match.";
        } else {
          confirmError.textContent = "";
        }
      }

      username.addEventListener("input", validateUsername);
      email.addEventListener("input", validateEmail);
      password.addEventListener("input", validatePassword);
      confirmPassword.addEventListener("input", validateConfirmPassword);

     

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    validateUsername();
    validateEmail();
    validatePassword();
    validateConfirmPassword();

    localStorage.setItem("username", username.value);

    localStorage.setItem("email", email.value);
  })




 