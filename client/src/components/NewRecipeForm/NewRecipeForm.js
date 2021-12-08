import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import RemoveIcon from '@material-ui/icons';
import AddIcon from '@material-ui/icons';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { Icon } from '@material-ui';
import { useMutation } from "@apollo/client";
import { ADD_RECIPE } from "../../utils/mutations";
import { CallMissedSharp } from '@mui/icons-material';
import { mergeClasses } from '@material-ui/styles';





function NewRecipe() {
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
    const values = [...inpuutField];
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

  const handleSubmit = async (recipeData, e) => {
    e.preventDefault();
    console.log(recipeData, e);
    console.log("register ", recipeData);
    const {
      recipeName,
      servings,
      prepTime,
      cookTime,
      specialTools,
      ingredients,
      instructions,
    } = recipeData;

    try {
      const { data } = await addRecipe({ variables: { recipeData } });
      console.log(data);
      console.log("******ADDED NEW RECIPE*******", recipeData);
    } catch (e) {
      console.error(e);
    }
  };

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
        }

export default NewRecipe
