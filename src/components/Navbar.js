import React from 'react'
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

import Button from 'react-bootstrap/Button'

const Navbar = () => {

    const { isLoggedIn, user,  logOutUser } = useContext(AuthContext);

    return (
        <nav>
            <Link to="/">
                <Button variant="light">Home</Button>
            </Link>

            {isLoggedIn && (
                <>
                    <Button variant="light" onClick={logOutUser}>Logout</Button>
                    <Link to="/userPanel">{user && user.name}</Link>
                </>
            )}

            {!isLoggedIn && (
                <>
                    <Link to="/signup"> <Button variant="light">Sign Up</Button> </Link>
                    <Link to="/login"> <Button variant="light">Login</Button> </Link>
                </>
            )}


        </nav>
    )
}

export default Navbar
