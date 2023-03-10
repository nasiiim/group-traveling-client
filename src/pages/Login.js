import React from 'react'
import { useState, useContext } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import { Card, Button, Col, Row, Container, Form } from 'react-bootstrap'
const API_URL = "http://localhost:3000";


const Login = (props) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState(undefined);

    const navigate = useNavigate();

    const { storeToken, authenticateUser } = useContext(AuthContext);


    const handleLoginSubmit = (e) => {
        e.preventDefault()

        const requestBody = { email, password }

        axios.post(`${API_URL}/auth/login`, requestBody)
            .then((res) => {
                storeToken(res.data.authToken)
                authenticateUser()
                navigate("/")
            })
            .catch((error) => {
                const errorDescription = error.response.data.message;
                setErrorMessage(errorDescription);
            })
    }

    return (

        <div>
            <Container>
                <Row className="vh-100 d-flex justify-content-center align-items-center">
                    <Col md={8} lg={6} xs={12}>
                        <Card className="shadow">
                            <Card.Body>
                                <div className="mb-3 mt-md-4">
                                    <h2 className="fw-bold mb-2 text-uppercase ">Welcome to Group Travel </h2>
                                    <p className=" mb-5">Please enter your login and password!</p>
                                    <div className="mb-3">
                                        <Form onSubmit={handleLoginSubmit}>
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label className="text-center">
                                                    Email address
                                                </Form.Label>
                                                <Form.Control type="email" placeholder="Enter email"
                                                    name="email"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                />
                                            </Form.Group>

                                            <Form.Group
                                                className="mb-3"
                                                controlId="formBasicPassword">
                                                <Form.Label>Password</Form.Label>
                                                <Form.Control type="password" placeholder="Password"
                                                    name="password"
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                />
                                            </Form.Group>

                                            <div className="d-grid">
                                                <Button variant="primary" type="submit">
                                                    Login
                                                </Button>
                                            </div>
                                        </Form>
                                        {errorMessage && <p className="error-message">{errorMessage}</p>}
                                        <div className="mt-3">
                                            <p className="mb-0  text-center">
                                                Don't have an account?{" "}
                                                <Link to={"/signup"}> Sign Up</Link>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>







        // <div className="Login">
        //     <h2>Login</h2>
        //     <form onSubmit={handleLoginSubmit}>

        //         <label>Email:</label>
        //         <input
        //             type="email"
        //             name="email"
        //             value={email}
        //             onChange={(e) => setEmail(e.target.value)}
        //         />

        //         <label>Password:</label>
        //         <input
        //             type="password"
        //             name="password"
        //             value={password}
        //             onChange={(e) => setPassword(e.target.value)}
        //         />

        //         <button type="submit">Login</button>
        //     </form>
        //     {errorMessage && <p className="error-message">{errorMessage}</p>}
        //     <p>Don't have an account yet?</p>
        //     <Link to={"/signup"}> Sign Up</Link>
        // </div>
    )
}

export default Login
