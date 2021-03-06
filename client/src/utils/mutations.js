import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_RECIPE = gql`
  mutation addRecipe(
    $recipeName: String!,
    $servings: String,
    $prepTime: String,
    $cookTime: String,
    $specialTools: String,
    $ingredients: [String],
    $instructions: [String]
  ) {
    addRecipe(
      recipeName: $recipeName,
      servings: $servings,
      prepTime: $prepTime,
      cookTime: $cookTime,
      specialTools: $specialTools,
      ingredients: $ingredients,
      instructions: $instructions
    ) {
      recipeName
      servings
      cookTime
      prepTime
      specialTools
      ingredients
      instructions
      recipeAuthor
      ratings
    }
  }
`;

// export const ADD_THOUGHT = gql`
//   mutation addThought($thoughtText: String!) {
//     addThought(thoughtText: $thoughtText) {
//       _id
//       thoughtText
//       thoughtAuthor
//       createdAt
//       comments {
//         _id
//         commentText
//       }
//     }
//   }
// `;
