import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
// import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import Signup from "./components/SignUp/SignUp";
import Login from "./components/Login/Login";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import RecipeCard from "./components/RecipeCard/RecipeCard";
import Recipes from "./components/Recipes/Recipes";


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

const [currentPage, setCurrentPage] = useState("Home");

const renderPage = () => {
  console.log("************** in RENDERPAGE ************");
  if (currentPage === "Home") {
    return <Home />;
  }
  if (currentPage === "Contact") {
    return <RecipeCard />;
  }
  if (currentPage === "Portfolio") {
    return <Signup />;
  }
  if (currentPage === "Resume") {
    return <Login />;
  }
  if (currentPage === "Recipes") {
    return <Recipes />;
  }
  return <Random />;
};

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="flex-column justify-flex-start min-100-vh">
        <Header />
        <div className="container"> {renderPage()}</div>
        <Footer />
      </div>
    </ApolloProvider>
  );
}

export default App;
