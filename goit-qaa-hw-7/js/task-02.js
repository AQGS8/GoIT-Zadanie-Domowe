const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulIngredients = document.querySelector(`#ingredients`) // wskazuje do czego ma się odwoływać ulIngredients


ingredients.forEach(ingredient => {   
  const li = document.createElement(`li`);  // tworzy oddzielny element <li> 
  li.textContent = ingredient;  // zapisuje ingredient jako tekst z tablicy ingredients
  li.classList.add(`item`) // dodaje klasę item do elementu  
  })

ulIngredients.append(ingredients) // dodaje wszystkie składniki do ul.
