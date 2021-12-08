import React, { useState } from "react";
import ReactDOM from "react-dom";
// import { useForm, useFieldArray } from "react-hook-form";

import { useMutation } from "@apollo/client";
import { ADD_RECIPE } from "../../utils/mutations";
import "./newRecipeForm.css";

const NewRecipe = () => {

  // const {
  //   register,
  //   formState: { errors },
  //   handleSubmit,
  // } = useForm();

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

  const [addRecipe, { error, data }] = useMutation(ADD_RECIPE);
  console.log("data being send to DB", data)

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };
  
  const handleFormSubmit = async ( e, recipeData) => {

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
  // }
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
          <form onSubmit={handleFormSubmit}>
            <section id="section">
              <span className="leftSide">Please enter a recipe name.</span>
              <input
                className="rightSide"
                placeholder="Recipe Name"
                name="recipeName"
                value={formState.recipeName}
                onChange={handleChange}
                // {...register("recipeName", { required: true })}
              />
            </section>
            <section id="section">
              <span className="leftSide">
                Please enter a number of servings.
              </span>
              <input
                className="rightSide"
                placeholder="Number of Servings"
                name="servings"
                value={formState.servings}
                onChange={handleChange}
                // {...register("servings", { required: true })}
              />
            </section>
            <section id="section">
              <span className="leftSide">Please enter a prep time.</span>
              <input
                className="rightSide"
                placeholder="Prep Time"
                name="prepTime"
                value={formState.prepTime}
                onChange={handleChange}
                // {...register("prepTime", { required: true })}
              />
            </section>
            <section id="section">
              <span className="leftSide">Please enter a cook time.</span>
              <input
                className="rightSide"
                placeholder="Cook Time"
                name="cookTime"
                value={formState.cookTime}
                onChange={handleChange}
                // {...register("cookTime", { required: true })}
              />
            </section>
            <section id="section">
              <span className="leftSide">
                Please enter special tools needed
              </span>
              <input
                className="rightSide"
                placeholder="Special Tools Used"
                name="specialTools"
                value={formState.specialTools}
                onChange={handleChange}
                // {...register("specialTools")}
              />
            </section>
            <section id="section">
              <span className="leftSide">
                Please enter a recipe ingredient.
              </span>
              <input
                className="rightSide"
                placeholder="Recipe Ingredient"
                name="ingredients"
                value={formState.ingredients}
                onChange={handleChange}
                // {...register("ingredients", { required: true })}
              />
            </section>
            <section id="section">
              <span className="leftSide">Please enter a recipe direction.</span>
              <input
                id="direction"
                className="rightSide"
                placeholder="Recipe Directions"
                name="instructions"
                value={formState.instructions}
                onChange={handleChange}
                // {...register("instructions", { required: true })}
              />
            </section>

            {/* {errors.recipeName && <span>This field is required</span>}
            {errors.servings && <span>This field is required</span>}
            {errors.prepTime && <span>This field is required</span>}
            {errors.cookTime && <span>This field is required</span>}
            {errors.recipeIngredients && <span>This field is required</span>}
            {errors.recipeDirections && <span>This field is required</span>} */}

            <input id="submit" type="submit" />
          </form>
          {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
        </div>
      </div>
    </>
  );
};

export default NewRecipe;
