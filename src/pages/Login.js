import React from 'react'
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const API_URL = "http://localhost:3000";


const handleLoginSubmit = (e) => {
    e.preventDefault()

    const requestBody = { email, password }

    axios.post(`${API_URL}/auth/login`, requestBody)
        .then((res) => {
            console.log("JWT token", response.data.authToken);
            navigate("/")
        })
        .catch((error) => {
            const errorDescription = error.response.data.message;
            setErrorMessage(errorDescription);
        })
}





const Login = (props) => {
    return (
        <div className="Login">
            <h2>Login</h2>
            <form onSubmit={handleLoginSubmit}>

                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <label>Password:</label>
                <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button type="submit">Login</button>
            </form>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <p>Don't have an account yet?</p>
            <Link to={"/signup"}> Sign Up</Link>
        </div>
    )
}

export default Login
