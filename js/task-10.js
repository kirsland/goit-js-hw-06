function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Напиши скрипт створення і очищення колекції елементів.
// Користувач вводить кількість елементів в input і натискає кнопку Створити,
//   після чого рендериться колекція.Натисненням на кнопку Очистити, колекція елементів очищається.

// Створи функцію createBoxes(amount), яка приймає один параметр - число.
// Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого < div > - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX.
// Використовуй готову функцію getRandomHexColor для отримання кольору.

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

// const buttonCreate = document.querySelector("[data-create]");

// const inputAmount = document.querySelector("#controls > input");

// const divBoxes = document.querySelector('#boxes');

// function createBoxes(amount) {
//   amount = inputAmount.value;
//   // console.log(`К-сть: ${amount}`);
//   for (let i = 0; i < amount; i += 1) {
//     // console.log(i);
//     const divEl = document.createElement("div");
//     divEl.style.width += `${30 + 10 * i}px`;
//     divEl.style.height += `${30 + 10 * i}px`;
//     divEl.style.backgroundColor = getRandomHexColor();
//   console.log(divEl);
//   divBoxes.append(divEl);
//   }
// };

// buttonCreate.addEventListener("click", createBoxes);

// const buttonDestroy = document.querySelector('[data-destroy]');

// function destroyBoxes() {
//   divBoxes.remove();
//   // Тут не знаю як очистити, пробував створити новий вшм #boxes, але на новий вже не додаються діви з кнопки Create.
// }

// buttonDestroy.addEventListener("click", destroyBoxes);

// Пробую тепер через innerHTML:

const buttonCreate = document.querySelector("[data-create]");

const inputAmount = document.querySelector("#controls > input");

const divBoxes = document.querySelector("#boxes");

function createBoxes(amount) {
  amount = inputAmount.value;
  for (let i = 0; i < amount; i += 1) {
    divBoxes.insertAdjacentHTML(
      "beforeend",
      `<div style="width: ${30 + 10 * i}px; height: ${
        30 + 10 * i
      }px; background-color: ${getRandomHexColor()};"></div>`
    );
  }
}

buttonCreate.addEventListener("click", createBoxes);

const buttonDestroy = document.querySelector("[data-destroy]");

function destroyBoxes() {
  divBoxes.innerHTML = "";
}

buttonDestroy.addEventListener("click", destroyBoxes);
