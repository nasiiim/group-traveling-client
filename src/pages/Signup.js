import React from 'react'
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Card, Button, Col, Row, Container, Form } from 'react-bootstrap'
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
            .then((res) => {
                navigate('/login')
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
                                    <h2 className="fw-bold mb-2 text-uppercase ">Sign Up </h2>
                                    <div className="mb-3">
                                        <Form onSubmit={handleSignupSubmit}>
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label className="text-center">
                                                    Full Name
                                                </Form.Label>
                                                <Form.Control type="text" placeholder="Enter name"
                                                    name="name"
                                                    value={name}
                                                    onChange={(e) => setName(e.target.value)}
                                                />
                                            </Form.Group>
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
                                                    Sign Up
                                                </Button>
                                            </div>
                                        </Form>
                                        {errorMessage && <p className="error-message">{errorMessage}</p>}
                                        <div className="mt-3">
                                            <p className="mb-0  text-center">
                                                Already have account?{" "}
                                                <Link to={"/login"}> Login</Link>
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

        // <div className="Signup">
        //     <h2>Sign Up</h2>
        //     <form onSubmit={handleSignupSubmit}>

        //         <label>Email:</label>
        //         <input
        //             type="email"
        //             name="email"
        //             value={email}
        //             onChange={(e) => setEmail(e.target.value)}
        //         />

        //         <label>Name:</label>
        //         <input
        //             type="text"
        // name="name"
        // value={name}
        // onChange={(e) => setName(e.target.value)}
        //         />


        //         <label>Password:</label>
        //         <input
        //             type="password"
        //             name="password"
        //             value={password}
        //             onChange={(e) => setPassword(e.target.value)}
        //         />

        //         <button type="submit">Sign Up</button>
        //     </form>

        //     {errorMessage && <p className="error-message">{errorMessage}</p>}
        //     <p>Already have account?</p>
        //     <Link to={"/login"}> Login</Link>
        // </div>
    )
}

export default Signup
