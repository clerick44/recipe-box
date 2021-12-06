import React, { useState } from "react";
// import styled from "styled-components";
import SignUp from "../SignUp/SignUp";
import Login from "../Login/Login";

const UserProfile = (props) => {
//   const ButtonGroup = styled.div;
//   const Button = styled.button;

//   function Login() {
//     const [currentPage, setCurrentPage] = useState("Login");

//     const renderLoginPage = () => {
//       if (currentPage === "Login") {
//         return <SignUp />;
//       }
//     };
//   }

//   function SignUp() {
//     const [currentPage, setCurrentPage] = useState("SignUp");

//     const renderSignUpPage = () => {
//       if (currentPage === "SignUp") {
//         return <Login />;
//       }
//     };
//   }
  return (
    <>
      <div>
        <Login />
      </div>
      <div>
        <SignUp />
      </div>
    </>
  );
};

// const ButtonGroup = styled.div;
// const Button = styled.button;

export default UserProfile;

// (
//   <ButtonGroup>
//     <Button onClick={SignUp}> Sign Up </Button>
//     <Button onClick={Login}> Login </Button>
//   </ButtonGroup>
// );
