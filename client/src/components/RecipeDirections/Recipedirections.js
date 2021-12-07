import React from "react";

import "./recipeDirections.css";

const RecipeDirections = (props) => {
  const { currentRecipe } = props || [];
  console.log("currentRecipe.ingredients ", currentRecipe.ingredients);

  return (
    <>
      <h2>Instructions</h2>
      <ul>
        {!currentRecipe.instructions ? (
          <div></div>
        ) : (
          currentRecipe.instructions.map((instruction, index) => {
            return <li key={index}> {instruction} </li>;
          })
        )}
      </ul>
    </>
  );





};

export default RecipeDirections
