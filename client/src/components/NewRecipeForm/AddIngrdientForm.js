import React from "react";
import ReactDOM from "react-dom";
import { useForm, useFieldArray } from "react-hook-form";
import { object, array, string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export default function App() {
    const { register, errors, handleSubmit } = useForm();
    const onSubmit = data => {
    alert(JSON.stringify(data));
    };

const validationSchema = object().shape({
    recipeIngredients: array()
    .of(
        object().shape({
        text: string().required("Please add an ingredient")
        })
    )
    .required()
});

function App() {
    const {
    control,
    register,
    formState: { errors },
    clearErrors,
    setValue,
    unregister,
    handleSubmit,
    trigger
    } = useForm({
    mode: "onChange",
    resolver: yupResolver(validationSchema)
    });
    const { fields, append, remove } = useFieldArray({
    control,
    name: "recipeIngredients"
    });
  
    const isInitalRender = React.useRef(true);
    const appendIngredient = () => {
    append({
        text: ""
    });
  
    if (errors.recipeIngredients?.type === "min") {
        clearErrors("recipeIngredients"); // always clear errors when there is add action.
    }
    };
  
    React.useEffect(() => {
    if (!fields.length && !isInitalRender.current) {
        trigger("recipeIngredients");
    }
  
    if (isInitalRender.current) {
        isInitalRender.current = false;
    }
    }, [fields, register, setValue, unregister, trigger]);
  
    return (
    <form onSubmit={handleSubmit(console.log)}>
        <h1>Yup Validation - Field Array</h1>
        {fields.map((recipeIngredients, addIngredient) => (
        <div key={recipeIngredients.id}>
            <input
            {...register(`recipeIngredients[${addIngredient}].text`)}
            control={control}
            defaultValue=""
            />
  
            <button
            type="button"
            onClick={() => {
                remove(addIngredient);
                trigger();
            }}
            >
            Remove Recipe Ingredient {recipeIngredients.id}
            </button>
        </div>
        ))}
        <p>Errors: {JSON.stringify(errors)}</p>
    <button type="button" onClick={appendIngredient}>
        Add Ingredient
        </button>
    <input type="submit" />
    </form>
    )}
        }

    // const rootElement = document.getElementById("root");
    //     ReactDOM.render(<addIngredientForm />, rootElement);


