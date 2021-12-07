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
    recipeDirections: array()
    .of(
        object().shape({
        text: string().required("Please Add Direction")
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
    name: "questions"
    });

    const isInitalRender = React.useRef(true);
    const appendDirection = () => {
    append({
        text: ""
    });
  
    if (errors.recipeDirections?.type === "min") {
        clearErrors("recipeDirections"); // always clear errors when there is add action.
    }
};
  
    React.useEffect(() => {
    if (!fields.length && !isInitalRender.current) {
        trigger("recipeDirections");
    }
  
    if (isInitalRender.current) {
        isInitalRender.current = false;
    }
    }, [fields, register, setValue, unregister, trigger]);

    return (
    <form onSubmit={handleSubmit(console.log)}>
        <h1>Yup Validation - Field Array</h1>
        {fields.map((recipeDirections, addDirection) => (
        <div key={recipeDirections.id}>
            <input
            {...register(`recipeDirections[${addDirection}].text`)}
            control={control}
            defaultValue=""
            />

            <button
            type="button"
            onClick={() => {
                remove(addDirection);
                trigger();
            }}
            >
            Remove direction {recipeDirections.id}
            </button>
        </div>
        ))}
        <p>Errors: {JSON.stringify(errors)}</p>
        <button type="button" onClick={appendDirection}>
        Add Recipe Direction
        </button>
        <input type="submit" />
    </form>
    )}
        }

        
