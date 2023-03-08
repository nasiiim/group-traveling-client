import React from 'react'
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const API_URL = "http://localhost:3000";

const Signup = (props) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [errorMessage, setErrorMessage] = useState(undefined);

    const navigate = useNavigate()



    const handleSignupSubmit = (e) => {
        e.preventDefault();

        const requestBody = { email, name, password };

    axios.post(`${API_URL}/auth/signup`, requestBody)  
    .then((res) =>{
      navigate('/login')
    }) 
    .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      })
    }




    return (
        <div className="Signup">
            <h2>Sign Up</h2>
            <form onSubmit={handleSignupSubmit}>

                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <label>Name:</label>
                <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />


                <label>Password:</label>
                <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button type="submit">Sign Up</button>
            </form>

            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <p>Already have account?</p>
            <Link to={"/login"}> Login</Link>
        </div>
    )
}

export default Signup
