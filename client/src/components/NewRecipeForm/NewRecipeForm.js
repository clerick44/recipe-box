import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useForm, useFieldArray } from "react-hook-form";

import { useMutation } from "@apollo/client";
import { ADD_RECIPE } from "../../utils/mutations";

function NewRecipe() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [addRecipe, { error, data }] = useMutation(ADD_RECIPE);

  const onSubmit =  (data, e) => {
    console.log(data, e);
console.log("register ", ...register)
    // try {
    //   const { recipeData } = addRecipe({ data });

    //   console.log("******ADDED NEW RECIPE*******", recipeData);
    // } catch (e) {
    //   console.error(e);
    // }
  };

  // const handleChange = (e) => {
  //   this.setState({
  //     [e.target.recipeName]: e.target.value,
  //     [e.target.servings]: e.target.value,
  //     [e.target.prepTime]: e.target.value,
  //     [e.target.cookTime]: e.target.value,
  //     [e.target.specialTools]: e.target.value,
  //     [e.target.recipeIngredients]: e.target.value,
  //     [e.target.recipeDirections]: e.target.value,
  //   })
  // }

  // const handleSubmit = async (e) => {
  // e.preventDefault();

  // try {
  //   const { data } = await addRecipe({
  //     variables: { ...formState },
  //   });
  //   console.log("Success!", data);
  // } catch (e) {
  //   console.error(e);
  // }

  // App.post("servermodelsRecipes.js", function (req, res) {
  //   const recipeName = req.body.recipeName;
  //   const servings = req.body.servings;
  //   const prepTime = req.body.prepTime;
  //   const cookTime = req.body.cookTime;
  //   const specialTools = req.body.secialTools;
  //   const Ingredients = req.body.recipeIngredients;
  //   const Directions = req.body.recipeDirections;
  // })
  // };

  return (
    <>
      <div id="container">
        <div className="recipe">
          <form onSubmit={handleSubmit(onSubmit)}>
            <section id="section">
              <span className="leftSide">Please enter a recipe name.</span>
              <input
                className="rightSide"
                placeholder="Recipe Name"
                {...register("recipeName", { required: true })}
              />
            </section>
            <section id="section">
              <span className="leftSide">
                Please enter a number of servings.
              </span>
              <input
                className="rightSide"
                placeholder="Number of Servings"
                {...register("servings", { required: true })}
              />
            </section>
            <section id="section">
              <span className="leftSide">Please enter a prep time.</span>
              <input
                className="rightSide"
                placeholder="Prep Time"
                {...register("prepTime", { required: true })}
              />
            </section>
            <section id="section">
              <span className="leftSide">Please enter a cook time.</span>
              <input
                className="rightSide"
                placeholder="Cook Time"
                {...register("cookTime", { required: true })}
              />
            </section>
            <section id="section">
              <span className="leftSide">
                Please enter special tools needed
              </span>
              <input
                className="rightSide"
                placeholder="Special Tools Used"
                {...register("specialTools")}
              />
            </section>
            <section id="section">
              <span className="leftSide">
                Please enter a recipe ingredient.
              </span>
              <input
                className="rightSide"
                placeholder="Recipe Ingredient"
                {...register("recipeIngredient", { required: true })}
              />
            </section>
            <section id="section">
              <span className="leftSide">Please enter a recipe direction.</span>
              <input
                id="direction"
                className="rightSide"
                placeholder="Recipe Directions"
                {...register("recipeDirections", { required: true })}
              />
            </section>

            {errors.recipeName && <span>This field is required</span>}
            {errors.servings && <span>This field is required</span>}
            {errors.prepTime && <span>This field is required</span>}
            {errors.cookTime && <span>This field is required</span>}
            {errors.recipeIngredients && <span>This field is required</span>}
            {errors.recipeDirections && <span>This field is required</span>}

            <input id="submit" type="submit" />
          </form>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          defaultValue="Recipe Name"
          {...register("recipeName", { required: true })}
        />
        <input
          defaultValue="Number of Servings"
          {...register("servings", { required: true })}
        />
        <input
          defaultValue="Prep Time"
          {...register("prepTime", { required: true })}
        />
        <input
          defaultValue="Cook Time"
          {...register("cookTime", { required: true })}
        />
        <input
          defaultValue="Special Tools Used"
          {...register("specialTools")}
        />
        <input
          defaultValue="Recipe Ingredients"
          {...register("recipeIngredients", { required: true })}
        />
        <input
          defaultValue="Recipe Directions"
          {...register("recipeDirections", { required: true })}
        />

        {errors.recipeName && <span>This field is required</span>}
        {errors.servings && <span>This field is required</span>}
        {errors.prepTime && <span>This field is required</span>}
        {errors.cookTime && <span>This field is required</span>}
        {errors.recipeIngredients && <span>This field is required</span>}
        {errors.recipeDirections && <span>This field is required</span>}

        <input type="submit" />
      </form>
    </>
  );
}

export default NewRecipe;
