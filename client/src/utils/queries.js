import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      savedRecipes {
        recipeId
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
  }
`;

export const QUERY_RECIPES = gql`
  query allRecipes {
    allRecipes {
      _id
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

export const QUERY_SINGLE_RECIPE = gql`
  query getSingleRecipe($recipeId: ID!) {
    recipe(recipeId: $recipeId) {
      recipeId
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

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      savedRecipes {
        recipeId
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
  }
`;

// export const QUERY_USER = gql`
//   query user($username: String!) {
//     user(username: $username) {
//       _id
//       username
//       email
//       thoughts {
//         _id
//         thoughtText
//         createdAt
//       }
//     }
//   }
// `;

// export const QUERY_THOUGHTS = gql`
//   query getThoughts {
//     thoughts {
//       _id
//       thoughtText
//       thoughtAuthor
//       createdAt
//     }
//   }
// `;

// export const QUERY_SINGLE_THOUGHT = gql`
//   query getSingleThought($thoughtId: ID!) {
//     thought(thoughtId: $thoughtId) {
//       _id
//       thoughtText
//       thoughtAuthor
//       createdAt
//       comments {
//         _id
//         commentText
//         commentAuthor
//         createdAt
//       }
//     }
//   }
// `;

// export const QUERY_ME = gql`
//   query me {
//     me {
//       _id
//       username
//       email
//       thoughts {
//         _id
//         thoughtText
//         thoughtAuthor
//         createdAt
//       }
//     }
//   }
// `;
