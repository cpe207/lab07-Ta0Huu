//simple email validation

const firstNameInput = document.querySelector("#first-name-input");
Submitbtn = document.querySelector("#submit-btn");
const lastNameInput = document.querySelector("#last-name-input");
const EmailInput = document.querySelector("#email-input");
const passInput = document.querySelector("#password-input");

function validateEmail(email) {
  var atPos = email.indexOf("@");
  var dotPos = email.lastIndexOf(".");
  return atPos > 0 && dotPos > atPos + 1 && dotPos < email.length - 1;
}

firstNameInput.onkeyup = () => {
  firstNameInput.classList.remove("is-valid", "is-invalid");
};

lastNameInput.onkeyup = () => {
  lastNameInput.classList.remove("is-valid", "is-invalid");
};

EmailInput.onkeyup = () => {
  EmailInput.classList.remove("is-valid", "is-invalid");
};

passInput.onkeyup = () => {
  passInput.classList.remove("is-valid", "is-invalid");
};

Submitbtn.onclick = () => {
  let ispassOk = false;
  let isFirstNameOk = false;
  let islastNameOk = false;
  let ifEmailOk = false;
  if (firstNameInput.value === "") {
    firstNameInput.classList.add("is-invalid");
  } else {
    firstNameInput.classList.add("is-valid");
    isFirstNameOk = true;
  }

  if (lastNameInput.value === "") {
    lastNameInput.classList.add("is-invalid");
  } else {
    lastNameInput.classList.add("is-valid");
    islastNameOk = true;
  }

  if (`${passInput.value.length}` >= 6) {
    passInput.classList.add("is-valid");
    ispassOk = true;
  } else {
    passInput.classList.add("is-invalid");
  }

  if (EmailInput.value === "") {
    EmailInput.classList.add("is-invalid");
  } else if (validateEmail(EmailInput.value) == false) {
    EmailInput.classList.add("is-invalid");
  } else {
    EmailInput.classList.add("is-valid");
    ifEmailOk = true;
  }

  if (
    isFirstNameOk == true &&
    islastNameOk == true &&
    ispassOk == true &&
    ifEmailOk == true
  ) {
    alert("Registered successfully");
  }
};
