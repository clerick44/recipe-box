const { Schema, model } = require("mongoose");

const recipeSchema = new Schema({
  recipeName: {
    type: String,
    // required: true,
    trim: true,
  },
  servings: {
    type: String,
    trim: true,
  },
  cookTime: {
    type: Number,
  },
  prepTime: {
    type: Number,
  },
  specialTools: {
    type: Array,
  },
  ingredients: {
    type: Array,
    required: true,
  },
  instructions: {
    type: Array,
    required: true,
  },
  recipeAuthor: {
    type: String,
    required: true,
    trim: true,
  },
  ratings: [Number],
  tags: [String],
});

const Recipes = model("Recipes", recipeSchema);

module.exports = Recipes;
