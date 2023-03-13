// Напиши скрипт, який під час набору тексту в інпуті input#name - input(подія input),
// підставляє його поточне значення в span#name - output.

// Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

const userNameInput = document.querySelector("input#name-input");

const userNameOutput = document.querySelector("span#name-output");

const userNameChange = () => {
  if (userNameInput.value === "") {
    userNameOutput.textContent = "Anonymous";
  } else userNameOutput.textContent = userNameInput.value;
};

userNameInput.addEventListener("input", userNameChange);
