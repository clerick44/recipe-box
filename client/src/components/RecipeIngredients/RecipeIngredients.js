import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import ReactDOM from "react-dom";

//import "./recipeIngredients.css";

export default function App() {
const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
} = useForm();
const ingredients = useRef({});
const [arr, setArr] = useRef({});
const addIngredient = () => {
    setArr(s => {
    return [
        ...s,
        {
        type: "text",
        value: ""
        }
    ];
    });
};

const handleChange = e => {
    e.preventDefault();

    const index = e.target.id;
    setArr(s => {
    const newArr = s.slice();
    newArr[index].value = e.target.value;

    return newArr;
    });
};

ingredients.current = watch("Ingredients", "");
addIngredient.current = watch("Add Another Ingredient", "");

const onSubmit = async (data) => {
    if (ingredients.current.length === 0) {
    alert("You must specify an ingredient");
    return;
    }

return (
    <form onSubmit={(e) => e.preventDefault()}>
    <label>Ingredients</label>
    <input {...register("Ingredients")} />
    {errors.ingredients && <p>{errors.ingredients.message}</p>}

    <div>
    <button onClick={addIngredient}>Add Another Ingredient</button>
    {arr.map((item, i) => {
        return (
        <input
            onChange={handleChange}
            value={item.value}
            id={i}
            type={item.type}
        />
        );
    })}
    </div>

    <label>Move to Directions</label>
    <input {...register("New Ingredients")} />
    {errors.addIngredient && <p>{errors.addIngredient.message}</p>}

    <input type="submit" onClick={handleSubmit(onSubmit)} />
    </form>
);
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement)};
