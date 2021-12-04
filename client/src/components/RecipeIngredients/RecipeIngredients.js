import React, { Component } from "react";
import { Text, View, TextInput, Button, Alert } from "react-native";
import { useForm, Controller } from "react-hook-form";

export default function App() {
const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
        recipeIngredients: '',
    }
});
const onSubmit = data => console.log(data);

return (
    <View>
    <Controller
        control={control}

        render={({ field: { onChange, onBlur, value } }) => (
    <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
    />
        )}
        name="recipeIngredients"
    />

<Button title="Next" onPress={handleSubmit(onSubmit)} />
        </View>
);

class listOfIngredients extends Component {
    state = {
        ingredients: ['']
    }

    handleText = i => e => {
        let ingredients = [...this.state.recipeIngredients]
        ingredients[i] = e.target.value
        this.setState({
        ingredients
    })
}

    handleDelete = i => e => {
        e.preventDefault()
        let ingredients = [
        ...this.state.recipeIngredients.slice(0, i),
        ...this.state.recipeIngredients.slice(i + 1)
    ]
    this.setState({
    ingredients
    })
}

    addIngredient = e => {
    e.preventDefault()
    let ingredients = this.state.recipeIngredients.concat([''])
    this.setState({
        ingredients
    })
}

    render() {
        return (
        <Fragment>
        {this.state.questions.map((ingredients, index) => (
            <span key={index}>
            <input
                type="text"
                onChange={this.handleText(index)}
                value={ingredients}
            />
            <button onClick={this.handleDelete(index)}>X</button>
            </span>
        ))}
        <button onClick={this.addIngredient}>Add New Ingredient</button>
        </Fragment>
    )
}
}



}