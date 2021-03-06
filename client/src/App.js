import React, { useState } from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MyRecipes from "./pages/MyRecipes";

import UserProfile from "./components/UserProfile/UserProfile";
import NewRecipe from "./components/NewRecipeForm/NewRecipeForm";


import auth from "./utils/auth";
console.log("******AUTH****** ", auth.loggedIn());


// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: "/graphql",
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  const [currentPage, setCurrentPage] = useState("Home");

  const renderPage = () => {
    console.log("************** in RENDERPAGE ************");
    if (!auth.loggedIn()) {
      return <UserProfile />;
    }
    if (currentPage === "My Recipes") {
      return <MyRecipes />;
    }
    if (currentPage === "Create Recipe") {
      return <NewRecipe />;
    }
    if (currentPage === "Login") {
      return <UserProfile />;
    }
    // create recipe goes here
    // return <Random />;
  };

  return (
    <ApolloProvider client={client}>
      <div className="flex-column justify-flex-start min-100-vh">
        <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />

        <div className="container"> {renderPage()}</div>

        {/* <Footer /> */}
      </div>
    </ApolloProvider>
  );
}

export default App;
