import React from "react";

const Header = () => {
  return (
    <header class="main-header">
      <h1>NOT YOUR GRANDMA'S RECIPE BOOK</h1>
      <nav>
        <button href="#" class="navHome">
          Home
        </button>
        <button href="#" class="navAllRecipes">
          All My Recipes
        </button>
        <button href="#" class="navNewRecipe">
          Add New Recipes
        </button>
        <button href="#" class="navFaveRecipes">
          Favorite Recipes
        </button>
      </nav>
      
      {/* <div class="recipeTagSearch">
         <form action="/form/submit" method="GET"> 
            <input type="text" name="text" class="search" placeholder="Search Recipe Tags Here!">
            <input type="submit" name="submit" class="submit" value="Find Recipes">
         </form>
      </div */}

    </header>
  );
};

export default Header;
