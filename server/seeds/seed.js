const db = require('../config/connection');
const { Recipes, User } = require('../models');

const recipesSeeds = require('./recipesSeeds.json');
const userSeeds = require('./userSeeds.json');

db.once('open', async () => {
  
  try {
  
    // clean database
    await Recipes.deleteMany({});
    await User.deleteMany({});
  
    //create seeds
    await Recipes.create(recipesSeeds);
    await User.create(userSeeds)

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
 
  
});
