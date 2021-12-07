import React, { useState } from "react";
import { useForm } from "react-hook-form";
// import Header from "..Header/Header";
// import Footer from "../Footer/Footer";
import "./newRecipeForm.css";

function NewRecipeForm() {
  const [values, setValues] = useState({
    recipeName: " ",
    servings: " ",
    prepTime: " ",
    cookTime: " ",
    specialTools: " ",
    recipeIngredients: " ",
    recipeDirections: " ",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    //Commented out to get page to load. MUST BE FIXED
    setValues(...values, e.target.value)
    console.log("e ", e);
  };

  let addIngredientsFields = () => {
    this.setState({
      formValues: [this.state.formValues, { recipeIngredients: " " }],
    });
  };

  let addDirectionsFields = () => {
    this.setState({
      formValues: [this.state.formValues, { recipeDirections: " " }],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      values.recipeName &&
      values.servings &&
      values.prepTime &&
      values.cookTime &&
      values.recipeIngredients &&
      values.recipeDirections
    ) {
      setValid(true);
    }
    setSubmitted(true);
  };

  const [valid, setValid] = useState(false);

  return (
    <div>
      <form>
        {submitted && valid ? (
          <div className="success-message">Your recipe has been recorded!</div>
        ) : null}
        <input
          value={values.recipeName}
          className="form-field"
          placeholder="Recipe Name"
          name="recipeName"
          onChange={handleChange}
        />
        {submitted && !values.recipeName ? (
          <span>Please enter a recipe name.</span>
        ) : null}
        <input
          value={values.servings}
          className="form-field"
          placeholder="Number of Servings"
          name="servings"
          onChange={handleChange}
        />
        {submitted && !values.servings ? (
          <span>Please enter a number of servings.</span>
        ) : null}
        <input
          value={values.prepTime}
          className="form-field"
          placeholder="Prep Time"
          name="prepTime"
          onChange={handleChange}
        />
        <span>Please enter a prep time.</span>
        {submitted && !values.prepTime ? (
          <span>Please enter a prep time.</span>
        ) : null}
        <input
          value={values.cookTime}
          className="form-field"
          placeholder="Cooking Time"
          name="cookTime"
          onChange={handleChange}
        />
        {submitted && !values.cookTime ? (
          <span>Please enter a cook time.</span>
        ) : null}
        <input
          value={values.specialTools}
          className="form-field"
          placeholder="Special Tools Used for this Recipe"
          name="Special Tools"
          onChange={handleChange}
        />
        <input
          value={values.recipeIngredients}
          className="form-field"
          placeholder="Recipe Ingredients"
          name="recipeIngredients"
          onChange={handleChange}
        />
        {submitted && !values.recipeIngredients ? (
          <span>Please enter a recipe ingredient.</span>
        ) : null}
        <button
          className="button add"
          type="button"
          onClick={() => this.addIngredientsFields()}
        >
          {" "}
          Add Addiotional Ingredient
        </button>
        <input
          value={values.recipeDirections}
          className="form-field"
          placeholder="Recipe Directions"
          name="recipeDirections"
          onChange={handleChange}
        />
        {submitted && !values.recipeDirections ? (
          <span>Please enter a recipe direction.</span>
        ) : null}
        <button
          className="button add"
          type="button"
          onClick={() => this.addDirectionsFields()}
        >
          Add Additional Direction
        </button>
        onSubmit={handleSubmit}
        <button>Save Recipe to My Recipes</button>
      </form>
    </div>
  );
}

export default NewRecipeForm;
