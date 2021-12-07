import React from "react";

const SideBar = (props) => {
  const { recipes, setCurrentRecipe } = props;
  console.log(recipes.allRecipes);

  if (!recipes.allRecipes.length) {
    return <h3>No Recipes Yet</h3>;
  }

  return (
    <>
      <h3>My Recipes</h3>
      <ul id="recipeList">
        {recipes.allRecipes.map((recipe, index) => {
          return (
            <li onClick={() => setCurrentRecipe(recipe)} key={index}>
              {recipe.recipeName}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default SideBar;
