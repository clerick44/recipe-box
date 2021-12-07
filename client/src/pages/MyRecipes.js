import React, { useState } from "react";
import { useQuery } from "@apollo/client";

import "./myrecipes.css";

import RecipeCard from "../components/RecipeCard/RecipeCard";
import SideBar from "../components/SideBar/SideBar";

import { QUERY_RECIPES } from "../utils/queries";

const MyRecipes = () => {
  const [currentRecipe, setCurrentRecipe] = useState([]);
  const { loading, data } = useQuery(QUERY_RECIPES);

  const recipes = data || [];

  return (
    <div id="myRecipesWrapper">
      <div id="sideBar">
        {loading ? (
          <div>Loading...</div>
        ) : (
          <SideBar recipes={recipes} setCurrentRecipe={setCurrentRecipe} />
        )}
      </div>
      <div id="recipeContainer">
        {currentRecipe.length === 0 ? (
          <h1>Select a recipe from the left</h1>
        ) : (
          <RecipeCard currentRecipe={currentRecipe} />
        )}
      </div>
    </div>
  );
};

export default MyRecipes;
