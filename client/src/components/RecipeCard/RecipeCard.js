import React, { Component } from "react";
import { Text, View, TextInput, Button, Alert } from "react-native";
import { useForm, Controller } from "react-hook-form";
import "./recipeCard.css";

import RecipeHeader from "../RecipeHeader/RecipeHeader";
import RecipeIngredients from "../RecipeIngredients/RecipeIngredients";
import RecipeDirections from "../RecipeDirections/Recipedirections";

//import [models]

// const recipeCard = React.useRef(defaultRecipeValues);

// React.useEffect(() => {
//     api.get<Recipe>('recipeHeader, recipeIngredients, recipeDirections').then(
//     (response) => {
//         const userRecipe = response.data;
//         setRecipe(userRecipe);
//     },
//     error => {
//         console.log(error);
//     }
//     )
// },

// );

// React.useEffect(() => {
//     recipeCard.current = Recipe;
// },

// [Recipe];

// render( useForm<Client>({
//     defaultValues: recipeCard.current ? recipeCard.current : defaultRecipeValues,
//     reValidateMode: 'onChange',
//     mode: 'onChange',
//     validationSchema: clientSchema,
// }));

const recipeCard = () => {
    return(
  <div id="recipeCardContainer">
    <div id="recipeHeader">
      <RecipeHeader />
    </div>
    <div id="RecipeIngredients">
      <RecipeIngredients />
    </div>
    <div id="recipeDirections">
      <RecipeDirections />
    </div>
  </div>
  )
};

export default RecipeCard;
