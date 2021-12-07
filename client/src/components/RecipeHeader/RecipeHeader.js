import React from "react";
import "./recipeHeader.css";

const RecipeHeader = (props) => {
  const { currentRecipe } = props || [];

  return (
    <>
      <div id="recipeName">Recipe Title</div>
      <div id="headerSubLine">
        <div class="headerSubItems" id="servings">
          Serves: {currentRecipe.servings}
          {/* Servers: 3 */}
        </div>
        <div class="headerSubItems" id="prepTime">
          Prep Time: {currentRecipe.prepTime} mins
        </div>
        <div class="headerSubItems" id="cookTime">
          Cook Time: {currentRecipe.cookTime} mins
        </div>
      </div>
    </>
  );
};

export default RecipeHeader;
