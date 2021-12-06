// import React from "react";

// import { useForm, Controller } from "react-hook-form";


// export default function App() {
// const { control, handleSubmit, formState: { errors } } = useForm({
//     defaultValues: {
//         recipeName: '',
//         prepTime: '',
//         cookTime: '',
//         servings: '',
//         specialTools: '',
//         recipeIngredients: '',
//         recipeDirections: '',
//     }
// });
// const onSubmit = data => console.log(data);

// <div>
// function namerecipe App() {

// const {
//     register,
//     formState: { errors },
//     handleSubmit,
//     watch,
// } = useForm();
// const recipeName = useRef({});
// const [arr, setArr] = useRef({});
// const setRecipeName = () => {
//     setArr(s => {
//     return [
//         ...s,
//         {
//         type: "text",
//         value: ""
//         }
//     ];
//     });
// };

// const handleChange = e => {
//     e.preventDefault();

//     const index = e.target.id;
//     setArr(s => {
//     const newArr = s.slice();
//     newArr[index].value = e.target.value;

//     return newArr;
//     });
// };

// recipeName.current = watch("Recipe Name", "");
// }
// </div>

// <div>
// export default function App() {
// const {
//     register,
//     formState: { errors },
//     handleSubmit,
//     watch,
// } = useForm();
// const prepTime = useRef({});
// const [arr, setArr] = useRef({});
// const setPrepTime = () => {
//     setArr(s => {
//     return [
//         ...s,
//         {
//         type: "text",
//         value: ""
//         }
//     ];
//     });
// };

// const handleChange = e => {
//     e.preventDefault();

//     const index = e.target.id;
//     setArr(s => {
//     const newArr = s.slice();
//     newArr[index].value = e.target.value;

//     return newArr;
//     });
// };

// prepTime.current = watch("Prep Time", "");
// }
// </div>

// <div>
// export default function App() {
// const {
//     register,
//     formState: { errors },
//     handleSubmit,
//     watch,
// } = useForm();
// const cookTIme = useRef({});
// const [arr, setArr] = useRef({});
// const setCookTime = () => {
//     setArr(s => {
//     return [
//         ...s,
//         {
//         type: "text",
//         value: ""
//         }
//     ];
//     });
// };

// const handleChange = e => {
//     e.preventDefault();

//     const index = e.target.id;
//     setArr(s => {
//     const newArr = s.slice();
//     newArr[index].value = e.target.value;

//     return newArr;
//     });
// };

// cookTime.current = watch("CookTime", "");
// }
// </div>

// <div>
// export default function App() {
// const {
//     register,
//     formState: { errors },
//     handleSubmit,
//     watch,
// } = useForm();
// const servings = useRef({});
// const [arr, setArr] = useRef({});
// const setServings = () => {
//     setArr(s => {
//     return [
//         ...s,
//         {
//         type: "text",
//         value: ""
//         }
//     ];
//     });
// };

// const handleChange = e => {
//     e.preventDefault();

//     const index = e.target.id;
//     setArr(s => {
//     const newArr = s.slice();
//     newArr[index].value = e.target.value;

//     return newArr;
//     });
// };

// servings.current = watch("Servings", "");
// }
// </div>

// <div>
// export default function App() {
// const {
//     register,
//     formState: { errors },
//     handleSubmit,
//     watch,
// } = useForm();
// const specialTools = useRef({});
// const [arr, setArr] = useRef({});
// const setSpecialTools = () => {
//     setArr(s => {
//     return [
//         ...s,
//         {
//         type: "text",
//         value: ""
//         }
//     ];
//     });
// };

// const handleChange = e => {
//     e.preventDefault();

//     const index = e.target.id;
//     setArr(s => {
//     const newArr = s.slice();
//     newArr[index].value = e.target.value;

//     return newArr;
//     });
// };

// specialTools.current = watch("special Tools Used", "");
// }
// </div>

// <div>
// export default function App() {
// const {
//     register,
//     formState: { errors },
//     handleSubmit,
//     watch,
// } = useForm();
// const ingredients = useRef({});
// const [arr, setArr] = useRef({});
// const addIngredient = () => {
//     setArr(s => {
//     return [
//         ...s,
//         {
//         type: "text",
//         value: ""
//         }
//     ];
//     });
// };

// const handleChange = e => {
//     e.preventDefault();

//     const index = e.target.id;
//     setArr(s => {
//     const newArr = s.slice();
//     newArr[index].value = e.target.value;

//     return newArr;
//     });
// };

// ingredients.current = watch("Ingredients", "");
// addIngredient.current = watch("Add Another Ingredient", "");

// const onSubmit = async (data) => {
//     if (ingredients.current.length === 0) {
//     alert("You must specify an ingredient");
//     return;
//     }

// return (
//     <form onSubmit={(e) => e.preventDefault()}>
//     <label>Ingredients</label>
//     <input {...register("Ingredients")} />
//     {errors.ingredients && <p>{errors.ingredients.message}</p>}

//     <div>
//     <button onClick={addIngredient}>Add Another Ingredient</button>
//     {arr.map((item, i) => {
//         return (
//         <input
//             onChange={handleChange}
//             value={item.value}
//             id={i}
//             type={item.type}
//         />
//         );
//     })}
//     </div>

//     <label>Move to Directions</label>
//     <input {...register("New Ingredients")} />
//     {errors.addIngredient && <p>{errors.addIngredient.message}</p>}

//     <input type="submit" onClick={handleSubmit(onSubmit)} />
//     </form>
// );
// }
// </div>

// <div>
// const handleChange = e => {
//     e.preventDefault();

//     const index = e.target.id;
//     setArr(s => {
//     const newArr = s.slice();
//     newArr[index].value = e.target.value;

//     return newArr;
//     });
// };

// directions.current = watch("Directions", "");
// addDirection.current = watch("Add Another Direction", "");

// const onSubmit = async (data) => {
//     if (directions.current.length === 0) {
//     alert("You must specify a direction");
//     return;
//     }

// return (
//     <form onSubmit={(e) => e.preventDefault()}>
//     <label>Directions</label>
//     <input {...register("Direction")} />
//     {errors.directions && <p>{errors.directions.message}</p>}

//     <div>
//     <button onClick={addDirection}>Add Another Direction</button>
//     {arr.map((item, i) => {
//         return (
//         <input
//             onChange={handleChange}
//             value={item.value}
//             id={i}
//             type={item.type}
//             size="40"
//         />
//         );
//     })}
//     </div>

//     <label>Finish Recipe</label>
//     <input {...register("New Direction")} />
//     {errors.addDirection && <p>{errors.addDirection.message}</p>}

//     <input type="submit" onClick={handleSubmit(onSubmit)} />
//     </form>
// );
// }
// </div>

// const rootElement = document.getElementById("root");

// ReactDOM.render(<App />, rootElement)};

const NewRecipe = () => {
  return <h1>New Recipe Place Holder</h1>;
};

export default NewRecipe;
