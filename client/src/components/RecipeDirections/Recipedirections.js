import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import ReactDOM from "react-dom";

//import "./recipeDirections.css";

export default function App() {
const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
} = useForm();
const directions = useRef({});
const [arr, setArr] = useRef({});
const addDirection = () => {
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

directions.current = watch("Directions", "");
addDirection.current = watch("Add Another Direction", "");

const onSubmit = async (data) => {
    if (directions.current.length === 0) {
    alert("You must specify a direction");
    return;
    }

return (
    <form onSubmit={(e) => e.preventDefault()}>
    <label>Directions</label>
    <input {...register("Direction")} />
    {errors.directions && <p>{errors.directions.message}</p>}

    <div>
    <button onClick={addDirection}>Add Another Direction</button>
    {arr.map((item, i) => {
        return (
        <input
            onChange={handleChange}
            value={item.value}
            id={i}
            type={item.type}
            size="40"
        />
        );
    })}
    </div>

    <label>Finish Recipe</label>
    <input {...register("New Direction")} />
    {errors.addDirection && <p>{errors.addDirection.message}</p>}

    <input type="submit" onClick={handleSubmit(onSubmit)} />
    </form>
);
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement)};
