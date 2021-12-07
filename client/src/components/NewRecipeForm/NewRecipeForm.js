import React from "react";
import ReactDOM from "react-dom";
import { useForm, useFieldArray } from "react-hook-form";



function App() {
  const { register, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

 

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

  const handleSubmit = (e) => {
    e.preventDefault();
    App.post('server\models\Recipes.js', function(req, res) {
      const recipeName = req.body.recipeName;
      const servings = req.body.servings;
      const prepTime = req.body.prepTime;
      const cookTime = req.body.cookTime;
      const specialTools = req.body.secialTools;
      const Ingredients = req.body.recipeIngredients;
      const Directions = req.body.recipeDirections;
    }); 
  

  return (
    
    <form onSubmit={handleSubmit(onSubmit)}>
      
      <input defaultValue="Recipe Name" {...register("recipeName", { required: true })} />
      <input defaultValue="Number of Servings" {...register("servings", { required: true })} />
      <input defaultValue="Prep Time" {...register("prepTime", { required: true })} />
      <input defaultValue="Cook Time" {...register("cookTime", { required: true })} />
      <input defaultValue="Special Tools Used" {...register("specialTools")} />
      <input defaultValue="Recipe Ingredients" {...register("recipeIngredients", { required: true })} />
      <input defaultValue="Recipe Directions" {...register("recipeDirections", { required: true })} />
   
      {errors.recipeName && <span>This field is required</span>}
      {errors.servings && <span>This field is required</span>}
      {errors.prepTime && <span>This field is required</span>}
      {errors.cookTime && <span>This field is required</span>}
      {errors.recipeIngredients && <span>This field is required</span>}
      {errors.recipeDirections && <span>This field is required</span>}

      <input type="submit" />
    </form>
  )}}

  export default App