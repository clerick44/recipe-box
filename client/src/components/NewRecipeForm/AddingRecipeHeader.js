import React from "react";
import ReactDOM from "react-dom";
import { useForm, useFieldArray } from "react-hook-form";



function App() {
  const { register, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  const handleSubmit = (e) => {
 
  };

  return (
    
    <form onSubmit={handleSubmit(onSubmit)}>
      
      <input defaultValue="Recipe Name" {...register("recipeName", { required: true })} />
      <input defaultValue="Number of Servings" {...register("servings", { required: true })} />
      <input defaultValue="Prep Time" {...register("prepTime", { required: true })} />
      <input defaultValue="Cook Time" {...register("cookTime", { required: true })} />
      <input defaultValue="Special Tools Used" {...register("specialTools")} />
   
      {errors.recipeName && <span>This field is required</span>}
      {errors.servings && <span>This field is required</span>}
      {errors.prepTime && <span>This field is required</span>}
      {errors.cookTime && <span>This field is required</span>}
      {errors.recipeIngredients && <span>This field is required</span>}
      {errors.recipeDirections && <span>This field is required</span>}
    </form>
   );


}

export default App