// Напиши скрипт, який реагує на зміну значення input#font - size - control(подія input)
// і змінює інлайн - стиль span#text, оновлюючи властивість font - size.

// В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

const scrollbarFontSize = document.querySelector("input#font-size-control");
const scrollbarHeading = document.querySelector("span#text");
// scrollbarHeading.style.fontSize = "40px";

const scrollbarFontSizeChanging = () => {
  scrollbarHeading.style.fontSize = `${scrollbarFontSize.value}px`;

  // console.log(`"${scrollbarFontSize.value}px"`);
  // console.log(scrollbarHeading.style);
};

scrollbarFontSize.addEventListener("input", scrollbarFontSizeChanging);
