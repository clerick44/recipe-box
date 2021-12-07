import React from "react";

import "./recipeIngredients.css";

const RecipeIngredients = (props) => {
  const { currentRecipe } = props || [];

  return (
    <>
      <h2>Ingredients</h2>
      <ul>
        {!currentRecipe.ingredients ? (
          <div></div>
        ) : (
          currentRecipe.ingredients.map((ingredient, index) => {
            return <li key={index}> {ingredient} </li>;
          })
        )}
      </ul>
    </>
  );
};

export default RecipeIngredients;

