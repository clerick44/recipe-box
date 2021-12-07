import React from "react";
import { useForm } from "react-hook-form";

export default function NewRecipe() {
  const {
    register,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
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
      <input defaultValue="Special Tools Used" {...register("specialTools")} />\
      <input
        defaultValue="Recipe Ingredient"
        {...register("recipeIngredient", { required: true })}
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
  );
}
