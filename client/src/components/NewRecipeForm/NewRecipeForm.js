import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Button } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { TextField } from "@mui/material";

import { useMutation } from "@apollo/client";
import { ADD_RECIPE } from "../../utils/mutations";
import { ConstructionOutlined } from "@mui/icons-material";

import "./newRecipeForm.css";

const NewRecipe = () => {
  // new set form state to clear form
  // const [formState, setFormState] = useState({
  //   recipeName: "",
  //   servings: "",
  //   prepTime: "",
  //   cookTime: "",
  //   specialTools: "",
  //   ingredients: "",
  //   instructions: "",
  // });

  // function NewRecipe() {
  const [inputField, setInputField] = useState([
    {
      recipeName: "",
      servings: "",
      prepTime: "",
      cookTime: "",
      specialTools: "",
    },
  ]);

  const [inputIngredient, setInputIngredient] = useState([
    {
      ingredient: "",
    },
  ]);

  const [inputInstruction, setInputInstruction] = useState([
    {
      instruction: "",
    },
  ]);

  const handleChangeInputIngredient = (index, event) => {
    console.log(index, event.target.value);
    const values = [...inputIngredient];
    values[index][event.target.ingredient] = event.target.value;
    setInputIngredient(values);
  };

  const handleChangeInputInstruction = (index, event) => {
    console.log(index, event.target.value);
    const values = [...inputInstruction];
    values[index][event.target.instruction] = event.target.value;
    setInputInstruction(values);
  };

  const ingredientAddFields = () => {
    setInputIngredient([...inputIngredient, { ingredient: "" }]);
  };

  const ingredientRemoveFields = (index) => {
    const values = [...inputIngredient];
    values.splice(index, 1);
    setInputIngredient(values);
  };

  const instructionAddFields = () => {
    setInputInstruction([...inputInstruction, { ingredient: "" }]);
  };

  const instructionRemoveFields = (index) => {
    const values = [...inputInstruction];
    values.splice(index, 1);
    setInputInstruction(values);
  };

  const [addRecipe, { error, data }] = useMutation(ADD_RECIPE);
  console.log("data being send to DB", data);

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(event.target.value);

    setInputField({ ...inputField, [name]: value });
    // setFormState({
    //   ...formState,
    //   [name]: value,
    // });
  };

  // const handleFormSubmit = async ( e, recipeData) => {

  const handleSubmit = async (e) => {
    console.log(inputField);

    e.preventDefault();
    console.log("register ", inputField.recipeName);
    console.log("register ", inputField.servings);
    console.log("register ", inputField.prepTime);
    console.log("register ", inputField.cookTime);
    console.log("register ", inputField.specialTools);
    console.log("register ", inputIngredient);
    console.log("register ", inputInstruction);

    var recipeName = inputField.recipeName;
    var servings = inputField.servings;
    var prepTime = inputField.prepTime;
    var cookTime = inputField.cookTime;
    var specialTools = inputField.specialTools;
    var ingredients = inputIngredient;
    var instructions = inputInstruction;

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
      console.log("trying to register");

      await addRecipe({
        variables: {
          recipeName,
          servings,
          cookTime,
          prepTime,
          specialTools,
          ingredients,
          instructions,
        },
      });
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
  console.log("********* ", inputField);
  return (
    <div id="container">
      <h1>Add New Recipe</h1>
      <form>
        <div className="formField">
          <TextField
            name="recipeName"
            label="Recipe Name"
            value={inputField.recipeName}
            variant="filled"
            onBlur={handleChange}
          />
        </div>

        <div className="formField">
          <TextField
            name="servings"
            label="Number of Servings"
            value={inputField.servings}
            onBlur={handleChange}
          />
        </div>
        <div className="formField">
          <TextField
            name="prepTime"
            label="Prep Time"
            value={inputField.prepTime}
            onBlur={handleChange}
          />
        </div>
        <div className="formField">
          <TextField
            name="cookTime"
            label="Cook Time"
            value={inputField.cookTime}
            onBlur={handleChange}
          />
        </div>
        <div className="formField">
          <TextField
            name="specialTools"
            label="Special Tools Used in Recipe"
            value={inputField.specialTools}
            onBlur={handleChange}
          />
        </div>
        <div className="formField">
          {inputIngredient.map((ingredients, index) => (
            <div key={index}>
              <TextField
                name="ingredient"
                label="Ingredient"
                value={inputIngredient.ingredient}
                variant="filled"
                onChange={(event) => handleChangeInputIngredient(index, event)}
              />
              <IconButton onClick={() => ingredientRemoveFields(index)}>
                <RemoveIcon />
              </IconButton>
              <IconButton onClick={() => ingredientAddFields()}>
                <AddIcon />
              </IconButton>
            </div>
          ))}
        </div>
        <div className="formField">
          {inputInstruction.map((instructions, index) => (
            <div key={index}>
              <TextField
                name="instruction"
                label="Instruction"
                value={inputInstruction.instruction}
                variant="filled"
                onChange={(event) => handleChangeInputInstruction(index, event)}
              />
              <IconButton onClick={() => instructionRemoveFields(index)}>
                <RemoveIcon />
              </IconButton>
              <IconButton onClick={() => instructionAddFields()}>
                <AddIcon />
              </IconButton>
            </div>
          ))}
        </div>

        <Button
          variant="contained"
          color="primary"
          type="submit"
          onClick={handleSubmit}
        >
          Add Recipe
        </Button>
      </form>
    </div>
  );
  // }

  // </>
  // );
};

export default NewRecipe;
