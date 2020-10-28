const searchBtn = document.querySelector(".search-btn");
const search = document.querySelector("#search");
const mealsEl = document.querySelector(".meals");
const container = document.querySelector(".container");
const heading = document.getElementById("result-heading");
const singleMealEl = document.getElementById("single-meal");
const random = document.getElementById("random");
//function
searchMeals = function (name) {
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}
`)
    .then((res) => res.json())
    .then((data) => {
      //add meal to UL
      document.getElementById(
        "result-heading"
      ).innerText = `Here is all meals from ${name}`;
      const meals = data.meals; //meals is an array
      mealsEl.innerHTML = meals
        .map(
          (meal) => `
      <div class='each-meal ${meal.idMeal}'>
        <img src='${meal.strMealThumb}'/>
        <div class='meal-info'>${meal.strMeal}</div>
      </div>
      `
        )
        .join("");

      console.log(meals);
    });
};

showSingleMeal = function (id) {
  fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}
`)
    .then((res) => res.json())
    .then((data) => {
      const singleMeal = data.meals[0];
      console.log("Single Meal is ", singleMeal);

      const ingredients = [];
      for (let i = 1; i <= 20; i++) {
        if (singleMeal[`strIngredient${i}`]) {
          ingredients.push(
            `${singleMeal[`strIngredient${i}`]} - ${
              singleMeal[`strMeasure${i}`]
            }`
          );
        } else {
          false;
        }
      }

      console.log(ingredients);

      heading.innerText = `Here is the recipe for ${singleMeal.strMeal}`;
      singleMealEl.innerHTML = `
        <div>
          <img src='${singleMeal.strMealThumb}'>
          <p>${singleMeal.strInstructions}</p>
          ${ingredients.map((each) => `<li>${each}</li>`).join("")}
        </div>
      
      `;
    });
};

//Event listener
searchBtn.addEventListener("click", (event) => {
  event.preventDefault();
  if (!search.value.trim()) {
    alert("Please enter something!");
  } else {
    searchMeals(search.value.trim());
  }
});

//if I click on one meal, it will show that meal alone
container.addEventListener("click", (event) => {
  if (event.target.classList[0] === "meal-info") {
    console.log(event.target.parentElement.classList[1]);
    //delete current ui
    //show new ui
    showSingleMeal(event.target.parentElement.classList[1]);
  }
});

//display random meals
random.addEventListener("click", () => {
  fetch(`https://www.themealdb.com/api/json/v1/1/random.php
`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data.meals[0].idMeal);
      showSingleMeal(data.meals[0].idMeal);
    });
});
