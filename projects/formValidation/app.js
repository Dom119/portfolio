// simple way to do that
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

//function
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

//checking the email
function isEmailValid(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

//Event listener
form.addEventListener("submit", (e) => {
  e.preventDefault();

  [username, email, password, password2].forEach((input) => {
    if (input.value.trim() === "") {
      name = input.id.charAt(0).toUpperCase() + input.id.slice(1);
      showError(input, `${name} is required.`);
    } else {
      showSuccess(input);
    }
    if (input.id === "email" && !isEmailValid(input.value)) {
      showError(input, "Invalid Email!");
    }
  });
  if (password.value !== "" && password.value !== password2.value) {
    showError(password2, "Please confirm again the password.");
  }

  // if (username.value === "") {
  //   showError(username, "Username is required");
  // } else {
  //   showSuccess(username);
  // }

  // if (email.value === "") {
  //   showError(email, "Email is required");
  // } else if (!isEmailValid(email.value)) {
  //   showError(email, "Invalid Email!");
  // } else {
  //   showSuccess(email);
  // }

  // if (password.value === "") {
  //   showError(password, "Password is required");
  // } else {
  //   showSuccess(password);
  // }

  // if (password2.value === "") {
  //   showError(password2, "Please confirm password");
  // } else {
  //   showSuccess(password2);
  //}
});
