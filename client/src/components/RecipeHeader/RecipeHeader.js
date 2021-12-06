import React from "react";

import { useForm, Controller } from "react-hook-form";

// export default function App() {
// const { control, handleSubmit, formState: { errors } } = useForm({
//     defaultValues: {
//         recipeName: '',
//         prepTime: '',
//         cookTime: '',
//         servings: '',
//         specialTools: '',
//     }
// });
// const onSubmit = data => console.log(data);

const RecipeHeader = () => {
  return <h1>Reciper Header Place Holder</h1>;
  // <View>
  // <Controller
  //     control={control}
  //     rules={{
  //         required: true,
  //     }}
  //     render={({ field: { onChange, onBlur, value } }) => (
  // <TextInput
  //         style={styles.input}
  //         onBlur={onBlur}
  //         onChangeText={onChange}
  //         value={value}
  // />
  //     )}
  //     name="recipeName"
  // />
  // {errors.recipeName && <Text>This is required.</Text>}

  // <Controller
  //     control={control}
  //     rules={{
  //         required: true,
  //     }}
  //     render={({ field: { onChange, onBlur, value } }) => (
  // <TextInput
  //         style={styles.input}
  //         onBlur={onBlur}
  //         onChangeText={onChange}
  //         value={value}
  // />
  //     )}
  //     name="prepTime"
  // />
  // {errors.prepTime && <Text>This is required.</Text>}

  // <Controller
  //     control={control}
  //     rules={{
  //         required: true,
  //     }}
  //     render={({ field: { onChange, onBlur, value } }) => (
  // <TextInput
  //         style={styles.input}
  //         onBlur={onBlur}
  //         onChangeText={onChange}
  //         value={value}
  // />
  //     )}
  //     name="cookTime"
  // />
  // {errors.cookTime && <Text>This is required.</Text>}

  // <Controller
  //     control={control}
  //     rules={{
  //         required: true,
  //     }}
  //     render={({ field: { onChange, onBlur, value } }) => (
  // <TextInput
  //         style={styles.input}
  //         onBlur={onBlur}
  //         onChangeText={onChange}
  //         value={value}
  // />
  //     )}
  //     name="servings"
  // />
  // {errors.servings && <Text>This is required.</Text>}

  // <Controller
  //     control={control}
  //     render={({ field: { onChange, onBlur, value } }) => (
  // <TextInput
  //         style={styles.input}
  //         onBlur={onBlur}
  //         onChangeText={onChange}
  //         value={value}
  // />
  //     )}
  //     name="specialTools"
  // />

  //     <Button title="Next" onPress={handleSubmit(onSubmit)} />
  //     </View>
};

export default RecipeHeader;
