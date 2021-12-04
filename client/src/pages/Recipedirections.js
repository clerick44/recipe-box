import React, { Component } from "react";
import { Text, View, TextInput, Button, Alert } from "react-native";
import { useForm, Controller } from "react-hook-form";

export default function App() {
const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
        recipeDirections: '',
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
        name="recipeDirections"
    />

<Button title="Finish" onPress={handleSubmit(onSubmit)} />
        </View>
);

class listOfDirections extends Component {
    state = {
        directions: ['']
    }

    handleText = i => e => {
        let directions = [...this.state.recipeDirections]
        directions[i] = e.target.value
        this.setState({
        directions
    })
}

    handleDelete = i => e => {
        e.preventDefault()
        let directions = [
        ...this.state.recipeDirections.slice(0, i),
        ...this.state.recipeDirections.slice(i + 1)
    ]
    this.setState({
    directions
    })
}

    addDirection = e => {
    e.preventDefault()
    let directions = this.state.recipeDirections.concat([''])
    this.setState({
        directions
    })
}

    render() {
        return (
        <Fragment>
        {this.state.questions.map((directions, index) => (
            <span key={index}>
            <input
                type="text"
                onChange={this.handleText(index)}
                value={directions}
            />
            <button onClick={this.handleDelete(index)}>X</button>
            </span>
        ))}
        <button onClick={this.addDirection}>Add New Step</button>
        </Fragment>
    )
}
}



}