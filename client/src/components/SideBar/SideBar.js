import React from "react";
import { useQuery } from "@apollo/client";

import RecipeCard from "../RecipeCard/RecipeCard";

import { QUERY_ME } from "../../utils/queries";

const SideBar = (props) => {
  const { recipes, setCurrentRecipe } = props;

  if (!recipes.length) {
    return <h3>No Recipes Yet</h3>;
  }

  return (
    <>
      <h3>My Recipes</h3>
      <ul id="recipeList">
        {recipes.map((recipe, index) => {
          return (
            <li onClick={() => setCurrentRecipe(recipe)} key={index}>
              {recipe.recipeName}
            </li>
          );
        })}
      </ul>
    </>
  );
  // return <h3>Sidebar place Holder</h3>;
};

export default SideBar;
