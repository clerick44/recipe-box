import React, { useState } from "react";
import ReactDOM from 'react-dom';
import { Button } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import {RemoveIcon} from '@mui/icons-material';
import {AddIcon} from '@mui/icons-material';
import { TextField } from '@mui/material';

// import { makeStyles } from '@mui/core';
// import { Icon } from '@mui';

import { useMutation } from "@apollo/client";
import { ADD_RECIPE } from "../../utils/mutations";

// import { CallMissedSharp } from '@mui/icons-material';
// import { mergeClasses } from '@material-ui/styles';








const NewRecipe = () => {

  // new set form state to clear form
  const [formState, setFormState] = useState({
    recipeName: '',
    servings: '',
    prepTime: '',
    cookTime: '',
    specialTools: '',
    ingredients: '',
    instructions: '',
  });

// function NewRecipe() {
  const [inputField, setInputField] = useState([
    {
      recipeName: '',
      servings: '',
      prepTime: '',
      cookTime: '',
      specialTools: '',
      ingredient: '',
      instruction: '',
    }
  ]);

  const handleChangeInput = (index, event) => {
    const values = [...inputField];
    values[index][event.taget.ingredient] = event.target.value;
    setInputField(values)

  };

  const ingredientAddFields = () => {
    setInputFields([...inputField, {ingredient: ''}])
  };

  const ingredientRemoveFields = (index) => {
    const values = [...inputField];
    values.splice(index, 1);
    setInputField (values);
  };

  const instructionAddFields = () => {
    setInputFields([...inputField, {ingredient: ''}])
  };

  const instructionRemoveFields = (index) => {
    const values = [...inputField];
    values.splice(index, 1);
    setInputField (values);
  };

  const [addRecipe, { error, data }] = useMutation(ADD_RECIPE);
  console.log("data being send to DB", data)

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };
  
  // const handleFormSubmit = async ( e, recipeData) => {


  const handleSubmit = async (recipeData, e) => {

    e.preventDefault();
    console.log("register ", formState.recipeName);
    console.log("register ", formState.servings);
    console.log("register ", formState.prepTime);
    console.log("register ", formState.cookTime);
    console.log("register ", formState.specialTools);
    console.log("register ", formState.ingredients);
    console.log("register ", formState.instructions);
    
    var recipeName= formState.recipeName;
    var servings = formState.servings;
    var prepTime = formState.prepTime;
    var cookTime = formState.cookTime;
    var specialTools = formState.specialTools;
    var ingredients = formState.ingredients;
    var instructions = formState.instructions;

    // const {
    //   recipeName,
    //   servings,
    //   prepTime,
    //   cookTime,
    //   specialTools,
    //   ingredients,
    //   instructions,
    // } = recipeData;
    // console.log("data for recipe!! ", recipeData)


    try {
      console.log("trying to register")

      await addRecipe({ 
        variables: { recipeName, servings,  cookTime,prepTime, specialTools, ingredients, instructions }, });
      console.log();
      console.log("******ADDED NEW RECIPE*******");
    } catch (e) {
      console.error(e);
    }
  };
  


  // old code Jesse
  // const onSubmit = async (recipeData, e) => {
  //   e.preventDefault();
    // console.log(recipeData, e);
    // console.log("register ", recipeData);
    // const {
    //   recipeName,
    //   servings,
    //   prepTime,
    //   cookTime,
    //   specialTools,
    //   ingredients,
    //   instructions,
    // } = recipeData;

  //   try {
  //     const { data } = await addRecipe({ variables: { recipeData } });
  //     console.log(data);
  //     console.log("******ADDED NEW RECIPE*******", recipeData);
  //   } catch (e) {
  //     console.error(e);
  //   }
  // };


  return (
    <div>
      <h1>Add New Recipe</h1>
      <form onSubmit={handleSubmit}>
      <div>
        <TextField
          name="recipeName"
          label="Recipe Name"
          value={inputField.recipeName}
          variant="filled"
          />
      </div>

      <div>
        <TextField
          name="servings"
          label="Number of Servings"
          value={inputField.servings}
          />
      </div>
      <div>
        <TextField
          name="prepTime"
          label="Prep Time"
          value={inputField.prepTime}
          />
      </div>
      <div>
        <TextField
          name="cookTime"
          label="Cook Time"
          value={inputField.cookTime}
          />
      </div>
      <div>
        <TextField
          name="specialTools"
          label="Special Tools Used in Recipe"
          value={inputField.servings}
          />
      </div>
      <div>
        { inputField.map((inputField, index) => (
          <div key={index}>
            <TextField
              name="ingredient"
              label="Ingredient"
              value= {inputField.ingredient}
              variant="filled"
            />
            <IconButton
            onClick={(index) => ingredientRemoveFields}>
              <RemoveIcon />
            </IconButton>
            <IconButton
              onClick={() => ingredientAddFields ()} >
              <AddIcon />
            </IconButton>
          </div>
        ))}
      </div>
      <div>
        { inputField.map((inputField, index) => (
          <div key={index}>
            <TextField
              name="instruction"
              label="Instruction"
              value= {inputField.instruction}
              variant="filled"
              onChange={event => handleChangeInput(index, event)}
            />
            <IconButton
            onClick={(index) => instructionRemoveFields}>
              <RemoveIcon />
            </IconButton>
            <IconButton
              onClick={() => instructionAddFields ()} >
              <AddIcon />
            </IconButton>
          </div>
        )) }
        </div>
     
      <Button 
        variant="contained" 
        color = "primary" 
        type="submit"
        endIcon={<Icon>send</Icon>}>
        onClick={handleSubmit}
        Add Recipe</Button>
     </form>
    </div>
  )
        // }


    // </>
  // );
};

export default NewRecipe;

