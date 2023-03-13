// Порахує і виведе в консоль
// кількість категорій в ul#categories, тобто елементів li.item.

const categories = document.querySelectorAll("ul#categories .item");

console.log(`Number of categories: ${categories.length}`);

// Для кожного элемента li.item у списку ul#categories,
// знайде і виведе в консоль текст заголовку елемента(тегу < h2 >)
// і кількість елементів в категорії(усіх < li >, вкладених в нього)

// 1
// const categoriesList = categories.forEach((element) => {
//     console.log(`Category: ${element.firstElementChild.textContent}`);
//     console.log(`Elements: ${element.lastElementChild.children.length}`);
// });

// 2
const categoriesList = categories.forEach((element) => {
  console.log(`Category: ${element.querySelector("h2").textContent}`);
  console.log(
    `Elements: ${element.querySelector("ul").querySelectorAll("li").length}`
  );
});
