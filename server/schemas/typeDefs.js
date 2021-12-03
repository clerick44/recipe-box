const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
  }

  # type specialTools{

  # }

  type Recipes{
    _id: ID
    recipeName: String
    servings: String
    cookTime: String
    prepTime: String
     specialTools: [String]
    ingredients: [String]
    instructions: [String]
    recipeAuthor: String
    ratings: [String]
   
  }
  # type Comment {
  #   _id: ID
  #   commentText: String
  #   commentAuthor: String
  #   createdAt: String
  # }

  type test {
    data: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    allusers: [User]
    user(username: String!): User
    allRecipes: [Recipes]
    dummy: test
    # thoughts(username: String): [Thought]
    # thought(thoughtId: ID!): Thought
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    # addThought(thoughtText: String!): Thought
    # addComment(thoughtId: ID!, commentText: String!): Thought
    # removeThought(thoughtId: ID!): Thought
    # removeComment(thoughtId: ID!, commentId: ID!): Thought
  }
`;

module.exports = typeDefs;
