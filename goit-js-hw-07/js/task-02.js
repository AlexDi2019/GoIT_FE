const ingredients = [
    "Картошка",
    "Грибы",
    "Чеснок",
    "Помидоры",
    "Зелень",
    "Приправы",
];

const ingredientsList = document.querySelector("#ingredients");

const element = ingredients.map((option) => {
    const ingredientsListElement = document.createElement("li");
    ingredientsListElement.textContent = option;

    console.log(ingredientsListElement);
    return ingredientsListElement;
});

ingredientsList.append(...element);