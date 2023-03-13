const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// Напиши скрипт, який для кожного елемента масиву ingredients:
// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі < li > за одну операцію у список ul#ingredients.

const ingredientsEl = ingredients.map((element) => {
  const listEl = document.createElement("li");
  listEl.classList.add("item");
  listEl.textContent = element;
  return listEl;
});

// console.log(...ingredientsEl);

const ingredientsListEl = document
  .querySelector("#ingredients")
  .append(...ingredientsEl);
