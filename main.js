const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const form = document.querySelector("form");
const success = document.querySelector(".success ");
const showPassword = document.querySelector(".show-password");
const eyeIcon = document.querySelector(".fa");
// validation variable
const firstNameErro = document.querySelector(".first-name-erro");
const lastNameErro = document.querySelector(".last-name-erro");
const emailErro = document.querySelector(".email-erro");
const passwordErro = document.querySelector(".password-erro");
// eventlistener
showPassword.addEventListener("click", shown);
form.addEventListener("submit", submitForm);
function submitForm(e) {
  e.preventDefault();
  const userEmail = email.value.includes("@");
  if (firstName.value === "") {
    firstNameErro.style.display = "block";
    firstName.nextElementSibling.style.display = "block";
    firstName.placeholder = "";
    firstName.parentElement.style.border = "2px solid red";
  }
  if (lastName.value === "") {
    lastNameErro.style.display = "block";
    lastName.nextElementSibling.style.display = "block";
    lastName.placeholder = "";
    lastName.parentElement.style.border = "2px solid red";
  }
  if (email.value === "" || !userEmail) {
    emailErro.style.display = "block";
    email.nextElementSibling.style.display = "block";
    email.placeholder = "";
    email.parentElement.style.border = "2px solid red";
  }

  if (password.value === "") {
    passwordErro.style.display = "block";
    password.nextElementSibling.style.display = "block";
    password.placeholder = "";
    password.parentElement.style.border = "2px solid red";
    showPassword.style.display = "none";
  } else {
    success.style.display = "block";
    firstName.value = "";
    lastName.value = "";
    email.value = "";
    password.value = "";
  }
  setTimeout(() => {
    firstNameErro.style.display = "none";
    lastNameErro.style.display = "none";
    emailErro.style.display = "none";
    passwordErro.style.display = "none";
    firstName.nextElementSibling.style.display = "none";
    lastName.nextElementSibling.style.display = "none";
    email.nextElementSibling.style.display = "none";
    password.nextElementSibling.style.display = "none";
    success.style.display = "none";
    email.placeholder = "email";
    password.placeholder = "password";
    firstName.placeholder = "First-Name";
    lastName.placeholder = "Last-Name";
    password.parentElement.style.border = "1px solid var(--Grayish-Blue";
    firstName.parentElement.style.border = "1px solid var(--Grayish-Blue";
    lastName.parentElement.style.border = "1px solid var(--Grayish-Blue";
    email.parentElement.style.border = "1px solid var(--Grayish-Blue";
    showPassword.style.display = "block";
  }, 1000);
}

function shown() {
  if (eyeIcon.classList.contains("fa-eye-slash")) {
    eyeIcon.classList.remove("fa-eye-slash");
    eyeIcon.classList.add("fa-eye");
    password.type = "text";
  } else {
    eyeIcon.classList.add("fa-eye-slash");
    password.type = "password";
  }
}

const inputs = document.querySelectorAll("input");
inputs.forEach((input) => {
  input.addEventListener("focus", (e) => {
    e.currentTarget.parentElement.style.border = "3px solid hsl(248, 32%, 49%)";
  });
});

inputs.forEach((input) => {
  input.addEventListener("blur", () => {
    input.parentElement.style.border = " 1px solid hsl(246, 25%, 77%)";
  });
});
