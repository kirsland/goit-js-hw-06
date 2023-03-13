// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.

// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.

// Оновлюй інтерфейс новим значенням змінної counterValue.

const counterValue = document.querySelector("#value");
let currentValue = 0;
counterValue.textContent = currentValue;

const decrementBtn = document.querySelector('[data-action="decrement"]');
const decrementClick = () => {
  currentValue -= 1;
  counterValue.textContent = currentValue;
};
decrementBtn.addEventListener("click", decrementClick);

const incrementBtn = document.querySelector('[data-action="increment"]');
const incrementClick = () => {
  currentValue += 1;
  counterValue.textContent = currentValue;
};
incrementBtn.addEventListener("click", incrementClick);
