import React, { Component } from "react";
// import { Text, View, TextInput, Button, Alert } from "react-native";
// import { useForm, Controller } from "react-hook-form";
import "./recipeCard.css";

import RecipeHeader from "../RecipeHeader/RecipeHeader";
import RecipeIngredients from "../RecipeIngredients/RecipeIngredients";
import RecipeDirections from "../RecipeDirections/Recipedirections";

const RecipeCard = () => {
  return (
    <div id="recipeCardContainer">
      <div id="recipeHeader">
        <RecipeHeader />
      </div>
      <div class="bottomRow" id="recipeIngredients">
        <RecipeIngredients />
      </div>
      <div class="bottomRow" id="recipeDirections">
        <RecipeDirections />
      </div>
    </div>
  );
};

export default RecipeCard;
