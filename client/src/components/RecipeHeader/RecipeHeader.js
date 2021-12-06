import React from "react";
import "./recipeHeader.css";

const RecipeHeader = () => {
  return (
    <>
      <div id="recipeName">Recipe Title</div>
      <div id="headerSubLine">
        <div class="headerSubItems" id="servings">
          Serves: 4
        </div>
        <div class="headerSubItems" id="prepTime">
          Prep Time: 40M
        </div>
        <div class="headerSubItems" id="cookTime">
          Cook Time: 20M
        </div>
      </div>
    </>
  );
};

export default RecipeHeader;
