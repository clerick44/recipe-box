import React, { useState } from 'react';
import styled from "styled-components";
import SignUp from "../SignUp/SignUp"
import Login from "../Login/Login"

const UserProfile = (props) => {
function Login() {
    const [currentPage, setCurrentPage] = useState("Login");

    const renderLoginPage = () => {

    if (currentPage === "Login") {
        return <SignUp />;
    }
}
}

function SignUp () {
    const [currentPage, setCurrentPage] = useState("SignUp");

    const renderSignUpPage = () => {

    if (currentPage === "SignUp") {
        return <Login />;
    }  
}
}
}

const ButtonGroup = styled.div;

export default UserProfile


<ButtonGroup>
    <Button onClick={SignUpFunct}> Sign Up </Button>;
    <Button onClick={LoginFunct}> Login </Button>
</ButtonGroup>
