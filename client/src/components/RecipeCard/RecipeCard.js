import React from "react";
import "./recipeCard.css";

import RecipeHeader from "../RecipeHeader/RecipeHeader";
import RecipeIngredients from "../RecipeIngredients/RecipeIngredients";
import RecipeDirections from "../RecipeDirections/Recipedirections";

const RecipeCard = (props) => {
  const { currentRecipe } = props;

  return (
    <div id="recipeCardContainer">
      <div id="recipeHeader">
        <RecipeHeader currentRecipe={currentRecipe} />
      </div>
      <div className="bottomRow" id="recipeIngredients">
        <RecipeIngredients currentRecipe={currentRecipe} />
      </div>
      <div className="bottomRow" id="recipeDirections">
        <RecipeDirections currentRecipe={currentRecipe} />
      </div>
    </div>
  );
};

export default RecipeCard;
