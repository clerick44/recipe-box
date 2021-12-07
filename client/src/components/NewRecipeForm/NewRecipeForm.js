import React from "react";
import { useForm } from "react-hook-form";
import "./newRecipeForm.css";

export default function App() {
  const { register, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);


  const handleSubmit = (e) => {

  };

  return (
    <div id="container">
      <p className="recipe">
          <form onSubmit={handleSubmit(onSubmit)}>
          <section id="section">
            <span className="leftSide">Please enter a recipe name.</span>       
                <input className="rightSide" placeholder="Recipe Name" {...register("recipeName", { required: true })} />
          </section>
          <section  id="section">
            <span className="leftSide">Please enter a number of servings.</span>
              <input className="rightSide" placeholder="Number of Servings" {...register("servings", { required: true })} />
          </section>
          <section id="section">
            <span className="leftSide">Please enter a prep time.</span>
              <input className="rightSide" placeholder="Prep Time" {...register("prepTime", { required: true })} />
          </section>
          <section id="section">
            <span className="leftSide">Please enter a cook time.</span>            
              <input className="rightSide" placeholder="Cook Time" {...register("cookTime", { required: true })} />
          </section>
          <section id="section">  
            <span className="leftSide">Please enter special tools needed</span>
             <input className="rightSide" placeholder="Special Tools Used" {...register("specialTools")} />         
          </section>
          <section id="section">  
            <span className="leftSide">Please enter a recipe ingredient.</span>
             <input className="rightSide" placeholder="Recipe Ingredient" {...register("recipeIngredient", { required: true })} />
          </section>  
          <section id="section">
            <span className="leftSide">Please enter a recipe direction.</span>
              <input id="direction" className="rightSide" placeholder="Recipe Directions" {...register("recipeDirections", { required: true })} />
          </section>
         
        
          {errors.recipeName && <span>This field is required</span>}
          {errors.servings && <span>This field is required</span>}
          {errors.prepTime && <span>This field is required</span>}
          {errors.cookTime && <span>This field is required</span>}
          {errors.recipeIngredients && <span>This field is required</span>}
          {errors.recipeDirections && <span>This field is required</span>}
          
          <input id="submit" type="submit" />
        </form> 
      </p>
    </div>
    
  );
}



// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// // import Header from "..Header/Header";
// // import Footer from "../Footer/Footer";
// import "./newRecipeForm.css";


// function NewRecipeForm() {
//   const [values, setValues] = useState({
//     recipeName: " ",
//     servings: " ",
//     prepTime: " ",
//     cookTime: " ",
//     specialTools: " ",
//     recipeIngredients: " ",
//     recipeDirections: " ",
//   });

//   const [submitted, setSubmitted] = useState(false);

//   const handleChange = (e) => {
//     //Commented out to get page to load. MUST BE FIXED
//     // setValues({...values, e.target.value})
//     console.log("e ", e);
//   };

//   let addIngredientsFields = () => {
//     this.setState({
//       formValues: [this.state.formValues, { recipeIngredients: " " }],
//     });
//   };

//   let addDirectionsFields = () => {
//     this.setState({
//       formValues: [this.state.formValues, { recipeDirections: " " }],
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (
//       values.recipeName &&
//       values.servings &&
//       values.prepTime &&
//       values.cookTime &&
//       values.recipeIngredients &&
//       values.recipeDirections
//     ) {
//       setValid(true);
//     }
//     setSubmitted(true);
//   };

//   const [valid, setValid] = useState(false);

//   return (
//     <div>
//       <form>
//         {/* start of the first section to fill out recipe name */}
//         <section id="nameSection">
//           {/* {submitted && valid ? (
//             <div className="success-message">Your recipe has been recorded!</div>
//           ) : null} */}
//           <span>Please enter your recipe name.</span>
//             <input
//               value={values.recipeName}
//               className="form-field"
//               placeholder="Recipe Name"
//               name="recipeName"
//               onChange={handleChange}
//             />
//           {/* {submitted && !values.recipeName ? (
//             <span>Please enter a recipe name.</span>
//           ) : null} */}
//         </section>
//           {/* Servings */}
//         <section id="nameSection">
//           <span>Please enter a number of servings.</span>
//             <input
//               value={values.servings}
//               className="form-field"
//               placeholder="Number of Servings"
//               name="servings"
//               onChange={handleChange}
//             />
//           {/* {submitted && !values.servings ? (
//             <span>Please enter a number of servings.</span>
//           ) : null} */}
//         </section>
//         {/* prep time */}
//         <section id="nameSection">
//           <span>Please enter a prep time.</span>
//             <input
//               value={values.prepTime}
//               className="form-field"
//               placeholder="Prep Time"
//               name="prepTime"
//               onChange={handleChange}
//             />
//         {/* {submitted && !values.prepTime ? (
//           <span>Please enter a prep time.</span>
//         ) : null} */}
//         </section>
//         {/* cook time */}
//         <section id="nameSection">
//           <span>Please enter a cook time.</span>
//             <input
//               value={values.cookTime}
//               className="form-field"
//               placeholder="Cooking Time"
//               name="cookTime"
//               onChange={handleChange}
//             />
//           {/* {submitted && !values.cookTime ? (
//             <span>Please enter a cook time.</span>
//           ) : null} */}
//         </section>
//         {/* special tools */}
//         <section id="nameSection">
//           <span>Please enter special tools needed</span>
//             <input
//               value={values.specialTools}
//               className="form-field"
//               placeholder="Special Tools Used for this Recipe"
//               name="Special Tools"
//               onChange={handleChange}
//             />
//         </section>
//         {/* Ingredients */}
//         <section id="nameSection">
//           <span>Please enter one ingredient at a time</span>
//             <input
//               value={values.recipeIngredients}
//               className="form-field"
//               placeholder="Recipe Ingredients"
//               name="recipeIngredients"
//               onChange={handleChange}
//             />
//           {submitted && !values.recipeIngredients ? (
//             <span>Please enter a recipe ingredient.</span>
//           ) : null}
//             <button
//               className="button add"
//               type="button"
//               onClick={() => this.addIngredientsFields()}
//             >
//                 {" "}
//                 Add Additional Ingredient
//             </button>
//         </section>
//         {/* Directions */}
//         <sections id="nameSection">
//           <span>Please enter a recipe direction.</span>
//             <input
//               value={values.recipeDirections}
//               className="form-field"
//               placeholder="Recipe Directions"
//               name="recipeDirections"
//               onChange={handleChange}
//             />
//           {/* {submitted && !values.recipeDirections ? (
//             <span>Please enter a recipe direction.</span>
//           ) : null} */}
//             <button
//               className="button add"
//               type="button"
//               onClick={() => this.addDirectionsFields()}
//             >
//               Add Additional Direction
//             </button>
//         </sections>
//         {/* submit button */}
//        <section id="nameSection">
//         <button onSubmit={handleSubmit}>Save Recipe to My Recipes</button>
//       </section>
//       </form>
//     </div>
//   );
// }

// export default NewRecipeForm;

