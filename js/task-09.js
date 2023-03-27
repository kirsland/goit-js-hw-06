function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Напиши скрипт, який змінює кольори фону елемента < body > через інлайн - стиль

// по кліку на button.change - color і виводить значення кольору в span.color.

// Для генерування випадкового кольору використовуй функцію getRandomHexColor.

const bgColor = document.querySelector("body");

const buttonChangeColor = document.querySelector(".change-color");

const bgChangeColor = () => {
  // console.log("Клікнув і змінив");
  // bgColor.style.backgroundColor = "red";
  bgColor.style.backgroundColor = getRandomHexColor();
  // console.log(getRandomHexColor());
  const bgColorText = document.querySelector(".color");
  bgColorText.textContent = bgColor.style.backgroundColor;
};

buttonChangeColor.addEventListener("click", bgChangeColor);
