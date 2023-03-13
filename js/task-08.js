// Напиши скрипт управління формою логіна.
// Обробка відправлення форми form.login - form повинна відбуватися відповідно до події submit.
// Під час відправлення форми сторінка не повинна перезавантажуватися.
// Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені.
// Якщо користувач заповнив усі поля і відправив форму,
// збери значення полів в об'єкт, де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості.
// Для доступу до елементів форми використовуй властивість elements.
// Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.

const loginForm = document.querySelector(".login-form");

function loginFormValidation(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;
  // console.log(event.currentTarget);
  // console.log(event.currentTarget.email.value);
  // console.log(email.value);

  if (email.value === "" || password.value === "") {
    alert("Всі поля повинні бути заповнені");
    // console.log("Всі поля повинні бути заповнені");
  } else {
    // console.log("Рухаємось далі");
    const loginFormOutput = `{email: ${email.value}, password: ${password.value}}`;
    console.log(loginFormOutput);
    event.currentTarget.reset();
  }
}

loginForm.addEventListener("submit", loginFormValidation);
