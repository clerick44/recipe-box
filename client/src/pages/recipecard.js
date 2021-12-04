import React, { Component } from "react";
import { Text, View, TextInput, Button, Alert } from "react-native";
import { useForm, Controller } from "react-hook-form";
//import [models]

const recipeCard = React.useRef(defaultRecipeValues);

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
