const { AuthenticationError } = require("apollo-server-express");
const { User, Thought, Recipes } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    //query to show all recipes
    allRecipes: async () => {
      const allRecipes = await Recipes.find({});
      // console.log(allRecipes);
      return allRecipes;
    },
    //query to show one recipe based in user id
    oneRecipe: async (parent, { recipeId }, context) => {
      //  if(context.user){
      const recipeInfo = await Recipes.findOne({ _id: recipeId });
      return recipeInfo;
      // }
      // throw new AuthenticationError("You need to be logged in");
    },
    //query to show all users and populate recipes
    allUsers: async () => {
      return User.find().populate("Recipes");
    },
    //query to show a specific recipe
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate("Recipes");
    },
  },
  Mutation: {
    //Creating a User
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    //user login
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError("No user found with this email address");
      }
      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }
      const token = signToken(user);
      return { token, user };
    },
    //add a recipe to local user
    addRecipe: async (parent, { recipeData }, context) => {
      if (context.user) {
        const recipe = await Recipes.create({
          recipeData,
          recipeAuthor: context.user.username,
        });
        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { Recipes: Recipes._id } }
        );
        return recipe;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    //delete one recipe for the user
    removeRecipe: async (parent, { recipeId }, context) => {
      if (context.user) {
        const recipe = await Thought.findOneAndDelete({
          _id: recipeId,
          recipeAuthor: context.user.username,
        });
        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { recipe: Recipes._id } }
        );
        return recipe;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },
  //   Query: {
  //     users: async () => {
  //       return User.find().populate('thoughts');
  //     },
  //     user: async (parent, { username }) => {
  //       return User.findOne({ username }).populate('thoughts');
  //     },
  //     thoughts: async (parent, { username }) => {
  //       const params = username ? { username } : {};
  //       return Thought.find(params).sort({ createdAt: -1 });
  //     },
  //     thought: async (parent, { thoughtId }) => {
  //       return Thought.findOne({ _id: thoughtId });
  //     },
  //     me: async (parent, args, context) => {
  //       if (context.user) {
  //         return User.findOne({ _id: context.user._id }).populate('thoughts');
  //       }
  //       throw new AuthenticationError('You need to be logged in!');
  //     },
  //   },
  //   Mutation: {
  //     addUser: async (parent, { username, email, password }) => {
  //       const user = await User.create({ username, email, password });
  //       const token = signToken(user);
  //       return { token, user };
  //     },
  //     login: async (parent, { email, password }) => {
  //       const user = await User.findOne({ email });
  //       if (!user) {
  //         throw new AuthenticationError('No user found with this email address');
  //       }
  //       const correctPw = await user.isCorrectPassword(password);
  //       if (!correctPw) {
  //         throw new AuthenticationError('Incorrect credentials');
  //       }
  //       const token = signToken(user);
  //       return { token, user };
  //     },
  //     addThought: async (parent, { thoughtText }, context) => {
  //       if (context.user) {
  //         const thought = await Thought.create({
  //           thoughtText,
  //           thoughtAuthor: context.user.username,
  //         });
  //         await User.findOneAndUpdate(
  //           { _id: context.user._id },
  //           { $addToSet: { thoughts: thought._id } }
  //         );
  //         return thought;
  //       }
  //       throw new AuthenticationError('You need to be logged in!');
  //     },
  //     addComment: async (parent, { thoughtId, commentText }, context) => {
  //       if (context.user) {
  //         return Thought.findOneAndUpdate(
  //           { _id: thoughtId },
  //           {
  //             $addToSet: {
  //               comments: { commentText, commentAuthor: context.user.username },
  //             },
  //           },
  //           {
  //             new: true,
  //             runValidators: true,
  //           }
  //         );
  //       }
  //       throw new AuthenticationError('You need to be logged in!');
  //     },
  //     removeThought: async (parent, { thoughtId }, context) => {
  //       if (context.user) {
  //         const thought = await Thought.findOneAndDelete({
  //           _id: thoughtId,
  //           thoughtAuthor: context.user.username,
  //         });
  //         await User.findOneAndUpdate(
  //           { _id: context.user._id },
  //           { $pull: { thoughts: thought._id } }
  //         );
  //         return thought;
  //       }
  //       throw new AuthenticationError('You need to be logged in!');
  //     },
  //     removeComment: async (parent, { thoughtId, commentId }, context) => {
  //       if (context.user) {
  //         return Thought.findOneAndUpdate(
  //           { _id: thoughtId },
  //           {
  //             $pull: {
  //               comments: {
  //                 _id: commentId,
  //                 commentAuthor: context.user.username,
  //               },
  //             },
  //           },
  //           { new: true }
  //         );
  //       }
  //       throw new AuthenticationError('You need to be logged in!');
  //     },
  //   },
};

module.exports = resolvers;
