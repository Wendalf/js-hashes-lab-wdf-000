'use strict';

function addIngredient(recipe, ingredientName, amouts){
  recipe[ingredientName] = amouts;
  return recipe;
}


function removeIngredient(recipe, ingredientName){
  delete recipe[ingredientName];
  return recipe;
}

function updateIngredient(recipe, ingredientName, amouts){
  recipe[ingredientName] = amouts;
  return recipe;
}

function readRecipe(recipe){
  for(var ingredientName in recipe){
    console.log("this recipe calls for " + recipe[ingredientName] + " of " + ingredientName);
  }
}
