import React from "react";
import { useQuery } from "@apollo/client";

import "./myrecipes.css"

import RecipeCard from "../components/RecipeCard/RecipeCard";
import SideBar from "../components/SideBar/SideBar";

import { QUERY_ME } from "../utils/queries";

const MyRecipes = () => {
  const { loading, data } = useQuery(QUERY_ME);
//   console.log("data ", data)
  const recipes = data?.me || [];

  return (
    <div id="myRecipesWrapper">
      <div id="sideBar">
        {loading ? <div>Loading...</div> : <SideBar recipes={recipes} />}
      </div>
      <div id="recipeContainer">
        <h1>Container Place Holder</h1>
      </div>
    </div>
  );
};

export default MyRecipes;
