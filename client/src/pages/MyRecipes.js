import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";

import "./myrecipes.css";

import RecipeCard from "../components/RecipeCard/RecipeCard";
import SideBar from "../components/SideBar/SideBar";

import { QUERY_ME, QUERY_RECIPES } from "../utils/queries";

const MyRecipes = () => {
  const [currentRecipe, setCurrentRecipe] = useState();
  // const { loading, data } = useQuery(QUERY_ME);
  const {loading, data} = useQuery(QUERY_RECIPES)

  console.log("loading ", loading);
  console.log("data ", data);
  const recipes = data || [];

  console.log("recipes ", recipes);

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
        <RecipeCard currentRecipe={currentRecipe} />
      </div>
    </div>
  );
};

export default MyRecipes;
