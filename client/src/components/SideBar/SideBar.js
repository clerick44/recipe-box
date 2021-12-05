import React from "react";
import { useQuery } from "@apollo/client";

import RecipeCard from "../RecipeCard/RecipeCard";

import { QUERY_ME } from "../../utils/queries";

const SideBar = ({ recipes }) => {
  if (!recipes.length) {
    return <h3>No Recipes Yet</h3>;
  }

  return <h3>Sidebar place Holder</h3>;
};

export default SideBar;
